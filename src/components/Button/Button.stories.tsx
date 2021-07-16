import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: 'secondary',
};

export const Negative = Template.bind({});
Negative.args = {
  intent: 'negative',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'extra-small',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
