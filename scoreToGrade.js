function convertScoreToGradeWithPlusAndMinus(score) {
  if (score > 100 || score < 0) return `INVALID SCORE`;
  if (score < 60) return `F`;
  if (score > 97) return `A+`;

  let letter = `D`;
  if (score > 89) letter = `A`;
  if (score > 79) letter = `B`;
  if (score > 69) letter = `C`;

  let suffix = ``;
  let ones = score % 10;
  if (ones > 7) suffix = `+`;
  if (ones < 3) suffix = `-`;

  return letter + suffix;
}

// function convertScoreToGradeWithPlusAndMinus(score) {
//   if (score > 100 || score < 0) return `INVALID SCORE`;
//   if (score < 60) return `F`;
//   if (score > 97) return `A+`;
//   let r = score % 10;
//   return (score > 89 ? `A`
//         : score > 79 ? `B`
//         : score > 69 ? `C`
//         : `D`).concat(
//             r > 7 ? `+`
//           : r < 3 ? `-`
//           : ``);
// }

// const convertScoreToGradeWithPlusAndMinus = score => 
//   (score > 100 || score < 0) ? `INVALID SCORE`
//     : (score < 60) ? `F`
//     : (score > 97) ? `A+`
//     : (score > 89 ? `A`
//       : score > 79 ? `B`
//       : score > 69 ? `C`
//       : `D`).concat(
//           score % 10 > 7 ? `+`
//         : score % 10 < 3 ? `-`
//         : ``);

// const convertScoreToGradeWithPlusAndMinus = score =>
//   (score > 100 || score < 0) ? `INVALID SCORE` : (score < 60) ? `F` : (score > 97) ? `A+` : 
//     (score > 89 ? `A` : score > 79 ? `B` : score > 69 ? `C` : `D`)
//       .concat(score % 10 > 7 ? `+` : score % 10 < 3 ? `-` : ``);


for (let score = -1; score < 102; score++)
  console.log(score, convertScoreToGradeWithPlusAndMinus(score));
