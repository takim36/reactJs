import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { headerText } = props;
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">{headerText}</h1>
      </div>
    </section>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default Header;
