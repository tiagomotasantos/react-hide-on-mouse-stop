import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import { Hide } from './Hide';

describe('Hide', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders children correctly', () => {
    const text = 'test children';
    render(
      <Hide>
        <div>{text}</div>
      </Hide>
    );

    expect(screen.getByText(text).textContent).toEqual(text);
  });

  it('renders custom class', () => {
    render(
      <Hide className="custom-class">
        <span>1</span>
        <span>2</span>
      </Hide>
    );

    expect(screen.getByTestId('hide-wrapper').className).toContain('custom-class');
  });

  it('removes content from DOM when hide is true', () => {
    render(
      <Hide initialHide removeFromDOM>
        <span>1</span>
        <span>2</span>
      </Hide>
    );

    expect(screen.queryByTestId('hide-wrapper')).toBeNull();
  });
});
