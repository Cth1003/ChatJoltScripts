var userData = getUserInfo([userId]);

var userMutedMessages = [
  'Hahahaha, <<USER>> has been muted!',
  'Oh yes, I do love it when <<USER>> gets muted.',
  'Seeing <<USER>> muted makes me happy.',
  'Silence, <<USER>>! You\'ve been yapping too much!',
  'Shut yo trap <<USER>>!',
  'You had it coming <<USER>>.',
  'When you say stupid things, you get muted, <<USER>>',
  'Roses are red, violets are blue, <<USER>> is muted, and soon you\'ll be too.',
  '<<USER>> is muted, rejoice!',
  '*Bitchslaps <<USER>>* STFU SON!'
];

var userBannedMessages = [
  '<<USER>> is banned!',
  'Would you look at that! <<USER>> got banned!',
  '<<USER>> has joined the exclusive banned club',
  '<<USER>> is no more. May you RIP in pieace.',
  '<<USER>>, you have proven yourself worthy of the banhammer.',
  '<<USER>> has left GameJolt. Forever.',
  '<<USER>> has been banned for wallhack.',
  '<<USER>> has been banned!',
  'It was nice knowing you <<USER>>. BAN!',
  'Smash the <<USER>>s! Smash em! Kuhn! Kuhn! Kuhn! (Banned)'
];

var handled = false;
if (typeof userData.result == 'object' && userData.result.response.success == 'true' ) {
  try {
    var user = userData.result.response.users[0];
    var displayName = (typeof user.developer_name == 'string' && user.developer_name != '') ? user.developer_name : user.username;
    if (user.status == 'Active')
      if (/*isSerious().result*/true)
        say(displayName + ' has been muted.', { 'ignoreCooldown': true, 'roomId': 0 });
      else
        say(userMutedMessages[Math.floor(Math.random() * userMutedMessages.length)].replace('<<USER>>', displayName), { 'ignoreCooldown': true, 'roomId': 0 });
    else
      if (isSerious().result)
        say(displayName + ' has been banned.', { 'ignoreCooldown': true, 'roomId': 0 });
      else
        say(userBannedMessages[Math.floor(Math.random() * userBannedMessages.length)].replace('<<USER>>', displayName), { 'ignoreCooldown': true, 'roomId': 0 });
    handled = true;
  }
  catch (err) {
  }
}

if (!handled)
  if (isSerious().result)
    say('User with ID ' + userId + ' has been muted.', { 'ignoreCooldown': true, 'roomId': 0 });
  else
    say(userMutedMessages[Math.floor(Math.random() * userMutedMessages.length)].replace('<<USER>>', 'User ' + userId), { 'ignoreCooldown': true, 'roomId': 0 });

setHandled(true);