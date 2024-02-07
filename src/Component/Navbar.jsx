// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSearch } from "../../SearchContext";
import { useNavigate } from "react-router-dom";
import icon from "../assets/img/iconbook.png";
import TextInput from "../../TextInput";
import { handleClick } from "../Component/Scroolbar";

export default function Navbar() {
  const { updateSearchTerm } = useSearch();
  const [searchInput, setSearchInput] = useState("");
  const [navActive, setNavactive] = useState(false);
  const [burger, setBurger] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const term = e.target.value;
    setSearchInput(term);
  };

  const handleEnterKeyPress = (e, navigate) => {
    const searchInputValue = searchInput.trim();

    if (e.key === "Enter" && searchInputValue !== "") {
      updateSearchTerm(searchInputValue);
      localStorage.setItem("item", searchInputValue);
      navigate("/search");
    }
  };

  const toggleNavActive = () => {
    setNavactive(!navActive);
    setBurger(!burger);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <div className="nav-left">
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <div className="title">
              <div className="big-title">
                <h3>BOOKOE</h3>
              </div>
              <div className="small-title">
                <h6>Rekomendasi Bukumu</h6>
              </div>
            </div>
          </div>
          <div className={`nav-right ${navActive ? "nav-active" : ""}`}>
            <ul>
              <li onClick={handleClick()}>
                <NavLink to="/" className="nav-link">
                  <h4>All</h4>
                </NavLink>
              </li>
              <li onClick={handleClick()}>
                <NavLink to="/latest" className="nav-link">
                  <h4>Latest</h4>
                </NavLink>
              </li>
              <li onClick={handleClick()}>
                <NavLink to="/toppicks" className="nav-link">
                  <h4>Top Picks</h4>
                </NavLink>
              </li>
              <li onClick={handleClick()}>
                <TextInput required={true} label="" placeholder="Search your book..." onChange={handleInput} onKeyDown={(e) => handleEnterKeyPress(e, navigate)} className="input" />
              </li>
              <li>
                <button>Book List</button>
              </li>
            </ul>
          </div>
          <div className={`burger ${burger ? "toggle-burger" : ""}`} onClick={toggleNavActive}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
