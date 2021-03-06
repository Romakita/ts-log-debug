export interface IReplacers {
  "c"(loggingEvent?: any, specifier?: any): string;

  "d"(loggingEvent?: any, specifier?: any): string;

  "h"(loggingEvent?: any, specifier?: any): string;

  "m"(loggingEvent?: any, specifier?: any): string;

  "n"(loggingEvent?: any, specifier?: any): string;

  "p"(loggingEvent?: any, specifier?: any): string;

  "r"(loggingEvent?: any, specifier?: any): string;

  "["(loggingEvent?: any, specifier?: any): string;

  "]"(loggingEvent?: any, specifier?: any): string;

  "y"(loggingEvent?: any, specifier?: any): string;

  "z"(loggingEvent?: any, specifier?: any): string;

  "%"(loggingEvent?: any, specifier?: any): string;

  "x"(loggingEvent?: any, specifier?: any): string;

  [key: string]: (loggingEvent?: any, specifier?: any) => string;
}
