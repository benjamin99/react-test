
import React from 'react';

const Repos = props => (
  <div>
    <h3>Repos</h3>
    <h5>{props.params.name}</h5>
  </div>
);

Repos.propTypes = {
  /* eslint-disable react/require-default-props */
  /* eslint-disable react/forbid-prop-types */
  params: React.PropTypes.any,
};

export default Repos;
