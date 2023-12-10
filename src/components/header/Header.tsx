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
            <div className="menu">
              <button className="menu-btn" onClick={() => setMenu(!menu)}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="toggle">
                  <div
                    className="bars"
                    style={
                      isDarkMode
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "black" }
                    }
                    id="bar1"
                  ></div>
                  <div
                    className="bars"
                    style={
                      isDarkMode
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "black" }
                    }
                    id="bar2"
                  ></div>
                  <div
                    className="bars"
                    style={
                      isDarkMode
                        ? { backgroundColor: "white" }
                        : { backgroundColor: "black" }
                    }
                    id="bar3"
                  ></div>
                </label>
              </button>
            </div>
          </div>
          {/* ///// */}
        </div>
      </div>
    </header>
  );
};

export default Header;
