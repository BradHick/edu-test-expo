import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './view/Login';
import Events from './view/Events';
import Event from './view/Events/Component/Event';


const Router = createStackNavigator({
  Events: {
    screen: Events
  },
  Event: {
    screen: Event
  }
}, {
  initialRouteName: 'Events'
});

export default createAppContainer(createSwitchNavigator({
  Login: Login,
  Auth: Router
},
{
  initialRouteName: 'Login'
}));

