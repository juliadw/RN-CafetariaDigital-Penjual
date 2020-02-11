/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { ScrollView, Image, Alert, TouchableOpacity } from 'react-native';
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
import PropTypes from 'prop-types';

import styles from './styles';
import I18n from '../../../i18n';
import IMAGES from '../../../configs/images';
import SvgTime from '../../../../assets/svgs/Time';

import { COLOR_BASE_PRIMARY_MAIN } from '../../../styles';

export default class Component extends React.Component {
  // _onPress = () => {
  //   this.props.navigation.navigate('ScanCodeQR');
  // };
  _onPress = () => {
    this.props.navigation.navigate('Home');
  };
  clickHandler = () => {
    Alert.alert('Floating Button Clicked');
  };

  renderList() {
    return (
      <Container style={{ backgroundColor: COLOR_BASE_PRIMARY_MAIN }}>
        <Content style={styles.content}>
          <ScrollView>
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
                  <Text style={styles.price}>{I18n.t('price')}</Text>
                </Right>
              </CardItem>
            </Card>
          </ScrollView>
        </Content>
      </Container>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.menu}>
            <View style={styles.containerCard} />
            {this.renderList()}
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this._onPress}
              style={styles.TouchableOpacityStyle}
            >
              <Image
                // eslint-disable-next-line global-require
                source={require('../../../../assets/images/Keranjang.png')}
                style={styles.FloatingButtonStyle}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
