import tacos from '../assets/images/dishes/mx-tacos.png'
import guacamole from '../assets/images/dishes/mx-guacamole.png'
import chiles from '../assets/images/dishes/mx-chiles.png'
import tamales from '../assets/images/dishes/mx-tamales.png'
import enchiladas from '../assets/images/dishes/mx-enchiladas.png'
import churros from '../assets/images/dishes/mx-churros.png'
import Dishes from '../models/Dishes'

const mexicanDishes: Dishes[] = [
  {
    id: 1,
    title: 'Tacos',
    description:
      'Corn tortillas filled with various meats, vegetables, and topped with salsa and fresh lime.',
    image: tacos
  },
  {
    id: 2,
    title: 'Guacamole',
    description:
      'A creamy dip made with mashed avocado, lime juice, tomatoes, onions, and cilantro.',
    image: guacamole
  },
  {
    id: 3,
    title: 'Chiles Rellenos',
    description:
      'Poblano peppers stuffed with cheese or meat, battered, and fried, served with tomato sauce.',
    image: chiles
  },
  {
    id: 4,
    title: 'Tamales',
    description:
      'Masa dough filled with meats, cheese, or vegetables, wrapped in corn husks and steamed.',
    image: tamales
  },
  {
    id: 5,
    title: 'Enchiladas',
    description:
      'Rolled tortillas filled with meat or cheese, covered in chili sauce and baked.',
    image: enchiladas
  },
  {
    id: 6,
    title: 'Churros',
    description:
      'Deep-fried dough pastries, crispy on the outside and soft inside, sprinkled with cinnamon sugar and served with chocolate sauce.',
    image: churros
  }
]

export default mexicanDishes
