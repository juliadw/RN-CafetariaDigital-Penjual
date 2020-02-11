import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Container, Left, Right, List, ListItem } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import SvgArrowRight from '../../../assets/svgs/ArrowRight';

export default class Component extends React.Component {
  _changeEmail = async () => {
    this.props.navigation.navigate('ChangeEmail');
  };
  _changePass = async () => {
    this.props.navigation.navigate('ChangeEmail');
  };
  _faq = async () => {
    this.props.navigation.navigate('ChangeEmail');
  };
  _aboutApp = async () => {
    this.props.navigation.navigate('ChangeEmail');
  };
  _Help = async () => {
    this.props.navigation.navigate('ChangeEmail');
  };

  render() {
    return (
      <Container>
        <View style={styles.headAcount}>
          <Image source={IMAGES.profile} resizeMode="contain" style={styles.profile} />
          <View>
            <Text style={styles.user}>{I18n.t('nameUser')}</Text>
            <Text style={styles.inform}>{I18n.t('inform1')}</Text>
            <Text style={styles.inform}>{I18n.t('inform2')}</Text>
          </View>
        </View>
        <View style={styles.listStyle}>
          <List>
            <ListItem style={styles.listItem}>
              <Left>
                <Text style={styles.list}>{I18n.t('email')}</Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <SvgArrowRight onPress={this._changeEmail} />
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.list}>{I18n.t('password')}</Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <SvgArrowRight onPress={this._changePass} />
                </TouchableOpacity>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text style={styles.list}>{I18n.t('abApp')}</Text>
              </Left>
              <Right>
                <TouchableOpacity>
                  <SvgArrowRight onPress={this._aboutApp} />
                </TouchableOpacity>
              </Right>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
