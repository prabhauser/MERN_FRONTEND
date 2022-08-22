import { Switch, Route, Redirect } from 'react-router-dom';
import { paths } from '../constants/paths';
import Login from '../features/Login';

const ProtectedRoutes = () => {
    return (
        <Switch>
            <Route exact path={paths.LOGIN.path} component={Login} />
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
};

export default ProtectedRoutes;
