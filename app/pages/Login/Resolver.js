import { withGuestGuard } from 'hocs';
import LoginContainer from './LoginContainer';

export default withGuestGuard()(LoginContainer);
