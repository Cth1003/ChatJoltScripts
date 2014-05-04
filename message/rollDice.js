var ROLL_REGEX = /roll (\d*)d(\d+)/i;

if (message.hasMyName) {
  var match = message.content.match(ROLL_REGEX);
  if (match != null) {
    var diceCount = (match[1] == '') ? '1' : match[1];
    var sides = match[2];
    var valid = true;
    try {
      diceCount = parseInt(diceCount);
      sides = parseInt(sides);
      if (diceCount < 1 || diceCount > 10 || sides < 2 || sides > 1000)
        throw new Exception('Invalid dice or dice-side count');
    }
    catch (err) {
      say('I can roll 1-10 dice with 2-1000 sides only.');
      valid = false;
    }
    
    if (valid) {
      var rolls = '';
      for (var i = 0; i < diceCount; i += 1)
        rolls += ', ' + (1 + Math.floor(Math.random() * sides)).toString();
      say('Rolls: ' + rolls.substring(2));
    }
    setHandled(true);
  }
}
