import { loadData } from './src/services/Menu.js';
import Store from './src/services/Store.js';
import Router from './src/services/Router.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
});
