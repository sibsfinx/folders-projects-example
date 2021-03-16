import React from 'react';
import FoldersList from './index.js';
import * as FolderItemStories from './FolderItem.stories';

export default {
  component: FoldersList,
  title: 'FoldersList',
  // decorators: [story => <div style={{}}>{story()}</div>]
};

const Template = args => <FoldersList {...args} />;

export const Default = Template.bind({});
Default.args = {
  folders: [
    { ...FolderItemStories.Default.args.item }
  ]
}

