/* eslint-disable import/no-extraneous-dependencies */
import { render as __render } from '@testing-library/react';
import { FC, ReactElement } from 'react';

export { default as userEvent } from '@testing-library/user-event';
export { screen } from '@testing-library/react';

const Wrapper = (): FC => ({ children }) => {
  return <div id="__next">{children}</div>;
};

const customRender = (reactElement: ReactElement) =>
  __render(reactElement, {
    wrapper: Wrapper(),
  });

export { customRender as render };
export * from '@testing-library/react';
