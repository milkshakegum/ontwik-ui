import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, OntwikProvider } from '../src';
import ExampleIcon from '../example/assets/example.svg';
import { ButtonProps } from '../src/interfaces';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
      description: 'Button title',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Button variant',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'ghost'],
      },
    },
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Button size',
      control: {
        type: 'select',
        options: ['xlarge', 'large', 'medium', 'small'],
      },
    },
    state: {
      name: 'state',
      type: { name: 'string', required: false },
      description: 'Button state',
      control: {
        type: 'select',
        options: ['success', 'danger', 'warning', false],
      },
    },
    color: {
      name: 'color',
      type: { name: 'string', required: false },
      description: 'Button text color',
      control: {
        type: 'color',
      },
    },
    bg: {
      name: 'bg',
      type: { name: 'string', required: false },
      description: 'Button background color',
      control: {
        type: 'color',
      },
    },
    borderColor: {
      name: 'borderColor',
      type: { name: 'string', required: false },
      description: 'Button border color',
      control: {
        type: 'color',
      },
    },
    gradient1: {
      name: 'gradient 1',
      type: { name: 'string', required: false },
      description: 'Button Gradient',
      control: {
        type: 'color',
      },
    },
    gradient2: {
      name: 'gradient 2',
      type: { name: 'string', required: false },
      description: 'Button Gradient',
      control: {
        type: 'color',
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Button disabled',
      control: {
        type: 'inline-radio',
        options: [true, false],
      },
    },
    wide: {
      name: 'wide',
      type: { name: 'boolean', required: false },
      description: 'Button wide',
      control: {
        type: 'inline-radio',
        options: [true, false],
      },
    },
    uppercase: {
      name: 'uppercase',
      type: { name: 'boolean', required: false },
      description: 'Button text uppercase',
      control: {
        type: 'inline-radio',
        options: [true, false],
      },
    },
    degree: {
      name: 'degree',
      type: { name: 'number', required: false },
      description: 'Gradient degree',
      control: {
        type: 'number',
      },
    },
    icon: {
      name: 'icon',
      type: { name: 'string', required: false },
      description: 'Button icon',
      control: {
        type: 'inline-radio',
        options: [true, false],
      },
    },
    iconPosition: {
      name: 'iconPosition',
      type: { name: 'string', required: false },
      description: 'Button icon position',
      control: {
        type: 'inline-radio',
        options: ['right', 'left'],
      },
    },
    type: {
      name: 'type',
      type: { name: 'string', required: false },
      description: 'Button type',
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<
  ButtonProps & { gradient1?: string; gradient2?: string }
> = (args) => {
  const { gradient1, gradient2, icon, ...rest } = args;
  return (
    <OntwikProvider>
      {gradient1 && gradient2 ? (
        <Button
          {...rest}
          gradients={[gradient1, gradient2]}
          icon={icon && <img src={ExampleIcon} />}
        />
      ) : (
        <Button {...rest} icon={icon && <img src={ExampleIcon} />} />
      )}
    </OntwikProvider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  size: 'large',
  title: 'Test',
  type: 'button',
};
