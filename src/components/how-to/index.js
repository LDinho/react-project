import React from 'react';
import chairImage from '../../images/1.png';
import iceCreamImage from '../../images/2.png';

import './_how-to.scss';

const HowToSection = () =>
  (<section className="howto" id="howto">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="howto-wrapper">
            <div className="howto-image">
              <img src={chairImage} alt="chair" />
            </div>
            <div className="howto-wrapper-text">
              <div className="howto-header">
                <h4 className="howto-header-text">
                  Regional Cuisine Down Home Southern Cuisine
                </h4>
              </div>
              <p>A reader will be distracted by the
                content of a page and its layout.
                The point of using Lorem Ipsum is that
                it has a normal distribution of letters.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="howto-wrapper">
            <div className="howto-image">
              <img src={iceCreamImage} alt="ice cream" />
            </div>
            <div className="howto-wrapper-text">
              <div className="howto-header">
                <h4 className="howto-header-text">
                  Pos Hardware More Options In Less Space
                </h4>
              </div>
              <p>A reader will be distracted by the
                content of a page and its layout.
                The point of using Lorem Ipsum is that
                it has a normal distribution of letters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);

export default HowToSection;
