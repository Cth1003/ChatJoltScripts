var handlers = {
  fatalSheep: {
    triggers: [
      /\bfatalsheep\b/i
    ],
    responses: [
      'FatalSleep*',
      'FatalSleep...',
      'It\'s FatalSleep, not FatalSheep.',
      'FatalSleep, damnit!',
      'His name is FatalSleep.',
      'You mean FatalSleep',
      'FatalSleep, pls.'
    ],
    needsName: false
  },
  
  loginFamousGames: {
    triggers: [
      /\b(?:how|can(?:\'?t| ?not)).*(?:log[ \-]?in(?: to| with)?|connect(?: to| with)?|join|register(?: to| for| in)?|enter|play).*(?:pokemon ?3d)\b/i
    ],
    responses: [
      'You need to use your GameJolt token. You can find it in the top part of the page right next to your username. Just click "show token".'
    ],
    needsName: false
  },
  
  whereToken: {
    triggers: [
      /\b(?:what(?:\'?s| is)|give m[ey]|gimme).*my token\b/i,
      /\bwhere(?:\'?s| is)?.*token\b/i,
      /\bI (?:want|need).*token\b/i,
      /\b(?:find|locate|get).*my token\b/i
    ],
    responses: [
      'You can find your GameJolt token in the top part of the page right next to your username. Just click "show token".'
    ],
    needsName: false
  },
  
  whatIsToken: {
    triggers: [
      /\bwhat(?:\'?s| is).*token\b/i,
      /\b(?:ask|want|need)s? (?:m[ey] )?(?:for|4).*token\b/i,
      /\b(?:what|how).*(?:do with|use (?:the|this|a|that|my)).*token\b/i
    ],
    responses: [
      'A GameJolt token is like a password for games. You can use it to log in and get highscores and achievements for games here.'
    ],
    needsName: false
  }
};

var handled = false;
var handlerNames = Object.keys(handlers);
for (var i = 0; i < handlerNames.length && handled == false; i += 1) {
  var handler = handlers[handlerNames[i]];
  if (message.hasMyName || handler.needsName == false) {
    for (var j = 0; j < handler.triggers.length; j += 1) {
      var match = message.content.match(handler.triggers[j]);
      if (match != null) {
        var result = handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname);
        for (var k = 1; match.length > k; k += 1) {
          if (result.indexOf('<<' + k + '>>') != -1)
            result = result.replace('<<' + k + '>>', match[k]);
          else if (result.indexOf('<<u' + k + '>>') != -1)
            result = result.replace('<<u' + k + '>>', encodeURIComponent(match[k]));
          else
            break;
        }
        say(result);
        setHandled(true);
        handled = true;
        break;
      }
    }
  }
}
