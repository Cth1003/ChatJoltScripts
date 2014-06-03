var lookupRegexes = [
  /\b(?:look ?up|search|google|(?:NSA|FBI) (?:file|record)s?)(?: for| about)?:? (.+)\b/i
];

var noLookups = [
  'I don\'t know!',
  'Good question! Ask someone else!',
  'I have no idea.',
  'Not a clue!',
  'Beep bloop beep! Term not found!',
  'Not sure. Try Bing.'
];

var handled = false;
if (message.hasMyName) {
  for (var i = 0; i < lookupRegexes.length; i += 1) {
    var match = lookupRegexes[i].exec(message.content.replace(/["']/ig, ''));
    if (match != null) {
      var what = match[1].trim();
      var lookup = google(what, false);
      if (typeof lookup.result == 'object' && typeof lookup.result.results == 'object' && Array.isArray(lookup.result.results.items) && lookup.result.results.items.length > 0) {
        var results = lookup.result.results.items;
        var text = '';
        for (var j = 0; j < Math.min(results.length, 3); j += 1)
          text += (j + 1) + '. ' + results[j].link + ' ';
        say(text.substring(0, text.length - 1));
      }
      else
        say(noLookups[Math.floor(Math.random() * noLookups.length)]);
      
      handled = true;
      setHandled(true);
      break;
    }
  }
}

var shouldRun = !handled && (isSerious().result == false);
if (shouldRun) {
  var defineRegexes = [
    /\b(?:define|definition of|definition for|explain|expl[ae]nation of|expl[ae]nation for):? (.+)\b/i,
    /\bwhat(?: does| is|'?s)? (?:an? )?(.+?)(?: mean|'?s meaning|'?s definition|'?s expl[ae]nation)\b/i,
    /\bwhat(?: does| is|'?s)? (?:an? )?([^ ]+?)\??$/i
  ];

  var noDefinitions = [
    'I don\'t know!',
    'Good question! Ask someone else!',
    'I have no idea.',
    'Not in my vocabulary.',
    'Not a clue!',
    'Beep bloop beep! Definition not found!',
    'Not sure. Try Google.'
  ];

  var manualDefinitions = {
    'chatjolt': 'Me. A fun/utility bot for GameJolt\'s chat.',
    'gamejolt': 'The best website for indie game lovers and developers. My home.',
    'gen chat': 'GameJolt\'s general chat room. It will never be as active as it were back in the good ol\' days till CROS decides to dock it.',
    'general chat': 'GameJolt\'s general chat room. It will never be as active as it were back in the good ol\' days till CROS decides to dock it.',
    'dev chat': 'GameJolt\'s developer chat room. Even though the description clearly says developer talk only, it\'s rare to stumble upon actual development talk. Windows vx Linux discussions don\'t count.',
    'developer chat': 'GameJolt\'s developer chat room. Even though the description clearly says developer talk only, it\'s rare to stumble upon actual development talk. Windows vx Linux discussions don\'t count.',
    'developers chat': 'GameJolt\'s developer chat room. Even though the description clearly says developer talk only, it\'s rare to stumble upon actual development talk. Windows vx Linux discussions don\'t count.',
    'mp chat': 'GameJolt\'s multiplayer chat room. It\'s a ghost town we send people who want to play slendytubbies, pokemon 3D and SAO to.',
    'multiplayer chat': 'GameJolt\'s multiplayer chat room. It\'s a ghost town we send people who want to play slendytubbies, pokemon 3D and SAO to.',
    'lp chat': 'GameJolt\'s let\'s player chat room. Discuss about your "awesome" channel or latest video. Bounce links to each other without ever commenting on any of them. A haven for shameless advertisers.',
    'lets play chat': 'GameJolt\'s let\'s player chat room. Discuss about your "awesome" channel or latest video. Bounce links to each other without ever commenting on any of them. A haven for shameless advertisers.',
    'lets plays chat': 'GameJolt\'s let\'s player chat room. Discuss about your "awesome" channel or latest video. Bounce links to each other without ever commenting on any of them. A haven for shameless advertisers.',
    'lets player chat': 'GameJolt\'s let\'s player chat room. Discuss about your "awesome" channel or latest video. Bounce links to each other without ever commenting on any of them. A haven for shameless advertisers.',
    'lets players chat': 'GameJolt\'s let\'s player chat room. Discuss about your "awesome" channel or latest video. Bounce links to each other without ever commenting on any of them. A haven for shameless advertisers.',
    'cros': 'The owner of GameJolt. He likes beans because he likes to fart. Dragonborn.',
    'fernando': 'Definition not found. Did you mean \'awesome\'?',
    'fern': '1. Short for Fernando. 2. A young pretty girl with red hair!',
    'awesome': '1. Something Americans use to describe everything. 2. Fernando',
    'alice': 'A GameJolt user. Knows how to make pizza, loves Anime to the point of speaking fluid Japanese. Should\'be been a mod ages ago.',
    'jason gould': 'A constant fact in GameJolt space and time. He\'s never offline.',
    'nik': 'A GameJolt moderator. The god and creator of Corrupted Universe, proud author of one of the finest games GJ has ever seen and regardless of wether he admits it, is a future rockstar.',
    'gn0me': 'A GameJolt moderator. Not to be confused with lawn gn0mes, this gnome carries a banhammer instead of a pickaxe. Uses browsers nobody ever heard of and then complains about compatibility issues.',
    'honno': 'A GameJolt moderator. Faps way too much to be considered healthy, god knows to what. Hates my guts.',
    'kunedon': 'A GameJolt moderator. The kunedons are known to deliver swift, brutal judgements upon GJ sinners. Poor BHD.',
    'zakchaos': 'A GameJolt moderator. Someone who makes games, often badly.',
    'mike macdee': 'A GameJolt moderator. Motherfucker is a jive-ass naysayer.',
    'polan': 'A GameJolt moderator. A creature capable of creating code. He suffers from "motivation" syndrome.',
    'somekid': 'A GameJolt moderator. His avatar portrays a black person but he\'s actually white.',
    'ashley': 'A GameJolt moderator. Self-deprecating indie games developer and sometimes-musician. IS A GUY! Holy shit!',
    'thatbrod': 'A GameJolt moderator. I\'ve never seen that broad.',
    'zack': 'A GameJolt moderator. I keep confusing him with ZakChaos.',
    'orange': 'A GameJolt moderator. The alternative to an apple.',
    'fatalsleep': 'A GameJolt moderator. Claims to hate being called FatalSheep but really, he doesn\'t.',
    'fatalsheep': 'You must mean FatalSleep.',
    'comico': 'A GameJolt moderator. Owns two GMail accounts. One exclusively for the ladies.',
    'barry': 'A GameJolt user. I laugh at him for failing La Noire. Has a deep love-hate relationship with Maya. Seems to struggle understanding the purpose of left shoes.',
    'clonzeh': 'A GameJolt user. Self proclaimed as the answer to division by 0.',
    'mantas': 'A GameJolt user. One of the three founders of the McBumples, has enough unfinished projects to keep Blizzard occupied for at least a decade.',
    'jelly': '1. Being jealous, or hating. 2. A GameJolt user. Procrastinator that likes gooseberry Jell-o™, drawing and enters randomly the chat by saying \'Jello\'. Undefined gender, it\'s a Gumby G Blockhead.',
    'eleuin': 'A GameJolt user. Open source enthuasiast and general badass. Game developer by day, Ninja by night.',
    '420leuin': 'Eleuin\'s dank cousin.',
    'badhairday': 'A GameJolt user. One of the three founders of the McBumples. Banned for slapping swatiskas everywhere.',
    'bhd': 'A GameJolt user. one of the three founders of the McBumples. Banned for slapping swatiskas everywhere.',
    'somewhatredeyed': 'A GameJolt user. He\'s an awesome proper indie game developer. Unlike most of the devs here, he doesn\'t procrastinate and actually achieves his goals!',
    'redeyed': 'A GameJolt user. He\'s an awesome proper indie game developer. Unlike most of us devs here, he doesn\'t procrastinate and actually achieves his goals!',
    'mcbumples': 'A family/cult that formed in GJ after Fernando, Mantas and BHD were renamed to Frumples, Mumpels and Crumples McBumples by CROS after putting swatiskas in their names (idiots). For some reason, many users renamed themselves and joined the fun, reaching at the peak 11 Mcbumples.',
    'jellys gender': 'Undefined.',
    'dark de saint': 'Mantas\'s secret identity, god of death, the king of slaves, he lurks in the shadows of GameJolt.',
    'atloria': '"Watch the skies"',
    'altoria': 'You probably mean Atloria. Pffft... and you call yourself a Nik fanboy.',
    'jupiter hadley': 'A GameJolt user. Hosted the very first official GJ jam (#eastereggjam), is a succesful Let\'s Player who found her voice through surgically removing her nose and overall an awesome person.',
    'jak': 'A GameJolt user. Currently employed as a traffic redlight, but can\'t get a greenlight on steam. Oh, the irony. Sometimes banned.',
    'dr nu': 'A GameJolt user. It was a starry night when Nu confided in me and told me in secret he is infact, not a real doctor.',
    'dr. nu': 'A GameJolt user. It was a starry night when Nu confided in me and told me in secret he is infact, not a real doctor.',
    'lkgames': 'A GameJolt user. Formerly #LKGames, is the only living user (as of time of writing) to put a \'#\' in his name without Fernando giving him hell about it.',
    'nayef mazraani': 'A GameJolt user. Claims to be from Lebanon, but really, he\'s from Egypt. Hates when you mention \'brisk\', and is a shameless pirate. Cyber criminal wanted in 34 districts.',
    'nayef': 'A GameJolt user. Claims to be from Lebanon, but really, he\'s from Egypt. Hates when you mention \'brisk\', and is a shameless pirate. Cyber criminal wanted in 34 districts.',
    'spam': 'What you are doing when trying to make me define spam.',
    'feargeorge': 'A GameJolt user. When he starts talking, the chat IQ drops to 30 regardless of current chat IQ and amount of participants. He adapts, you see.',
    'tom': 'salt',
    'tom van boogart': 'salt',
    'nyan cat': 'A special cat with the ability to morph into a poptart and shoot rainbows out of its ass while flying through space... Forever.',
    'pewdiepie': '1. An overrated Youtube porn star that got popular off pulling faces and screaming "RAPE". 2. A sex move for 12 year olds.',
    'pewds': 'See \'PewDiePie\'.',
    'sony': 'The burn centre for Microsoft during E3.',
    'death is fleeting': 'Your mum is fleeting!',
    'xbox live': 'Hell.',
    'alienware': 'Dell\'s series of overpriced & overrated computers. The Apple of gaming PCs.',
    'parody': 'https://www.youtube.com/watch?v=rflHvYsx0GA',
    'youtube': 'https://www.youtube.com/watch?v=XeRop_FOuws',
    'cops on fire with erections': 'https://www.youtube.com/watch?v=yPbhhqlFERk',
    'yahoo toolbar': 'See: Yahoo VPN Toolbar.',
    'yahoo vpn toolbar': 'Amazing VPN tunneling software, allows you to play games without opening ports on your router. Backend for Hamachi.',
    'ask toolbar': 'A shitty competitor to the awesome Yahoo VPN Toolbar, obviously nowhere near as good. Backend to Tunngle.',
    'tunngle': 'Synonym for inferior.',
    'hamachi': 'Amazing VPN tunnelling software, allows you to play games with friends with no requirement to open ports. Requires Yahoo VPN Toolbar backend.',
    'slendytubbies': 'Winner of over 100,000.5 awards, rated 10/10 PERFECT by IGN. We present to you, the best game ever to be played thru Hamachi!',
    'pewdening': 'A massive invasion of retarded pewdiepie fans to a game, website or online community. Usually results in overwhelming said service to the point of being unusable and general dumbification of the existing user-base.',
    'chef willy': 'The bestest chef ever. Chef Willy Diggelmann has become an icon and is known throughout the land for his exquisite foods and steamy conversations. He likes the bum bum and the year 1985.'
  }

  if (message.hasMyName) {
    for (var i = 0; i < defineRegexes.length; i += 1) {
      var match = defineRegexes[i].exec(message.content.replace(/["']/ig, ''));
      if (match != null) {
        var what = match[1].trim();
        var innerMatch = /^['"]?(?:the )?(.*)['"]?/i.exec(what);
        if (innerMatch != null)
          what = innerMatch[1].trim();

        var definition = manualDefinitions[what.toLowerCase()];
        if (typeof definition == 'string')
          say(definition);
        else {
          definition = define(what, 250);
          if (typeof definition.result == 'string')
            say(definition.result);
          else
            say(noDefinitions[Math.floor(Math.random() * noDefinitions.length)]);
        }
        setHandled(true);
        break;
      }
    }
  }
}