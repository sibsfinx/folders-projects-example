import './index.sass';
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem.js';
import ProjectDraggable from '../Projects/ProjectDraggable';
import getSelectedItems from '../../utils/getSelectedItems';


class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.dragElement = React.createRef();
  }

  getSelectedItemsCount() {
    return getSelectedItems(this.props.items).length;
  }

  handleDrag(e) {
    const crt = this.dragElement.current.dragElement.current;
    crt.style.display = 'block';
    e.dataTransfer.setDragImage(crt, 0, 0);
  }

  render() {
    const {
      items,
      activeFolderId,
      handleSelect
    } = this.props;

    const selectedItemsCount = this.getSelectedItemsCount();

    return (
      <div className="ProjectsList">
        { (items && items.length > 0)
          ? items.map((item, i) => (
            <div className="ProjectsList__item" key={i+1}>
              <ProjectItem
                key={i+1}
                item={item}
                selected={item.selected}
                showFolder={!activeFolderId}
                onSelect={handleSelect}
                onDrag={(e) => this.handleDrag(e)}
              />
            </div>
          )) : (
            null
          )
        }
        <ProjectDraggable ref={this.dragElement} show={false} count={selectedItemsCount} />
      </div>
    )
  }
}

ProjectsList.propTypes = {
  items: PropTypes.array,
  handleSelect: PropTypes.func
}

export default ProjectsList;
