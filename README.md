This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Libs used on this project

1 - [Rematch](https://github.com/rematch/rematch?target=_blank)<br>
2 - [Axios](https://github.com/axios/axios)<br>
3 - [Styled-components](https://github.com/styled-components/styled-components)<br>
4 - [Seamless-immutable](https://github.com/rtfeldman/seamless-immutable)<br>
5 - [Moment](https://momentjs.com/)<br>
6 - [React-Redux](https://github.com/reduxjs/react-redux)<br>
7 - [React-Native](https://facebook.github.io/react-native)<br>
8 - [Expo](https://expo.io/)<br>
9 - [Jest](https://jestjs.io/)<br>
10 - [React](https://reactjs.org/)<br>


## After you clone this project's repository, run:

**`npm install`** <br>
To install all dependencies;
<br><br>
**`npm run test`** <br>
To run the tests;
<br><br>
**`npm install -g expo-cli`** <br>
To install expo cli.
<br><br>
**`expo start`** <br>
To init the application.<br>
<br>

## The project

This project connects to Agenda Edu`s API and return a list of events, where you can see each event in a diferent page <br>

**FEATURES:**
* Login;
* Show list of events;
* See a particular event and its details;
* Logout;


<br>


**TESTS:**
* Verify auth credentials;
* Verify erros during login;
* Verify if user is ahthenticated to fetch events;
* Verify erros during fetch;


<br>

**OBSERVATIONS:**
* All the functions were implemented outside the class, aiming to keep them in the cache improving the performance instead of always recreating them when the class is instantiated;
* The `infinityScroll`function was implemented manually to avoid the unnecessary addition of external libs;
* The Rematch framework was chosen because it has several characteristics superior to redux, such as generated action creators, async	without middlewares, simple setup and so on. See more on [Comparing Redux & Rematch
](https://github.com/rematch/rematch/blob/master/docs/purpose.md);




