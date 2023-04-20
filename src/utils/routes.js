import React from 'react';
import MainPage from '../Pages/MainPage';
import AboutUsPage from '../Pages/AboutUsPage';
import ContactsPage from '../Pages/ContactsPage';
import LicensesPage from '../Pages/LicensesPage';
import OurWorksPage from '../Pages/OurWorksPage';
import ProjectsPage from '../Pages/ProjectsPage';
import AutomaticScanningPost from '../Components/MainPageConponents/Blog_automatic_scanning/AutomaticScanningPost';
import { Route, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about-us',
        element: <AboutUsPage />,
    },
    {
        path: '/contacts',
        element: <ContactsPage />,
    },
    {
        path: '/customers',
        element: <ContactsPage />,
    },
    {
        path: '/license',
        element: <LicensesPage />,
    },
    {
        path: '/our-works',
        element: <OurWorksPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/blog-automatic-scanning',
        element: <AutomaticScanningPost />,
    },
    {
        path: '/blog-aerial-photography',
        element: <AutomaticScanningPost />,
    },
    {
        path: '/blog-laser-scanning',
        element: <AutomaticScanningPost />,
    },
    {
        path: '/base-stations',
        element: <AutomaticScanningPost />,
    },
];

export default routes;
