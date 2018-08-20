import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div className="template-wrapper">
    <Helmet
      title="Reactor"
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
