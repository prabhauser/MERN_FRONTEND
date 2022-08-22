import React from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';
import { getFromLocalStorage } from '../../utilities/storage/storageUtility';
import PermissionsContext from '../context/PermissionsContext';

interface PrivateRouteProps extends RouteProps {
    component: React.FC<RouteProps>;
    path: string;
}

export default function PrivateRoute({ component: Component, path, ...rest }: PrivateRouteProps) {
    const accessToken = getFromLocalStorage('token');
    const userData = getFromLocalStorage('userData');
    return (
        <PermissionsContext.Provider value={userData}>
            <Route
                {...rest}
                path={path}
                render={(props: any) =>
                    accessToken && accessToken !== '' ? <Component {...props} /> : <Redirect to="/" />
                }
            />
        </PermissionsContext.Provider>
    );
}
