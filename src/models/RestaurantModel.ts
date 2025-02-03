class RestaurantModel {
  id: number
  isHot: boolean
  category: string
  title: string
  description: string
  image: string
  dishes: object

  constructor(
    id: number,
    isHot: boolean,
    category: string,
    title: string,
    description: string,
    image: string,
    dishes: string[]
  ) {
    this.id = id
    this.isHot = isHot
    this.category = category
    this.title = title
    this.description = description
    this.image = image
    this.dishes = dishes
  }
}

export default RestaurantModel
