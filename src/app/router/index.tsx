import { HashRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import './index.scss';

const Router = () => {
    return (
        <HashRouter basename="/">
            <ProtectedRoutes />
        </HashRouter>
    );
};

export default Router;
