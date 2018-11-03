import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('equipes');
  this.route('evenementiels');
  this.route('entrainements');
  this.route('competiteurs');
});

export default Router;
