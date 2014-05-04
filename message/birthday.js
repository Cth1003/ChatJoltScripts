var oldies = [
  'Another year for your back means another year that won\'t suck.',
  'Another year older, none the wiser.',
  'Another year, another new place that aches.',
  'At least you\'re not as old as you will be next year!',
  'Better to be over the ground than under it!',
  'Birthdays are good for you. Statistics show that the people who have the most live the longest.',
  'Birthdays are like boogers. The more you have the harder it is to breathe.',
  'It has been scientifically proven that too many birthdays will kill you.',
  'It\'s nice to be young, healthy and full of energy. Can you remember?!',
  'People say that the good die young, so I guess that makes you an old bad ass!',
  'Smile while you still have teeth!',
  'You have reached the age where all compliments will be followed by "for your age."'
];

var generics = [
  'Is it getting hotter in here or is it just all the candles on your cake?',
  'It\'s ok to light the candles on your birthday cake now. I\'ve already alerted the fire department.',
  'Just imagine the things you\'d want to hear on your birthday and assume I said them.',
  'May you live as long as you want to, and want to as long as you live.',
  'May you live to be old and toothless.',
  'So far, this is the oldest you have ever been.',
  'We know that wisdom comes with age. You see, you don\'t have all the signs of aging!',
  'You are as old as you look.',
  'You are only young once, but you can be immature for a lifetime.'
];

if (!storage.init) {
  storage.birthdays = {};
  storage.init = true;
}

var today = new Date();
var birthdayEntry = storage.birthdays[message.userId.toString()];
if (typeof birthdayEntry == 'object' && birthdayEntry.lastGrats < today.getTime() - 86400000) {
  var birthday = new Date(birthdayEntry.date);
  var begin = new Date(today.getUTCFullYear(), birthday.getUTCMonth(), birthday.getUTCDate());
  var end = new Date(today.getUTCFullYear(), birthday.getUTCMonth(), birthday.getUTCDate() + 1);
  today = today.getTime();

  if ((begin.getUTCFullYear() < end.getUTCFullYear() && (today >= begin.getTime() || today < end.getTime())) || (today >= begin.getTime() && today < end.getTime())) {
    var possibleCongratulations = (birthdayEntry.isOld) ? generics.concat(oldies) : generics;
    say('Happy birthday ' + message.userNickname + '! ' + possibleCongratulations[Math.floor(Math.random() * possibleCongratulations.length)]);
    birthdayEntry.lastGrats = today;
    save();
    setHandled(true);
  }
}