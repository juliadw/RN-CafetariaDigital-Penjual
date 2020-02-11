import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  View
} from 'native-base';

import styles from './styles';
import I18n from '../../../i18n';
import IMAGES from '../../../configs/images';
import SvgTime from '../../../../assets/svgs/Time';

import { COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

export default class Component extends React.Component {
  render() {
    return (
      <Container style={{ backgroundColor: COLOR_BASE_PRIMARY_MAIN }}>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <CardItem style={styles.cardBody}>
              <Left>
                <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                <Body>
                  <View style={styles.icon}>
                    <Text style={styles.customers}>{I18n.t('customers')}</Text>
                  </View>

                  <Text style={styles.ordered}>{I18n.t('ordered')}</Text>
                  <Text style={styles.ordered}>{I18n.t('thats')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={styles.footerCard}>
              <Left>
                <Button transparent>
                  <SvgTime />
                  <Text style={styles.time}>{I18n.t('time')}</Text>
                </Button>
              </Left>
              <Right>
                <Text style={styles.price}>Selesai</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
