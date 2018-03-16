/* global navigator */

import moment from 'moment';

export default function() {

  this.get('/api/adjectives', function() {
    return [
      {id: 1, word: 'able'},
      {id: 2, word: 'active'},
      {id: 3, word: 'adventurous'},
      {id: 4, word: 'afraid'},
      {id: 5, word: 'alert'},
      {id: 6, word: 'amazing'},
      {id: 7, word: 'amused'},
      {id: 8, word: 'angry'},
      {id: 9, word: 'annoyed'},
      {id: 10, word: 'athletic'},
      {id: 11, word: 'bad'},
      {id: 12, word: 'beautiful'},
      {id: 13, word: 'best'},
      {id: 14, word: 'big'},
      {id: 15, word: 'black'},
      {id: 16, word: 'blind'},
      {id: 17, word: 'blue'},
      {id: 18, word: 'bored'},
      {id: 19, word: 'brave'},
      {id: 20, word: 'broken'},
      {id: 21, word: 'busy'},
      {id: 22, word: 'calm'},
      {id: 23, word: 'caring'},
      {id: 24, word: 'careful'},
      {id: 25, word: 'clean'},
      {id: 26, word: 'clumsy'},
      {id: 27, word: 'cold'},
      {id: 28, word: 'confused'},
      {id: 29, word: 'crazy'},
      {id: 30, word: 'curly'},
      {id: 31, word: 'cute'},
      {id: 32, word: 'dark'},
      {id: 33, word: 'dead'},
      {id: 34, word: 'dirty'},
      {id: 35, word: 'dry'},
      {id: 36, word: 'eager'},
      {id: 37, word: 'early'},
      {id: 38, word: 'easy'},
      {id: 39, word: 'empty'},
      {id: 40, word: 'every'},
      {id: 41, word: 'evil'},
      {id: 42, word: 'fair'},
      {id: 43, word: 'fake'},
      {id: 44, word: 'far'},
      {id: 45, word: 'fast'},
      {id: 46, word: 'fat'},
      {id: 47, word: 'fine'},
      {id: 48, word: 'first'},
      {id: 49, word: 'flat'},
      {id: 50, word: 'fluffy'},
      {id: 51, word: 'foolish'},
      {id: 52, word: 'free'},
      {id: 53, word: 'fresh'},
      {id: 54, word: 'gentle'},
      {id: 55, word: 'gifted'},
      {id: 56, word: 'great'},
      {id: 57, word: 'greedy'},
      {id: 58, word: 'green'},
      {id: 59, word: 'gross'},
      {id: 60, word: 'guilty'},
      {id: 61, word: 'hairy'},
      {id: 62, word: 'happy'},
      {id: 63, word: 'hard'},
      {id: 64, word: 'heavy'},
      {id: 65, word: 'helpful'},
      {id: 66, word: 'hidden'},
      {id: 67, word: 'high'},
      {id: 68, word: 'honest'},
      {id: 69, word: 'hot'},
      {id: 70, word: 'hungry'},
      {id: 71, word: 'ill'},
      {id: 72, word: 'important'},
      {id: 73, word: 'itchy'},
      {id: 74, word: 'jolly'},
      {id: 75, word: 'joyful'},
      {id: 76, word: 'kind'},
      {id: 77, word: 'lame'},
      {id: 78, word: 'last'},
      {id: 79, word: 'late'},
      {id: 80, word: 'lazy'},
      {id: 81, word: 'left'},
      {id: 82, word: 'light'},
      {id: 83, word: 'long'},
      {id: 84, word: 'lost'},
      {id: 85, word: 'loud'},
      {id: 86, word: 'low'},
      {id: 87, word: 'lucky'},
      {id: 88, word: 'mad'},
      {id: 89, word: 'near'},
      {id: 90, word: 'nervous'},
      {id: 91, word: 'new'},
      {id: 92, word: 'next'},
      {id: 93, word: 'nice'},
      {id: 94, word: 'odd'},
      {id: 95, word: 'old'},
      {id: 96, word: 'only'},
      {id: 97, word: 'other'},
      {id: 98, word: 'own'},
      {id: 99, word: 'pale'},
      {id: 100, word: 'poor'},
      {id: 101, word: 'proud'},
      {id: 102, word: 'quick'},
      {id: 103, word: 'quiet'},
      {id: 104, word: 'red'},
      {id: 105, word: 'relieved'},
      {id: 106, word: 'rich'},
      {id: 107, word: 'right'},
      {id: 108, word: 'rugged'},
      {id: 109, word: 'sad'},
      {id: 110, word: 'safe'},
      {id: 111, word: 'scaly'},
      {id: 112, word: 'scary'},
      {id: 113, word: 'sharp'},
      {id: 114, word: 'short'},
      {id: 115, word: 'shy'},
      {id: 116, word: 'sick'},
      {id: 117, word: 'slim'},
      {id: 118, word: 'slow'},
      {id: 119, word: 'small'},
      {id: 120, word: 'smart'},
      {id: 121, word: 'smooth'},
      {id: 122, word: 'soft'},
      {id: 123, word: 'sore'},
      {id: 124, word: 'still'},
      {id: 125, word: 'tall'},
      {id: 126, word: 'tasty'},
      {id: 127, word: 'tired'},
      {id: 128, word: 'torn'},
      {id: 129, word: 'warm'},
      {id: 130, word: 'wet'},
      {id: 131, word: 'white'},
      {id: 132, word: 'wide'},
      {id: 133, word: 'wild'},
      {id: 134, word: 'worn'},
      {id: 135, word: 'wrong'},
      {id: 136, word: 'yellow'},
      {id: 137, word: 'young'}
    ]
  })

  this.get('/api/nouns', function() {
    return [
      {id: 1, word: 'adult'},
      {id: 2, word: 'anchor'},
      {id: 3, word: 'ant'},
      {id: 4, word: 'apartment'},
      {id: 5, word: 'arrow'},
      {id: 6, word: 'baby'},
      {id: 7, word: 'ball'},
      {id: 8, word: 'bat'},
      {id: 9, word: 'bear'},
      {id: 10, word: 'beard'},
      {id: 11, word: 'bed'},
      {id: 12, word: 'bell'},
      {id: 13, word: 'bird'},
      {id: 14, word: 'board'},
      {id: 15, word: 'boat'},
      {id: 16, word: 'boy'},
      {id: 17, word: 'bridge'},
      {id: 18, word: 'broom'},
      {id: 19, word: 'burger'},
      {id: 20, word: 'butterfly'},
      {id: 21, word: 'car'},
      {id: 22, word: 'carpet'},
      {id: 23, word: 'cart'},
      {id: 24, word: 'cartoon'},
      {id: 25, word: 'cat'},
      {id: 26, word: 'chair'},
      {id: 27, word: 'chef'},
      {id: 28, word: 'chicken'},
      {id: 29, word: 'child'},
      {id: 30, word: 'cliff'},
      {id: 31, word: 'clown'},
      {id: 32, word: 'coat'},
      {id: 33, word: 'coconut'},
      {id: 34, word: 'cop'},
      {id: 35, word: 'couch'},
      {id: 36, word: 'cow'},
      {id: 37, word: 'desert'},
      {id: 38, word: 'dinosaur'},
      {id: 39, word: 'doctor'},
      {id: 40, word: 'dog'},
      {id: 41, word: 'door'},
      {id: 42, word: 'dragon'},
      {id: 43, word: 'drum'},
      {id: 44, word: 'elephant'},
      {id: 45, word: 'elevator'},
      {id: 46, word: 'eye'},
      {id: 47, word: 'fire'},
      {id: 48, word: 'fish'},
      {id: 49, word: 'flower'},
      {id: 50, word: 'fly'},
      {id: 51, word: 'forest'},
      {id: 52, word: 'fork'},
      {id: 53, word: 'fox'},
      {id: 54, word: 'frog'},
      {id: 55, word: 'giraffe'},
      {id: 56, word: 'girl'},
      {id: 57, word: 'goat'},
      {id: 58, word: 'hammer'},
      {id: 59, word: 'hat'},
      {id: 60, word: 'hero'},
      {id: 61, word: 'hole'},
      {id: 62, word: 'horse'},
      {id: 63, word: 'house'},
      {id: 64, word: 'island'},
      {id: 65, word: 'kite'},
      {id: 66, word: 'knife'},
      {id: 67, word: 'ladder'},
      {id: 68, word: 'lake'},
      {id: 69, word: 'lion'},
      {id: 70, word: 'log'},
      {id: 71, word: 'man'},
      {id: 72, word: 'monkey'},
      {id: 73, word: 'monster'},
      {id: 74, word: 'mop'},
      {id: 75, word: 'mountain'},
      {id: 76, word: 'mouse'},
      {id: 77, word: 'mug'},
      {id: 78, word: 'nose'},
      {id: 79, word: 'nurse'},
      {id: 80, word: 'office'},
      {id: 81, word: 'pants'},
      {id: 82, word: 'pen'},
      {id: 83, word: 'pencil'},
      {id: 84, word: 'penguin'},
      {id: 85, word: 'piano'},
      {id: 86, word: 'pig'},
      {id: 87, word: 'pineapple'},
      {id: 88, word: 'plane'},
      {id: 89, word: 'pond'},
      {id: 90, word: 'pot'},
      {id: 91, word: 'rabbit'},
      {id: 92, word: 'radio'},
      {id: 93, word: 'rake'},
      {id: 94, word: 'river'},
      {id: 95, word: 'robot'},
      {id: 96, word: 'rock'},
      {id: 97, word: 'rocket'},
      {id: 98, word: 'saw'},
      {id: 99, word: 'scissors'},
      {id: 100, word: 'shark'},
      {id: 101, word: 'sheep'},
      {id: 102, word: 'shirt'},
      {id: 103, word: 'shovel'},
      {id: 104, word: 'snake'},
      {id: 105, word: 'spider'},
      {id: 106, word: 'spoon'},
      {id: 107, word: 'squirrel'},
      {id: 108, word: 'stairs'},
      {id: 109, word: 'stick'},
      {id: 110, word: 'stove'},
      {id: 111, word: 'submarine'},
      {id: 112, word: 'sword'},
      {id: 113, word: 'table'},
      {id: 114, word: 'tank'},
      {id: 115, word: 'television'},
      {id: 116, word: 'tent'},
      {id: 117, word: 'tiger'},
      {id: 118, word: 'towel'},
      {id: 119, word: 'tower'},
      {id: 120, word: 'toy'},
      {id: 121, word: 'train'},
      {id: 122, word: 'tree'},
      {id: 123, word: 'truck'},
      {id: 124, word: 'turkey'},
      {id: 125, word: 'vacuum'},
      {id: 126, word: 'villain'},
      {id: 127, word: 'water'},
      {id: 128, word: 'whale'},
      {id: 129, word: 'witch'},
      {id: 130, word: 'wolf'},
      {id: 131, word: 'woman'},
      {id: 132, word: 'zebra'}
    ]
  });

  this.get('/api/verbs', function() {
    return [
      {id: 1, word: 'agreed'},
      {id: 2, word: 'argued'},
      {id: 3, word: 'arrived'},
      {id: 4, word: 'asked'},
      {id: 5, word: 'ate'},
      {id: 6, word: 'attacked'},
      {id: 7, word: 'avoided'},
      {id: 8, word: 'baked'},
      {id: 9, word: 'bathed'},
      {id: 10, word: 'battled'},
      {id: 11, word: 'began'},
      {id: 12, word: 'begged'},
      {id: 13, word: 'believed'},
      {id: 14, word: 'boiled'},
      {id: 15, word: 'bounced'},
      {id: 16, word: 'bowed'},
      {id: 17, word: 'broke'},
      {id: 18, word: 'brought'},
      {id: 19, word: 'built'},
      {id: 20, word: 'bumped'},
      {id: 21, word: 'burned'},
      {id: 22, word: 'called'},
      {id: 23, word: 'came'},
      {id: 24, word: 'cared'},
      {id: 25, word: 'challenged'},
      {id: 26, word: 'changed'},
      {id: 27, word: 'chased'},
      {id: 28, word: 'chewed'},
      {id: 29, word: 'choked'},
      {id: 30, word: 'cleaned'},
      {id: 31, word: 'closed'},
      {id: 32, word: 'continued'},
      {id: 33, word: 'cooked'},
      {id: 34, word: 'coughed'},
      {id: 35, word: 'crashed'},
      {id: 36, word: 'crawled'},
      {id: 37, word: 'created'},
      {id: 38, word: 'cried'},
      {id: 39, word: 'crushed'},
      {id: 40, word: 'cut'},
      {id: 41, word: 'danced'},
      {id: 42, word: 'decayed'},
      {id: 43, word: 'died'},
      {id: 44, word: 'dragged'},
      {id: 45, word: 'drank'},
      {id: 46, word: 'dreamed'},
      {id: 47, word: 'dried'},
      {id: 48, word: 'drowned'},
      {id: 49, word: 'dug'},
      {id: 50, word: 'emptied'},
      {id: 51, word: 'ended'},
      {id: 52, word: 'entered'},
      {id: 53, word: 'escaped'},
      {id: 54, word: 'exploded'},
      {id: 55, word: 'feared'},
      {id: 56, word: 'fell'},
      {id: 57, word: 'fetched'},
      {id: 58, word: 'filled'},
      {id: 59, word: 'finished'},
      {id: 60, word: 'fixed'},
      {id: 61, word: 'flooded'},
      {id: 62, word: 'followed'},
      {id: 63, word: 'found'},
      {id: 64, word: 'froze'},
      {id: 65, word: 'grew'},
      {id: 66, word: 'guarded'},
      {id: 67, word: 'healed'},
      {id: 68, word: 'held'},
      {id: 69, word: 'helped'},
      {id: 70, word: 'hit'},
      {id: 71, word: 'hugged'},
      {id: 72, word: 'hunted'},
      {id: 73, word: 'hurried'},
      {id: 74, word: 'joked'},
      {id: 75, word: 'jumped'},
      {id: 76, word: 'kicked'},
      {id: 77, word: 'killed'},
      {id: 78, word: 'knew'},
      {id: 79, word: 'laughed'},
      {id: 80, word: 'learned'},
      {id: 81, word: 'led'},
      {id: 82, word: 'lied'},
      {id: 83, word: 'lifted'},
      {id: 84, word: 'liked'},
      {id: 85, word: 'listened'},
      {id: 86, word: 'lived'},
      {id: 87, word: 'looked'},
      {id: 88, word: 'lost'},
      {id: 89, word: 'loved'},
      {id: 90, word: 'made'},
      {id: 91, word: 'met'},
      {id: 92, word: 'mixed'},
      {id: 93, word: 'moved'},
      {id: 94, word: 'opened'},
      {id: 95, word: 'paid'},
      {id: 96, word: 'painted'},
      {id: 97, word: 'played'},
      {id: 98, word: 'poked'},
      {id: 99, word: 'pulled'},
      {id: 100, word: 'pushed'},
      {id: 101, word: 'put'},
      {id: 102, word: 'raced'},
      {id: 103, word: 'ran'},
      {id: 104, word: 'reached'},
      {id: 105, word: 'read'},
      {id: 106, word: 'removed'},
      {id: 107, word: 'robbed'},
      {id: 108, word: 'rose'},
      {id: 109, word: 'rushed'},
      {id: 110, word: 'said'},
      {id: 111, word: 'sat'},
      {id: 112, word: 'sent'},
      {id: 113, word: 'set'},
      {id: 114, word: 'slept'},
      {id: 115, word: 'slipped'},
      {id: 116, word: 'sneezed'},
      {id: 117, word: 'sold'},
      {id: 118, word: 'spilled'},
      {id: 119, word: 'spoke'},
      {id: 120, word: 'started'},
      {id: 121, word: 'stopped'},
      {id: 122, word: 'stood'},
      {id: 123, word: 'swam'},
      {id: 124, word: 'talked'},
      {id: 125, word: 'thought'},
      {id: 126, word: 'took'},
      {id: 127, word: 'trusted'},
      {id: 128, word: 'turned'},
      {id: 129, word: 'walked'},
      {id: 130, word: 'wanted'},
      {id: 131, word: 'watched'},
      {id: 132, word: 'went'},
      {id: 133, word: 'woke'},
      {id: 134, word: 'won'},
      {id: 135, word: 'worked'},
      {id: 136, word: 'wrote'},
      {id: 137, word: 'yawned'},
      {id: 138, word: 'yelled'}
    ]
  });

  const order = [1, 2, 3].map(a => [Math.random(), a])
                  .sort((a, b) => a[0] - b[0])
                  .map(a => a[1]);
  const events = [];
  const user = `user${new Date().getTime() - 1519880400000}`;
  const addEvent = (event, data, data2 = '') => {
    events.pushObject({
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      user,
      site: 'BetterPassword',
      scheme: '3Word21',
      mode: 'N/A',
      event,
      data,
      data2
    });
  };
  const getPasswordString = (password) => { return `${password.adjective.word};${password.noun.word};${password.verb.word};${password.image}`; }

  let password1;
  let password2;
  let password3;

  addEvent('register', 'success', '');

  this.get('/api/order', function() {
    return order;
  });

  this.get('/api/events', function() {
    return events;
  });

  this.post('/api/create-password-1', function() {
    addEvent('create', 'start', navigator.userAgent);
  });

  this.post('/api/create-password-2', function() {
    addEvent('create', 'start', navigator.userAgent);
  });

  this.post('/api/create-password-3', function() {
    addEvent('create', 'start', navigator.userAgent);
  });

  this.post('/api/submit-password-1', function(data, request) {
    password1 = JSON.parse(request.requestBody);
    addEvent('create', 'passwordSubmitted', `pw:${getPasswordString(password1)}`);
  });

  this.post('/api/submit-password-2', function(data, request) {
    password2 = JSON.parse(request.requestBody);
    addEvent('create', 'passwordSubmitted', `pw:${getPasswordString(password2)}`);
  });

  this.post('/api/submit-password-3', function(data, request) {
    password3 = JSON.parse(request.requestBody);
    addEvent('create', 'passwordSubmitted', `pw:${getPasswordString(password3)}`);
  });

  this.get('/api/get-password-1', function() {
    return password1;
  });

  this.get('/api/get-password-2', function() {
    return password2;
  });

  this.get('/api/get-password-3', function() {
    return password3;
  });

  this.post('/api/start-authenticate-password', function() {
    addEvent('enter', 'start', navigator.userAgent);
  });

  this.post('/api/submit-authenticate-password', function(data, request) {
    addEvent('enter', 'passwordSubmitted', `pwN:${getPasswordString(JSON.parse(request.requestBody))}`);
  });

  this.post('/api/authenticate-password', function(data, request) {
    const result = JSON.parse(request.requestBody);
    let password;
    if (result.account === 1) {
      password = password1;
    } else if (result.account === 2) {
      password = password2;
    } else if (result.account === 3) {
      password = password3;
    }
    addEvent('login', result.success ? 'success' : 'failure', getPasswordString(password));
  });

  this.get('/api/log', function() {
    return {events};
  });
}
