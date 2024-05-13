
import SignUp from '../../components/sign-up/sign-up';
import SignIn from '../../components/sign-in/sign-in';

import {AuthPageContainer} from './auth.styles';

const Auth = () => {
    return (
    <AuthPageContainer>
        <SignIn />
        <SignUp />
    </AuthPageContainer>
    )
}

export default Auth;