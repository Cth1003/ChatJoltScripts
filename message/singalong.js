var songLines = [
  // Quest of the Manwhore
  /Gaze into my choco?late eyes?/i,
  'Let my music sterilise',
  /Let my music ster[ai]li[sz]e/i,
  'Give to me your hard earned coin',
  /Give to me your hard earned coin/i,
  'I\'?ll? share with you my tortured groin'
];

for (var i = 0; i < songLines.length; i += 1)
  if (typeof songLines[i] != 'string' && songLines[i].test(message.content.match))
    for (i = i + 1; i < songLines.length; i += 1) {
      if (typeof songLines[i] != 'string')
        continue;
      
      say(songLines[i]);
      setHandled(true);
      i = songLines.length;
      break;
    }