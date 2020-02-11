import React from 'react';
import { Container, Tab, Tabs } from 'native-base';

import styles from './styles';
import Ordered from './Ordered';
import Processing from './Processing';
import Finishing from './Finishing';
import { COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

export default class Component extends React.Component {
  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{
            backgroundColor: COLOR_WHITE,
            width: scale(30),
            height: scale(2),
            marginLeft: scale(45),
            marginRight: scale(45)
            // shadowColor: COLOR_BASE_PRIMARY_MAIN
          }}
        >
          <Tab
            heading="Pesanan"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={{ color: COLOR_WHITE }}
          >
            <Ordered />
          </Tab>
          <Tab
            heading="Di Proses"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={{ color: COLOR_WHITE }}
          >
            <Processing />
          </Tab>
          <Tab
            heading="Selesai"
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.tabStyle}
            textStyle={styles.textStyle}
            activeTextStyle={{ color: COLOR_WHITE }}
          >
            <Finishing />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
