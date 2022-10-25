import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container pt-5 pb-5">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand mb-lg-0 fs-2 fw-bold" href="#">
            Edu Academy
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ms-5">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  Success
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-outline-info d-none d-lg-block"
            // style="font-size: 1vw"
            type="Register"
          >
            Register
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
