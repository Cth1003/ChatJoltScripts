var queryRegexes = [
  /\bhow (?:much|many)(?: is| are)?:? (.+)$/i,
  /\b(?:calculate|solve|compute)(?: for)?:? (.+)$/i,
  /\bwhat(?:'?s| is| are)?:? (.+)$/i
];

var constants = [
  /\b(?:(?:the )?meaning of )?happiness?\b/ig, '420',
  /\b#?blaze ?it ?fa?gg?o?t\b/ig, '420',
  /\b(?:(?:the )?(?:meaning|purpose) of )?life?\b/ig, '42'
];

var noResults = [
  'I don\'t know!',
  'Good question! Ask someone else!',
  'I have no idea.',
  'Failed to compute!',
  'Not a clue!',
  'Beep bloop beep! Cannot compute!',
  'Not sure. Try Google.',
  'What kind of dumbass tries calculating this?'
];

if (message.hasMyName) {
  for (var i = 0; i < queryRegexes.length; i += 1) {
    var match = queryRegexes[i].exec(message.content.replace(/["']/ig, ''));
    if (match != null) {
      var what = match[1].trim();
      for (var j = 0; j < constants.length; j += 2)
        what = what.replace(constants[j], constants[j + 1]);
      var answer = google("how much is " + what, true);
      if (typeof answer.result == 'object' && typeof answer.result.widget == 'string' && answer.result.widget != '')
        say(answer.result.widget);
      else
        say(noResults[Math.floor(Math.random() * noResults.length)]);
      setHandled(true);
      break;
    }
  }
}