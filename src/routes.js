import React from "react";
import {
    Navigate,
    useLocation
} from "react-router-dom";

function PrivateRoute({ children }) {
    const tokenAuth = localStorage.getItem('tokenAuth')
    const location = useLocation()

    if (!tokenAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <>{children}</>
    );
}

export {
    PrivateRoute
}