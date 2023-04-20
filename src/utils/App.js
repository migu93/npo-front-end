import React from 'react';
import { ThemeProvider } from '@mui/material';
import darkTheme from '../Components/darkTheme';
import NavMenu from '../Components/NavMenu';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer';
import routes from './routes';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <NavMenu />
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
