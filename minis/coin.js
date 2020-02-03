const coinFlip = () => {
  let _flips = 0;
  let _heads = 0;
  let _tails = 0;
  let _drift = 0; // Not the Initial-D kind of drift
  const _center = 0.5; // 0.0 - <0.5 is heads; 0.50 - <1.0 is tails

  return {
    heads() {
      return _heads;
    },
    tails() {
      return _tails;
    },
    flips() {
      return _flips;
    },
    drift() {
      return _drift;
    },
    flip() {
      const _toss = Math.random();

      let _landedOn;
      if (_toss < _center) {
        _landedOn = 'heads';
        _heads++;
      } else {
        _landedOn = 'tails';
        _tails++;
      }

      _flips++;
      _drift = (_heads / _flips) - _center;

      return _landedOn;
    },
    test(tolerancePercent = 10) {
      if (_flips === 0) return ('Coin has never been flipped.')
      const _headsPercentage = Math.round(_heads / _flips * 100);
      const _tailsPercentage = Math.round(_tails / _flips * 100);

      const _s = _flips === 1 ? '' : 's';
      let _not = '';

      if (Math.abs(_headsPercentage - _tailsPercentage) > tolerancePercent) _not = ' not';

      return `Of ${_flips} flip${_s}, ${_headsPercentage}/${_tailsPercentage} is${_not} near 50/50.`;
    }
  }
}

const coin = coinFlip();
const coin2 = coinFlip();

for (toss of Array(100)) console.log(
  coin.flip(),
  'flip:', coin.flips(),
  'heads:', coin.heads(),
  'tails:', coin.tails(),
  'drift:', coin.drift().toFixed(4),
  coin.test()
);

console.log("\nSecond coin:", coin2.flip(), coin2.test(100))
console.log("First coin:", coin.flip(), coin.test())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures