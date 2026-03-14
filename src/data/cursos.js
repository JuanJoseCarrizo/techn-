const cursos = [
  {
    id: "dibujo-pintura",
    titulo: "Curso de Dibujo",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descrion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"
    ],

    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/banner-dibujo-pintura.png`,

    nivel: "Principiante",

    nombreProfesor: "Laura Touriño",
    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],


    imagenProfesor: `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/laura.jpg`,

    galeria: [
      `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/muestra-1.jpg`,
      `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/muestra-2.jpg`,
      `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/muestra-3.jpg`,
      `${import.meta.env.BASE_URL}imagenes/cursos/dibujo-pintura/muestra-4.jpg`,
    ]
  },

  /////////////////////////////////////////////////////////////////////////////////

  {
    id: "pintura-oleo",
    titulo: "Curso de Pintura",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descrion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"

    ],





    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",


    imagen: "/imagenes/cursos/pintura.jpg",
    nivel: "Intermedio",



    nombreProfesor: "Laura Touriño",
    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],


    imagenProfesor: "/imagenes/profesores/laura_touriño.jpg",

    galeria: [
      "/imagenes/galeria/dibujo1.jpg",
      "/imagenes/galeria/dibujo2.jpg",
      "/imagenes/galeria/dibujo3.jpg",
      "/imagenes/galeria/dibujo4.jpg"
    ]
  },

  /////////////////////////////////////////////////////////////////////////////////


  {
    id: "piano",
    titulo: "Curso de Piano",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descrion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"

    ],


    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: "/imagenes/cursos/piano.jpg",
    nivel: "Principiante",

    nombreProfesor: "Laura Touriño",
    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],

    imagenProfesor: "/imagenes/profesores/belen_salinas.jpg",

    galeria: [
      "/imagenes/galeria/dibujo1.jpg",
      "/imagenes/galeria/dibujo2.jpg",
      "/imagenes/galeria/dibujo3.jpg",
      "/imagenes/galeria/dibujo4.jpg"
    ]
  },

  /////////////////////////////////////////////////////////////////////////////////


  {
    id: "canto",
    titulo: "Curso de Canto",
    subTitulo: "Aprende los fundamentos de dibujo y pintura",
    descripcion: "Aqui va la descrion del curso, orientación y demás.",

    programa: [
      "Objetivo numero 1",
      "Objetivo numero 2",
      "Objetivo numero 3",
      "Objetivo numero 4"

    ],

    dias: "Lunes a Sábados",
    horario: "19 hs",
    modalidad: "Una clase por semana",

    imagen: "/imagenes/cursos/canto.jpg",
    nivel: "Principiante",

    nombreProfesor: "Laura Touriño",
    descripcionProfesor: [
      "Licenciada en artes",
      "Más de 10 años de experiencia enseñando"
    ],

    imagenProfesor: "/imagenes/profesores/andres_de_angelis.jpg",

    galeria: [
      "/imagenes/galeria/dibujo1.jpg",
      "/imagenes/galeria/dibujo2.jpg",
      "/imagenes/galeria/dibujo3.jpg",
      "/imagenes/galeria/dibujo4.jpg"
    ]
  }
]

export default cursos;