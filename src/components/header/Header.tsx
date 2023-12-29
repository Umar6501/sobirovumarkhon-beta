import { useEffect, useState } from "react";
import "./Header.scss";

interface Theme {
  background: string;
  color: string;
}

interface Props {
  // Добавьте любые пропсы, которые могут быть использованы в Header
}

const darkTheme: Theme = {
  background: "rgba(0, 0, 0)",
  color: "#ffffff",
};

const lightTheme: Theme = {
  background: "#c3c3c3",
  color: "#000000",
};

const Header: React.FC<Props> = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  // const [close, setClose] = useState<boolean>(false);
  // const [language, setLanguage] = useState<boolean>(false);
  // const [language2, setLanguage2] = useState<boolean>(true);
  // const [language3, setLanguage3] = useState<boolean>(false);
  console.log(menu);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const currentTheme: Theme = isDarkMode ? darkTheme : lightTheme;
  ////

  useEffect(() => {
    const handleScroll = () => {
      if (menu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);
  ////
  return (
    <header
      style={{
        background: currentTheme.background,
        color: currentTheme.color,
        // transition: "background-color 0.1s, color 0.1s",
      }}
    >
      <div className="container">
        <div className="header-cont">
          <div className="navbar">
            <div className="logo">
              <div className="sub-logo">
                <h4>© code by umar</h4>
              </div>
            </div>
            <div className="nav-link">
              <button className={isDarkMode ? "links links2" : "links links1"}>
                projects
              </button>
              <button className={isDarkMode ? "links links2" : "links links1"}>
                about
              </button>
              <button className={isDarkMode ? "links links2" : "links links1"}>
                contact
              </button>
              {/* dark mode */}
              <label
                htmlFor="theme"
                className={`theme ${isDarkMode ? "dark-mode" : "light-mode"}`}
              >
                <span className="theme__toggle-wrap">
                  <input
                    id="theme"
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    value="dark"
                    checked={isDarkMode}
                    onChange={toggleTheme}
                  />
                  <span className="theme__fill"></span>
                  <span className="theme__icon">
                    {[...Array(9)].map((_, index) => (
                      <span key={index} className="theme__icon-part"></span>
                    ))}
                  </span>
                </span>
              </label>
            </div>
            {/* toogle menu */}
            <div className="menu">
              <button className="menu-btn">
                <label className="hamburger">
                  <input
                    className="menu-input"
                    type="checkbox"
                    onClick={() => setMenu(!menu)}
                  />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      style={
                        isDarkMode ? { stroke: "white" } : { stroke: "black" }
                      }
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    ></path>
                    <path
                      className="line"
                      style={
                        isDarkMode ? { stroke: "white" } : { stroke: "black" }
                      }
                      d="M7 16 27 16"
                    ></path>
                  </svg>
                </label>
              </button>
            </div>
            <div className="menu-bg"></div>
            {/* menu list */}
            <div className="menu-list">
              <div
                className="bien-glass"
                style={
                  menu
                    ? {
                        backdropFilter: "blur(9px)",
                        transition: "all 0.2s ease-out",
                      }
                    : {
                        backdropFilter: "blur(0px)",
                        transition: "all 0.4s ease",
                      }
                }
              ></div>
              <div className="bien-glass2"></div>

              <p
                className={isDarkMode ? "menu-list-text" : "menu-list-text"}
                style={
                  menu
                    ? {
                        transform: "scale(1)",
                        color: "white",
                        transition: "0.4s",
                      }
                    : {
                        transform: "scale(0.0000001) translateX(-400px)",
                        color: "transparent",
                        transition: "0.4s",
                      }
                }
              >
                menu list
              </p>
              <div className="menu-grid">
                <button
                  className="links"
                  style={
                    menu
                      ? { transform: "translateX(0px)" }
                      : { transform: "translateX(-180px)" }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={isDarkMode ? { fill: "white" } : { fill: "black" }}
                    // style={{ fill: "red" }}
                  >
                    <path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"></path>
                  </svg>
                  <p
                    style={isDarkMode ? { color: "white" } : { color: "black" }}
                  >
                    Project
                  </p>
                </button>
                <button
                  className="links"
                  style={
                    menu
                      ? { transform: "translateX(0px)" }
                      : {
                          transform: "translateX(180px)",
                        }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={isDarkMode ? { fill: "white" } : { fill: "black" }}
                  >
                    <path d="M6 22h13a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1zm6-17.001c1.647 0 3 1.351 3 3C15 9.647 13.647 11 12 11S9 9.647 9 7.999c0-1.649 1.353-3 3-3zM6 17.25c0-2.219 2.705-4.5 6-4.5s6 2.281 6 4.5V18H6v-.75z"></path>
                  </svg>
                  <p
                    style={
                      menu
                        ? { color: "black" }
                        : { color: "transparent", transition: "0.5s" }
                    }
                  >
                    About
                  </p>
                </button>
                <button
                  className={menu ? "links l3" : "links l4"}
                  style={
                    menu
                      ? { transform: "translateY(0px)" }
                      : {
                          transform: "translateY(-112px)",
                          backgroundColor: "transparent",
                        }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={menu ? { fill: "black" } : { fill: "transparent" }}
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                  <p
                    style={menu ? { color: "black" } : { color: "transparent" }}
                  >
                    Contact
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
