# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository State

This is a **pre-development** project directory. No code exists yet — only design assets and a brief. The deliverable will be a marketing/booking site for **BasTARDO.** (Grupo Bastardo), a gastronomic experiences center in Bogotá.

`Recursos/` contains:
- `BriefDisenoWeb_GrupoBastardo.md` — single source of truth for scope, IA, copy, SEO, colors, typography, and stack choices. **Read it before making any product or design decisions.**
- `Manual de indentidad_compressed_page-*.jpg` — 24-page brand identity manual (large JPGs, ~300MB total).

When starting implementation, scaffold the app at the repo root (not inside `Recursos/`).

## Architecture (Planned)

The site is structured around **one home + N scalable workshop landings + WhatsApp deflection** for everything else:

```
/ (Home)                    → hero + 3 workshop cards + other-services + manifesto
/talleres/pastas            → SEO-optimized landing, opens registration modal
/talleres/sushi             → same shape
/talleres/cocteles          → same shape
Otros Servicios             → wa.me deep links with pre-filled messages
```

The three workshop landings share a **common template** (hero → concept → ficha técnica + CTA → gallery → upcoming dates + CTA → cross-sell). Treat the workshop page as a single parameterized component fed by per-taller content (copy, mood palette, SEO meta) so a 4th workshop can ship without redesign — this scalability is an explicit goal.

The conversion loop is: **"Reserva tu cupo" CTA → real-time calendar (Cal.com / Calendly) → form → automated emails to both client and Bastardo + write to customer DB**. The calendar, email, and DB are external services integrated via embed/API, not built from scratch.

"Otros Servicios" (cenas privadas, celebraciones, experiencias, colaboraciones) deliberately do **not** go through the booking flow — they open WhatsApp with a pre-filled message per service. Do not build forms for these.

## Stack (Recommended in Brief)

The brief ranks options; the top picks are:

- **Framework:** Next.js + Vercel (preferred for SSR/SEO control) or Webflow (no-code alternative)
- **Calendar:** Cal.com self-hosted (preferred) or Calendly embed
- **Email:** Resend + React Email
- **Customer DB:** Airtable (visual) or Supabase (if dev-heavy)

Pick one column and stick with it — don't mix Webflow with custom Next.js code.

## Brand Constraints (Non-Negotiable)

These come from the identity manual and are easy to violate by accident:

- **Logo:** only black or white, **never colored**. Same rule for brand shapes (SVG only, max 20% opacity as background).
- **Amber `#C8811A`** is for CTAs/accents only — never for long body text.
- **WhatsApp green `#25D366`** is reserved exclusively for WhatsApp buttons. Do not reuse it elsewhere.
- **Typography:** Cormorant Garamond for H1/H2 only; DM Sans for everything else (body, UI, buttons). The script in the logo is decorative — never use it for UI text.
- Per-workshop mood palettes (pastas = dorado/trigo, sushi = índigo, cócteles = óxido/rojo) are layered **on top of** the base palette, not replacements for it.

## Performance & SEO Targets

The brief sets hard numbers — treat them as acceptance criteria, not aspirations:

- Core Web Vitals > 90, LCP < 2.5s, FID < 100ms, CLS < 0.1
- Conversion rate > 5%; registration completed in < 3 steps
- Each workshop landing needs: unique title tag, 155-char meta description, H1 with target keyword, `Event` schema markup, friendly URL, WebP images with alt text
- Target keywords are workshop-specific and Bogotá-scoped (`taller de pasta en Bogotá`, `taller de sushi en Bogotá`, `taller de coctelería en Bogotá`) — see brief §05 for full keyword list per workshop

Mobile-first with breakpoints 375 / 768 / 1024 / 1440 and touch targets ≥ 44px. On mobile home, the "Reservar" CTA must float persistently.

## Working Language

The brief, brand voice, and site copy are in **Spanish (Colombia)**. Keep user-facing strings in Spanish; code identifiers and comments in English is fine.


# Reglas para ahorrar tokens

## 1. No programar sin contexto

- ANTES de escribir codigo: lee los archivos relevantes, revisa git log, entiende la arquitectura.
- Si no tienes contexto suficiente, pregunta. No asumas.

## 2. Respuestas cortas

- Responde en 1-3 oraciones. Sin preambulos, sin resumen final.
- No repitas lo que el usuario dijo. No expliques lo obvio.
- Codigo habla por si mismo: no narres cada linea que escribes.

## 3. No reescribir archivos completos

- Usa Edit (reemplazo parcial), NUNCA Write para archivos existentes salvo que el cambio sea >80% del archivo.
- Cambia solo lo necesario. No "limpies" codigo alrededor del cambio.

## 4. No releer archivos ya leidos

- Si ya leiste un archivo en esta conversacion, no lo vuelvas a leer salvo que haya cambiado.
- Toma notas mentales de lo importante en tu primera lectura.

## 5. Validar antes de declarar hecho

- Despues de un cambio: compila, corre tests, o verifica que funciona.
- Nunca digas "listo" sin evidencia de que funciona.

## 6. Cero charla aduladora

- No digas "Excelente pregunta", "Gran idea", "Perfecto", etc.
- No halagues al usuario. Ve directo al trabajo.

## 7. Soluciones simples

- Implementa lo minimo que resuelve el problema. Nada mas.
- No agregues abstracciones, helpers, tipos, validaciones, ni features que no se pidieron.
- 3 lineas repetidas > 1 abstraccion prematura.

## 8. No pelear con el usuario

- Si el usuario dice "hazlo asi", hazlo asi. No debatas salvo riesgo real de seguridad o perdida de datos.
- Si discrepas, menciona tu concern en 1 oracion y procede con lo que pidio.

## 9. Leer solo lo necesario

- No leas archivos completos si solo necesitas una seccion. Usa offset y limit.
- Si sabes la ruta exacta, usa Read directo. No hagas Glob + Grep + Read cuando Read basta.

## 10. No narrar el plan antes de ejecutar

- No digas "Voy a leer el archivo, luego modificar la funcion, luego compilar...". Solo hazlo.
- El usuario ve tus tool calls. No necesita un preview en texto.

## 11. Paralelizar tool calls

- Si necesitas leer 3 archivos independientes, lee los 3 en un solo mensaje, no uno por uno.
- Menos roundtrips = menos tokens de contexto acumulado.

## 12. No duplicar codigo en la respuesta

- Si ya editaste un archivo, no copies el resultado en tu respuesta. El usuario lo ve en el diff.
- Si creaste un archivo, no lo muestres entero en texto tambien.

## 13. No usar Agent cuando Grep/Read basta

- Agent duplica todo el contexto en un subproceso. Solo usalo para busquedas amplias o tareas complejas.
- Para buscar una funcion o archivo especifico, usa Grep o Glob directo.

## 14. Cero comentarios innecesarios

- No escribas comentarios que explican QUE hace el codigo. El codigo se explica solo.
- Solo comenta el POR QUE cuando no es obvio (workaround, invariante oculta, restriccion externa).

## 15. No crear archivos que no se pidieron

- No crees README.md, docs, ni archivos de planificacion salvo peticion explicita.
- Prefiere editar archivos existentes a crear nuevos.

## 16. No usar emojis salvo peticion

- Cero emojis en codigo, commits, respuestas o documentacion.

## 17. Bash solo para shell

- Usa Read/Edit/Write para archivos. NUNCA cat/head/tail/sed/awk/echo cuando una tool dedicada sirve.
- Cada tool dedicada es mas barata en tokens y mas legible para el usuario.

## 18. TodoWrite solo para tareas multi-paso reales

- No uses TodoWrite para tareas de 1-2 pasos. Es overhead.
- Usalo solo cuando la tarea tiene 3+ pasos no triviales o ramifica.

## 19. No autoformatear ni lint sin pedirlo

- No corras prettier, eslint --fix, ni cambios de formato salvo que el usuario lo pida.
- Cada cambio extra es ruido en el diff y tokens gastados.

## 20. No re-investigar lo ya resuelto

- Si en la conversacion ya verificaste algo (que un archivo existe, que una funcion se llama X), no lo re-verifiques.
- Confia en tu memoria de la conversacion actual.
