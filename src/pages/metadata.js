import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';


const pageMetadata = {
    home: {
        path: '/',
        component: () => Home,
    },
    signup: {
        path: '/join',
        component: () => SignUp,
    },
    signin: {
        path: '/login',
        component: () => SignIn,
    },
    dashboard: {
        path: '/dashboard',
        component: () => Dashboard,
    }
};

export default pageMetadata;