import './index.sass';
import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';
// import PropTypes from 'prop-types';

class ItemsList extends Component {
  render() {
    const {
      items
    } = this.props;

    console.log(this.props);

    return (
      <div className="ProjectsList">
        { (items && items.length > 0)
          ? items.map((item, i) => (
            <div className="ProjectsList__item">
              <ProjectItem key={i+1} item={item} />
            </div>
          )) : (
            null
          )
        }
      </div>
    )
  }
}

export default ItemsList;
