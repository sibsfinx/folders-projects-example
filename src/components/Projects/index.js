import './index.sass';
import React, { Component } from 'react'
import ProjectItem from './ProjectItem.js';
import ProjectDraggable from '../Projects/ProjectDraggable';

// import PropTypes from 'prop-types';

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.dragElement = React.createRef();
  }

  getSelectedItems() {
    return this.props.items.filter((item) => {
      return (item.selected === true);
    });
  }

  getSelectedItemsCount() {
    return this.getSelectedItems().length;
  }

  handleSelect(args) {
    this.props.handleSelect(this, args);
  }

  handleDrag(e) {
    const crt = this.dragElement.current.dragElement.current;
    crt.style.display = 'block';
    e.dataTransfer.setDragImage(crt, 0, 0);
    //this.props.handleDrag.call();
  }

  render() {
    const {
      items,
      handleSelect
    } = this.props;

    return (
      <div className="ProjectsList">
        <br/>
        { (items && items.length > 0)
          ? items.map((item, i) => (
            <div className="ProjectsList__item" key={i+1}>
              <ProjectItem
                key={i+1}
                item={item}
                selected={item.selected}
                onSelect={this.handleSelect.bind(this)}
                onDrag={(e) => this.handleDrag(e)}
              />
            </div>
          )) : (
            null
          )
        }
        <ProjectDraggable ref={this.dragElement} show={false} count={this.props.items.length} />
      </div>
    )
  }
}

export default ProjectsList;
