'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { talleres, type Taller, type FechaTaller } from '@/lib/talleres-data';

type Step = 'taller' | 'fecha' | 'datos' | 'confirmacion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  defaultTaller?: string;
  defaultFechaId?: string;
};

export function BookingModal({ isOpen, onClose, defaultTaller, defaultFechaId }: Props) {
  const [step, setStep] = useState<Step>(defaultTaller ? 'fecha' : 'taller');
  const [selectedTaller, setSelectedTaller] = useState<Taller | null>(
    defaultTaller ? talleres.find((t) => t.slug === defaultTaller) ?? null : null
  );
  const [selectedFecha, setSelectedFecha] = useState<FechaTaller | null>(
    defaultFechaId && defaultTaller
      ? talleres.find((t) => t.slug === defaultTaller)?.proximasFechas.find((f) => f.id === defaultFechaId) ?? null
      : null
  );
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', origen: '', mensaje: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (defaultTaller) {
        const t = talleres.find((tt) => tt.slug === defaultTaller);
        setSelectedTaller(t ?? null);
        setStep(t ? 'fecha' : 'taller');
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, defaultTaller]);

  const goBack = () => {
    if (step === 'fecha') setStep('taller');
    else if (step === 'datos') setStep('fecha');
  };

  const handleSubmit = async () => {
    if (!form.nombre || !form.email || !form.telefono) {
      setError('Por favor completa los campos requeridos.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taller: selectedTaller?.nombre,
          fecha: selectedFecha?.fecha,
          hora: selectedFecha?.hora,
          ...form,
        }),
      });
      if (!res.ok) throw new Error();
      setStep('confirmacion');
    } catch {
      setError('Ocurrió un error. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(defaultTaller ? 'fecha' : 'taller');
      setSelectedFecha(null);
      setForm({ nombre: '', email: '', telefono: '', origen: '', mensaje: '' });
      setError('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] modal-overlay bg-bastardo-deep/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="fixed inset-y-0 right-0 z-[201] w-full md:w-[520px] bg-bastardo-brown border-l border-bastardo-amber/10 flex flex-col overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grain-overlay opacity-[0.04]" />

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-bastardo-amber/10">
              <div className="flex items-center gap-3">
                {step !== 'taller' && step !== 'confirmacion' && (
                  <button
                    onClick={goBack}
                    className="text-bastardo-cream/40 hover:text-bastardo-cream transition-colors mr-1"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[2px] text-bastardo-amber">
                    Reserva tu cupo
                  </p>
                  <p className="font-sans text-[12px] text-bastardo-cream/40 mt-0.5">
                    {step === 'taller' && 'Elige el taller'}
                    {step === 'fecha' && selectedTaller?.nombre}
                    {step === 'datos' && `${selectedFecha?.fecha} · ${selectedFecha?.hora}`}
                    {step === 'confirmacion' && 'Registro confirmado'}
                  </p>
                </div>
              </div>
              <button onClick={handleClose} className="text-bastardo-cream/40 hover:text-bastardo-cream transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Progress bar */}
            {step !== 'confirmacion' && (
              <div className="h-[2px] bg-bastardo-gray-dark">
                <motion.div
                  className="h-full bg-bastardo-amber"
                  animate={{
                    width:
                      step === 'taller' ? '33%'
                      : step === 'fecha' ? '66%'
                      : '100%',
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === 'taller' && (
                  <StepTaller
                    key="taller"
                    onSelect={(t) => { setSelectedTaller(t); setStep('fecha'); }}
                  />
                )}
                {step === 'fecha' && selectedTaller && (
                  <StepFecha
                    key="fecha"
                    taller={selectedTaller}
                    onSelect={(f) => { setSelectedFecha(f); setStep('datos'); }}
                  />
                )}
                {step === 'datos' && (
                  <StepDatos
                    key="datos"
                    form={form}
                    onChange={(f) => setForm({ ...form, ...f })}
                    onSubmit={handleSubmit}
                    loading={loading}
                    error={error}
                    taller={selectedTaller}
                    fecha={selectedFecha}
                  />
                )}
                {step === 'confirmacion' && (
                  <StepConfirmacion key="confirmacion" nombre={form.nombre} taller={selectedTaller} fecha={selectedFecha} onClose={handleClose} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function StepTaller({ onSelect }: { onSelect: (t: Taller) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="p-8 space-y-4"
    >
      <h3 className="font-display text-3xl text-bastardo-cream mb-6">¿Qué taller te interesa?</h3>
      {talleres.map((t) => (
        <button
          key={t.slug}
          onClick={() => onSelect(t)}
          className="w-full text-left p-5 border border-bastardo-cream/10 hover:border-bastardo-amber/50 bg-bastardo-deep/50 hover:bg-bastardo-amber/5 transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans font-semibold text-bastardo-cream group-hover:text-bastardo-amber transition-colors">
                {t.nombre}
              </p>
              <p className="font-sans text-[13px] text-bastardo-cream/40 mt-1">
                {t.duracion} · {t.precio}
              </p>
            </div>
            <ChevronRight size={18} className="text-bastardo-cream/20 group-hover:text-bastardo-amber transition-colors" />
          </div>
        </button>
      ))}
    </motion.div>
  );
}

function StepFecha({ taller, onSelect }: { taller: Taller; onSelect: (f: FechaTaller) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="p-8"
    >
      <h3 className="font-display text-3xl text-bastardo-cream mb-2">Elige una fecha</h3>
      <p className="font-sans text-[13px] text-bastardo-cream/40 mb-8">Zona horaria: Bogotá (GMT-5)</p>

      <div className="space-y-3">
        {taller.proximasFechas.map((f) => {
          const agotado = f.cuposDisponibles === 0;
          return (
            <button
              key={f.id}
              onClick={() => !agotado && onSelect(f)}
              disabled={agotado}
              className={`w-full text-left p-5 border transition-all duration-300 group ${
                agotado
                  ? 'border-bastardo-cream/5 opacity-40 cursor-not-allowed'
                  : 'border-bastardo-cream/10 hover:border-bastardo-amber/50 hover:bg-bastardo-amber/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-sans font-semibold ${agotado ? 'text-bastardo-cream/40' : 'text-bastardo-cream group-hover:text-bastardo-amber'} transition-colors`}>
                    {f.diaSemana}, {f.fecha}
                  </p>
                  <p className="font-sans text-[13px] text-bastardo-cream/40 mt-1">{f.hora}</p>
                </div>
                <div className="text-right">
                  {agotado ? (
                    <span className="font-sans text-[12px] text-bastardo-cream/30 uppercase tracking-wider">Agotado</span>
                  ) : (
                    <>
                      <p className="font-sans text-[13px] text-bastardo-amber font-semibold">
                        {f.cuposDisponibles} cupos
                      </p>
                      <p className="font-sans text-[11px] text-bastardo-cream/30">disponibles</p>
                    </>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-8 font-sans text-[12px] text-bastardo-cream/30 text-center">
        ¿No encuentras una fecha? Escríbenos por{' '}
        <a href={`https://wa.me/573000000000?text=Hola%20Bastardo%2C%20quiero%20información%20sobre%20el%20${encodeURIComponent(taller.nombre)}`} target="_blank" rel="noopener noreferrer" className="text-bastardo-whatsapp hover:underline">
          WhatsApp
        </a>
      </p>
    </motion.div>
  );
}

type FormData = { nombre: string; email: string; telefono: string; origen: string; mensaje: string };

type StepDatosProps = {
  form: FormData;
  onChange: (f: Partial<FormData>) => void;
  onSubmit: () => void;
  loading: boolean;
  error: string;
  taller: Taller | null;
  fecha: FechaTaller | null;
};

function StepDatos({ form, onChange, onSubmit, loading, error, taller, fecha }: StepDatosProps) {
  const inputClass = 'w-full bg-bastardo-deep/60 border border-bastardo-cream/10 focus:border-bastardo-amber/50 text-bastardo-cream placeholder:text-bastardo-cream/20 px-4 py-3 font-sans text-[14px] outline-none transition-colors duration-200';

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="p-8"
    >
      <h3 className="font-display text-3xl text-bastardo-cream mb-2">Tus datos</h3>
      <p className="font-sans text-[13px] text-bastardo-cream/40 mb-8">Todos los campos marcados son requeridos.</p>

      {/* Summary */}
      {taller && fecha && (
        <div className="mb-6 p-4 border border-bastardo-amber/20 bg-bastardo-amber/5">
          <p className="font-sans text-[12px] uppercase tracking-wider text-bastardo-amber mb-1">{taller.nombre}</p>
          <p className="font-sans text-[13px] text-bastardo-cream/60">{fecha.diaSemana}, {fecha.fecha} · {fecha.hora}</p>
          <p className="font-sans text-[13px] text-bastardo-cream font-semibold mt-1">{taller.precio} por persona</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="font-sans text-[11px] uppercase tracking-[1.5px] text-bastardo-cream/40 mb-2 block">
            Nombre completo *
          </label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => onChange({ nombre: e.target.value })}
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </div>
        <div>
          <label className="font-sans text-[11px] uppercase tracking-[1.5px] text-bastardo-cream/40 mb-2 block">
            Correo electrónico *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="tu@email.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="font-sans text-[11px] uppercase tracking-[1.5px] text-bastardo-cream/40 mb-2 block">
            Teléfono / WhatsApp *
          </label>
          <input
            type="tel"
            value={form.telefono}
            onChange={(e) => onChange({ telefono: e.target.value })}
            placeholder="+57 300 000 0000"
            className={inputClass}
          />
        </div>
        <div>
          <label className="font-sans text-[11px] uppercase tracking-[1.5px] text-bastardo-cream/40 mb-2 block">
            ¿Cómo nos conociste?
          </label>
          <select
            value={form.origen}
            onChange={(e) => onChange({ origen: e.target.value })}
            className={`${inputClass} bg-bastardo-deep`}
          >
            <option value="">Seleccionar...</option>
            <option value="instagram">Instagram</option>
            <option value="referido">Referido / Amigo</option>
            <option value="web">Búsqueda en Google</option>
            <option value="tiktok">TikTok</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="font-sans text-[11px] uppercase tracking-[1.5px] text-bastardo-cream/40 mb-2 block">
            Alergias o notas (opcional)
          </label>
          <textarea
            value={form.mensaje}
            onChange={(e) => onChange({ mensaje: e.target.value })}
            placeholder="Alergias alimentarias, consultas, etc."
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 font-sans text-[13px] text-red-400">{error}</p>
      )}

      <div className="mt-8">
        <Button
          onClick={onSubmit}
          fullWidth
          size="lg"
          disabled={loading}
        >
          {loading ? (
            <><Loader2 size={16} className="animate-spin" /> Procesando...</>
          ) : (
            'Confirmar registro'
          )}
        </Button>
        <p className="mt-3 font-sans text-[11px] text-bastardo-cream/25 text-center">
          Recibirás un email de confirmación con los detalles del taller.
        </p>
      </div>
    </motion.div>
  );
}

function StepConfirmacion({
  nombre,
  taller,
  fecha,
  onClose,
}: {
  nombre: string;
  taller: Taller | null;
  fecha: FechaTaller | null;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="w-16 h-16 rounded-full bg-bastardo-amber/20 border border-bastardo-amber flex items-center justify-center mb-6"
      >
        <Check size={28} className="text-bastardo-amber" />
      </motion.div>

      <h3 className="font-display text-4xl text-bastardo-cream mb-3">
        ¡Listo, {nombre.split(' ')[0]}!
      </h3>
      <p className="font-sans text-bastardo-cream/50 mb-6 leading-relaxed">
        Tu cupo para el <span className="text-bastardo-amber">{taller?.nombre}</span> del{' '}
        {fecha?.fecha} a las {fecha?.hora} ha sido reservado.
      </p>
      <p className="font-sans text-[13px] text-bastardo-cream/30 mb-8">
        Recibirás un email con los detalles. Si tienes preguntas, escríbenos por WhatsApp.
      </p>

      <div className="flex flex-col gap-3 w-full">
        <Button
          href={`https://wa.me/573000000000?text=Hola%20Bastardo%2C%20acabo%20de%20reservar%20para%20el%20${encodeURIComponent(taller?.nombre ?? '')}`}
          variant="whatsapp"
          fullWidth
        >
          Confirmar por WhatsApp
        </Button>
        <Button variant="outline" onClick={onClose} fullWidth>
          Cerrar
        </Button>
      </div>
    </motion.div>
  );
}
