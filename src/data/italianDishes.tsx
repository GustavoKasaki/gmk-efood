import pizza from '../assets/images/dishes/it-pizza.png'
import lasagna from '../assets/images/dishes/it-lasagna.png'
import risotto from '../assets/images/dishes/it-risotto.png'
import tiramisu from '../assets/images/dishes/it-tiramisu.png'
import carbonara from '../assets/images/dishes/it-carbonara.png'
import bruschetta from '../assets/images/dishes/it-bruschetta.png'
import Dishes from '../models/Dishes'

const italianDishes: Dishes[] = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description:
      'A classic Italian pizza topped with tomato sauce, fresh mozzarella, basil, and olive oil.',
    image: pizza
  },
  {
    id: 2,
    title: 'Lasagna',
    description:
      'Layered pasta with rich meat sauce, béchamel, and cheese, baked to perfection.',
    image: lasagna
  },
  {
    id: 3,
    title: 'Risotto',
    description:
      'A creamy rice dish cooked slowly with broth, often featuring mushrooms, seafood, or saffron.',
    image: risotto
  },
  {
    id: 4,
    title: 'Tiramisu',
    description:
      'A famous Italian dessert made with coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.',
    image: tiramisu
  },
  {
    id: 5,
    title: 'Carbonara',
    description:
      'A pasta dish made with eggs, cheese, pancetta, and black pepper, creating a creamy and flavorful sauce.',
    image: carbonara
  },
  {
    id: 6,
    title: 'Bruschetta',
    description:
      'Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.',
    image: bruschetta
  }
]

export default italianDishes
