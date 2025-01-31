class RestaurantModel {
  id: number
  category: string[]
  title: string
  description: string
  image: string

  constructor(
    id: number,
    category: string[],
    title: string,
    description: string,
    image: string
  ) {
    this.id = id
    this.category = category
    this.title = title
    this.description = description
    this.image = image
  }
}

export default RestaurantModel
