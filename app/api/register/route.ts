import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { taller, fecha, hora, nombre, email, telefono, origen, mensaje } = body;

    if (!nombre || !email || !telefono || !taller || !fecha) {
      return NextResponse.json({ error: 'Campos requeridos incompletos.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
    }

    // ─── Resend (email) ───────────────────────────────────────────────
    // Requires RESEND_API_KEY env variable. Get it at: https://resend.com
    if (process.env.RESEND_API_KEY) {
      const RESEND_FROM = process.env.RESEND_FROM_EMAIL || 'BasTARDO. <noreply@grupobastardo.co>';
      const BASTARDO_EMAIL = process.env.BASTARDO_EMAIL || 'hola@grupobastardo.co';

      const clientHtml = `
        <div style="background:#0a0908;color:#F5EFE0;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h1 style="font-size:28px;font-weight:300;color:#F5EFE0;margin-bottom:8px;">¡Tu cupo está reservado!</h1>
          <div style="width:40px;height:2px;background:#C8811A;margin-bottom:24px;"></div>
          <p style="color:#F5EFE0;opacity:0.7;margin-bottom:24px;">Hola ${nombre.split(' ')[0]}, aquí están los detalles de tu registro:</p>
          <div style="border:1px solid rgba(200,129,26,0.2);padding:24px;margin-bottom:24px;">
            <p style="color:#C8811A;font-size:11px;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">Detalle del taller</p>
            <p style="color:#F5EFE0;font-size:18px;margin-bottom:4px;">${taller}</p>
            <p style="color:rgba(245,239,224,0.5);margin-bottom:4px;">${fecha} · ${hora}</p>
            <p style="color:rgba(245,239,224,0.5);">Bogotá, Colombia</p>
          </div>
          <p style="color:rgba(245,239,224,0.4);font-size:13px;">¿Tienes preguntas? Escríbenos a <a href="mailto:hola@grupobastardo.co" style="color:#C8811A;">hola@grupobastardo.co</a> o por WhatsApp.</p>
          <p style="color:rgba(245,239,224,0.2);font-size:11px;margin-top:32px;">BasTARDO. · Centro de Experiencias Gastronómicas y Formativas · Bogotá</p>
        </div>
      `;

      const teamHtml = `
        <div style="background:#0a0908;color:#F5EFE0;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h1 style="color:#C8811A;font-size:18px;font-weight:700;text-transform:uppercase;letter-spacing:2px;">Nuevo registro</h1>
          <div style="margin-top:20px;space-y:8px;">
            <p><strong>Taller:</strong> ${taller}</p>
            <p><strong>Fecha:</strong> ${fecha} · ${hora}</p>
            <hr style="border-color:rgba(200,129,26,0.2);margin:16px 0;" />
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Origen:</strong> ${origen || 'No especificado'}</p>
            <p><strong>Notas:</strong> ${mensaje || 'Ninguna'}</p>
          </div>
        </div>
      `;

      await Promise.all([
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: RESEND_FROM, to: email, subject: `Reserva confirmada · ${taller}`, html: clientHtml }),
        }),
        fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: RESEND_FROM, to: BASTARDO_EMAIL, subject: `Nuevo registro: ${nombre} · ${taller}`, html: teamHtml }),
        }),
      ]);
    }

    // ─── Airtable (base de datos) ─────────────────────────────────────
    // Requires AIRTABLE_API_KEY and AIRTABLE_BASE_ID env variables.
    if (process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
      await fetch(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Registros`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Nombre: nombre,
            Email: email,
            Teléfono: telefono,
            Taller: taller,
            Fecha: fecha,
            Hora: hora,
            Origen: origen || '',
            Notas: mensaje || '',
            FechaRegistro: new Date().toISOString(),
          },
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[/api/register]', err);
    return NextResponse.json({ error: 'Error interno. Intenta de nuevo.' }, { status: 500 });
  }
}
