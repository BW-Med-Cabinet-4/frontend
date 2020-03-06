import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Strains:</h3>
        {this.props.list.map(strain => {
          return (
            <NavLink
              to={`/strains/${strain.strain_id}`}
              key={strain.strain_id}
              activeClassName="saved-active"
            >
              <span className="saved-strain">{strain.strain_name}</span>
            </NavLink>
          );
        })}
        <div className="home-button">
          <Link to="/homepage">Home</Link>
        </div>
      </div>
    );
  }
}