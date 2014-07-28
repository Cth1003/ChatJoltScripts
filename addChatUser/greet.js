var excludeUsers = [78378, 25584, 2810, 2167];

var userGreetings = {
  '4481': [
    'Aaah! Nik is online! Someone bug him about Atloria!',
    'A future rockstar has entered the chat.'
  ],
  '7808': [
    'A sheep has entered the chat.'
  ],
  '9828': [
    'A jive-ass naysayer has joined the chat.'
  ],
  '18600': [
    'A brisk loving Egyptian has entered the chat.',
    'So I heard you like brisk.',
    'Isn\'t brisk the best?'
  ],
  '19980': [
    'Jupiter Hadley, pro LPer, joined the chat.',
    'A most dedicated GJ future editor joined the chat.',
    'Jupijupijupijupi! Hi.',
    'Jupiter Hadley has entered the chat. Bug her about reading the damn controls!',
    'Every let\'s player should read the controls before playing the game *cough*jupi*cough*'
  ],
  '28945': [
    'Jelly on a plate!'
  ],
  '228286': [
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
  'Be glorified in <<USER>>\'s presence.',
  'I feel so much safer now that <<USER>> is here.',
  '<<USER>> has entered! Hide!',
  'Is it a bird? Is it a plane? no, it\'s <<USER>>!',
  'Behold in amazement and admiration as <<USER>> appears.',
  'Bleep boop beep! Mod <<USER>> has entered the chat.',
  'Run! <<USER>> has arrived!',
  'Oh hey <<USER>>! I was just talking about how awesome you are! WHAT A COINCIDENCE!',
  '<<USER>> has arrived, packing a huge banhammer. *cough*'
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
  possibleGreetings = possibleGreetings.concat(userGreetings[user.id.toString()]).concat(userGreetings[user.id.toString()]);
if (getPermissionLevel(user.id, roomId).result > 0)
  possibleGreetings = possibleGreetings.concat((isSerious().result) ? modSrsGreetings : modFunGreetings);

if (possibleGreetings.length > 0 && excludeUsers.indexOf(user.id) == -1) {
  var today = new Date();
  var greetingEntry = storage.greetings[user.id.toString()];
  if (typeof greetingEntry != 'number' || greetingEntry < today.getTime() - 3600000) {
    say(possibleGreetings[Math.floor(Math.random() * possibleGreetings.length)].replace('<<USER>>', user.nickname), { 'ignoreCooldown': true });
    setHandled(true);
  }
  storage.greetings[user.id.toString()] = today.getTime();
  save();
}