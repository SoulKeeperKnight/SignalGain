import page from './page'
import { connectAuth } from '../../../reducer/modules'
export default connectAuth()(page)