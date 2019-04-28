import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';
import { goToAuth } from './src/navigation'
registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  /*Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });*/
  goToAuth()
});