import { render } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('Components / LoadingSpinner', () => {
  it('renders a loading spinner', () => {
    const { container } = render(<LoadingSpinner />);

    expect(container).toMatchSnapshot();
  });

  it('lets you pick a size', () => {
    const { container } = render(<LoadingSpinner size={40} />);

    expect(container).toMatchSnapshot();
  });

  it('lets you apply a `dark` theme', () => {
    const { container } = render(<LoadingSpinner theme="dark" />);

    expect(container).toMatchSnapshot();
  });
});
