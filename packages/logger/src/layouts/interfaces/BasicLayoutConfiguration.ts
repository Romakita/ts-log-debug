import {LogEvent} from "../../core/LogEvent";

export type TokenHandler = (loggingEvent: LogEvent) => string;

export interface TokensHandlers {
  [key: string]: any | TokenHandler;
}

export interface IBasicLayoutConfiguration {
  type: string;
  pattern?: string;
  tokens?: TokensHandlers;

  [key: string]: any;
}
