import fontAwesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import { faRss, faThumbsUp } from '@fortawesome/fontawesome-free-solid/';

fontAwesome.library.add(brands, faRss, faThumbsUp);

module.exports = fontAwesome;
