# Client of "PD" hoodie shop 

**Version 0.2**

This is a client version of a hoodie shop "Peaceful Disruption". It's an open source so you can use it for free of charge.

## Links

1) [Pages](#pages)
2) [Components](#components)
3) [SCSS](#scss)
4) [App](#app)

## Rules

1) Before your work pull changes from **dev** branch, maybe some new features came out
2) Before releasing your version look for all **TODO** statements in your code
3) Before release don't forget to change the version both in the documentation and pachage.json file

## Restrictions

1) Names of css classes and ids are written in snake case
2) You have to import files into components via global paths (e.g. *components/Head.js*)
3) All Redux reducers are stored separately in *app/\** folder
4) *css/* folder is immutable
5) Every component must have PropTypes and default values (if necessary)
6) Comments are compulsory
7) All files (besides built ones) must be included in [Hierarchy](#hierarchy)
8) The documentation must be rewritten during release-* stage 
9) You use two asterisk symbols when you refer to something, *example*
10) You use pairs asterisk symbols in order to make something noticeable (e.g. shape of some object or special name), **example**
11) A component must be described like **Main info -> Values -> Props -> Functions**
12) If a functional component has a state hook, the state in the documentation must be described like **isMenuOpened / setMenuOpened**
13) If, for instance, a name of a function says "closeMenu", you needn't comment that.

## Required skills

1) React
2) React-router
3) Redux
4) Scss
5) Axios

## Hierarchy

```
Root
│ README.md
│ .gitignore
│ package.json
│ package-lock.json
│ .env
│ .eslintcache
│ debug.log
│ jsconfig.json
│
└───node_modules
│
└───public
│
└───src
    │
    │ App.js
    │ index.js
    └───app 
    │   │ cartReducer.js
    │   │ context.js
    │   │ store.js
    │   │ windowReducer.js
    │
    └───components
    │   │ Header.js
    │   │ Item.js
    │   │ SideBar.js
    │
    └───css
    │
    └───fonts
    │   │ Kalam-Regular.ttf
    │   │ Righteous-Regular.ttf
    │
    └───img
    │
    └───pages
    │   │ Main.js
    │
    └───scss
    │   │ _init.scss
    │   │ _item.scss
    │   │ index.scss
    │   │ main.scss
```

## App

### App.js

```
window.addEventListener('resize', () => {
  const windowSize = document.getElementsByTagName('html')[0].clientWidth;
  store.dispatch({ type: 'windowSize/resize', payload: windowSize });
});
```

### cartReducer.js

This is a reducer for the shopping cart. Initial value looks like **{ items: [] }**. Items array takes whole objects of items.

Actions:
1) cart/pushElement **pushes whole payload into state.items array, so you can add one or several items**

### context.js

Contains all global static values, for instance images or domain.

Contexts:
1) infoContext **Contains information about domain**.

### store.js

This is a file where all reducers are combined into one root reducer. Middleware adds reduxt dev tools extention for browsers.

### windowReducer.js

Gives information about current window resolution. Shape **{ windowSize: document.getElementsByTagName('html')[0].clientWidth }**.

Actions:
1) windowSize/resize **changes information about the size of window**

## Components

### Header.js

Header that contains a search and the shopping cart.

Values:
1) windowSize
2) items **items from the shopping cart**

### Item.js

Block of an item containing a name, price and a link to the item. Used in main and shop pages.

Values:
1) domain
   
Props:
1) _id
2) name
3) price **in dollars**
4) img

### SideBar.js

Side bar that has several links. Those are links to: main page, store, instagram.

Values:
1) windowSize
2) pathname **current subdirectory**
3) menuOpened / setMenuOpened

Functions:
1) openMenu

## Pages

### Main.js

Carries recently added items in the shop.

## SCSS

1) _init.scss **holds the collections of colors, mixins, font-face's and so on**
2) _item.scss **styles for *Item.js* component**
3) index.scss **determines the main css rules throughtout all css files**
4) main.scss **styles for *Main.js* page**