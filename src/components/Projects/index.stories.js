import React from 'react';
import ProjectsList from './index.js';
import * as ProjectItemStories from './ProjectItem.stories';

export default {
  component: ProjectsList,
  title: 'ProjectsList',
  // decorators: [story => <div style={{}}>{story()}</div>]
};

const Template = args => <ProjectsList {...args} />;

const items = [
  { ...ProjectItemStories.Default.args.item },
  { ...ProjectItemStories.Default.args.item, id: 2, folderId: 4 },
  { ...ProjectItemStories.Default.args.item, id: 3, folderId: 5 }
];

export const Default = Template.bind({});
Default.args = {
  items: items
}

