
import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from '../NavLink';

const App = props => (
  <div>
    <h1>React Router Tutorial </h1>
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
      <li><Link to="/repos/react-router" activeClassName="active">Repos</Link></li>
      <li><Link to="/user" activeClassName="active">User</Link></li>
      <li><NavLink to="/contacts">Contacts</NavLink></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  /* eslint-disable react/require-default-props */
  children: React.PropTypes.object,
};

export default App;
