import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blogs from "../Pages/Blogs/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
        ]
    }
]);

export default router;