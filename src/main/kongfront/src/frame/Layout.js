import { Outlet } from "react-router-dom";

import Header from '../frame/Header';
import Menu from '../frame/Menu';

const Layout = () => (
    <>
        <Menu />
        <Header />
        <Outlet />
    </>
);

export default Layout;