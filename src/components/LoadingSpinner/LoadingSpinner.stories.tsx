import { Story, Meta } from '@storybook/react';

import { LoadingSpinner, LoadingSpinnerProps } from './LoadingSpinner';

export default {
  title: 'Components/Loading Spinner',
  component: LoadingSpinner,
  argTypes: {},
} as Meta<typeof LoadingSpinner>;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const Small = Template.bind({});
Small.args = {
  size: 16,
};

export const Large = Template.bind({});
Large.args = {
  size: 30,
};
