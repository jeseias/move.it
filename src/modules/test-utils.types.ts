import { IChallengesContextData } from '@contexts/ChallengesContexts';
import { ICountdownContextData } from '@contexts/CountdownContext';

export interface IContextStates {
  ChallengeState: IChallengesContextData;
  CountdownState: ICountdownContextData;
}

export interface ICustomRenderOptions {
  contextStates: IContextStates;
}
