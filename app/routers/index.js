import { SwitchNavigator } from 'react-navigation';
import { AppStack } from './tabNavigator';
import { OnBoardingStack, SplashScreenStack, UserAuthStack, AccountStack, HomeStack, AuthStack, ScanCodeQRStack } from './stackNavigator';

export default SwitchNavigator(
  {
    ScanCodeQR: ScanCodeQRStack,
    OnBoarding: OnBoardingStack,
    SplashScreen: SplashScreenStack,
    Auth: AuthStack,
    UserAuth: UserAuthStack,
    Account:AccountStack,
    Home:HomeStack,
    App: AppStack
  },
  {
    initialRouteName: 'SplashScreen'
  }
);
