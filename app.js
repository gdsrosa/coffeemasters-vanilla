import { loadData } from './src/services/Menu.js';
import Store from './src/services/Store.js';

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});
