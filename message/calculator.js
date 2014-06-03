var queryRegexes = [
  /\bhow (?:much|many)(?: is| are)?:? (.+)$/i,
  /\b(?:calculate|solve|compute)(?: for)?:? (.+)$/i,
  /\bwhat(?:'?s| is| are)?:? (.+)$/i
];

var noResults = [
  'I don\'t know!',
  'Good question! Ask someone else!',
  'I have no idea.',
  'Failed to compute!',
  'Not a clue!',
  'Beep bloop beep! Cannot compute!',
  'Not sure. Try Google.'
];

if (message.hasMyName) {
  for (var i = 0; i < queryRegexes.length; i += 1) {
    var match = queryRegexes[i].exec(message.content.replace(/["']/ig, ''));
    if (match != null) {
      var what = match[1].trim();
      var answer = google("how much is " + what, true);
      if (typeof answer.result == 'object' && typeof answer.result.widget == 'string')
        say(answer.result.widget);
      else
        say(noResults[Math.floor(Math.random() * noResults.length)]);
      setHandled(true);
      break;
    }
  }
}