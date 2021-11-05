import { ReactElement, useCallback, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';

let timer: NodeJS.Timeout;

interface HideProps {
  children: ReactElement;
  className?: string;
  delay?: number;
  defaultTransition?: boolean;
  removeFromDOM?: boolean;
}

export const Hide = ({
  children,
  className,
  delay = 2000,
  defaultTransition = false,
  removeFromDOM = false,
}: HideProps) => {
  const [hide, setHide] = useState(false);
  const [hover, setHover] = useState(false);
  const onMouseEnter = useCallback(() => setHover(true), [setHover]);
  const onMouseLeave = useCallback(() => setHover(false), [setHover]);
  const onMouseMove = useCallback(() => {
    clearTimeout(timer);

    if (hide) {
      setHide(!hide);
      document.body.style.cursor = 'default';
    }

    timer = setTimeout(() => {
      if (!hover) {
        setHide(true);
        document.body.style.cursor = 'none';
      }
    }, delay);
  }, [hide, hover, setHide]);

  const defaultStyles = {
    [styles.transition]: defaultTransition,
    [styles.hide]: hide,
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);

  if (removeFromDOM && hide) {
    return null;
  }

  return (
    <div
      className={cx(className, defaultStyles)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

const styles = {
  transition: css`
    transition: opacity 0.8s cubic-bezier(0.64, 0.63, 0.39, 1.19);
  `,
  hide: css`
    opacity: 0;
  `,
};
