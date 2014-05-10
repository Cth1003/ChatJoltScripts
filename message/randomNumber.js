if (message.hasMyName) {
  var lowerCase = message.content.toLowerCase();
  if (lowerCase.indexOf("random number") != -1) {
    say(Math.round(Math.random() * 10000000));
    setHandled(true);
    break;
  }
}