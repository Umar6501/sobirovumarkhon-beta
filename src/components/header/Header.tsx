import { useState } from "react";
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
  console.log(menu);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const currentTheme: Theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <header
      style={{
        background: currentTheme.background,
        color: currentTheme.color,
        transition: "background-color 0.3s, color 0.3s",
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
            <div
              className="menu-list"
              style={menu ? { right: "0%" } : { right: "-100%" }}
            >
              <p
                className="menu-list-text"
                style={
                  isDarkMode
                    ? { color: "white", backgroundColor: "black" }
                    : { color: "black", backgroundColor: "white" }
                }
              >
                menu list
              </p>
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
            <div className="menu-list-left-bg"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
