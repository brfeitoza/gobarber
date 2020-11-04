import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Form } from '@unform/web';
import { FiMail } from 'react-icons/fi';

import Input, { InputProps } from '../../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = ({ name, icon, placeholder }) => (
  <Form onSubmit={() => console.log('Form submitted')}>
    <Input name={name} icon={icon} placeholder={placeholder} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  name: 'email',
  icon: FiMail,
  placeholder: 'Default input with an icon',
};

export const DefaultWithoutIcon = Template.bind({});
DefaultWithoutIcon.args = {
  name: 'email',
  placeholder: 'Default input without icon',
};
