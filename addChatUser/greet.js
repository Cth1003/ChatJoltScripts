var excludeUsers = [78378];

var userGreetings = {
  "228286": [
    '*a wild NT appears*'
  ]
};

var modFunGreetings = [
  'Your lord and ruler <<USER>> has entered the chat.',
  'The majestic <<USER>> has arrived.',
  'The all mighty <<USER>> has arirved.',
  'Tremble in excitement as <<USER>> enters the chat.',
  'Have no fear, <<USER>> is here.',
  'Quick, Stop talking about porn! <<USER>> is here!',
  '<<USER>> has decided to grace us with his presence.',
  'I feel so much safer now that <<USER>> is here.',
  '<<USER>> has entered! Hide!',
  'Is it a bird? Is it a plane? no, it\'s <<USER>>!',
  'Behold in amazement and admiration as <<USER>> appears.',
  'Bleep boop beep! Mod <<USER>> has entered the chat.',
  'Run! <<USER>> has arrived!',
  'Oh hey <<USER>>! I was just talking about how awesome you are! WHAT A COINCIDENCE!',
  '<<USER>> has arrived, packing his huge banhammer. *cough*'
];

var modSrsGreetings = [
  '<<USER>> has arrived.',
  '<<USER>> has entered the chat.'
]

if (!storage.init) {
  storage.greetings = {};
  storage.init = true;
}

var possibleGreetings = [];
if (typeof userGreetings[user.id.toString()] == 'object')
  possibleGreetings.push(userGreetings[user.id.toString()]);
if (getPermissionLevel(user.id, roomId).result > 0)
  possibleGreetings.push((isSerious().result) ? modSrsGreetings : modFunGreetings);

if (possibleGreetings.length > 0 && excludeUsers.indexOf(user.id) != -1) {
  var today = new Date();
  var greetingEntry = storage.greetings[user.id.toString()];
  if (typeof greetingEntry != 'number' || greetingEntry < today.getTime() - 3600000) {
    say(possibleGreetings[Math.floor(Math.random() * possibleGreetings.length)].replace('<<USER>>', user.nickname), { 'ignoreCooldown': true });
    setHandled(true);
  }
  storage.greetings[user.id.toString()] = today.getTime();
  save();
}