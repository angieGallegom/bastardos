export type Taller = {
  slug: 'pastas' | 'sushi' | 'cocteles';
  nombre: string;
  subtitulo: string;
  descripcionCorta: string;
  concepto: string;
  quienVaDirigido: string;
  queIncluyeItems: string[];
  duracion: string;
  precio: string;
  precioNum: number;
  cuposMax: number;
  moodColor: string;
  moodColorRgb: string;
  bgImage: string;
  heroOverlay: string;
  proximasFechas: FechaTaller[];
  testimonios: Testimonio[];
  seo: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
  };
};

export type FechaTaller = {
  id: string;
  fecha: string;
  diaSemana: string;
  hora: string;
  cuposDisponibles: number;
};

export type Testimonio = {
  nombre: string;
  texto: string;
};

export const talleres: Taller[] = [
  {
    slug: 'pastas',
    nombre: 'Taller de Pastas',
    subtitulo: 'El arte de convertir harina en experiencia',
    descripcionCorta: 'Pasta fresca artesanal. 3 horas. Máx. 12 personas.',
    concepto: `Hay algo casi meditativo en amasar. En el momento en que la harina y el huevo se encuentran sobre la mesa, algo cambia. El tiempo se hace lento. La cocina deja de ser un lugar funcional para convertirse en un estudio.

En el Taller de Pastas de BasTARDO., no enseñamos recetas. Enseñamos lógica. La diferencia entre una pasta que se deshace y una que sostiene la salsa. El por qué de la hidratación, el cómo del laminado, el cuándo del reposo.

Tres horas en las que las manos aprenden lo que los libros no pueden explicar. Al final, te sientas a comer lo que hiciste. Y en ese momento, la pasta ya no es pasta: es comprensión.`,
    quienVaDirigido: 'Para curiosos de la cocina, amantes de la gastronomía italiana y grupos que quieren vivir algo diferente. No se requiere experiencia previa.',
    queIncluyeItems: [
      'Ingredientes de alta calidad incluidos',
      'Maridaje con vino durante la degustación',
      'Guía técnica impresa para llevar',
      'Espacio íntimo para máximo 12 personas',
      'Degustación de todo lo preparado',
    ],
    duracion: '3 horas',
    precio: '$120.000 COP',
    precioNum: 120000,
    cuposMax: 12,
    moodColor: '#C8811A',
    moodColorRgb: '200, 129, 26',
    bgImage: '/images/hero-bg.jpg',
    heroOverlay: 'from-bastardo-deep/95 via-bastardo-deep/70 to-transparent',
    proximasFechas: [
      { id: 'p1', fecha: '15 de Agosto, 2025', diaSemana: 'Viernes', hora: '6:00 PM', cuposDisponibles: 4 },
      { id: 'p2', fecha: '22 de Agosto, 2025', diaSemana: 'Viernes', hora: '6:00 PM', cuposDisponibles: 8 },
      { id: 'p3', fecha: '5 de Septiembre, 2025', diaSemana: 'Viernes', hora: '6:00 PM', cuposDisponibles: 12 },
      { id: 'p4', fecha: '19 de Septiembre, 2025', diaSemana: 'Viernes', hora: '6:00 PM', cuposDisponibles: 12 },
    ],
    testimonios: [
      { nombre: 'María V.', texto: 'Nunca pensé que hacer pasta sería tan filosófico. Me fui con recetas en la mano y una perspectiva completamente nueva de la cocina.' },
      { nombre: 'Carlos M.', texto: 'La mejor experiencia gastronómica que he tenido en Bogotá. El espacio, la energía y la guía de BasTARDO. son únicos.' },
    ],
    seo: {
      title: 'Taller de Pasta Artesanal en Bogotá | Grupo Bastardo',
      description: 'Aprende a hacer pasta fresca artesanal en Bogotá. Taller de 3 horas para grupos de hasta 12 personas. Incluye ingredientes, degustación y experiencia completa. Reserva tu cupo.',
      h1: 'Taller de Pasta Artesanal en Bogotá',
      keywords: ['taller de pasta en Bogotá', 'clases de pasta artesanal Bogotá', 'curso cocina italiana Bogotá', 'taller de pasta fresca Bogotá'],
    },
  },
  {
    slug: 'sushi',
    nombre: 'Taller de Sushi',
    subtitulo: 'Técnica japonesa. Ingredientes locales. Resultado propio.',
    descripcionCorta: 'Arte japonés aplicado a ingredientes locales. 3.5 horas. Máx. 12 personas.',
    concepto: `El sushi no es solo comida japonesa. Es una forma de pensar. Cada pieza es una decisión: el grosor del corte, la presión del arroz, la temperatura del pescado. No hay margen para la improvisación sin fundamento.

En BasTARDO. tomamos esa rigurosidad y la mezclamos con lo que tenemos: ingredientes colombianos, intuición local, y la libertad de no tener que ser perfectamente auténticos para ser extraordinariamente buenos.

Aprenderás técnicas de corte básico, cómo preparar el arroz de sushi, los tipos de roll y maki. Pero más importante, aprenderás a tomar decisiones. A confiar en tu criterio. A ser bastardo.`,
    quienVaDirigido: 'Para amantes del sushi, curiosos de la cultura japonesa y grupos que quieren un experiencia diferente y precisa. Sin experiencia previa requerida.',
    queIncluyeItems: [
      'Ingredientes frescos incluidos',
      'Sake de cortesía durante el taller',
      'Kit de makisu (tapete de bambú) para llevar',
      'Espacio íntimo para máximo 12 personas',
      'Degustación completa al finalizar',
    ],
    duracion: '3.5 horas',
    precio: '$140.000 COP',
    precioNum: 140000,
    cuposMax: 12,
    moodColor: '#3D5A80',
    moodColorRgb: '61, 90, 128',
    bgImage: '/images/food-detail.jpg',
    heroOverlay: 'from-[#0a0f1a]/95 via-[#0a0f1a]/70 to-transparent',
    proximasFechas: [
      { id: 's1', fecha: '16 de Agosto, 2025', diaSemana: 'Sábado', hora: '5:30 PM', cuposDisponibles: 3 },
      { id: 's2', fecha: '23 de Agosto, 2025', diaSemana: 'Sábado', hora: '5:30 PM', cuposDisponibles: 10 },
      { id: 's3', fecha: '6 de Septiembre, 2025', diaSemana: 'Sábado', hora: '5:30 PM', cuposDisponibles: 12 },
    ],
    testimonios: [
      { nombre: 'Andrea L.', texto: 'Vine sin saber nada de sushi y me fui sabiendo por qué el arroz importa tanto como el pescado. Una revelación.' },
      { nombre: 'Tomás R.', texto: 'Lo que más me gustó fue que no trataron de enseñarme "el sushi perfecto" sino mi propio sushi. Eso es Bastardo.' },
    ],
    seo: {
      title: 'Taller de Sushi en Bogotá | Aprende con Grupo Bastardo',
      description: 'Taller de sushi en Bogotá para principiantes y entusiastas. 3.5 horas de técnica japonesa con ingredientes locales, en grupos de hasta 12 personas. Reserva tu cupo.',
      h1: 'Taller de Sushi en Bogotá',
      keywords: ['taller de sushi en Bogotá', 'clases de sushi Bogotá', 'curso de sushi para principiantes Bogotá', 'aprender a hacer sushi Bogotá'],
    },
  },
  {
    slug: 'cocteles',
    nombre: 'Taller de Cócteles',
    subtitulo: 'Cada trago es una historia. Aprende a contarla.',
    descripcionCorta: 'Mixología sensorial y creativa. 2.5 horas. Máx. 10 personas.',
    concepto: `Un cóctel no se sirve. Se construye. Cada ingrediente tiene un rol, una posición, un momento. El hielo no es decoración. La garnish no es adorno. Todo habla.

En el Taller de Cócteles de BasTARDO., vamos más allá de las recetas. Entendemos la estructura de un trago: la base, el modificador, el equilibrador. Y desde esa base, creamos. Experimentamos. Fallamos y corregimos.

Al final de las 2.5 horas, habrás creado al menos 3 cócteles y habrás entendido por qué funcionan. Y eso —entender el por qué— es lo que separa un bartender de alguien que solo mezcla.`,
    quienVaDirigido: 'Para curiosos de la mixología, amantes de los spirits y grupos que quieren una experiencia nocturna diferente. Sin experiencia previa requerida.',
    queIncluyeItems: [
      'Licores y mixers premium incluidos',
      'Degustación de los cócteles creados',
      'Glosario de técnicas y recetas para llevar',
      'Espacio íntimo para máximo 10 personas',
      'Snacks de maridaje incluidos',
    ],
    duracion: '2.5 horas',
    precio: '$100.000 COP',
    precioNum: 100000,
    cuposMax: 10,
    moodColor: '#8B3A1A',
    moodColorRgb: '139, 58, 26',
    bgImage: '/images/cocteles-bg.jpg',
    heroOverlay: 'from-[#1a0a0a]/95 via-[#1a0a0a]/70 to-transparent',
    proximasFechas: [
      { id: 'c1', fecha: '14 de Agosto, 2025', diaSemana: 'Jueves', hora: '7:00 PM', cuposDisponibles: 6 },
      { id: 'c2', fecha: '28 de Agosto, 2025', diaSemana: 'Jueves', hora: '7:00 PM', cuposDisponibles: 9 },
      { id: 'c3', fecha: '11 de Septiembre, 2025', diaSemana: 'Jueves', hora: '7:00 PM', cuposDisponibles: 10 },
    ],
    testimonios: [
      { nombre: 'Santiago P.', texto: 'Jamás pensé que mezclar licores podría ser tan intelectual. Cada decisión tiene una razón. Bastardo me cambió cómo pido tragos.' },
      { nombre: 'Valentina O.', texto: 'Perfecto para celebrar algo especial con amigos. El ambiente, la guía y los tragos son de otro nivel.' },
    ],
    seo: {
      title: 'Taller de Coctelería en Bogotá | Mixología con Grupo Bastardo',
      description: 'Taller de coctelería y mixología en Bogotá para grupos. 2.5 horas de técnica, sabor y narrativa en cada vaso. Máx. 10 personas. Reserva tu experiencia.',
      h1: 'Taller de Coctelería en Bogotá',
      keywords: ['taller de coctelería en Bogotá', 'clases de mixología Bogotá', 'curso de cócteles Bogotá', 'taller de bartender Bogotá'],
    },
  },
];

export function getTallerBySlug(slug: string): Taller | undefined {
  return talleres.find((t) => t.slug === slug);
}

export function getOtrosTalleres(currentSlug: string): Taller[] {
  return talleres.filter((t) => t.slug !== currentSlug);
}

export const otrosServicios = [
  {
    id: 'cenas',
    icono: 'UtensilsCrossed',
    titulo: 'Cenas Privadas con Chef',
    descripcion: 'Experiencias de cena privada diseñadas a la medida. Chef en tu espacio o en el nuestro. Menú exclusivo para tu grupo.',
    waText: 'Hola%20Bastardo%2C%20me%20interesa%20el%20servicio%20de%20Cena%20Privada',
  },
  {
    id: 'celebraciones',
    icono: 'Sparkles',
    titulo: 'Celebraciones Gastronómicas',
    descripcion: 'Cumpleaños, aniversarios y despedidas con una experiencia culinaria como eje central. Memorable por definición.',
    waText: 'Hola%20Bastardo%2C%20me%20interesa%20el%20servicio%20de%20Celebraci%C3%B3n%20Gastron%C3%B3mica',
  },
  {
    id: 'experiencias',
    icono: 'Users',
    titulo: 'Experiencias Personalizadas',
    descripcion: 'Team building gastronómico, retiros creativos y encuentros de equipo en Bogotá. Diseñamos la experiencia completa.',
    waText: 'Hola%20Bastardo%2C%20me%20interesa%20una%20Experiencia%20Personalizada',
  },
  {
    id: 'colaboraciones',
    icono: 'Handshake',
    titulo: 'Colaboraciones y Alianzas',
    descripcion: 'Trabajamos con marcas, fotógrafos, medios y creadores de contenido. Propósito compartido, narrativa conjunta.',
    waText: 'Hola%20Bastardo%2C%20me%20interesa%20una%20Colaboraci%C3%B3n%20o%20Alianza',
  },
];

export const WA_NUMBER = '573000000000';
export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}
