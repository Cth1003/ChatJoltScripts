var anBeforeGenres = ['arcade', 'action', 'adventure'];
var match = message.content.match(/\b(https?:\/\/(?:www\.)?gamejolt\.com\/games\/[^\/]+\/[^\/]+\/\d+\/?)\b/i);
if (match != null) {
  var gameUrl = match[1].toLowerCase();
  var result = getGameInfo(gameUrl);
  if (typeof result.result == 'object') {
    var gameInfo = result.result;
    if (gameInfo.genre.toLowerCase() == 'other')
      gameInfo.genre = 'miscellaneous';
    
    say(gameInfo.title + ', ' + ((anBeforeGenres.indexOf(gameInfo.genre) == -1) ? 'a ' : 'an ') + gameInfo.genre + ' game by ' + gameInfo.author.name + '. Score: ' + gameInfo.ratings.score + ', views: ' + gameInfo.views + ', plays: ' + gameInfo.plays + '.');
    setHandled(true);
  }
}