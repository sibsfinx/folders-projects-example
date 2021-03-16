import React from 'react';
import ProjectItem from './ProjectItem';

export default {
  component: ProjectItem,
  title: 'ProjectItem'
}

const Template = args => <ProjectItem {...args} />;

// TODO add handler methods

const onSelect = () => {
}

const onDrag = () => {
}

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 1,
    folderId: 1
  },
  selected: false,
  showFolder: false,
  onSelect: onSelect,
  onDrag: onDrag
}

export const ShowFolder = Template.bind({});
ShowFolder.args = {
  ...Default.args,
  showFolder: true
}

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selected: true
}


