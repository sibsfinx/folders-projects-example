import './index.sass';
import React, { Component } from 'react';
import ProjectItem from './ProjectItem.js';
// import PropTypes from 'prop-types';

class ProjectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: this.props.items.map((item) => {
        return {id: item.id, selected: false}
      })
    };
  }

  handleSelect(args) {
    const selected = this.state.selectedItems;
    let item = selected.find((i) => {return i.id === args.id})
    item.selected = args.selected;
    this.setState({
      selectedItems: selected,
    });
  }

  handleDrag(e) {
    this.props.handleDragStart(e.clientX, e.clientY);
  }

  render() {
    const {
      items
    } = this.props;

    console.log(this.props);

    return (
      <div className="ProjectsList">
        {JSON.stringify(this.state)}
        <br/>
        { (items && items.length > 0)
          ? items.map((item, i) => (
            <div className="ProjectsList__item" key={i+1} draggable={true} onDragStart={(e) => this.handleDrag(e)} >
              <ProjectItem key={i+1} item={item} onSelect={this.handleSelect.bind(this)} />
            </div>
          )) : (
            null
          )
        }
      </div>
    )
  }
}

export default ProjectsList;
