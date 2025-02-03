import hummus from '../assets/images/dishes/ar-hummus.png'
import shawarma from '../assets/images/dishes/ar-shawarma.png'
import falafel from '../assets/images/dishes/ar-falafel.png'
import tabbouleh from '../assets/images/dishes/ar-tabbouleh.png'
import baklava from '../assets/images/dishes/ar-baklava.png'
import mansaf from '../assets/images/dishes/ar-mansaf.png'
import Dishes from '../models/Dishes'

const arabicDishes: Dishes[] = [
  {
    id: 1,
    title: 'Hummus',
    description:
      'A smooth dip made from blended chickpeas, tahini, olive oil, lemon juice, and garlic.',
    image: hummus
  },
  {
    id: 2,
    title: 'Shawarma',
    description:
      'Slow-roasted marinated meat, sliced and served in pita bread with vegetables and garlic sauce.',
    image: shawarma
  },
  {
    id: 3,
    title: 'Falafel',
    description:
      'Deep-fried balls made from ground chickpeas or fava beans, served in pita with tahini sauce.',
    image: falafel
  },
  {
    id: 4,
    title: 'Tabbouleh',
    description:
      'A fresh salad made with parsley, tomatoes, bulgur, lemon juice, and olive oil.',
    image: tabbouleh
  },
  {
    id: 5,
    title: 'Baklava',
    description:
      'A sweet pastry made of layers of phyllo dough, filled with nuts, and soaked in honey or syrup.',
    image: baklava
  },
  {
    id: 6,
    title: 'Mansaf',
    description:
      'A traditional Jordanian dish made with lamb cooked in a yogurt sauce and served over rice.',
    image: mansaf
  }
]

export default arabicDishes
