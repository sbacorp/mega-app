import Home from "../pages/Home";
import About from "../pages/About";
import Info from "../pages/Info";
import Reviews from "../pages/Reviews";

export const Routes = [
    {path: '/about', component: About, exact: true},
    {path: '/home', component: Home, exact: true},
    {path: '/info', component: Info, exact: true},
	{path: '/reviews', component: Reviews, exact: true},
]