import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id='navbar'>
      <div className="container">
        <Link className="navbar-brand me-2" to="/">
          <img
            src="/logo.jpeg"
            height="48"
            alt="MDB Logo"
            loading="lazy"
            style={{ marginTop: '-1px' }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/discover">
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link to='/donate'>
            <button type="button" className="btn btn-link px-3 me-2">
              Donate
            </button>
            </Link>
            <Link to='/aboutus'>
            <button type="button" className="btn btn-primary me-3">
              Get started
            </button>
            </Link>
            <Link
              className="btn btn-dark px-3"
              to="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
