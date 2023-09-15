import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import Navbar from "components/Navbar/Navbar";
import Landing from "section/Landing/Landing";
import About from "section/About/About";
import Hobby from "section/Hobby/Hobby";
import Skills from "section/Skills/Skills";
import Portfolio from "section/Portfolio/Portfolio";
import Contact from "section/Contact/Contact";
import Footer from "components/Footer/Footer";
import NavProvider from "components/Navbar/NavContext";

import "styles/pages/_homepage.scss";

export const ThemeContext = createContext(null);

const HomePage = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="page" id={theme}>
                <NavProvider>
                    <Navbar />
                    <div className="switch">
                        <ReactSwitch
                            onChange={toggleTheme}
                            offColor="#FFFFFF"
                            onColor="#2D2D2D"
                            offHandleColor="#2D2D2D"
                            onHandleColor="#32CD32"
                            checked={theme === "light"}
                            checkedIcon={false}
                            uncheckedIcon={false}
                        />
                    </div>
                    <Landing />
                    <About />
                    <Hobby />
                    <Skills />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </NavProvider>
            </div>
        </ThemeContext.Provider>
    );
};

export default HomePage;
