class RestaurantModel {
  id: number
  isHot: boolean
  category: string
  title: string
  description: string
  image: string

  constructor(
    id: number,
    isHot: boolean,
    category: string,
    title: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.isHot = isHot
    this.category = category
    this.title = title
    this.description = description
    this.image = image
  }
}

export default RestaurantModel
