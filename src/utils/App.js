import React from 'react';
import {ThemeProvider} from "@mui/material";
import darkTheme from "../Components/darkTheme";
import NavMenu from "../Components/NavMenu";
import { Route, Routes} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactsPage from "../Pages/ContactsPage";
import LicensesPage from "../Pages/LicensesPage";
import OurWorksPage from "../Pages/OurWorksPage";
import ProjectsPage from "../Pages/ProjectsPage";
import Footer from "../Components/Footer";

function App () {
    return (
        <ThemeProvider theme={darkTheme}>
            <NavMenu/>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/about-us" element={<AboutUsPage />}></Route>
                <Route path="/contacts" element={<ContactsPage />}></Route>
                <Route path="/customers" element={<ContactsPage />}></Route>
                <Route path="/license" element={<LicensesPage />}></Route>
                <Route path="/our-works" element={<OurWorksPage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
            </Routes>
            <Footer/>
        </ThemeProvider>
    );
}

export default App
