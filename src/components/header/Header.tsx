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
  const [close, setClose] = useState<boolean>(false);
  const [language, setLanguage] = useState<boolean>(false);
  const [language2, setLanguage2] = useState<boolean>(true);
  const [language3, setLanguage3] = useState<boolean>(false);
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
              style={
                menu
                  ? isDarkMode
                    ? { right: "0%", backgroundColor: "#1c1c1c" }
                    : { right: "0%", backgroundColor: "rgb(250, 250, 250)" }
                  : {
                      right: "-100%",
                      borderTopLeftRadius: "52%",
                      borderBottomLeftRadius: "52%",
                    }
              }
            >
              <p
                className={
                  isDarkMode ? "menu-list-text nn1" : "menu-list-text nn2"
                }
                style={
                  isDarkMode
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                menu list
              </p>
              <div className="menu-grid">
                <button
                  className="links"
                  style={
                    isDarkMode
                      ? { backgroundColor: "#505050" }
                      : { backgroundColor: "white" }
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
                    isDarkMode
                      ? { backgroundColor: "#505050" }
                      : { backgroundColor: "white" }
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
                    style={isDarkMode ? { color: "white" } : { color: "black" }}
                  >
                    About
                  </p>
                </button>
                <button
                  className="links"
                  style={
                    isDarkMode
                      ? { backgroundColor: "#505050" }
                      : { backgroundColor: "white" }
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={isDarkMode ? { fill: "white" } : { fill: "black" }}
                  >
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                  <p
                    style={isDarkMode ? { color: "white" } : { color: "black" }}
                  >
                    Contact
                  </p>
                </button>
                {/* dark mode */}
                <button
                  className="settings-menu"
                  onClick={() => {
                    setClose(!close);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={
                      isDarkMode
                        ? close
                          ? { fill: "white", transform: "rotate(90deg)" }
                          : { fill: "white" }
                        : close
                        ? { fill: "black", transform: "rotate(90deg)" }
                        : { fill: "black" }
                    }
                  >
                    <path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z"></path>
                    <path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z"></path>
                  </svg>
                </button>
                {/* settings menu */}
                <div
                  className={
                    close ? "sub-settings-menu n1" : "sub-settings-menu n2"
                  }
                  style={
                    isDarkMode
                      ? { backgroundColor: "#505050" }
                      : { backgroundColor: "#fff" }
                  }
                >
                  <div className="dark-mode-div">
                    <p
                      onClick={() => setDarkMode(false)}
                      style={
                        isDarkMode
                          ? {
                              transition: "0.4s",
                              color: "gray",
                            }
                          : {
                              transition: "0.4s",
                              color: "white",
                            }
                      }
                    >
                      Light
                    </p>
                    <label
                      htmlFor="theme"
                      className={`theme ${
                        isDarkMode ? "dark-mode" : "light-mode"
                      }`}
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
                            <span
                              key={index}
                              className="theme__icon-part"
                            ></span>
                          ))}
                        </span>
                      </span>
                    </label>
                    <p
                      onClick={() => setDarkMode(true)}
                      style={
                        isDarkMode
                          ? {
                              transition: "0.4s",
                              color: "white",
                            }
                          : {
                              transition: "0.4s",
                              color: "gray",
                            }
                      }
                    >
                      Dark
                    </p>
                  </div>
                  <div className="laguage-div">
                    <h1>Language</h1>
                    <div className="big-div">
                      <div className="ru">
                        <img className="flag-svg" src="./rus-flag.svg" alt="" />
                        <button
                          onClick={() => {
                            setLanguage(true);

                            setLanguage2(false);
                            setLanguage3(false);
                          }}
                          style={
                            language
                              ? isDarkMode
                                ? {
                                    color: "#fff",
                                    background: "rgba(0, 0, 0, 0.4)",
                                  }
                                : {
                                    color: "#000",
                                    background: "rgba(250, 250, 250, 0.8)",
                                  }
                              : {
                                  color: "transparent",
                                  background: "transparent",
                                }
                          }
                          className="lan-btn"
                        >
                          RU
                        </button>
                      </div>
                      <div className="eng">
                        <img
                          className="flag-svg"
                          style={{ width: "100px", height: "46px" }}
                          src="./en-flag.svg"
                          alt=""
                        />
                        <button
                          className="lan-btn"
                          onClick={() => {
                            setLanguage(false);
                            setLanguage2(true);
                            setLanguage3(false);
                          }}
                          style={
                            language2
                              ? isDarkMode
                                ? {
                                    color: "#fff",
                                    background: "rgba(0, 0, 0, 0.4)",
                                  }
                                : {
                                    color: "#000",
                                    background: "rgba(250, 250, 250, 0.8)",
                                  }
                              : {
                                  color: "transparent",
                                  background: "transparent",
                                }
                          }
                        >
                          EN
                        </button>
                      </div>
                      <div className="uzb">
                        <img className="flag-svg" src="./uzb-flag.svg" alt="" />
                        <button
                          className="lan-btn"
                          onClick={() => {
                            setLanguage(false);
                            setLanguage2(false);
                            setLanguage3(true);
                          }}
                          style={
                            language3
                              ? isDarkMode
                                ? {
                                    color: "#fff",
                                    background: "rgba(0, 0, 0, 0.4)",
                                  }
                                : {
                                    color: "#000",
                                    background: "rgba(250, 250, 250, 0.8)",
                                  }
                              : {
                                  color: "transparent",
                                  background: "transparent",
                                }
                          }
                        >
                          uz
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="settings-menu-arrow"
                    onClick={() => setClose(!close)}
                    style={{ transition: "all 0.9s ease" }}
                  >
                    <span
                      className={
                        menu ? (close ? "line line-animation" : "line") : "line"
                      }
                      onClick={() => setClose(false)}
                      style={
                        isDarkMode
                          ? close
                            ? { backgroundColor: "white", top: "-8px" }
                            : { backgroundColor: "white" }
                          : close
                          ? { backgroundColor: "gray", top: "-7px" }
                          : { backgroundColor: "gray" }
                      }
                    ></span>
                    <div>
                      <svg
                        width="152"
                        height="8"
                        viewBox="0 0 150 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          menu ? (close ? "bb2" : "bb2 bb2-anim") : "bb2"
                        }
                      >
                        <path
                          d="M76.4116 16.9382C76.1273 16.9792 75.8387 16.9792 75.5545 16.9382L3.01435 6.46923C-0.670612 5.93742 -0.280226 0.5 3.44292 0.5L148.523 0.5C152.246 0.5 152.637 5.93743 148.952 6.46924L76.4116 16.9382Z"
                          style={
                            isDarkMode
                              ? {
                                  transition: "all 0.3s ease",
                                  fill: "white",
                                }
                              : { transition: "all 0.3s ease", fill: "gray" }
                          }
                        />
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="172"
                        height="5"
                        viewBox="0 0 182 14"
                        fill="none"
                        className={
                          menu ? (close ? "bb2" : "bb2 bb2-anim") : "bb2"
                        }
                      >
                        <path
                          d="M91.0634 13L0.185699 0.25L181.941 0.25L91.0634 13Z"
                          style={
                            isDarkMode
                              ? {
                                  transition: "0.3s",
                                  fill: "#505050",
                                }
                              : {
                                  transition: "all 0.3s ease",
                                  fill: "white",
                                  transform: "translateY(-1px)",
                                }
                          }
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                {/* btn for settings-menu */}
                <div
                  className="close-set-menu"
                  onClick={() => setClose(true)}
                  style={
                    close
                      ? {
                          transitionDuration: "0.4s",
                          backgroundColor: "transparent",
                          display: "none",
                        }
                      : {
                          display: "block",
                          transitionDuration: "0.4s",
                          backgroundColor: "transparent",
                        }
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
