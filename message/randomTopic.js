var triggers = [
  'say something',
  'do something',
  'be random',
  'be interesting',
  'random fact',
  'random topic',
  'sheldon cooper',
  'something random',
  'something interesting',
  'random things',
  'random stuff',
  'interesting things',
  'interesting stuff',
  'diversion',
  'make conversation'
];

if (message.hasMyName) {
  var lowerCase = message.content.toLowerCase();
  for (var i = 0; i < triggers.length; i++)
    if (lowerCase.indexOf(triggers[i]) != -1) {
      var apiResult = randomTopic();
      if (apiResult.result) {
        say(apiResult.result);
        setHandled(true);
      }
      break;
    }
}