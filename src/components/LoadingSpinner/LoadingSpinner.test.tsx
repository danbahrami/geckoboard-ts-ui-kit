import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { LoadingSpinner } from './LoadingSpinner';

describe('Components / LoadingSpinner', () => {
  let container: Element;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  it('renders a loading spinner', () => {
    act(() => {
      render(<LoadingSpinner />, container);
    });

    expect(container).toMatchSnapshot();
  });

  it('lets you pick a size', () => {
    act(() => {
      render(<LoadingSpinner size={40} />, container);
    });

    expect(container).toMatchSnapshot();
  });

  it('lets you apply a `dark` theme', () => {
    act(() => {
      render(<LoadingSpinner theme="dark" />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
