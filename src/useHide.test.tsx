import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useHide } from './useHide';

describe('useHide', () => {
  const delay = 1000;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('hides component after delay', () => {
    const { result } = renderHook(() => useHide({ delay }));
    const [hide, onMouseEnter, onMouseLeave] = result.current;
    const cmp = <div>hide</div>

    expect(hide).toBe(false);
    
    jest.runOnlyPendingTimers();

    console.log(result.current)
  });
});
