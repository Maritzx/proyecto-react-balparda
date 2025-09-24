const products = [
  {
    "id": 1,
    "title": "Sofá Modular Gris",
    "img": "/sofa_modular.png",
    "description": "Un sofá modular de tres plazas, tapizado en tela gris de alta calidad. Versátil y cómodo, se adapta a cualquier sala de estar.",
    "price": 899.99,
    "stock": 15,
    "category": "muebles"
  },
  {
    "id": 2,
    "title": "Escritorio de Madera Robusta",
    "img": "escritorio_madera.jpg",
    "description": "Escritorio de diseño moderno fabricado con madera de roble macizo. Ideal para la oficina en casa o el estudio.",
    "price": 350.00,
    "stock": 10,
    "category": "muebles"
  },
  {
    "id": 3,
    "title": "Lámpara de Pie Minimalista",
    "img": "lampara_pie.jpg",
    "description": "Lámpara de pie con un diseño minimalista y elegante. Aporta una luz cálida y ambiental a cualquier rincón.",
    "price": 75.50,
    "stock": 50,
    "category": "muebles"
  },
  {
    "id": 4,
    "title": "Silla Ergonómica de Oficina",
    "img": "silla_oficina.jpg",
    "description": "Silla de oficina con soporte lumbar ajustable, ideal para largas horas de trabajo. Mejora la postura y el confort.",
    "price": 185.75,
    "stock": 25,
    "category": "muebles"
  },
  {
    "id": 5,
    "title": "Smart TV 4K de 55 pulgadas",
    "img": "smart_tv.jpg",
    "description": "Televisor inteligente con resolución 4K Ultra HD y tecnología HDR. Disfruta de una experiencia visual inmersiva.",
    "price": 649.00,
    "stock": 8,
    "category": "tecnologia"
  },
  {
    "id": 6,
    "title": "Laptop Ultra Delgada",
    "img": "laptop_ultradelgada.jpg",
    "description": "Una laptop ligera y potente, perfecta para trabajo y entretenimiento. Procesador de última generación y 16GB de RAM.",
    "price": 1200.00,
    "stock": 12,
    "category": "tecnologia"
  },
  {
    "id": 7,
    "title": "Auriculares Inalámbricos con Cancelación de Ruido",
    "img": "auriculares_noise_cancelling.jpg",
    "description": "Auriculares que ofrecen un sonido nítido y una cancelación de ruido activa para una inmersión total.",
    "price": 199.99,
    "stock": 30,
    "category": "tecnologia"
  },
  {
    "id": 8,
    "title": "Consola de Videojuegos de Última Generación",
    "img": "consola_juegos.jpg",
    "description": "Consola con gráficos de alta fidelidad y un disco SSD ultrarrápido. Incluye un control inalámbrico.",
    "price": 499.00,
    "stock": 5,
    "category": "tecnologia"
  },
  {
    "id": 9,
    "title": "Refrigerador de Doble Puerta",
    "img": "refrigerador.jpg",
    "description": "Refrigerador de gran capacidad con dispensador de agua y hielo. Tecnología No Frost y eficiencia energética.",
    "price": 950.00,
    "stock": 7,
    "category": "electrodomesticos"
  },
  {
    "id": 10,
    "title": "Horno de Microondas Digital",
    "img": "microondas_digital.jpg",
    "description": "Microondas con 1000W de potencia, múltiples programas preestablecidos y panel digital fácil de usar.",
    "price": 120.00,
    "stock": 20,
    "category": "electrodomesticos"
  },
  {
    "id": 11,
    "title": "Cafetera Programable",
    "img": "cafetera_programable.jpg",
    "description": "Cafetera de goteo programable para preparar tu café antes de despertar. Capacidad de 12 tazas.",
    "price": 65.00,
    "stock": 40,
    "category": "electrodomesticos"
  },
  {
    "id": 12,
    "title": "Aspiradora Robot Inteligente",
    "img": "aspiradora_robot.jpg",
    "description": "Aspiradora robot que se conecta a Wi-Fi y se controla desde tu smartphone. Limpia automáticamente tu hogar.",
    "price": 250.00,
    "stock": 18,
    "category": "electrodomesticos"
  },
  {
    "id": 13,
    "title": "Set de Construcción de Ciudad",
    "img": "set_construccion.jpg",
    "description": "Un set de 500 piezas para construir una ciudad completa con vehículos, edificios y personajes. Fomenta la creatividad.",
    "price": 45.99,
    "stock": 60,
    "category": "juguetes"
  },
  {
    "id": 14,
    "title": "Muñeca Articulada de Moda",
    "img": "muneca_moda.jpg",
    "description": "Muñeca con 12 puntos de articulación y ropa de moda intercambiable. Incluye accesorios como zapatos y bolso.",
    "price": 22.50,
    "stock": 80,
    "category": "juguetes"
  },
  {
    "id": 15,
    "title": "Coche de Control Remoto Todoterreno",
    "img": "coche_rc.jpg",
    "description": "Coche a control remoto con tracción en las cuatro ruedas. Ideal para terrenos difíciles y acrobacias.",
    "price": 55.00,
    "stock": 25,
    "category": "juguetes"
  },
  {
    "id": 16,
    "title": "Pista de Tren Eléctrico",
    "img": "pista_tren.jpg",
    "description": "Una pista de tren con locomotora a vapor que emite sonidos reales. Incluye vagones y árboles para el paisaje.",
    "price": 78.90,
    "stock": 15,
    "category": "juguetes"
  },
  {
    "id": 17,
    "title": "Sofá Cama Futón",
    "img": "sofa_futon.jpg",
    "description": "Un sofá cama convertible y versátil. Se transforma de sofá a una cama cómoda para huéspedes en segundos.",
    "price": 299.00,
    "stock": 9,
    "category": "muebles"
  },
  {
    "id": 18,
    "title": "Altavoz Inteligente con Asistente de Voz",
    "img": "altavoz_inteligente.jpg",
    "description": "Altavoz compacto con asistente de voz integrado. Controla la música, las noticias y tus dispositivos inteligentes.",
    "price": 49.99,
    "stock": 50,
    "category": "tecnologia"
  },
  {
    "id": 19,
    "title": "Licuadora de Alta Potencia",
    "img": "licuadora.jpg",
    "description": "Licuadora con motor de alta potencia para triturar hielo y frutas congeladas. Vaso de vidrio resistente.",
    "price": 85.00,
    "stock": 35,
    "category": "electrodomesticos"
  },
  {
    "id": 20,
    "title": "Rompecabezas 3D de Monumentos",
    "img": "rompecabezas_3d.jpg",
    "description": "Rompecabezas en 3D para armar réplicas de monumentos famosos. Desarrolla la motricidad fina y la paciencia.",
    "price": 15.99,
    "stock": 70,
    "category": "juguetes"
  }
]

export default products