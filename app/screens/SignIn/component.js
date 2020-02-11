/* eslint-disable no-console */
import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './style';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import Button from '../../components/elements/Button';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      hidePassword: true
    };
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  _signIn = async () => {
    const { email, password } = this.state;
    const accountData = { email, password };
    try {
      const res = await axios.post(
        'http://ec2-3-84-19-128.compute-1.amazonaws.com:9000/api/cafet/v1/users/login',
        accountData
      );
      console.log(res.data);
      this.props.navigation.navigate('App');
    } catch (error) {
      console.error('MASIH ERROR');
      console.log(error);
    }
  };

  _signUp = async () => {
    this.props.navigation.navigate('SignUp');
  };

  _forgotPass = async () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { email, password } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image source={IMAGES.logo} resizeMode="contain" style={styles.logo} />
        </View>
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('email')}
          editable
          style={styles.inputEmail}
          value={email}
          // eslint-disable-next-line no-shadow
          onChangeText={email => this.setState({ email })}
        />
        <View style={styles.inputPassword}>
          <TextInput
            label=" "
            underlineColorAndroid="transparent"
            placeholder={I18n.t('password')}
            editable
            style={styles.inputPass}
            value={password}
            Icon={this.state.iconName}
            // eslint-disable-next-line no-shadow
            onChangeText={password => this.setState({ password })}
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.touachableButton}
            onPress={this.setPasswordVisibility}
          >
            <Image
              source={
                this.state.hidePassword
                  ? // eslint-disable-next-line global-require
                    require('../../../assets/images/hide.png')
                  : // eslint-disable-next-line global-require
                    require('../../../assets/images/view.png')
              }
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.marginOne} />
        <TouchableOpacity onPress={this._forgotPass} style={styles.forgetPass}>
          <Text style={styles.forgetPass}>{I18n.t('forgetPass')}</Text>
        </TouchableOpacity>

        <Button
          type="raised-ripple"
          title={I18n.t('signin')}
          onPress={this._signIn}
          customContainer={styles.btn}
          customText={styles.btnText}
        />

        <View style={styles.margin} />
        <View style={styles.accountdaftar}>
          <Text style={styles.account}>{I18n.t('account')}</Text>
          <TouchableOpacity onPress={this._signUp} style={styles.daftar}>
            <Text style={styles.daftar}>{I18n.t('daftar')}</Text>
          </TouchableOpacity>
        </View>
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
