import { ReactNode, useCallback, useEffect, useState } from 'react';
import { css, cx } from '@emotion/css';

const DELAY = 2000;
let timer: NodeJS.Timeout;

interface HideProps {
  children: ReactNode;
}

export const Hide = ({ children }: HideProps) => {
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
    }, DELAY);
  }, [hide, hover, setHide]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);
  return (
    <div
      className={cx(styles.wrapper, { [styles.hide]: hide })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
};

const styles = {
  wrapper: css`
    left: 0;
    position: fixed;
    top: 24px;
    transition: opacity 0.8s cubic-bezier(0.64, 0.63, 0.39, 1.19);
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  hide: css`
    opacity: 0;
  `,
};
