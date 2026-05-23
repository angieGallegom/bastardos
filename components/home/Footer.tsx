import Link from 'next/link';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { talleres } from '@/lib/talleres-data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-bastardo-brown border-t border-bastardo-cream/5 pt-20 pb-10 overflow-hidden">
      {/* Subtle grain */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="md:col-span-2">
            <Logo variant="white" className="mb-6" />
            <p className="font-sans text-[14px] text-bastardo-cream/35 leading-relaxed max-w-sm">
              Centro de Experiencias Gastronómicas y Formativas. Bogotá, Colombia.
            </p>
            <p className="font-sans text-[13px] text-bastardo-cream/25 mt-3 italic font-display">
              "La cocina como ritual. El aprendizaje como placer."
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://instagram.com/grupobastardo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-bastardo-cream/10 hover:border-bastardo-amber/50 flex items-center justify-center text-bastardo-cream/40 hover:text-bastardo-amber transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-bastardo-cream/10 hover:border-bastardo-whatsapp/50 flex items-center justify-center text-bastardo-cream/40 hover:text-bastardo-whatsapp transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="mailto:hola@grupobastardo.co"
                className="w-10 h-10 border border-bastardo-cream/10 hover:border-bastardo-amber/50 flex items-center justify-center text-bastardo-cream/40 hover:text-bastardo-amber transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Talleres col */}
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-cream/30 mb-6">Talleres</p>
            <ul className="space-y-3">
              {talleres.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/talleres/${t.slug}`}
                    className="font-sans text-[14px] text-bastardo-cream/45 hover:text-bastardo-amber transition-colors hover-underline"
                  >
                    {t.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios col */}
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[3px] text-bastardo-cream/30 mb-6">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[14px] text-bastardo-cream/45 hover:text-bastardo-whatsapp transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@grupobastardo.co"
                  className="font-sans text-[14px] text-bastardo-cream/45 hover:text-bastardo-amber transition-colors"
                >
                  hola@grupobastardo.co
                </a>
              </li>
              <li>
                <span className="font-sans text-[14px] text-bastardo-cream/25">Bogotá, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-bastardo-cream/5">
          <p className="font-sans text-[12px] text-bastardo-cream/20">
            © {year} Grupo Bastardo · BasTARDO. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="font-sans text-[12px] text-bastardo-cream/20">Política de privacidad</span>
            <span className="font-sans text-[12px] text-bastardo-cream/20">Términos y condiciones</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
