import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
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
    const [hide] = result.current;

    expect(hide).toBe(false);
    
    fireEvent.mouseMove(window);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    const [hideResult] = result.current;
  
    expect(hideResult).toBe(true);
  });

  it('doesn\'t hide component if delay was not reached', () => {
    const { result } = renderHook(() => useHide({ delay }));
    const [hide] = result.current;

    expect(hide).toBe(false);
    
    fireEvent.mouseMove(window);

    act(() => {
      jest.advanceTimersByTime(delay / 2);
    });

    const [hideResult] = result.current;
  
    expect(hideResult).toBe(false);
  });

  it('doesn\'t hide component if mouse is hovering', () => {
    const { result } = renderHook(() => useHide({ delay }));
    const [_, onMouseEnter, onMouseLeave] = result.current;
    
    render(
      <div
        data-testid="test"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
          hide
      </div>
    );
    
    fireEvent.mouseOver(screen.getByTestId('test'));
    fireEvent.mouseMove(window);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const [hideResult] = result.current;
  
    expect(hideResult).toBe(false);
  });

  it('hides cursor', () => {
    const { result } = renderHook(() => useHide({ delay, hideCursor: true }));
    const [hide] = result.current;

    expect(hide).toBe(false);
    expect(document.body.style.cursor).toBe('');
    
    fireEvent.mouseMove(window);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const [hideResult] = result.current;
  
    expect(hideResult).toBe(true);
    expect(document.body.style.cursor).toBe('none');
  });

  it('set initial hide', () => {
    const { result } = renderHook(() => useHide({ delay, initialHide: true }));
    const [hide] = result.current;

    expect(hide).toBe(true);
  });
});
