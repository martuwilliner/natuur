'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        id: 3,
        name: "Masseube mermelada de cereza negra",
        description: "Este fruto originario de la antigua Grecia cautiva a los ojos con su color intenso y brillante. Es dulce y delicioso y su consistencia carnosa lo convierte en un delicado manjar que se utiliza en muchas elaboraciones culinarias.\r\n\r\nIngredientes: 56% cereza negra, 44% azúcar.",
        categoryId: 1,
        typeId: 3,
        price: 495,
        oferts: true
      },
      {
        id: 4,
        name: "Paisandoo super granola",
        description: "Granola Raw. Elaborada utilizando técnicas de Alimentación Viva. Activada y deshidratada lentamente a baja temperatura, lo cual permite optimizar la absorción de nutrientes y facilitar la digestión.\r\n\r\nIngredientes: almendras orgánicas, nueces orgánicas, brotes de sarraceno orgánico, castañas de cajú, maca peruana orgánica, algarroba blanca orgánica, azúcar de coco orgánica, extracto de vainilla, sal rosa.",
        categoryId: 1,
        typeId: 1,
        price: 1300,
        oferts: true
      },
      {
        id: 5,
        name: "Sueño verde coleslaw",
        description: "Ensalada Coleslaw (repollo blanco, rojo y zanahoria rallada)",
        categoryId: 2,
        typeId: 2,
        price: 220,
        oferts: false
      },
      {
        id: 6,
        name: "Yamani ravioles veganos de verdura",
        description: "Ravioles veganos de harina integral orgánica rellenos de verdura.\r\n\r\n100% Natural. Elaboración artesanal.\r\n\r\nIngredientes: harina integral de trigo candeal orgánico Campo Claro, acelga, salsa blanca (aceite de girasol, leche de caju y harina integral), sal marina, pimienta de cayena y nuez moscada.",
        categoryId: 2,
        typeId: 1,
        price: 510,
        oferts: true
      },
      {
        id: 7,
        name: "Casa vegana toques de lentejas",
        description: "Sin conservantes, ni saborizantes. 100% naturales. Refritos, calentarlos sin aceite.\r\n\r\nIngredientes: Lentejón canadiense, garbanzos, cebolla, harina de trigo, cilantro, ajo, polvo de hornear, sal marina y pimienta.",
        categoryId: 2,
        typeId: 1,
        price: 350,
        oferts: false
      },
      {
        id: 8,
        name: "Linda jabón de carbón activado",
        description: "Un jabón amable en todo sentido. Está hecho con el amor de la metodología artesanal, usando ingredientes nobles y completamente libre de parabenos, conservantes sintéticos y cualquier tipo de perfume artificial.\r\n\r\nEl carbón activado es súper absorbente y un excelente eliminador de toxinas y suciedad, por eso es un jabón ideal para personas con pieles grasas y en tratamiento de acné.",
        categoryId: 3,
        typeId: 1,
        price: 700,
        oferts: true
      },
      {
        id: 10,
        name: "Roller duo cuarzo rosa",
        description: "The secret of Asian beauty: Los asiáticos son uno de nuestros grandes mentores en una enorme variedad de temáticas y las prácticas de belleza es una de ellas. Usá este mini rol para masajear tu piel y darle un brillo natural con las maravillas que carga su piedra.\r\n\r\nEl cuarzo rosa esconde en su belleza minerales que ayudan a disminuir la hinchazón, eliminar toxinas y reafirmar la piel. Si tu gran molestia son las arrugas, elegí esta opción.",
        categoryId: 3,
        typeId: 1,
        price: 4200,
        oferts: false
      },
      {
        id: 11,
        name: "Interface serum hidratante activo",
        description: "Ácido Hialurónico Vegetal 0,5% + Ácido Poligultámico (PGA) 0,1% + Kombucha\r\n\r\nHidrata profundamente desde el interior de la piel. El PGA 100% natural forma una película externa sobre la piel manteniéndola hidratada todo el día. Aporta una dosis potente de péptidos naturales y mejora las condiciones de el microbioma de la piel.\r\n\r\nTextura de gel liviano pensado para todo tipo de piel. ",
        categoryId: 3,
        typeId: 1,
        price: 3700,
        oferts: true
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
