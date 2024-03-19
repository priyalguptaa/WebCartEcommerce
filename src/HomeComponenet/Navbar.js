import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, DotsVerticalIcon } from "@heroicons/react/outline"; // Import DotsVerticalIcon for the kebab menu
import { SearchIcon } from "@heroicons/react/outline";
import { UserCircleIcon, ClipboardCheckIcon, HeartIcon } from "@heroicons/react/solid";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://web-cart.com/webcart-multi-vendor-3/img/site-logo.png"
            alt="Webcart Logo"
            className="logo-image mr-2"
            style={{ width: "120px", height: "63px" }}
          />
          <ShoppingCartIcon className="h-6 w-6 mr-2" />
          <span className="brand-text">Webcart</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <form className="d-flex align-items-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for products, brands and more"
                  aria-label="Search"
                  style={{ width: "800px" }}
                />
                <SearchIcon
                  className="h-6 w-6 text-gray-600"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
              </form>
            </li>
          </ul>
        </div>

        <div className="navbar-nav ms-auto">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <UserCircleIcon className="h-6 w-6 mr-1" /> Login
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/signup" className="dropdown-item">
                    <UserCircleIcon className="h-6 w-6 mr-1" height={'38px'}/> Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="dropdown-item">
                    <ClipboardCheckIcon className="h-6 w-6 mr-1" height={'38px'}/> Orders
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="dropdown-item">
                    <HeartIcon className="h-6 w-6 mr-1" height={'38px'}/> Wishlist
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ marginLeft: '70px', marginTop:'13px'}}>
                Cart 
              </Link>
            </li>
            <li className="nav-item">
            <DotsVerticalIcon className="h-6 w-6 mr-1 ml-auto" style={{ cursor: 'pointer'}} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
