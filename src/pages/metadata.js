import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import NoFound from './NoFound';

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
    },
    nofound: {
        path: '*',
        component: () => NoFound,
    }
};

export default pageMetadata;