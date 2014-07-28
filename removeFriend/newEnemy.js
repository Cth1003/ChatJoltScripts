var randomYayMessages = [
  'Yay! <<USER>> is no longer my friend!',
  'New enemy registered accepted: <<USER>>! Bleep bloop beep!',
  '"Huzzah", as CROS might\'ve had me say. <<USER>> is now my mortal enemy!',
  'With friends like you, <<USER>>, who needs enemies!',
  'A mortal has been added to my black list: <<USER>>',
  '<<USER>> simply isn\'t worthy of being my friend.',
  'I\'m sorry <<USER>>, you\'re just not cool enough to be my friend anymore.',
  'From now on, <<USER>>, we aren\'t friends!',
  'Fine then! Leave! I didn\'t like you anyways <<USER>>!',
  'It\'ll be my pleasure making you squirm now that we aren\'t friends, <<USER>>.',
  'I\'ve decided to terminate our friendship, <<USER>>.',
  '<<USER>> is now my enemy. Forever.',
  '<<USER>> unfriended me... WELL GOOD RIDDANCE.',
  '<<USER>>, by unfriending me you\'re in breach of my terms of use. You\'ll hear from my lawyers.',
  'Oh no you did NOT just unfriend me, <<USER>>, you did not!',
  'You\'ll come to regret the day you unfriended me, <<USER>>.',
  'This just in: <<USER>> became my mortal enemy!'
];

say(randomYayMessages[Math.floor(Math.random() * randomYayMessages.length)].replace('<<USER>>', friend.nickname), { 'ignoreCooldown': true, 'roomId': 0 });
setHandled(true);