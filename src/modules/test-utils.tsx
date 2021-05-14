/* eslint-disable import/no-extraneous-dependencies */
import { ChallengeContext } from '@contexts/ChallengesContexts';
import { CountdownContext } from '@contexts/CountdownContext';
import { render as __render } from '@testing-library/react';
import { FC, ReactElement } from 'react';

import { IContextStates, ICustomRenderOptions } from './test-utils.types';

export { default as userEvent } from '@testing-library/user-event';
export { screen } from '@testing-library/react';

const Wrapper = (contextStates = {}): FC => ({ children }) => {
  const { ChallengeState, CountdownState } = contextStates as IContextStates;

  return (
    <ChallengeContext.Provider value={ChallengeState}>
      <CountdownContext.Provider value={CountdownState}>
        <div id="__next">{children}</div>
      </CountdownContext.Provider>
    </ChallengeContext.Provider>
  );
};

const customRender = (
  reactElement: ReactElement,
  options: ICustomRenderOptions = {} as ICustomRenderOptions
) =>
  __render(reactElement, {
    wrapper: Wrapper(options.contextStates),
  });

export { customRender as render };
export * from '@testing-library/react';
