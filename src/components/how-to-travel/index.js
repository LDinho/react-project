import React from 'react';
import eastImage from '../../images/3.png';
import southImage from '../../images/4.png';
import concepcionburyImage from '../../images/5.png';
import reychesterImage from '../../images/6.png';

import './_how-to-travel.scss';

const Travels = () =>
  (<section className="howto-travel" >
    <div className="container">
      <h3 className="howto-travel-header">Maui By Air The Best Way Around the Island</h3>
      <div className="row">
        <div className="col">
          <figure className="howto-travel-figure">
            <div className="howto-travel-image">
              <img src={eastImage} alt="east" />
            </div>
            <figcaption>
              <h5>East Josianefurt</h5>
              <p className="howto-travel-caption">085 Daron Via</p>
            </figcaption>
          </figure>
        </div>
        <div className="col">
          <figure className="howto-travel-figure">
            <div className="howto-travel-image">
              <img src={southImage} alt="south" />
            </div>
            <figcaption>
              <h5>South Christopherport</h5>
              <p className="howto-travel-caption">162 Chandler Ville</p>
            </figcaption>
          </figure>
        </div>
        <div className="col">
          <figure className="howto-travel-figure">
            <div className="howto-travel-image">
              <img src={concepcionburyImage} alt="concepcionbury" />
            </div>
            <figcaption>
              <h5>Concepcionbury</h5>
              <p className="howto-travel-caption">7603 Kylie Burgs</p>
            </figcaption>
          </figure>
        </div>
        <div className="col">
          <figure className="howto-travel-figure">
            <div className="howto-travel-image">
              <img src={reychesterImage} alt="reychester" />
            </div>
            <figcaption>
              <h5>Reychester</h5>
              <p className="howto-travel-caption">5590 Gabe Views Apt. 044</p>
            </figcaption>
          </figure>
        </div>

      </div>
    </div>
    <hr />
  </section>);

export default Travels;
