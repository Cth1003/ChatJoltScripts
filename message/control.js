var handlers = {
  ping: {
    triggers: [
      /^(?:chatjolt,? ?)?\/?ping(?: meh?)?[.!?1]*$/i
    ],
    
    responses: [
      'Pong <<MILLIS>>ms.'
    ]
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
      /\b(?:are|r|is) (?:you|u|chatjolt) ignoring(?: user(?: id)?)? (\d+)\?/i
    ],
    responses: []
  },
  
  ignore: {
    triggers: [
      /\bignor(?:e|ing)(?: user(?: id)?)? (\d+)(?:[^\?]|$)/i
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
      /\b(?:(?:don'?t|stop|cease|dun|quit) be(?:ing)? |un)(?:serious|srs)\b/i,
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
      /\b(?:(?:don'?t|stop|cease|dun|quit) be(?:ing)? |un)(?:fun|chaotic|amusing|funny)\b/i,
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
    ]
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
        if (getPermissionLevel(message.userId).result == 0) {
          if (!isIgnored(message.userId))
            say('I don\'t take orders from you.');
        }
        else {
          switch (handlerNames[i]) {
            case 'ping':
              var millis = Math.abs(new Date().getTime() - message.time.millis);
              say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname).replace('<<MILLIS>>', millis));
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
              var result = isMuted();
              if (result.result == true) {
                unmute();
                say('Yes, I\'m muted.');
                mute();
              }
              else if (result.result == false)
                say('No, I\'m not muted.');
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'muteYourself':
              say('5', true);
              say('4', true);
              say('3', true);
              say('2', true);
              say('1', true);
              say('BOOM', true);
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
              var result = isSerious();
              if (result.result == true)
                say('Yes, I\'m serious.');
              else if (result.result == false)
                say('No, I\'m not serious.');
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'ignore':
              var result = ignore(+match[1]);
              if (result.result == true)
                say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<TARGET>>', match[1]));
              else if (result.result == false)
                say('I\'m already ignoring ' + match[1]);
              else
                say('I can\'t ignore ' + match[1] + '. I\'m a lousy bot.');
              break;
            
            case 'unignore':
              var result = unignore(+match[1]);
              if (result.result == true)
                say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<TARGET>>', match[1]));
              else if (result.result == false)
                say('I\'m not ignoring ' + match[1] + ' anyways.');
              else
                say('I failed to unignore ' + match[1] + '. I\'m a lousy bot.');
              break;
            
            case 'isIgnored':
              var result = isIgnored(+match[1]);
              if (result.result == true)
                say('Yes, I\'m ignoring ' + match[1]);
              else if (result.result == false)
                say('No, I\'m not ignoring ' + match[1]);
              else
                say('I don\'t know, I\'m a lousy bot.');
              break;
            
            case 'listIgnored':
              var result = listIgnored();
              if (typeof result.result == 'object' && Array.isArray(result.result)) {
                if (result.result.length == 0)
                  say('I\'m not ignoring anyone at the moment.');
                else {
                  var ignoredUsers = '';
                  for (var i = 0; i < result.result.length; i += 1)
                    ignoredUsers += ', ' + result.result[i];
                  
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