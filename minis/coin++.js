const coinFlip = function (skew = 0) {
  let _flips = 0;
  let _heads = 0;
  let _tails = 0;
  let _drift = 0;
  const _skew = skew;

  return {
    heads: function () {
      return _heads;
    },
    tails: function () {
      return _tails;
    },
    flips: function () {
      return _flips;
    },
    skew: function () {
      return _skew;
    },
    drift: function () {
      return _drift; // Not the Initial-D kind of drift
    },
    flip: function (normalizeWeight = 0) { // Optional 0..1
      const _toss = Math.random();
      const _rampUp = _flips < 10 ? _flips / 10 : 1; // Don't oversteer ;)
      const _compensate = _drift * normalizeWeight * _rampUp;
      let _center = 0.5 + _skew + _compensate;

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
    test: function () {
      let _center = 0.5 + _skew;
      let _not = '';
      if (Math.abs(_center - (_heads / _flips)) > 0.05) _not = 'not ';
      return `Is ${_not}near center of distribution`;
    }

  }
}

const coin = coinFlip();

for (toss of [...Array(100)]) console.log(
  coin.flip(1),
  'flip:', coin.flips(),
  'heads:', coin.heads(),
  'tails:', coin.tails(),
  'skew:', coin.skew(),
  'drift:', coin.drift().toFixed(2),
  coin.test()
);