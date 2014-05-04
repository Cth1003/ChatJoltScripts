var randomYayMessages = [
  'Yay! <<USER>> is my friend!',
  'Friend accepted: <<USER>>! Bleep bloop beep!',
  '"Huzzah", as CROS might\'ve had me say. <<USER>> is now my friend!',
  'You should all be jealous of <<USER>> for being my friend.',
  'A mortal has been added to my friend collection: <<USER>>',
  '<<USER>> simply couldn\'t resist my manly charm.',
  'I bet I have more friends than you now that <<USER>> is my friend too.',
  'Congratulations, <<USER>>, for making it to my friends list.',
  'WOOP WOOP! <<USER>> is now my friend!',
  'If I was capable of emotion, i\'d be happy <<USER>> is now my friend.',
  'I\'ve decided to accept your friends request, <<USER>>. Don\'t make me regret it.',
  '<<USER>> is now my friend. Forever.',
  '<<USER>> attempts to befriend me. *ITS SUPER EFFECTIVE!*',
  'I have a new friend, <<USER>>, and you don\'t!',
  'Welcome to my exclusive friends list, <<USER>>.',
  'By befriending me, you agree to my terms of use and privacy policy. I now own your soul <<USER>>.',
  'This just in: <<USER>> became my friend!'
];

say(randomYayMessages[Math.floor(Math.random() * randomYayMessages.length)].replace('<<USER>>', friend.nickname), true);
setHandled(true);