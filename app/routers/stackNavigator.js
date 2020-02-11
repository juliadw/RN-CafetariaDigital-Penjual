import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Chart from '../screens/Chart'
import Account from '../screens/Account';
import Auth from '../screens/AuthFirstOpen';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Verification from '../screens/Verification';
import Process from '../screens/Chart/Processing';
import Foods from '../screens/Foods';
import Drinks from '../screens/Drinks';
import EditFood from '../screens/EditFood';
import DetailFoods from '../screens/DetailFoods';
import ScanCodeQR from '../screens/ScanQR';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Foods: {
      screen: Foods,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Drinks: {
      screen: Drinks,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    EditFood: {
      screen: EditFood,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    DetailFoods: {
      screen: DetailFoods,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const UserAuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
      tabBarVisible: true
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
      tabBarVisible: false
      }
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
      tabBarVisible: false
      }
    },
    Verification: {
      screen: Verification,
      navigationOptions: {
      tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const ChartStack = StackNavigator(
  {
    Chart: {
      screen: Chart,
      tabs: Process,
      navigationOptions: {
        tabBarVisible: true
      }
    },
    Process: {
      screen: Process,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: true } }
);

export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

export const AuthStack = StackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        tabBarVisible: false
      }
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false
    }
  }
);

export const ScanCodeQRStack = StackNavigator(
  {
    ScanCodeQR: {
      screen: ScanCodeQR,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);