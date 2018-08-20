import React from 'react';
import Link from 'gatsby-link';
import Signup from '../components/signup';

import './_signup-page.scss';

const Header = () =>
  (<header>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <div className="header-logo">
              <Link className="header-link" to="/">
                Reactor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>);

const SignupPage = () =>
  (<main className="signup-page">
    <Header />
    <div className="signup-page-wrapper">
      <Signup />
    </div>
  </main>);

export default SignupPage;
