import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import NoFound from './NoFound';

const NAME_SPACE = 'Challenge Zup';

const pageMetadata = {
    baseurl: "https://darkziul.github.io",
    home: {
        title: `Home - ${NAME_SPACE}`,
        path: '/',
        component: () => Home,
    },
    signup: {
        title: `Join - ${NAME_SPACE}`,
        path: '/join',
        component: () => SignUp,
    },
    signin: {
        title: `Login - ${NAME_SPACE}`,
        path: '/login',
        component: () => SignIn,
    },
    dashboard: {
        title: `My supermarket list - ${NAME_SPACE}`,
        path: '/dashboard',
        component: () => Dashboard,
    },
    nofound: {
        title: `Page not found - ${NAME_SPACE}`,
        path: '*',
        component: () => NoFound,
    }
};

export default pageMetadata;