import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonIntent, ButtonSize } from './Button';

describe('Components / Button', () => {
  it('renders a HTML button', () => {
    const { container } = render(<Button>Click me</Button>);

    const button = container.querySelector('button');

    expect(container).toContainElement(button);
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('Button');
    expect(button).toHaveTextContent('Click me');
  });

  it('can render an HTML link', () => {
    const { container } = render(
      <Button href="https://www.geckoboard.com" target="_blank">
        Click me
      </Button>,
    );

    const button = container.querySelector('button');
    const link = container.querySelector('a');

    expect(container).not.toContainElement(button);
    expect(container).toContainElement(link);

    expect(link).toHaveClass(`Button`);
    expect(link).toHaveAttribute(`href`, 'https://www.geckoboard.com');
    expect(link).toHaveAttribute(`target`, '_blank');
  });

  it.each<[string, Function]>([
    ['onBlur', fireEvent.blur],
    ['onClick', fireEvent.click],
    ['onFocus', fireEvent.focus],
  ])('forwards %s events', (eventName, trigger) => {
    const spy = jest.fn();
    const props = { [eventName]: spy };

    const { container } = render(<Button {...props}>Click me</Button>);

    const button = container.querySelector('button');

    if (button) {
      trigger(button);
    } else {
      throw new Error('No button was found');
    }

    expect(spy).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    const { container } = render(<Button disabled>Click me</Button>);

    const button = container.querySelector('button');

    expect(button).toBeDisabled();
  });

  it('can be a submit button', () => {
    const { container } = render(<Button type="submit">Click me</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('can be a reset button', () => {
    const { container } = render(<Button type="reset">Click me</Button>);

    const button = container.querySelector('button');

    expect(button).toHaveAttribute('type', 'reset');
  });

  describe.each<ButtonIntent>(['primary', 'secondary', 'negative'])(
    'when the intent is %s',
    (intent) => {
      it(`applies the --intent-${intent} CSS modifier`, () => {
        const { container } = render(<Button intent={intent}>Click me</Button>);

        const button = container.querySelector('button');

        expect(button).toHaveClass(`Button--intent-${intent}`);
      });
    },
  );

  describe.each<ButtonSize>(['extra-small', 'small', 'medium', 'large'])(
    'when the size is %s',
    (size) => {
      it(`applies the --size-${size} CSS modifier`, () => {
        const { container } = render(<Button size={size}>Click me</Button>);

        const button = container.querySelector('button');

        expect(button).toHaveClass(`Button--size-${size}`);
      });
    },
  );

  describe('when loading is true', () => {
    it('disables the button', () => {
      const { container } = render(<Button loading>Click me</Button>);

      const button = container.querySelector('button');

      expect(button).toBeDisabled();
    });
  });

  describe('snapshots', () => {
    it('matches these snapshots', () => {
      const one = render(<Button>Click me</Button>);
      expect(one.container).toMatchSnapshot();

      const two = render(<Button intent="negative">Cancel</Button>);
      expect(two.container).toMatchSnapshot();

      const three = render(
        <Button href="https://www.geckoboard.com" target="window">
          Go home
        </Button>,
      );
      expect(three.container).toMatchSnapshot();
    });
  });
});
