const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });

    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your Order';
        break;
      default:
        if (route.startsWith('/product/')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Details';
          const paramId = route.substring(route.indexOf('/') + 1);
          pageElement.dataset.id = paramId;
        }
        break;
    }

    const cache = document.querySelector('main');

    cache.innerHTML = '';
    cache.appendChild(pageElement);

    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
