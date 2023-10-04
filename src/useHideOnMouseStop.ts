import { useCallback, useEffect, useState, useRef } from 'react';

let timer: NodeJS.Timeout;

interface UseHideOnMouseStopProps {
  delay?: number;
  hideCursor?: boolean;
  initialHide?: boolean;
  showOnlyOnContainerHover?: boolean;
}

type UseHideOnMouseStopReturn = [boolean, () => void, () => void];

export const useHideOnMouseStop = ({
  delay = 2000,
  hideCursor = false,
  initialHide = false,
  showOnlyOnContainerHover = false,
}: UseHideOnMouseStopProps): UseHideOnMouseStopReturn => {
  const [hide, setHide] = useState(initialHide);
  const mountedRef = useRef(false);
  const [hover, setHover] = useState(false);
  const toggleVisibility = useCallback((hide: boolean, cursor: string) => {
    setHide(hide);
    if (hideCursor) {
      document.body.style.cursor = cursor;
    }
  }, [hideCursor]);
  const onMouseEnter = useCallback(() => setHover(true), [setHover]);
  const onMouseLeave = useCallback(() => setHover(false), [setHover]);
  const onMouseMove = useCallback(() => {
    clearTimeout(timer);

    if (hide && mountedRef.current) {
      if (showOnlyOnContainerHover && hover) {
        toggleVisibility(!hide, 'default');
      } else if (!showOnlyOnContainerHover) {
        toggleVisibility(!hide, 'default');
      }
    }

    timer = setTimeout(() => {
      if (!hover && mountedRef.current) {
        toggleVisibility(true, 'none');
      }
    }, delay);
  }, [hide, hover, setHide]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  return [hide, onMouseEnter, onMouseLeave];
};
