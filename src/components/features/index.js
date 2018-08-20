import React from 'react';

import './_features.scss';

const Features = () =>
  (<section className="features" id="features">
    <div className="container">
      <div className="row">
        <div className="col-6 features-title">
          <div>
            <h2>WHAT WE DO</h2>
          </div>
        </div>
        <div className="col-6">
          <div className="features-content">
            <h3>We do</h3>
            <div className="features-text">
              <p>
                It is a long established fact that a reader
                will be distracted by the readable
                content of a page when looking at its layout.
                The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);

export default Features;
