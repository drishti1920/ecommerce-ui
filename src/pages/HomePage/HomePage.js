import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import Logo from "../../assessts/images/Logo.png";
import Logo2 from "../../assessts/images/logo-small.png";
import { path } from "../../Router/Routes.js";
import { ReactComponent as CartSVG } from "../../assessts/svgComponents/Cart.svg";
import { ReactComponent as WishlistSVG } from "../../assessts/svgComponents/Wishlist.svg";
import { ReactComponent as SearchSVG } from "../../assessts/svgComponents/Search.svg";
import { ReactComponent as LoginSVG } from "../../assessts/svgComponents/Login.svg";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  let homePath = location.pathname === path.home;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${classes.HeaderWrapper}   ${
        isSticky ? classes.issticky : ""
      }`}
    >
      <div className={`${classes.MenuSet}`}>
        <div className={`${classes.MenuButton}`}>
          <button
            type="button"
            className={`${classes.MenuBtn}`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className={`${classes.MenuIcon}`}></span> <span>MENU</span>
          </button>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className={`${classes.ProductSearch}`}>
                <input
                  type="text"
                  className={`${classes.InputSearch}`}
                  placeholder="SEARCH"
                />
                <SearchSVG className={`${classes.SearchIcon}`} />
              </div>

              <ul className={`${classes.listMenu}`}>
                {!homePath && <li onClick={() => navigate(path.home)}>HOME</li>}
                <li>BLOG</li>
                <li>SHOP</li>
              </ul>
              <ul className={`${classes.listMenu2}`}>
                <li onClick={() => navigate(path.wishlist)}>
                  {" "}
                  <span>
                    <WishlistSVG />
                  </span>{" "}
                  WISHLIST
                </li>
                <li>
                  <span>
                    <LoginSVG />
                  </span>
                  LOGIN/REGISTER
                </li>
              </ul>
              <div className={`${classes.listMenuIcon}`}>
                <a href="#" target="_blank">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.ContactInfo}`}>
          <span>Need Help?</span>
          <p>1-800-123-45-67</p>
        </div>
      </div>

      <div
        className={`${classes.HeaderLogo}`}
        onClick={() => navigate(path.home)}
      >
        <img src={isSticky ? Logo2 : Logo} alt="brand-logo" />
      </div>

      <div className={`${classes.ProfileSET}`}>
        <ul>
          <li>
            <SearchSVG />
          </li>
          <li onClick={() => navigate(path.wishlist)}>
            <WishlistSVG />
          </li>
          <li className="d-flex gap-2">
            <div className={`${classes.Cart} `}>
              <span>₹0.00</span>
              <p>CART</p>
            </div>
            <CartSVG />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
