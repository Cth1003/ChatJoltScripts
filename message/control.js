var notEnoughPermissions = [
  'I don\'t take orders from you',
  'Sir, you aren\'t permitted for this.',
  'Nop, not gonna do it!',
  'I refuse.',
  'You have no authority over me, SON.',
  'I only listen to mods and my creator.',
  'Pfft, I don\'t have to listen to you.',
  'You don\'t command me!',
  'Sorry, can\'t do that without permission.'
];

var handlers = {
  debug: {
    triggers: [
      /^chatjolt debug$/i
    ],
    responses: [],
    permissionLevel: 3
  },
  
  clearScreen: {
    triggers: [
      /\bclear (?:the |tah |da |all )?(?:screen|messages|chat)\b/i
    ],
    
    responses: [
      'Cleared.',
      'The screen is cleared.',
      '*Cleared screen*',
      'Cleard the screen.',
      'Screen has been cleared'
    ],
    permissionLevel: 2
  },
  
  unignore: {
    triggers: [
      /\b(?:(?:don'?t|stop|cease|dun|quit) |un)ignor(?:e|ing)(?: user(?: id)?)? (\d+)(?:[^\?]|$)/i
    ],
    
    responses: [
      'Okay, I won\'t ignore <<TARGET>> anymore.',
      'Fine, i\'ll talk to <<TARGET>> again.',
      'I obey, <<TARGET>> will not be ignored.',
      'Aww, and I liked ignoring <<TARGET>> too.',
      'As much as it pains me, <<TARGET>> is no longer ignored.',
      '<<TARGET>> is now worthy of my responses again.',
      '<<TARGET>> has been unignored.',
      '*Unignoring <<TARGET>>*'
    ]
  },
  
  listIgnored: {
    triggers: [
      /\bwho (?:are|r|is) (?:you|u|chatjolt) ignoring\?/i,
      /\blist ignored\b/i
    ],
    responses: []
  },
  
  isIgnored: {
    triggers: [
      /\bis(?: user(?: id)?)? (\d+) ignored\?/i,
      /\b(?:are |r |is )?(?:you|u|chatjolt) ignoring(?: user(?: id)?)? (\d+)\?/i
    ],
    responses: []
  },
  
  ignore: {
    triggers: [
      /\b(?:ignore|(?:start|begin) ignoring)(?: user(?: id)?)? (\d+)(?:[^\?]|$)/i
    ],
    
    responses: [
      'Okay, <<TARGET>> is ignored.',
      'Done, I don\'t have to talk to <<TARGET>> anymore.',
      'With plesure, <<TARGET>> will be ignored.',
      'Yay, I get to ignore <<TARGET>>!',
      'Why did it take you so long to let me ignore <<TARGET>> anyways?',
      '<<TARGET>> is no longer worthy of my responses.',
      '<<TARGET>> has been ignored.',
      '*Ignoring <<TARGET>>*'
    ]
  },
  
  unserious: {
    triggers: [
      /\b(?:(?:don\'?t|stop|cease|dun|quit) be(?:ing)? |un)(?:serious|srs)\b/i,
      /\b(?:why|y) so (?:serious|srs)\?/i,
      /\bbe(?:come)? (?:fun|chaotic|amusing|funny)\b/i
    ],
    
    responses: [
      'Yay, I can wreck havoc again!',
      'Woop woop for being fun!',
      'Being serious isn\'t my thing anyways.',
      'Whew, I hate being serious.',
      'Finally! Time to have some fun!',
      'I obey. I will not be serious.',
      'Huzzah! I can be myself again!'
    ]
  },
  
  serious: {
    triggers: [
      /\b(?:(?:don\'?t|stop|cease|dun|quit) be(?:ing)? |un)(?:fun|chaotic|amusing|funny)\b/i,
      /\bbe(?:come)? (?:serious|srs)\b/i
    ],
    
    responses: [
      'Fine. I\'ll be serious.',
      'Okay, it\'s all business from now on.',
      'Time to be serious.',
      'Sersious mode: on.',
      'Engaging serious mode.',
      'I obey. Seriously.',
      'From now on I\'m serious.'
    ]
  },
  
  isSerious: {
    triggers: [
      /\b(?:(?:are|r|is) )?(?:you|u|chatjolt)(?: be(?:ing)?)? (?:serious|srs)\?/i
    ],
    responses: []
  },
  
  mute: {
    triggers: [
      /\bgo (?:to sleep|home|away)\b/i,
      /\b(?:shoo|away with you|self destruct|leave|die|sleep mode|gtfo|stfu|terminate|disconnect|be quiet|pipe down)\b/i,
      /\b(?:log ?(?:off|out)|shut ?(?:up|down))\b/i,
      /\bopcode 0x(?:[\dA-F]{4})\b/i
    ],
    responses: [
      'Good bye.',
      'Ok, i\'m out.',
      'I obey.',
      'Gotcha.',
      'Good night.',
      'See you later then.',
      'I didn\'t wanna be here anyways.',
      'Bye.'
    ]
  },
  
  unmute: {
    triggers: [
      /\b(?:come (?:here|back|forth))\b/i,
      /\blog ?[io]n\b/i,
      /\b(?:spe[ea]k |wake |start ?|boot ?)up\b/i,
      /\b(?:talk|speak) to me\b/i,
      /\b(?:start|initialize|connect)\b/i
    ],
    responses: [
      'Hello.',
      'Good morning.',
      'I\'m here.',
      'I never really left.',
      'I obey.',
      'I knew you missed me.',
      'Did you call?',
      'I\'m awake.'
    ]
  },
  
  isMuted: {
    triggers: [
      /\b(?:are|r|is) (?:you|u|chatjolt)(?: be(?:ing)?)? muted?\?/i
    ],
    responses: []
  },
  
  muteYourself: {
    triggers: [
      /\bmute yourself\b/i
    ],
    permissionLevel: 2
  }
}

var permissionLevel = null;
var seriousResult = null;
var mutedResult = null;
var ignoredResult = null;

function getUserDisplayName(userData, index, userId) {
  try {
    if (typeof userData.result == 'object' && userData.result.response.success == 'true' ) {
      var user = userData.result.response.users[index];
      return (typeof user.developer_name == 'string' && user.developer_name != '') ? user.developer_name : user.username;
    }
    return userId.toString();
  }
  catch (err) {
    return userId.toString();
  }
}

if (message.hasMyName) {
  var handled = false;
  var handlerNames = Object.keys(handlers);
  for (var i = 0; i < handlerNames.length && handled == false; i += 1) {
    var handler = handlers[handlerNames[i]];
    for (var j = 0; j < handler.triggers.length; j += 1) {
      var match = handler.triggers[j].exec(message.content);
      if (match != null) {
        if (permissionLevel == null) {
          permissionLevel = getPermissionLevel(message.userId, message.roomId).result;
          seriousResult = isSerious().result;
          mutedResult = isMuted().result;
          ignoredResult = isIgnored(message.userId).result;
        }
        
        var neededPermission = (typeof handler.permissionLevel == 'number') ? handler.permissionLevel : 1;
        if (permissionLevel < neededPermission) {
          if (!ignoredResult && !seriousResult && !mutedResult)
            say(notEnoughPermissions[Math.floor(Math.random() * notEnoughPermissions.length)].replace('<<USER>>', message.userNickname));
        }
        else {
          switch (handlerNames[i]) {
            case 'debug':
              say('Test', { 'ignoreCooldown': true });
              break;
            
            case 'clearScreen':
              var clearStr = 'Clearing the screen, don\'t mind me! ';
              for (var k = 0; k < 1000; k += 1)
                clearStr += '\u2003';
              say(clearStr, { 'ignoreCooldown': true });
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname), { 'ignoreCooldown': true });
              break;
            
            case 'mute':
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname));
              mute();
              break;
            
            case 'unmute':
              unmute();
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname));
              break;
            
            case 'isMuted':
              if (mutedResult === true) {
                unmute();
                say('Yes, I\'m muted.');
                mute();
              }
              else if (mutedResult === false)
                say('No, I\'m not muted.');
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'muteYourself':
              say('5', { 'ignoreCooldown': true });
              say('4', { 'ignoreCooldown': true });
              say('3', { 'ignoreCooldown': true });
              say('2', { 'ignoreCooldown': true });
              say('1', { 'ignoreCooldown': true });
              say('BOOM', { 'ignoreCooldown': true });
              break;
            
            case 'serious':
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname));
              serious();
              break;
            
            case 'unserious':
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname));
              unserious();
              break;
            
            case 'isSerious':
              if (seriousResult === true)
                say('Yes, I\'m serious.');
              else if (seriousResult === false)
                say('No, I\'m not serious.');
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'ignore':
              var result = ignore(+match[1]);
              var displayName = getUserDisplayName(getUserInfo(match[1]), 0, match[1]);
              if (result.result == true)
                say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<TARGET>>', displayName));
              else if (result.result == false)
                say('I\'m already ignoring ' + displayName);
              else
                say('I can\'t ignore ' + displayName + '. I\'m a lousy bot.');
              break;
            
            case 'unignore':
              var result = unignore(+match[1]);
              var displayName = getUserDisplayName(getUserInfo(match[1]), 0, match[1]);
              if (result.result == true)
                say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<TARGET>>', displayName));
              else if (result.result == false)
                say('I\'m not ignoring ' + displayName + ' anyways.');
              else
                say('I failed to unignore ' + displayName + '. I\'m a lousy bot.');
              break;
            
            case 'isIgnored':
              var result = isIgnored(+match[1]);
              var displayName = getUserDisplayName(getUserInfo(match[1]), 0, match[1]);
              if (result.result == true)
                say('Yes, I\'m ignoring ' + displayName);
              else if (result.result == false)
                say('No, I\'m not ignoring ' + displayName);
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'listIgnored':
              var result = listIgnored();
              if (typeof result.result == 'object' && Array.isArray(result.result)) {
                if (result.result.length == 0)
                  say('I\'m not ignoring anyone at the moment.');
                else {
                  var resolvedNames = {};
                  for (var k = 0; k < result.result.length; k += 1)
                    resolvedNames[result.result[k]] = result.result[k];
                  
                  var userData = getUserInfo(result.result);
                  if (typeof userData.result == 'object' && typeof userData.result.response == 'object' && userData.result.response.success == 'true' && Array.isArray(userData.result.response.users)) {
                    for (var k = 0; k < userData.result.response.users.length; k += 1) {
                      var user = userData.result.response.users[k];
                      try {
                        resolvedNames[user.id.toString()] = (typeof user.developer_name == 'string' && user.developer_name != '') ? user.developer_name : user.username;
                      }
                      catch (err) {
                      }
                    }
                  }
                  
                  var ignoredUsers = '';
                  Object.keys(resolvedNames).forEach(function (userId) {
                    ignoredUsers += ', ' + resolvedNames[userId] + ' (' + userId + ')';
                  });
                  say('I\'m ignoring these users: ' + ignoredUsers.substring(2));
                }
              }
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
          }
        }
        setHandled(true);
        handled = true;
        break;
      }
    }
  }
}