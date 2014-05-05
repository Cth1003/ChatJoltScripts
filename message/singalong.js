var songLines = [
  // Quest of the Manwhore
  /Gaze into my choco?late eyes?/i,
  'Let my music sterilise',
  /Let my music ster[ai]li[sz]e/i,
  'Give to me your hard earned coin',
  /Give to me your hard earned coin/i,
  'I\'ll share with you my tortured groin',
  /I\'?ll? share with you my tortured groin/i,
  'What you\'re feeling is not weird',
  /What you(?:\'?re?| are) feeling is not w(?:ei|ie)rd/i,
  'You want to burrow in my beard',
  /You want to b[uo]rrow in my beard/i,
  'Gaze upon my chiselled abs',
  /Gaze upon my chisell?ed abs/i,
  'I no longer have the crabs',
  /I no longer have the crabs/i,
  'My rhymes will grab you by the throat',
  /My rh?[iy]me?s will grab you by the throat/i,
  'And ride you like a sturdy goat',
  /And ride you like a sturdy goat/i,
  'I will drown you in my scent',
  /I will drown you in my scent/i,
  'with or without your consent',
  /with or with[ \-]?out your consent/i,
  'I am a whore of some renown',
  /I am a whore of some rek?nown/i,
  'Your buttocks are my hunting ground',
  /Your buttocks are my hunting ground/i,
  'I am a manwhore without peer',
  /I am a man[ \-]?whore without peer/i,
  'Absorbing sex from the atmosphere',
  /(?:bsorbing|sucking) sex from the atmosphere/i,
  'Pressure building like a cyst',
  /Prea?ss?ure building like a c[yi]st/i,
  'I want to share with you love\'s fist',
  /I want to share with you love\'?s fist/i,
  'I\'ll lick your feet, I\'ll wear a collar',
  /I\'?ll? lick your feet\,? I\'?ll? wear a collar/i,
  'I\'ll do anything for a dollar',
  /I\'?ll? do anything for a dollar/i,
  'I will fit you like a glove',
  /I will fit you like a glove/i,
  'More precious than a father\'s love',
  /More prea?ciou?s than a father\'?s love/i,
  'not that i would really know',
  /not that i would really know/i,
  'I like my women rich and young',
  /I like my women rich and young/i,
  'The kiss of yoghurt on my tongue',
  /The kiss of you?gh?urt on my tongue/i,
  'I wield a fleshy latin sword',
  /I [wy]ield a fleshy latin sword/i,
  'Raptor jesus is my lord',
  /Raptor jesus is my lord/i,
  'Let me be your phantom limb',
  /Let me be your phantom limb/i,
  'Crack and yoghurt keeps me slim',
  /Crack and you?gh?urt keeps? me slim/i,
  'Struggling with modernity',
  /Strugg?ll?ing with modernity/i,
  'A whore for all eternity.'
];

for (var i = 0; i < songLines.length; i += 1)
  if (typeof songLines[i] != 'string')
    if (songLines[i].test(message.content))
      for (i = i + 1; i < songLines.length; i += 1) {
        if (typeof songLines[i] != 'string')
          continue;
        
        say(songLines[i]);
        setHandled(true);
        i = songLines.length;
        break;
      }