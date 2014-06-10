var YOUTUBE_VIDEO_REGEX = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/i;

function nicifyNumber(n) {
  if (n >= 1000000000)
    return (Math.round(n / 10000000) / 100) + 'b';
  else if (n >= 1000000)
    return (Math.round(n / 10000) / 100) + 'm';
  else if (n >= 1000)
    return (Math.round(n / 100) / 10) + 'k'
  return n + '';
}

var match = message.content.match(YOUTUBE_VIDEO_REGEX);
if (match && match[2].length == 11) {
  var result = youtube('video', match[2]);
  if (typeof result == 'object' && typeof result.result == 'object') {
    var snippet = result.result.snippet;
    var statistics = result.result.statistics;
    if (typeof snippet == 'object' && typeof statistics == 'object') {
      var title = snippet.title, channelTitle = snippet.channelTitle;
      if (title.length > 150)
        title = title.substring(0, 150) + '...';
      if (channelTitle.length > 150)
        channelTitle = channelTitle.substring(0, 150) + '...';
      say(title + ', by ' + channelTitle + ' (' + nicifyNumber(statistics.viewCount) + ' views, ' + nicifyNumber(statistics.likeCount) + ' likes, ' + nicifyNumber(statistics.dislikeCount) + ' dislikes)');
      setHandled(true);
    }
  }
}