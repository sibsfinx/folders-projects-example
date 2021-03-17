import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import FoldersList from './index.js';
import * as FolderItemStories from './FolderItem.stories';

export default {
  component: FoldersList,
  title: 'FoldersList',
  // decorators: [story => <div style={{}}>{story()}</div>]
};

const Template = args => <Router><FoldersList {...args} /></Router>;

export const Default = Template.bind({});
Default.args = {
  folders: [
    { ...FolderItemStories.Default.args.item }
  ]
}

