import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import FolderItem from './FolderItem';

export default {
  component: FolderItem,
  title: 'FolderItem'
}

const Template = args => <Router><FolderItem {...args }/></Router>;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: '1',
    folderId: '1'
  },
  active: false
}

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true
}

export const DragTarget = Template.bind({});
DragTarget.args = {
  ...Default.args,
  dragTarget: true
}
