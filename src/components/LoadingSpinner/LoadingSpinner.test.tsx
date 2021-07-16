import { render } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

/**
 * With the <LoadingSpinner /> tests I've taken a much simpler
 * aproach to the <Button /> tests in that all the tests are
 * using snapshots.
 *
 * The upsides are:
 *   - It's faster and less verbose to get full test coverage
 *   - The tests are easier to read
 *   - Snapshots surface changes to the component really nicely
 *
 * The downsides are:
 *   - The tests don't highlight specific behaviour of the component
 *   - Snapshots can be accidentally updated without noticing
 *   - Changes to snapshots might be harder to review
 */
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
