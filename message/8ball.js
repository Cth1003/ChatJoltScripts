var randomYesNoAnswers = [
  'Yes.',
  'No.',
  'Definitely.',
  'Absolutely.',
  'Of course.',
  'Probably.',
  'Likely.',
  'Very likely.',
  'Possibly.',
  'That is correct.',
  'Definitely not.',
  'Absolutely not.',
  'Of course not.',
  'Probably not.',
  'Unlikely.',
  'Affirmative.',
  'Negative.',
  'Oh god yes.',
  'Oh god no.',
  'Certainly.',
  'Most certainly.',
  'Certainly not.',
  'Most certainly not.',
  'Hell yeah!',
  'Hell no!',
  'Right.',
  'Wrong.',
  'Yup.',
  'Nope.',
  'Very unlikely.',
  'Possibly not.',
  'That is incorrect.',
  'Maybe.',
  'I don\'t know.',
  'Uhhh... 4?'
];

if (message.hasMyName && message.content.match(/\?[\?!1]*$/)) {
  say(randomYesNoAnswers[Math.floor(Math.random() * randomYesNoAnswers.length)]);
  setHandled(true);
}