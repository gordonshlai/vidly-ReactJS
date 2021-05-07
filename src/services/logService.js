// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

const init = () => {
  // Sentry.init({
  //   dsn:
  //     "https://0a6147deb6c24bfcaa4ec2a9930e85ef@o622056.ingest.sentry.io/5752442",
  //   integrations: [new Integrations.BrowserTracing()],
  //   release: "1.0.0",
  //   environment: "testing",
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
};

const log = (error) => {
  // Sentry.captureException(error);
  console.error(error);
};

export default {
  init,
  log,
};
