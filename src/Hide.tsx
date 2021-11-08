import React, { ReactElement } from 'react';
import { css, cx } from '@emotion/css';
import { useHide } from './useHide';

interface HideProps {
  children: ReactElement | ReactElement[];
  className?: string;
  delay?: number;
  defaultTransition?: boolean;
  removeFromDOM?: boolean;
  hideCursor?: boolean;
  initialHide?: boolean;
  showOnlyOnContainerHover?: boolean;
}

export const Hide = ({
  children,
  className,
  delay,
  hideCursor,
  initialHide,
  showOnlyOnContainerHover,
  defaultTransition = false,
  removeFromDOM = false,
}: HideProps) => {
  const [hide, onMouseEnter, onMouseLeave] = useHide({
    delay,
    hideCursor,
    initialHide,
    showOnlyOnContainerHover,
  });
  const defaultStyles = {
    [styles.wrapper]: true,
    [styles.transition]: defaultTransition,
    [styles.hide]: hide,
  };

  if (removeFromDOM && hide) {
    return null;
  }

  return (
    <div
      data-testid='hide-wrapper'
      className={cx(defaultStyles, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

const styles = {
  wrapper: css`
    height: fit-content;
    width: fit-content;
  `,
  transition: css`
    transition: opacity 0.8s cubic-bezier(0.64, 0.63, 0.39, 1.19);
  `,
  hide: css`
    opacity: 0;
  `,
};
