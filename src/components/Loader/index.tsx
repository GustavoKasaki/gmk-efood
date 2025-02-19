import { ClockLoader } from 'react-spinners'

import { Container } from './styles'
import { Colors } from '../../styles'

const Loader = () => (
  <Container>
    <ClockLoader color={Colors.amaranth} />
  </Container>
)

export default Loader
