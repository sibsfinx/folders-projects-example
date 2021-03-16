import React from 'react';
import AppNav from './index.js';

export default {
  component: AppNav,
  title: 'AppNav'
};

const Template = args => <AppNav {...args} />;

export const Default = Template.bind({});
Default.args = {
}

