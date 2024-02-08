import { Navigate, Outlet } from "react-router-dom";

export function AuthRequires(){
    const isLogged = true
    if (isLogged === false) {
        return <Navigate to={"/login"}/>
    }
    return (
        <Outlet />
    )
}