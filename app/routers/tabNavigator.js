import React from 'react';
import { TabNavigator } from 'react-navigation';
import { HomeStack, ChartStack, AccountStack } from './stackNavigator';
import TabBarBottom from '../components/elements/TabBarBottom';
import TabBarIcon from '../components/elements/TabBarIcon';
import Home from '../../assets/svgs/Home';
import Chart from '../../assets/svgs/Chart';
import Account from '../../assets/svgs/Account';
import { COLOR_BASE_PRIMARY_MAIN } from '../styles';

const COLOR_DARK_GREY = '#797979';
const COLOR_GREY = '#bdbdbd';
const COLOR_WHITE = '#ffffff';

const createTab = ({ stack, label, image, iconStyle, badge }) => ({
  screen: stack,
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: label,
    tabBarIcon: ({ tintColor }) => (
      <TabBarIcon
        label={label}
        isActive={tintColor === COLOR_BASE_PRIMARY_MAIN}
        icon={tintColor === COLOR_BASE_PRIMARY_MAIN ? image.active : image.inactive}
        iconStyle={[iconStyle, { height: 30, width: 30, tintColor }]}
        badge={badge}
        navigation={navigation}
      />
    )
  })
});

const navigatorConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: true,
  lazy: true,
  swipeEnabled: false,
  animationEnabled: true,
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    activeTintColor: COLOR_BASE_PRIMARY_MAIN,
    inactiveTintColor: COLOR_GREY,
    style: {
      borderTopWidth: 0,
      justifyContent: 'space-between',
      backgroundColor: COLOR_WHITE,
      height: 60
    },
    labelStyle: {
      color: COLOR_DARK_GREY
    },
    tabStyle: {},
    indicatorStyle: {
      backgroundColor: COLOR_WHITE
    }
  }
};

const createTabNavigator = (tabDefinations = []) => {
  const tabs = tabDefinations.map(createTab);
  return new TabNavigator(tabs, navigatorConfig);
};

export const AppStack = createTabNavigator([
  {
    stack: HomeStack,
    image: {
      active: <Home active />,
      inactive: <Home />
    }
  },
  {
    stack: ChartStack,
    image: {
      active: <Chart active />,
      inactive: <Chart />
    }
  },
  {
    stack: AccountStack,
    image: {
      active: <Account active />,
      inactive: <Account />
    }
  }
]);

export default { AppStack };
