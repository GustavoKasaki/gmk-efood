import pork from '../assets/images/dishes/cn-pork.png'
import duck from '../assets/images/dishes/cn-duck.png'
import dimsum from '../assets/images/dishes/cn-dimsum.png'
import kungpao from '../assets/images/dishes/cn-kungpao.png'
import chowmein from '../assets/images/dishes/cn-chowmein.png'
import mooncake from '../assets/images/dishes/cn-mooncake.png'
import Dishes from '../models/Dishes'

const chineseDishes: Dishes[] = [
  {
    id: 1,
    title: 'Sweet and Sour Pork',
    description:
      'Crispy pork pieces coated in a tangy and sweet sauce with bell peppers and pineapple.',
    image: pork
  },
  {
    id: 2,
    title: 'Peking Duck',
    description:
      'A famous dish featuring crispy duck skin served with thin pancakes, hoisin sauce, and scallions.',
    image: duck
  },
  {
    id: 3,
    title: 'Dim Sum',
    description:
      'A variety of bite-sized dumplings and buns, often served in bamboo steamers.',
    image: dimsum
  },
  {
    id: 4,
    title: 'Kung Pao Chicken',
    description:
      'A spicy stir-fry made with chicken, peanuts, chili peppers, and a savory sauce.',
    image: kungpao
  },
  {
    id: 5,
    title: 'Chow Mein',
    description:
      'Stir-fried noodles with vegetables and a choice of meat, coated in a flavorful sauce.',
    image: chowmein
  },
  {
    id: 6,
    title: 'Mooncake',
    description:
      'A traditional pastry filled with sweet bean paste or salted egg yolk, often eaten during the Mid-Autumn Festival.',
    image: mooncake
  }
]

export default chineseDishes
