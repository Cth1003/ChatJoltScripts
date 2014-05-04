var ALL_CAPS_RAGE_REGEX = /^[A-Z0-9!@#$%^&\*\(\)\-_\+=|\~`\[\]\{\}:;"'<,>\.\?\/\\ ]+$/;
var ALL_CAPS_RAGE_EXCLUDE_REGEX = /^[!@#$%^&\*\(\)\-_\+=|\~`\[\]\{\}:;"'<,>\.\?\/\\ ]+$/;

var stfuResponses = [
  'stfu <<USER>>',
  'Shut up <<USER>>',
  'Be quiet <<USER>>',
  'Shush now <<USER>>',
  'Silence <<USER>>',
  'Stop talking <<USER>>',
  'Nobody cares <<USER>>',
  'Go away <<USER>>',
  'Leave now <<USER>>',
  'Nbody likes you <<USER>>',
  'gtfo <<USER>>',
  'I\'m with stupid ^',
  'Mute yourself <<USER>>',
  'You oughta be muted <<USER>>',
  'If I was a mod i\'d mute you <<USER>>',
  'If it were up to me you\'d be muted <<USER>>',
  'silence is a virtue, <<USER>>',
  'keep your trap shut <<USER>>',
  '<<USER>> SIT DOWN SON!'
];

var allCapsRageResponses = [
  'Turn off your capslock!',
  'Mind the capslock m8.',
  'Oi! Stop capslocking!',
  'Let go of the capslock, bud.',
  'Stop with the capslocking!',
  'Put a stop to ALL CAPS RAGE.',
  'Damn son! Leggo of the capslock!',
  'It seems your capslock is stuck.',
  'You forgot your capslock on, sir.',
  'Capslocking sucks. You suck.'
];

var tooLongResponses = [
  'Woah! TL;DR, <<USER>>!',
  'Ew. A wall of text, courtesy of <<USER>>',
  'Oh would you look at that! <<USER>> gave us a wall of text!',
  'It seems <<USER>> did not hear of the "send" key.',
  '<<USER>>, you speak too much. Shush now.',
  'Oi! Don\'t spam walls of text <<USER>>',
  'You and your walls of text <<USER>>... I guess you just like huge, long things *cough*.',
  'TL;DR. Break it up next time <<USER>>.'
];

var now = new Date().getTime();
if (storage.init != true) {
  storage.lastRunTime = now;
  storage.capsLevel = 0;
  storage.init = true;
}

var handled = false;
if ((message.userId == 205584 || message.userId == 236585) && !isIgnored(message.userId)) {
  say(stfuResponses[Math.floor(Math.random() * stfuResponses.length)].replace('<<USER>>', message.userNickname));
  setHandled(true);
  handled = true;
}

var cooldownAmount = (now - storage.lastRunTime) / 1000 / 10;
storage.capsLevel = Math.max(storage.capsLevel - cooldownAmount, 0);
if (handled == false && message.content.length >= 8 && ALL_CAPS_RAGE_REGEX.test(message.content) && !ALL_CAPS_RAGE_EXCLUDE_REGEX.test(message.content)) {
  storage.capsLevel += 1 + message.content.length / 50;
  if (storage.capsLevel >= 3.5) {
    say(allCapsRageResponses[Math.floor(Math.random() * allCapsRageResponses.length)].replace('<<USER>>', message.userNickname));
    storage.capsLevel -= 3.5;
    setHandled(true);
    handled = true;
  }
}

if (handled == false && message.content.length > 300) {
  say(tooLongResponses[Math.floor(Math.random() * tooLongResponses.length)].replace('<<USER>>', message.userNickname));
  setHandled(true);
  handled = true;
}

storage.lastRunTime = now;
save();