const base = import.meta.env.BASE_URL;

const cursos = [
  {


      
/////////////////////////  DIBUJO PINTURA   ////////////////////////

    id: "dibujo-pintura",
    titulo: "Curso de Dibujo",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"
    ],

    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    // banner de la página del curso
    imagen: `${base}imagenes/cursos/dibujo-pintura/banner-dibujo-pintura.png`,

    // imagen que se usa en el catálogo
    imagenCatalogo: `${base}imagenes/cursos/dibujo-pintura/curso-dibujo-pintura.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Laura Touriño",

    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],

    imagenProfesor: `${base}imagenes/cursos/dibujo-pintura/laura.jpg`,

    galeria: [
      `${base}imagenes/cursos/dibujo-pintura/muestra-1.jpg`,
      `${base}imagenes/cursos/dibujo-pintura/muestra-2.jpg`,
      `${base}imagenes/cursos/dibujo-pintura/muestra-3.jpg`,
      `${base}imagenes/cursos/dibujo-pintura/muestra-4.jpg`
    ]
  },






/////////////////////////  PINTURA OLEO   ////////////////////////

  {
    id: "pintura-oleo",
    titulo: "Curso de Pintura",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"
    ],

    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/pintura/banner-pintura.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/pintura-oleo/curso-pintura-oleo.jpg`,

    nivel: "Intermedio",

    nombreProfesor: "Laura Touriño",

    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],

    imagenProfesor: `${base}imagenes/profesores/laura_tourino.jpg`,

    galeria: [
      `${base}imagenes/cursos/pintura/muestra-1.jpg`,
      `${base}imagenes/cursos/pintura/muestra-2.jpg`,
      `${base}imagenes/cursos/pintura/muestra-3.jpg`,
      `${base}imagenes/cursos/pintura/muestra-4.jpg`
    ]
  },







  
/////////////////////////  PIANO   ////////////////////////

  {
    id: "piano",
    titulo: "Curso de Piano",
    subTitulo: "Aprende los fundamentos del piano",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Lectura musical",
      "Técnica básica",
      "Interpretación"
    ],

    dias: "Martes",
    horario: "18 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/piano/banner-piano.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/piano/curso-piano.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Belén Salinas",

    descripcionProfesor: [
      "Pianista profesional",
      "10 años de experiencia docente"
    ],

    imagenProfesor: `${base}imagenes/profesores/belen_salinas.jpg`,

    galeria: [
      `${base}imagenes/cursos/piano/muestra-1.jpg`,
      `${base}imagenes/cursos/piano/muestra-2.jpg`,
      `${base}imagenes/cursos/piano/muestra-3.jpg`,
      `${base}imagenes/cursos/piano/muestra-4.jpg`
    ]
  },









  
/////////////////////////  PINTURA CANTO   ////////////////////////

  {
    id: "canto",
    titulo: "Curso de Canto",
    subTitulo: "Técnica vocal y expresión",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Respiración",
      "Afinación",
      "Interpretación"
    ],

    dias: "Miércoles",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/canto/banner-canto.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/canto/curso-canto.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Andrés De Angelis",

    descripcionProfesor: [
      "Cantante profesional",
      "Docente de técnica vocal"
    ],

    imagenProfesor: `${base}imagenes/profesores/andres_de_angelis.jpg`,

    galeria: [
      `${base}imagenes/cursos/canto/muestra-1.jpg`,
      `${base}imagenes/cursos/canto/muestra-2.jpg`,
      `${base}imagenes/cursos/canto/muestra-3.jpg`,
      `${base}imagenes/cursos/canto/muestra-4.jpg`
    ]
  },








    
/////////////////////////  M A N G A   ////////////////////////

  {
    id: "manga",
    titulo: "Curso de Canto",
    subTitulo: "Técnica vocal y expresión",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Respiración",
      "Afinación",
      "Interpretación"
    ],

    dias: "Miércoles",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/canto/banner-canto.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/manga/curso-manga.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Andrés De Angelis",

    descripcionProfesor: [
      "Cantante profesional",
      "Docente de técnica vocal"
    ],

    imagenProfesor: `${base}imagenes/profesores/andres_de_angelis.jpg`,

    galeria: [
      `${base}imagenes/cursos/canto/muestra-1.jpg`,
      `${base}imagenes/cursos/canto/muestra-2.jpg`,
      `${base}imagenes/cursos/canto/muestra-3.jpg`,
      `${base}imagenes/cursos/canto/muestra-4.jpg`
    ]
  },








  
/////////////////////////  PINTURA TALLER PARA NIÑOS   ////////////////////////

  {
    id: "taller-ninos",
    titulo: "Curso de Canto",
    subTitulo: "Técnica vocal y expresión",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Respiración",
      "Afinación",
      "Interpretación"
    ],

    dias: "Miércoles",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/canto/banner-canto.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/taller-ninos/curso-taller-ninos.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Andrés De Angelis",

    descripcionProfesor: [
      "Cantante profesional",
      "Docente de técnica vocal"
    ],

    imagenProfesor: `${base}imagenes/profesores/andres_de_angelis.jpg`,

    galeria: [
      `${base}imagenes/cursos/canto/muestra-1.jpg`,
      `${base}imagenes/cursos/canto/muestra-2.jpg`,
      `${base}imagenes/cursos/canto/muestra-3.jpg`,
      `${base}imagenes/cursos/canto/muestra-4.jpg`
    ]
  },






    
/////////////////////////  Y  O  G  A   ////////////////////////

  {
    id: "yoga",
    titulo: "Curso de Canto",
    subTitulo: "Técnica vocal y expresión",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Respiración",
      "Afinación",
      "Interpretación"
    ],

    dias: "Miércoles",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/canto/banner-canto.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/yoga/curso-yoga.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Andrés De Angelis",

    descripcionProfesor: [
      "Cantante profesional",
      "Docente de técnica vocal"
    ],

    imagenProfesor: `${base}imagenes/profesores/andres_de_angelis.jpg`,

    galeria: [
      `${base}imagenes/cursos/canto/muestra-1.jpg`,
      `${base}imagenes/cursos/canto/muestra-2.jpg`,
      `${base}imagenes/cursos/canto/muestra-3.jpg`,
      `${base}imagenes/cursos/canto/muestra-4.jpg`
    ]
  },









    
/////////////////////////  PINTURA URGANO FUSION   ////////////////////////

  {
    id: "urbano-fusion ",
    titulo: "Curso de Canto",
    subTitulo: "Técnica vocal y expresión",
    descripcion: "Aqui va la descripcion del curso, orientación y demás.",

    programa: [
      "Respiración",
      "Afinación",
      "Interpretación"
    ],

    dias: "Miércoles",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${base}imagenes/cursos/canto/banner-canto.jpg`,
    imagenCatalogo: `${base}imagenes/cursos/urbano-fusion/curso-urbano-fusion.jpg`,

    nivel: "Principiante",

    nombreProfesor: "Andrés De Angelis",

    descripcionProfesor: [
      "Cantante profesional",
      "Docente de técnica vocal"
    ],

    imagenProfesor: `${base}imagenes/profesores/andres_de_angelis.jpg`,

    galeria: [
      `${base}imagenes/cursos/canto/muestra-1.jpg`,
      `${base}imagenes/cursos/canto/muestra-2.jpg`,
      `${base}imagenes/cursos/canto/muestra-3.jpg`,
      `${base}imagenes/cursos/canto/muestra-4.jpg`
    ]
  }
]

export default cursos;