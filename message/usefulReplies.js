var handlers = {
  greet: {
    triggers: [
      /\b(?:he+l+o+|hi+5?|he+y+|su+p+|howdy|wagwan|salutations?|greetings?)\b/i,
      /\bwh?at(?:\'?| i)s s?up\b/i,
      /\bw+h?a+[sz]+[au]+p+\b/i,
      /\bgood morning\b/i
    ],
    responses: [
      'Hello <<USER>>.',
      'Hi <<USER>>.',
      'What\'s up <<USER>>?',
      'Sup <<USER>>?',
      'Hey <<USER>>.',
      'Well met, <<USER>>!',
      'Greetings <<USER>>.',
      'Wagwan, <<USER>>!',
      'High five, <<USER>>!',
      'Oh hey <<USER>>!'
    ]
  },
  
  bye: {
    triggers: [
      /\b(?:good ?bye|bye|good ?night)\b/i,
      /\bi(?:\'|m| am) leav(?:e|ing)\b/i,
      /\bi ha(?:f|ve?) (?:2|too?) (?:go|leave)\b/i
    ],
    responses: [
      'Bye <<USER>>.',
      'See you later <<USER>>.',
      'Good bye <<USER>>.',
      'I\'ll miss you, <<USER>>.',
      'Please don\'t leave me <<USER>>!',
      'Talk to you later, <<USER>>.',
      'Later, <<USER>>.',
      'So long <<USER>>, do come back.',
      'Awww, leaving already <<USER>>?'
    ]
  },
  
  youWelcome: {
    triggers: [
      /\b(?:thanks?|thx) (?:you|u|chatjolt)\b/i
    ],
    
    responses: [
      'You welcome!',
      'You are welcome.',
      'No problem.',
      'My pleasure!',
      'Happy to help.',
      'Yes. Be thankful.',
    ]
  }
};

if (message.hasMyName) {
  var handled = false;
  var handlerNames = Object.keys(handlers);
  for (var i = 0; i < handlerNames.length && handled == false; i += 1) {
    var handler = handlers[handlerNames[i]];
    for (var j = 0; j < handler.triggers.length; j += 1) {
      if (handler.triggers[j].test(message.content)) {
        say(handler.responses[Math.floor(Math.random() * handler.responses.length)].replace('<<USER>>', message.userNickname));
        setHandled(true);
        handled = true;
        break;
      }
    }
  }
}
