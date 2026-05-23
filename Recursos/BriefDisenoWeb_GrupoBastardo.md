# Brief de Diseño Web · Grupo Bastardo

**IDENTIDAD DE MARCA · UX/UI · SEO · FUNCIONAL**
*Grupo Bastardo · 2025*

---

## Índice

1. [Resumen del Proyecto](#01--resumen-del-proyecto)
2. [Objetivos del Sitio Web](#02--objetivos-del-sitio-web)
3. [Arquitectura de Información](#03--arquitectura-de-información)
4. [Home · Landing Principal](#04--home--landing-principal)
5. [Landings de Talleres](#05--landings-de-talleres)
6. [Sistema de Registro y CTA](#06--sistema-de-registro-y-cta)
7. [Otros Servicios + WhatsApp](#07--otros-servicios--whatsapp)
8. [Identidad Visual · Colores](#08--identidad-visual--paleta-de-color)
9. [Tipografía del Sitio](#09--tipografía-del-sitio)
10. [Íconos y Elementos Gráficos](#10--íconos-y-elementos-gráficos)
11. [Requerimientos Técnicos](#11--requerimientos-técnicos)
12. [Referentes y Estilo Visual](#12--referentes-y-estilo-visual)

---

## 01 · Resumen del Proyecto

### La Marca

**BasTARDO.** — Centro de Experiencias Gastronómicas y Formativas, ubicado en Bogotá.

Parte del ecosistema de Grupo Bastardo, un espacio donde la cocina se convierte en laboratorio y la mesa en escenario. Filosofía: mezcla, proceso, instinto y estructura en tensión permanente.

### El Encargo

Diseño y desarrollo de un sitio web que incluya:

- Home principal con hero section
- 3 landings de talleres optimizadas para SEO
- Sistema de registro con calendario en tiempo real
- Integración con WhatsApp para servicios adicionales
- Base de datos propia de clientes
- Notificaciones automáticas por email

### Talleres Iniciales

| # | Taller | Descripción |
|---|--------|-------------|
| 1 | **Taller de Pastas** | Técnicas artesanales de pasta fresca |
| 2 | **Taller de Sushi** | Arte japonés aplicado a ingredientes locales |
| 3 | **Taller de Cócteles** | Mixología sensorial y creativa |

---

## 02 · Objetivos del Sitio Web

### Objetivos Principales

**Posicionamiento SEO**
Cada taller tiene su propia landing optimizada para motores de búsqueda, permitiendo captar tráfico específico por tipo de taller.

**Captación de Clientes**
Formulario de registro integrado que alimenta una base de datos propia para marketing y comunicación futura.

**Conversión**
CTA repetitivo "Reserva tu cupo" que lleva al calendario en tiempo real. Reducir fricción al máximo en el proceso de inscripción.

**Comunicación de Marca**
Transmitir la filosofía Bastardo: íntimo, experimental, exclusivo. El sitio debe sentirse como la experiencia misma.

**Automatización**
Confirmaciones automáticas por email al cliente y al equipo. Reducir carga operativa en gestión de registros.

**Escalabilidad**
Estructura diseñada para añadir nuevos talleres fácilmente sin rediseñar el sitio completo.

### Métricas de Éxito

- Tasa de conversión > 5%
- Tiempo en página > 2 min
- Registro completado en < 3 pasos
- Email de confirmación < 1 min
- Ranking SEO top 10 por taller

---

## 03 · Arquitectura de Información

### Mapa del Sitio

```
HOME (/)
│
├── TALLER DE PASTAS (/talleres/pastas)
│   └── → Modal de Registro
│
├── TALLER DE SUSHI (/talleres/sushi)
│   └── → Modal de Registro
│
├── TALLER DE CÓCTELES (/talleres/cocteles)
│   └── → Modal de Registro
│
└── + TALLERES FUTUROS (escalable sin rediseño)

OTROS SERVICIOS → WhatsApp Directo
├── Cenas Privadas
├── Celebraciones
├── Experiencias Personalizadas
└── Colaboraciones

FLUJO DE REGISTRO
Calendario en Tiempo Real → Formulario → Email Automático
```

### URLs

| Página | URL |
|--------|-----|
| Home | `/` |
| Taller de Pastas | `/talleres/pastas` |
| Taller de Sushi | `/talleres/sushi` |
| Taller de Cócteles | `/talleres/cocteles` |

### Navegación

Sticky header con: Logo + links talleres + CTA pequeño "Reserva tu cupo".

---

## 04 · Home · Landing Principal

### Estructura de la Home

#### 01 · Hero Section
Fondo oscuro con imagen atmosférica de alta calidad. Headline corto y contundente. Bajada de línea. CTA: **"RESERVA TU CUPO"** (botón ámbar). Shape de BasTARDO. superpuesto.

#### 02 · Próximos Talleres
Grid de 3 tarjetas (Pastas / Sushi / Cócteles). Imagen, nombre del taller, fecha próxima disponible, precio. CTA individual a cada landing.

#### 03 · Otros Servicios
Cenas Privadas · Celebraciones · Experiencias Personalizadas · Colaboraciones. CTA → WhatsApp. Íconos minimalistas.

#### 04 · Nosotros
Breve manifesto de Bastardo. Cita: *"Bastardo no se explica del todo. Se vive."* Imagen editorial.

#### 05 · Footer
Logo · Redes sociales · Contacto · Legal.

### Notas UX / Diseño

| Aspecto | Especificación |
|---------|---------------|
| **Navegación** | Sticky header con logo + links talleres + CTA pequeño |
| **Mobile first** | Hero en 1 columna. Grid de talleres en carousel |
| **Velocidad** | Imágenes WebP. Lazy loading. Core Web Vitals > 90 |
| **Accesibilidad** | Contraste AA. Alt text en imágenes. HTML5 semántico |
| **Animaciones** | Transiciones sutiles al scroll. El silencio es parte del lenguaje |
| **CTA flotante** | En mobile: botón "Reservar" flotante visible en toda la home |

---

## 05 · Landings de Talleres

Cada taller tiene su propia URL optimizada. La estructura es común a los 3 talleres.

### Estructura Común

#### 01 · Hero del Taller
Imagen de fondo inmersiva. Nombre del taller en grande. Subtítulo evocador.
**META SEO:** title tag + meta description específica del taller.

#### 02 · Concepto del Taller
Texto narrativo (200–300 palabras). ¿Qué aprenderás? ¿A quién va dirigido? Qué incluye: ingredientes, espacio, experiencia. Fotografías del proceso.

#### 03 · Ficha Técnica + CTA #1
Duración · Precio · Cupos disponibles (dinámico). Botón **"RESERVA TU CUPO"** → abre calendario.

#### 04 · Galería / Experiencia
Fotos de talleres anteriores. Videos cortos. Testimonios de participantes.

#### 05 · Próximas Fechas + CTA #2
Lista de fechas disponibles. CTA repetido. Urgencia: *"Quedan X cupos"*.

#### 06 · Otros Talleres
Grid de los otros 2 talleres. Cross-selling. Mantiene al usuario en el sitio.

### Atmósfera Visual por Taller

| Taller | Paleta | Mood |
|--------|--------|------|
| Pastas | Dorado, trigo, marrón cálido | Artesanal, íntimo, mediterráneo |
| Sushi | Índigo oscuro, gris azulado, negro | Preciso, minimalista, japonés |
| Cócteles | Óxido, rojo oscuro, negro | Sensorial, misterioso, nocturno |

### SEO por Taller

> Title Tag único · Meta Description 155 chars · H1 con keyword · URL amigable · Schema markup (Event) · Alt text en imágenes · Velocidad < 3s

#### Taller de Pastas
- **Keyword principal:** `taller de pasta en Bogotá`
- **Keywords secundarias:** clases de pasta artesanal Bogotá · curso cocina italiana Bogotá · taller de pasta fresca Bogotá
- **Title:** `Taller de Pasta Artesanal en Bogotá | Grupo Bastardo`
- **Meta description:** Aprende a hacer pasta fresca artesanal en Bogotá. Taller de 3 horas para grupos de hasta 12 personas. Incluye ingredientes, degustación y experiencia completa. Reserva tu cupo.
- **H1:** `Taller de Pasta Artesanal en Bogotá`

#### Taller de Sushi
- **Keyword principal:** `taller de sushi en Bogotá`
- **Keywords secundarias:** clases de sushi Bogotá · curso de sushi para principiantes Bogotá · aprender a hacer sushi Bogotá
- **Title:** `Taller de Sushi en Bogotá | Aprende con Grupo Bastardo`
- **Meta description:** Taller de sushi en Bogotá para principiantes y entusiastas. 3.5 horas de técnica japonesa con ingredientes locales, en grupos de hasta 12 personas. Reserva tu cupo.
- **H1:** `Taller de Sushi en Bogotá`

#### Taller de Cócteles
- **Keyword principal:** `taller de coctelería en Bogotá`
- **Keywords secundarias:** clases de mixología Bogotá · curso de cócteles Bogotá · taller de bartender Bogotá · experiencia de mixología Bogotá
- **Title:** `Taller de Coctelería en Bogotá | Mixología con Grupo Bastardo`
- **Meta description:** Taller de coctelería y mixología en Bogotá para grupos. 2.5 horas de técnica, sabor y narrativa en cada vaso. Máx. 10 personas. Reserva tu experiencia.
- **H1:** `Taller de Coctelería en Bogotá`

---

## 06 · Sistema de Registro y CTA

### Flujo de Registro

```
Usuario hace clic en
"Reserva tu cupo"
        ↓
Se abre calendario
en tiempo real
        ↓
Selecciona fecha
y horario
        ↓
Completa formulario
de registro
        ↓
Email automático
cliente + Bastardo
```

### Calendario en Tiempo Real

**Herramientas recomendadas (en orden de preferencia):**

- **Calendly** — Integración embed directa, planes gratuito/pago, Zapier nativo
- **Cal.com** (open source) — Auto-hospedado, sin fees, máximo control
- **TidyCal** — Económico, pago único, buena UX

**Configuración:**
- Slots por taller (máx. 12 cupos por sesión)
- Duración fija según el taller
- Buffer entre sesiones
- Zona horaria: Bogotá (GMT-5)
- Bloqueo automático al completar cupos

### Formulario de Registro

| Campo | Tipo | Validación |
|-------|------|------------|
| Nombre completo | text | Requerido |
| Correo electrónico | email | Requerido · validación de formato |
| Teléfono / WhatsApp | tel | Requerido · formato Colombia |
| Taller elegido | select | Auto-fill del contexto de la landing |
| Fecha seleccionada | — | Auto-fill del calendario |
| Personas adicionales | number | Opcional · máx. disponible |
| ¿Cómo nos conociste? | select | IG / Referido / Web / Otro |
| Mensaje / Alergias | textarea | Opcional |

### Automatización de Emails

**Email al cliente:**
Confirmación de registro · Detalle del taller · Fecha y hora · Dirección · Tips pre-taller · Link para cancelar/reprogramar.

**Email a Bastardo:**
Nombre cliente · Email · Tel · Taller · Fecha · Origen (¿cómo nos conociste?) · Alergias/notas.

> Herramientas sugeridas: **Zapier / Make.com** + Gmail API, o servicios como **Resend**, **SendGrid**, **EmailJS**.

---

## 07 · Otros Servicios + WhatsApp

Los servicios fuera de talleres abren una conversación directa vía **WhatsApp Business**. Cada servicio tiene su propio mensaje pre-cargado para agilizar la respuesta del equipo.

**Formato del enlace:**
```
https://wa.me/57XXXXXXXXXX?text=Hola%20Bastardo%2C%20me%20interesa%20el%20servicio%20de%20[SERVICIO]
```

### Servicios

#### Cenas Privadas con Chef en Bogotá
Experiencias de cena privada diseñadas a la medida. Chef en tu espacio o en el nuestro. Menú culinario exclusivo para tu grupo.
**CTA:** Consultar cena privada por WhatsApp

#### Celebraciones Gastronómicas en Bogotá
Cumpleaños, aniversarios y despedidas con una experiencia culinaria como eje central. Memorable por definición.
**CTA:** Consultar celebración por WhatsApp

#### Experiencias Gastronómicas Personalizadas
Team building gastronómico, retiros creativos y encuentros de equipo en Bogotá. Diseñamos la experiencia completa para tu grupo.
**CTA:** Consultar experiencia por WhatsApp

#### Colaboraciones y Alianzas Gastronómicas
Trabajamos con marcas, fotógrafos, medios y creadores de contenido. Propósito compartido, narrativa conjunta.
**CTA:** Consultar colaboración por WhatsApp

---

## 08 · Identidad Visual · Paleta de Color

*Basada en el manual de identidad de Grupo Bastardo. Paleta cálida, oscura y contundente.*

### Colores Primarios

| Color | HEX | Rol |
|-------|-----|-----|
| Negro | `#111111` | Color base. Fondo principal. Backgrounds oscuros |
| Ámbar | `#C8811A` | Acento primario. CTAs. Énlaces activos. Highlights |
| Crema | `#F5EFE0` | Fondos alternativos. Texturas claras. Espacios |
| Marrón oscuro | `#1A1410` | Hero sections. Cards oscuras. Fondos profundos |

### Colores Secundarios

| Color | HEX | Rol |
|-------|-----|-----|
| Óxido | `#8B3A1A` | Acento secundario. Hover states |
| Ámbar claro | `#E8A93A` | Gradientes. Fondos cálidos |
| Gris oscuro | `#2C2C2C` | Textos secundarios. Subtítulos |
| Gris medio | `#6B6B6B` | Captions. Notas. Metadatos |
| Gris claro | `#E8E8E8` | Divisores. Bordes. Separadores |
| Verde WhatsApp | `#25D366` | **Exclusivo** para botones de WhatsApp |

### Reglas de Uso del Color

- El logo siempre en negro o blanco · **nunca en color**
- El ámbar no debe usarse en bloques de texto largo
- El verde `#25D366` es exclusivo para botones de WhatsApp
- Mínimo contraste WCAG AA para textos sobre fondos
- Mientras el color construye la emoción, el logo sostiene la identidad

---

## 09 · Tipografía del Sitio

*El sistema tipográfico web extiende la identidad del manual de marca al entorno digital.*

### Fuentes

#### Display · Titulares
**Cormorant Garamond** — Serif elegante, alto contraste
- Uso: H1, H2
- Weights: 300 Light · 600 SemiBold · 700 Bold
- Fuente: Google Fonts
- Alternativas: Playfair Display · EB Garamond

#### UI · Cuerpo · Interfaz
**DM Sans** — Sans-serif moderna y funcional
- Uso: cuerpo, nav, botones, labels
- Weights: 400 Regular · 500 Medium · 700 Bold
- Fuente: Google Fonts

#### Gestual · Elemento Decorativo
Script manual del logotipo de BasTARDO. — **solo como elemento gráfico**, nunca en textos de UI.

### Escala Tipográfica Web

| Elemento | Tamaño | Fuente |
|----------|--------|--------|
| H1 · Hero | 52–64px | Cormorant Garamond Bold |
| H2 · Sección | 36–42px | Cormorant Garamond SemiBold |
| H3 · Card | 24–28px | DM Sans Bold |
| Body Large | 17–18px | DM Sans Regular |
| Body | 15–16px | DM Sans Regular |
| Caption | 12–13px | DM Sans Medium |
| Botón CTA | 14px | DM Sans Bold · tracking 1.5px |

---

## 10 · Íconos y Elementos Gráficos

### Librería de Íconos Recomendada

- **Phosphor Icons** — Línea limpia, múltiples pesos, ideal para UI gastronómica. Libre uso.
- **Lucide Icons** — Moderna, minimalista, compatible con React/Vue. Open source.
- **Tabler Icons** — Más de 4000 íconos, consistentes, SVG optimizados.

### Íconos Necesarios por Categoría

**Talleres:**
Fork · Fish · Cocktail glass · Duración (reloj) · Grupo / cupos (personas) · Precio (moneda)

**Servicios:**
Vela · Copa · Estrella / brillo · Apretón de manos · Ubicación · Contacto

**UI / Interfaz:**
Calendario · Email · Check confirmación · Flechas CTA · Menú / Nav · Link WhatsApp

**Redes Sociales:**
Instagram · TikTok · WhatsApp · Email newsletter · Pinterest

### Shapes de Marca · Uso Web

El shape de BasTARDO. nace del principio de capas y secuencia. Representa la experiencia como proceso progresivo.

| Tipo | Uso |
|------|-----|
| **Shape principal** | Hero sections de talleres · Loader/spinner · Favicon animado · OG images |
| **Shapes secundarios** | Separadores entre secciones · Fondos baja opacidad · Watermarks en fotos · Cards |

**Reglas de uso web:**
- Siempre SVG vectorial
- En negro o blanco · **nunca en color**
- Máximo 20% opacity como fondo
- Animación sugerida: revelar layers de izquierda a derecha al cargar · 0.6s ease-in-out

### Guía Fotográfica

- Iluminación dramática · fondos oscuros · enfoque en texturas y proceso
- Planos cercanos y detalle. Manos en acción. Sin filtros artificiales
- Formato: 16:9 para heroes · 1:1 para cards · 9:16 para stories
- Tratamiento: contraste alto · tonos cálidos ámbar/terracota · NO sobrexpuesto

---

## 11 · Requerimientos Técnicos

### Stack Técnico Recomendado

#### Framework / CMS

| Opción | Herramienta | Notas |
|--------|-------------|-------|
| **A ★★★★★** | Webflow | Sin código, excelente para diseño, buena SEO |
| **B ★★★★★** | Next.js + Vercel | Máximo control, SSR, SEO perfecto |
| C ★★★☆☆ | WordPress + Elementor | Familiar, más plugins, menor rendimiento |

#### Calendario / Reservas

| Opción | Herramienta | Notas |
|--------|-------------|-------|
| **A ★★★★★** | Cal.com (open source) | Auto-hospedado · sin fees · máximo control |
| B ★★★★☆ | Calendly | Embed directo · Zapier nativo |
| C ★★★★☆ | TidyCal | Económico · pago único · buena UX |

#### Email / Automatización

| Opción | Herramienta | Notas |
|--------|-------------|-------|
| **A ★★★★★** | Resend + React Email | Moderno · API simple · templates hermosos |
| B ★★★★☆ | SendGrid | Escalable · 100 emails/día gratis |
| C ★★★☆☆ | Zapier + Gmail | Sin código · rápido · costo por zaps |

#### Base de Datos

| Opción | Herramienta | Notas |
|--------|-------------|-------|
| **A ★★★★★** | Airtable | Visual · fácil · APIs nativas |
| B ★★★★☆ | Supabase (PostgreSQL) | Máximo control · gratuito · requiere dev |
| C ★★★☆☆ | Google Sheets + Zapier | Gratuito · familiar · limitado en escala |

### Requerimientos de Rendimiento y SEO

| Aspecto | Especificación |
|---------|---------------|
| **Velocidad** | Core Web Vitals > 90 · LCP < 2.5s · FID < 100ms · CLS < 0.1 |
| **SEO técnico** | Sitemap XML · robots.txt · Canonical URLs · Schema markup Events · Open Graph |
| **Analytics** | Google Analytics 4 · Search Console · Hotjar · Eventos de conversión en CTAs |
| **Seguridad** | SSL/HTTPS · CAPTCHA en formularios · Política de datos · Backups semanales |
| **Responsive** | Mobile first · breakpoints: 375 / 768 / 1024 / 1440px · Touch targets > 44px |
| **Dominio** | Recomendado: `grupobastardo.co` o `bastardo.co` |

### Timeline Estimado

| Semana | Fase |
|--------|------|
| Sem 1–2 | Brief + Wireframes |
| Sem 3–4 | Diseño UI |
| Sem 5–6 | Desarrollo |
| Sem 7 | Integraciones (calendario, email, base de datos) |
| Sem 8 | QA + Lanzamiento |

---

## 12 · Referentes y Estilo Visual

### Referentes Web

| Marca | URL | Por qué |
|-------|-----|---------|
| **OONI Pizza** | ooni.com | Hero oscuro · producto con luz dramática · serif + sans · experiencia como storytelling |
| **Noma Restaurant** | noma.dk | Minimalismo extremo · espacio negativo · fotografía editorial · jerarquía clara |
| **Naked Wines** | nakedwines.com | Conversación directa · CTAs claros · personalidad fuerte · colores cálidos |
| **Atelier Crenn** | ateliercrenn.com | Alta gastronomía · oscuro · elegante · experiencia inmersiva al scroll |

### Palabras que Debe Transmitir el Sitio

`ÍNTIMO` · `EXPERIMENTAL` · `EXCLUSIVO` · `SENSORIAL` · `CONTUNDENTE` · `HUMANO` · `PROCESO` · `HONESTO`

---

## Cierre

> *"BasTARDO. no se entiende como algo incompleto, sino como algo libre de un linaje único. Es mezcla, cruce e hibridez."*
>
> — Manual de Identidad, Grupo Bastardo

**El sitio web debe ser una extensión de esa experiencia.**

---

*Brief preparado con base en el Manual de Identidad Visual de Grupo Bastardo · 2025*
*BasTARDO. · Centro de Experiencias Gastronómicas y Formativas · Bogotá, Colombia*
