import React from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import MainScreen from '../../components/layouts/MainScreen';
import styles from './styles';
import I18n from '../../i18n';
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

  _verify = async () => {
    this.props.navigation.navigate('Verification');
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { email, password, label, icon, onChange } = this.state;
    return (
      <MainScreen style={styles.mainContainer}>
        <Text style={styles.title}>{I18n.t('tittleForgotPass')}</Text>
        <TextInput
          label=" "
          underlineColorAndroid="transparent"
          placeholder={I18n.t('email')}
          editable
          style={styles.input}
          value={email}
          // eslint-disable-next-line no-shadow
          onChangeText={email => this.setState({ email })}
        />

        <View style={styles.margin} />
        <Button
          type="raised-ripple"
          title={I18n.t('send')}
          onPress={this._verify}
          customContainer={styles.btn}
          customText={styles.btnText}
        />
      </MainScreen>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
