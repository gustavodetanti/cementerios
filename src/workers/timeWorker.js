let timer;
let startTS = Date.now();
let counted = 0;
let countMax = 0;

const initializeSeconds = _seconds => {
  startTS = Date.now();
  counted = 0;
  countMax = _seconds;
};

const calcGapSeconds = () => {
  const gapSecFromStart = Math.floor((Date.now() - startTS) / 1000);
  const gapSecFromLastTime = gapSecFromStart - counted;
  counted += gapSecFromLastTime;
  const overSec = counted > countMax ? counted - countMax : 0;

  return gapSecFromLastTime - overSec;
};

self.addEventListener('message', e => {
  const result = e.data;

  if (result.startsWith('start-timer')) {
    initializeSeconds(parseInt(result.split('_')[1], 10));
    timer = setInterval(() => {
      const gapSeconds = calcGapSeconds();
      for (let i = 0; i < gapSeconds; i++) {
        postMessage('tick');
      }
    }, 1000);
  }

  if (result.startsWith('change-timer')) {
    initializeSeconds(parseInt(result.split('_')[1], 10));
  }

  if (result === 'stop-timer') {
    clearInterval(timer);
  }
});
