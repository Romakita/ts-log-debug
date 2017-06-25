# Appenders

Appenders serialise log events to some form of output. They can write to files, send emails, send data over the network. All appenders have a type which determines which appender gets used. For example:

## Example

```typescript
import {Logger} from "ts-log-debug";

const logger = new Logger("loggerName");

logger.appenders
  .push({
      type: "stdout", level: ["debug", "info", "trace"]
  })
  .push({
      type: "stderr", level: ["error", "fatal", "warn"]
  })
  .push({
      type: "file", filename: "logfile.log"
  });
```

This defines three appenders named `stdout`, `stderr` and `file`.

## Core Appenders

The following appenders are included with `ts-log-debug`.

* [console](appenders/console.md)
* [file](appenders/file.md)
* [stderr](appenders/stderr.md)
* [stdout](appenders/stdout.md)

# Other Appenders

`ts-log-debug` can load appenders from outside the core appenders. The type config value is used as a require path if no matching appender can be found. For example, the following configuration will create an appender with decorators:

```typescript
// consoleAppender.ts
import {Appender, BaseAppender, LogEvent} from "ts-log-debug";
const consoleLog = console.log.bind(console);

@Appender({name: "console2"})
export class ConsoleAppender extends BaseAppender {
  write(loggingEvent: LogEvent) {
      consoleLog(this.layout(loggingEvent, this.config.timezoneOffset));
  }
}
```

This appender can be use like this:

```typescript
import {Logger} from "ts-log-debug";
import "./consoleAppender.ts"

const logger = new Logger("loggerName");

logger.appenders
  .set("std-log", {
      type: "console2", level: ["debug", "info", "trace"]
  });
```