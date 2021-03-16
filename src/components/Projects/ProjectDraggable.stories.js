import React from 'react';
import ProjectDraggable from './ProjectDraggable';

export default {
  component: ProjectDraggable,
  title: 'ProjectDraggable'
}

const Template = args => <ProjectDraggable {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: true,
  count: 2
}

