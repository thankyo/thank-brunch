import { loadGA } from './loadScript';

function recordLoadTime() {
  // Feature detects Navigation Timing API support.
  if (performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    let timeSincePageLoad = Math.round(performance.now());

    // Sends the timing hit to Google Analytics.
    ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
  } else {
    console.error("Performance disabled");
  }
}

export default function configure(history) {
    return loadGA().
        then(() => {
          ga('create', 'UA-96949345-1', 'auto');
          ga('send', 'pageview', location.pathname);
          history.listen(function (location) {
            ga('send', 'pageview', location.pathname)
          });
          recordLoadTime();
          return ga;
        });
};