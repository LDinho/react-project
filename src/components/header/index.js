import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const Header = () =>
  (<header className="header-background-banner">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <div className="header-logo">
              Reactor
            </div>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-list-item">
                  <Link className="header-link" to="/signup">
                    Log In
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <h1 className="header-greeting">Hello, welcome to Reactor</h1>
      </div>
    </div>
  </header>);

export default Header;
