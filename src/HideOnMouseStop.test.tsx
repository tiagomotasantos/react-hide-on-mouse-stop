import React from 'react';
import { render, screen } from '@testing-library/react';
import { HideOnMouseStop } from './HideOnMouseStop';

describe('HideOnMouseStop', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders children correctly', () => {
    const text = 'test children';
    render(
      <HideOnMouseStop>
        <div>{text}</div>
      </HideOnMouseStop>
    );

    expect(screen.getByText(text).textContent).toEqual(text);
  });

  it('renders custom class', () => {
    render(
      <HideOnMouseStop className="custom-class">
        <span>1</span>
        <span>2</span>
      </HideOnMouseStop>
    );

    expect(screen.getByTestId('hide-wrapper').className).toContain('custom-class');
  });

  it('removes content from DOM when hide is true', () => {
    render(
      <HideOnMouseStop initialHide removeFromDOM>
        <span>1</span>
        <span>2</span>
      </HideOnMouseStop>
    );

    expect(screen.queryByTestId('hide-wrapper')).toBeNull();
  });
});
