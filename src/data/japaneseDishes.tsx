import sushi from '../assets/images/dishes/jp-sushi.png'
import ramen from '../assets/images/dishes/jp-ramen.png'
import tempura from '../assets/images/dishes/jp-tempura.png'
import takoyaki from '../assets/images/dishes/jp-takoyaki.png'
import okonomiyaki from '../assets/images/dishes/jp-okonomiyaki.png'
import mochi from '../assets/images/dishes/jp-mochi.png'
import Dishes from '../models/Dishes'

const japaneseDishes: Dishes[] = [
  {
    id: 1,
    title: 'Sushi',
    description:
      'A traditional Japanese dish consisting of vinegared rice, seafood, and vegetables, often wrapped in seaweed.',
    image: sushi
  },
  {
    id: 2,
    title: 'Ramen',
    description:
      'A flavorful noodle soup with a rich broth, topped with sliced pork, green onions, seaweed, and a soft-boiled egg.',
    image: ramen
  },
  {
    id: 3,
    title: 'Tempura',
    description:
      'Lightly battered and deep-fried seafood or vegetables, served with a dipping sauce.',
    image: tempura
  },
  {
    id: 4,
    title: 'Takoyaki',
    description:
      'Ball-shaped snacks made of wheat flour batter, filled with octopus, and topped with takoyaki sauce and bonito flakes.',
    image: takoyaki
  },
  {
    id: 5,
    title: 'Okonomiyaki',
    description:
      'A savory Japanese pancake made with cabbage, flour, eggs, and various toppings like seafood or pork.',
    image: okonomiyaki
  },
  {
    id: 6,
    title: 'Matcha Mochi',
    description:
      'A chewy rice cake with a sweet matcha-flavored filling, often enjoyed as a dessert.',
    image: mochi
  }
]

export default japaneseDishes
