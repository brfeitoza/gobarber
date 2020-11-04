import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is the default button',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
