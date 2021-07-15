import React from 'react';
import range from 'lodash/range';
import round from 'lodash/round';
import classnames from 'classnames';

import './LoadingSpinner.css';

const defaultProps = {
  size: 20,
  theme: 'light',
};

export interface LoadingSpinnerProps {
  size: number;

  theme?: 'light' | 'dark';
}

// We should make sure that the circles always have a
// width and height that are a round number. Browsers
// struggle to give good border-radii to elements with
// non-integer dimensions.
const getCirclePxSize = (size: number) => round(size * 0.15);

export const LoadingSpinner = (
  props: LoadingSpinnerProps,
): React.ReactElement => {
  const { size = defaultProps.size, theme = defaultProps.theme } = props;

  const circlePxSize = getCirclePxSize(size);

  const renderCircle = (n: number) => {
    const classes = classnames(
      'ui-loading-spinner__circle',
      `ui-loading-spinner__circle-${n}`,
      {
        'ui-loading-spinner__circle--theme-dark': theme === 'dark',
      },
    );

    return (
      <div key={n} className={classes}>
        <span
          className="ui-loading-spinner__circle__inner"
          style={{
            width: `${circlePxSize}px`,
            height: `${circlePxSize}px`,
          }}
        />
      </div>
    );
  };

  return (
    <div className="ui-loading-spinner" style={{ width: size, height: size }}>
      {range(1, 13).map(renderCircle)}
    </div>
  );
};

LoadingSpinner.defaultProps = defaultProps;
