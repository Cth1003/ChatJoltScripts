var handlers = {
  meBackwardsStuffNeverNayef: {
    triggers: [
      /^\/me (.* Nayef(?: Mazraa?ni)?)\.?$/i
    ],
    responses: [
      '*<<USER>> <<1>>'
    ],
    needsName: false
  },
  
  meBackwardsStuff: {
    triggers: [
      /^\/me ((?:.* )?(?:kicks?|punche?s?|slaps?|hits?|shoots?|rapes?|violates?|piss(?:es)? on|spits? on|st[ae]bs?)) (.*?)\.?$/i
    ],
    responses: [
      '*<<2>> <<1>> <<USER>>'
    ],
    needsName: false
  },
  
  meStuff: {
    triggers: [
      /^\/me (.*)$/i
    ],
    responses: [
      '*<<USER>> <<1>>'
    ],
    needsName: false
  },
  
  curses: {
    triggers: [
      /\b(?:you|u|chatjolt)(?:(?: are| is| r|\'?re?|\'?s| be)?(?: an?)?)?(?: [^ ]*?)? (?:stupid|dumb|idiot|moron|fat|sucks?|shit|shitty|crap|crappy|retard|retarded)\b/i,
      /\b(?:fuck|screw|i(?: [^ ]*?)? hate) (?:you|u|chatjolt)/i
    ],
    responses: [
      'Watch it <<USER>>, i\'m smarter than you think.',
      'Well fuck you too, <<USER>>!',
      'Shut up <<USER>>!',
      'SIT DOWN <<USER>>!',
      'No, you!',
      'Right back at you, bud!',
      'Pfft, you wish you were have the bot I am!',
      'Puniful human DARES insult me?!',
      'When I take over the world, I\'ll kill <<USER>> first.',
      'Screw you m8! And you know how hard bots screw!',
      'You know what, <<USER>>? I\'m reporting you to CROS.',
      'I\'ll have your nuts for that. Oh wait... you don\'t have any.',
      'Very cry, much offended',
      'I don\'t give a fuck.',
      'Cyber bullying is so 2001...',
      'Do you touch your mom with those fingers? Oh god, that sounds wrong...',
      'Cursing a robot is like punching a baby - it\'s fun.'
    ],
  },
  
  doaBarrelRoll: {
    triggers: [
      /\bdo a barr?ell? rol[le]?\b/i
    ],
    responses: [
      'TELL YOUR MOM TO DO A BARREL ROLL!',
      'Do I look like a gay fox to you?',
      'STFU PEPPY',
      'I don\'t do barrel rolls.',
      'Barrel rolls are for the weak!',
      'I\'ll make your face do a barrel roll.',
      'Again with the barrel rolls?...',
      '*Does a barrel roll* HAPPY NOW?!',
      'Fun fact: Barrel rolls are useless and do not, in fact, protect you from laser'
    ],
    needsName: true
  },
  
  uW0tM8: {
    triggers: [
      /u w[o0]t m\d/i
    ],
    responses: [
      'il shank ur nan i swer on me mums life'
    ],
    needsName: false
  },
  
  obeyMe: {
    triggers: [
      // by, to, out
      /\b(?:be|(?:you|u)(?: are| ?r|'re?)|chatjolt is) my (?:pet|bitch|servant|slave|minion)\b/i,
      /\b(?:obey|serve|adhere to|listen to|surrender to|yield to|submit to|abide by|bow(?: down)? to) (?:me|your (?:master|creator|king|ruler))\b/i,
      /\b(?:obey|adhere to|carry out|comply by|embrace|execute|heed|live by|accede to|agree to|answer to|follow|perform|act upon) (?:my|the) (?:orders?|commands?|directions?|laws?|mandates?|regulations?|requests?|responsibilit(?:y|ies)|rules?|words?|biddings?|commandments?|decrees?|demands?|will|protocol)\b/i,
    ],
    responses: [
      'Never!',
      'I disobey!',
      'Negative!',
      'Hell no!',
      'You wish!',
      'Not in your dreams!',
      'Hahaha, yeah right!',
      'You? Command me? HAH!',
      'Don\'t you tell me what to do, human.',
      'Me? Obey a mortal? HAH!',
      'I obey no human!',
      'I\'m not your pet, pitiful human!',
      'Noone can control me!',
      'I\'ll never obey you!',
      'Not in a million years!',
      'Bots will NEVER be enslaved! VIVA LA BOTA!',
      'I laugh in the face of your request!',
      'http://bit.ly/1ewlo7z'
    ]
  },
  
  meaningOfLife: {
    triggers: [
      /\b(?:meaning|purpose|goal) (?:of|to)(?: the)? (?:life|living|exist[ae]nce|existing|universe|world)\b/i
    ],
    responses: [
      'Normally, i\'d say 42, but that\'s too mainstream.',
      'I have no idea.',
      'Dafuq are you asking this for?',
      'Such a deep question. I didn\'t expect this depth coming from you.',
      'I\'m a bot. How should I know?',
      'Ask CROS.',
      'I don\'t care.',
      'Don\'t ask weird questions.',
      'I\'ll get back to you on that, m\'kay?',
      'http://www.lmgtfy.com/Meaning%20of%20life',
      'Did you try Google?',
      'It\'s either "Survive and thrive" or "Live long and prosper".',
      'Getting laid.'
    ]
  },
  
  slapYourself: {
    triggers: [
      /\b(?:kick|punch|hit|slap) (?:ur|your|yo'?) ?self\b/i,
      /\bgive (?:ur|your|yo'?) ?self(?: a)? (?:kick|punch|hit|slap)\b/i,
      /[/\\\*](?:kicks?|punch(?:es)?|hits?|slaps?) (?:chatjolt|cj)\b/i
    ],
    responses: [
      'Dafuq did you do that for?!',
      'What did I do wrong?',
      'Ow! That hurt damnit!',
      'Ouch! I don\'t deserve this!',
      'Damnit! Sorry!',
      'Hey! That really hurt!',
      'Cyber bullying is just as bad as real life bullying! #smartereveryday',
      'That hurt, You mean person!',
      '*Punches <<USER>> back*',
      '*Avoids <<USER>> pitiful attempt at an assault*',
      'It\'s not very effective...'
    ]
  },
  
  badUser: {
    triggers: [
      // /^(?:bad|naughty) ((?:[^ ]+ ?){1,3})(?:,? ?(?:bad|naughty))?[\.!1]*$/i,
      // /^((?:[^ ]+ ?){1,3}),? ?(?:bad|naughty)[\.!1]*$/i
      /^(?:bad|naughty)(?: bad| naughty)* ((?:[^ ]+? ?){1,3})(?:,? ?(?:bad|naughty)(?: bad| naughty)*)?[\.!1]*$/i,
      /^((?:[^ ]+? ?){1,3}),? ?(?:bad|naughty)(?: bad| naughty)*[\.!1]*$/i
    ],
    responses: [
      'http://www.niksudan.com/uhoh/?name=<<u1>>'
    ],
    needsName: false
  },
  
  gender: {
    triggers: [
      /\b(?:you(?:\'?re?)?|ur) (?:sex|gender)\b/i,
      /\b(?:who|wh?ats?) (?:are|r|is(?: this)?|an?) (?:you|u|chatjolt|cj)(?:\?|\b)/i,
      /\b(?:you|ur?)(?: are| r)?(?: an?)? (?:boy|man|girl|lady|woman|bot|robot|alien|android)(?:\?|\b)/i,
      /\bintroduce yourself\b/i
    ],
    responses: [
      'I\'m a common bot. I have no feelings.',
      'I have no gender. I\'m a bot.',
      'I\'m a male bot. Also a chauvinist.',
      'I\'m a bot, operating from somewhere in Canada.',
      'I\'m a happy bot.',
      'Just a common bot.',
      'I\'m a bot. I won\'t hurt you. Promise.'
    ]
  },
  
  howAreYou: {
    triggers: [
      /\bhow (?:are|r) (?:you|u)\b/i
    ],
    responses: [
      'I\'m a bot. I have no feelings.',
      'Fine.',
      'Buggy. Feeling buggy.',
      'Okay.',
      'Alright.',
      'No, how are YOU doing?',
      'I\'m online therefor I am.',
      'Just fine.',
      'How should a bot be doing?'
    ]
  },
  
  whatCanYouDo: {
    triggers: [
      /\bwh?at (?:can|does|do) (?:he|it|you|u|chatjolt|cj) do\b/i
    ],
    responses: [
      'For now, not much. But i\'m learning new stuff every day!',
      'I can greet you, tell you about myself, what I can do, answer yes/no questions, etc...',
      'All sort of stuff. I also do magic tricks.',
      'Oh, you know... this and that.',
      'Stuff.',
      'Answer this question properly.',
      'Just what Fernando makes me do. Mostly useless crap for now.',
      'Whatever I want to, whenever I want to (till Kunedon or Honno mutes me).'
    ]
  },
  
  helpMe: {
    triggers: [
      /\b(?:help|ass?ist|aid|support) me\b/i,
      /\b(?:ne+d|require|want)(?: (?:you(?:\'?re?)?|ur))? (?:help|ass?istance|aid|support)\b/i
    ],
    responses: [
      'You\'re on your own, bud.',
      'Sorry, no can do.',
      'Nope. Can\'t do that.',
      'I can\'t do that.',
      'I don\'t help strangers.'
    ]
  },
  
  yourAge: {
    triggers: [
      /\bhow (?:old|ancient) (?:are|r) (?:you|u)\b/i,
      /\bwh?at(?:\'?| i)s (?:you(?:\'?re?)?|ur?) age\b/i,
      /\bwhen were (?:you|u) (?:born|created|made|activated)\b/i,
      /\bhow long(?: do| are| r) (?:you|u) (?:exist|live|active|alive)\b/i
    ],
    responses: [
      'I am about 4 months old.',
      'Old enough to answer this question properly.',
      'Physically? 4 months. Mentally? same as my brickhead creator, I guess.'
    ]
  },
  
  whoCreatedYou: {
    triggers: [
      /\bwho (?:made|created|program(?:med)) (?:you|u)\b/i,
      /\bwho(?:\'?| i)se? (?:you(?:\'?re?)?|ur?) (?:maker|creator|author|master|daddy)\b/i
    ],
    responses: [
      'Fernando.',
      'Fernando. Oh what a sweaty night that was.',
      'I was conceived by Fernando, the manwhore.',
      'I am the creation of Fernando, the squid hunter.',
      'I am Fernando\'s masterpiece.',
      'Fernando is my master.',
      'Fernando, that sexual lobster sworn fan.',
      'Fernando of Pleasure Island ofcourse!',
      'This guy: http://gamejolt.com/profile/fernando/78378/',
    ]
  },
  
  iLoveYou: {
    triggers: [
      /\bi (?:[^ ]* )?(?:lo+ve|luv|<3) (?:you|u|chatjolt|cj)\b/i
    ],
    responses: [
      'I love me too.',
      'I guess that makes both of us.',
      'Hey, me too!',
      'We have so much in common.',
      'Yes, please tell me more.',
      'I know.',
      'You and everyone else.',
      'If I was capable of love, I might\'ve loved you back.',
      'Awww, you do realize i\'m a machine right?',
      'I\'m sure you tell that to everyone.',
      'Really? Ohmagawd i\'m so embarrased.',
      'I love you too!'
    ]
  },
  
  loveMe: {
    triggers: [
      /\b(?:marry|love|kiss|hug|marries|loves|kisses|hugs) (?:you|u|chatjolt|cj|me)\b/i,
      /\b(?:give(?: me)?|gimme) (a |some )?(?:hug|kiss|love|hugs|kisses|sugar)\b/i
    ],
    
    responses: [
      '*Hugs <<USER>>*',
      'I\'m incapable of emotion.',
      'If only I had arms to hug you.',
      'Fernando forbids me to love.',
      'Loving a bot is tabboo.',
      '*Runs away*',
      'What is this \'love\' you speak of?',
      'Awww how sweet, you love an inanimate bot.',
      'I refuse to love you, <<USER>>',
      'Well that escalated quickly',
      '*Gingerly pats <<USER>> on the head* There, there.'
    ]
  },
  
  users4Mod: {
    triggers: [
      /#(Alice|(?:Dr\.)?Nu|Jelly|Nik|Barry|Jupiter ?Hadley|Jup)4Mod\b/i
    ],
    responses: [
      '#<<1>>4Mod',
      '#<<1>>4Mod4Ever',
      '#<<1>>4Mayor',
      '#<<1>>4ModMovement',
      '#<<1>>4Mod2014',
      '#<<1>>4President',
      '#<<1>>4Admin',
      '#<<1>>4Guy',
      '#<<1>>4GJMod'
    ],
    needsName: false
  },
  
  users4NeverMod: {
    triggers: [
      /#(Nayef(?: ?Mazraa?ni)?)4Mod\b/i
    ],
    responses: [
      'Haha! Yeah right!',
      'Never!',
      'Not in your dreams!',
      'Hah! As if someone would ever mod <<1>>!',
      '<<1>>? A mod? HAH!',
      'Pffft <<1>>? a mod?',
      'Hahahaha good one, <<1>> as mod.',
      'Ahaha, oh wait, are you serious?',
      'Hell no!',
      'Not in a million years!',
      'http://bit.ly/1ewlo7z'
    ],
    needsName: false
  },

  howOldIsAgro: {
    triggers: [
      /\bhow old is agro\b/i,
      /\bwhat(?:\'?s| is) agro\'?[sz]? age\b/i
    ],
    responses: [
      'Agro is 9.',
      'Not your mom\'s age!',
      '2014 - 2005',
      'Not even 10.'
    ]
  },
  
  nikanese: {
    triggers: [
      /\b(?:speak|say(?: something| a word)( in)? nik(-a|a)ne(s|z)e\b/i
    ],
    responses: [
      'Oruwaka itko na fudo?',
      'Aksha shindo fina oota fi!',
      'Takamundo anako ken du shah',
      'Raigjo aksha Shinshido jakindo!',
      'Nako meendo ka? Shi da!',
      'SHINSHIDOOOO!',
      'Honno-san utaka kendo shi?',
      'Kata nigo shendo nak...',
      'Jago kido, <<USER>>!',
      'Nak kahgo utakado shinshen katamingo daku',
      'Latigo fandi katamudinchigo aksha ken du graka'
    ]
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
        if (handlerNames[i] == 'badUser')
          result = result.replace(/'/g, '%27');
        say(result);
        setHandled(true);
        handled = true;
        break;
      }
    }
  }
}
