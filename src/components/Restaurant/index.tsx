import japanese from '../../assets/images/japanese.png'
import star from '../../assets/images/star.png'
import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardTitle
} from './styles'

const Restaurant = () => (
  <Card>
    <img src={japanese} alt="japanese" />
    <CardContent>
      <CardTitle>
        <p>Restaurant name</p>
        <div className="rating">
          <p>4,9</p>
          <img src={star} alt="star" />
        </div>
      </CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        deserunt aliquid voluptatum ipsam consequatur placeat autem assumenda
        vero porro commodi. Animi officia temporibus ullam rem voluptate neque
        adipisci, pariatur quaerat?
      </CardDescription>
      <CardButton href="#">Learn more</CardButton>
    </CardContent>
  </Card>
)

export default Restaurant
