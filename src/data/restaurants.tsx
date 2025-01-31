import japanese from '../assets/images/restaurants/japanese.png'
import italian from '../assets/images/restaurants/italian.png'
import mexican from '../assets/images/restaurants/mexican.png'
import brazilian from '../assets/images/restaurants/brazilian.png'
import chinese from '../assets/images/restaurants/chinese.png'
import arabic from '../assets/images/restaurants/arabic.png'

import RestaurantModel from '../models/RestaurantModel'

const Restaurants: RestaurantModel[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: ['Hot', 'Japanese'],
    description:
      'Order the best of Japanese cuisine in the comfort of your home! Fresh sushi, delicious sashimi, and irresistible hot dishes. Fast delivery, carefully packaged, and guaranteed quality. Experience Japan without leaving home with our delivery!',
    image: japanese
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: ['Italian'],
    description:
      'La Dolce Vita Trattoria brings authentic Italian cuisine to you! Enjoy homemade pasta, delicious pizzas, and incredible risottos—all in the comfort of your home. Fast delivery, carefully packaged dishes, and an unforgettable taste.',
    image: italian
  },
  {
    id: 3,
    title: 'El Sabor Mexicano',
    category: ['Mexican'],
    description:
      'Taste of Mexico brings the vibrant flavors of authentic Mexican cuisine straight to your door! Enjoy mouthwatering tacos, sizzling fajitas, and flavorful enchiladas—all made with fresh ingredients and traditional recipes.',
    image: mexican
  },
  {
    id: 4,
    title: 'Sabor do brasil',
    category: ['Hot', 'Brazilian'],
    description:
      'Experience the rich and diverse flavors of Brazilian cuisine! From perfectly grilled picanha and feijoada to crispy coxinhas and refreshing açaí, we bring the true taste of Brazil to your home. Fast delivery, well-packaged dishes, and authentic flavors in every bite.',
    image: brazilian
  },
  {
    id: 5,
    title: 'Golden Dragon',
    category: ['Chinese'],
    description:
      'Golden Dragon delivers the best of Chinese cuisine straight to your door! Enjoy crispy spring rolls, savory dumplings, and flavorful stir-fries, all prepared with fresh ingredients and traditional techniques. Fast delivery, expertly packaged meals, and a taste of China in every bite.',
    image: chinese
  },
  {
    id: 6,
    title: 'Oasis Delights',
    category: ['Arabic'],
    description:
      'Embark on a culinary journey with Oasis Delights! Enjoy authentic Arabic dishes like creamy hummus, tender kebabs, and freshly baked pita bread, all made with rich spices and traditional recipes. Fast delivery, carefully packaged meals, and a taste of the Middle East in every dish.',
    image: arabic
  }
]

export default Restaurants
