function atTheTone(now = new Date()) {
  const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty']
  const TWELVES = ['midnight', 'noon']

  let result = 'It is '
  let [hours, minutes] = [now.getHours(), now.getMinutes()]

  // Determine direction: moving away from current hour or toward next hour
  let preposition = `past`
  if (minutes > 30) {
    preposition = `to`
    minutes = 60 - minutes // flip minutes (35 after => 25 until)
    hours = hours === 23 ? 0 : hours + 1 // next hour (8:50 => ten minutes until _nine_)
  }
  let minutesText
  if (minutes === 15) minutesText = 'quarter'
  else if (minutes === 30) minutesText = 'half'
  else { // Numbered minutes; i.e. "seventeen minutes", "twenty minutes", "twenty-two minutes"
    if (minutes < 20) minutesText = ONES[minutes]
    else minutesText = `${TENS[Math.trunc(minutes / 10)]}${minutes % 10 ? '-' : ''}${ONES[minutes % 10]}`
    minutesText += ' minute' + (minutes !== 1 ? 's' : '') // Singular/Plural
  }
  let hoursText = TWELVES[hours / 12] // 0/12 = 0 = midnight, 12/12 = 1 = noon
  let meridian = '' // "in the evening" et al. not needed for midnight, noon
  if (hours % 12) { // If NOT midnight or noon
    hoursText = ONES[hours > 12 ? hours - 12 : hours] // 24 => 12-hour clock
    meridian = ' in the ' + (       // Nested ternary operators equivalent to: meridian = ' in the '
      hours > 17 ? 'evening' :      // if (hours > 17) meridian += 'evening'
        hours > 11 ? 'afternoon' :  // else if (hours > 11) meridian += 'afternoon'
          'morning'                 // else meridian += 'morning'
    )
  }
  result += (minutes > 0 ? `${minutesText} ${preposition} ` : '') + `${hoursText}${meridian}.`
  return result
}

const formatNum = n => n.toString().padStart(2, '0') // Number => Two-char string w/leading zeroes: 1 => "01"
const testTone = (h, m) => console.log(`${formatNum(h)}:${formatNum(m)} =>`, atTheTone(new Date(2020, 0, 4, h, m)))

console.log("All 1,440 times:")
for (let h = 0; h < 24; h++) for (let m = 0; m < 60; m++) testTone(h, m)

console.log("\nTest data array:")
const testData = [
  [10, 11], //called at 10:11am local time
  [18, 30], //called at 6:30pm local time
  [00, 00],
  [12, 00],
  [06, 15],
  [08, 00],
  [12, 45],
  [19, 22],
  [03, 20],
  [21, 59],
  [12, 44],
  [11, 12],
  [23, 58],
  [13, 37]
]
testData.forEach(e => testTone(...e)) // (...e) is same as (e[0], e[1])

const VOICES = ['Alex', 'Daniel', 'Fred', 'Karen', 'Moira', 'Rishi', 'Samantha', 'Tessa', 'Veena', 'Victoria']
const voice = VOICES[Math.floor(Math.random() * Math.floor(VOICES.length))]
const say = require('say')         // https://github.com/marak/say.js/
say.speak(atTheTone(), voice)

console.log(`\nCurrent time by ${voice}:`)
console.log(atTheTone())
