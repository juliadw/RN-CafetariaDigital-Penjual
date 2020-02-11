/* eslint-disable react-native/no-color-literals */
/* eslint-disable no-undef */
import React from 'react';
import { Image, TouchableOpacity, View, Text, Modal } from 'react-native';
import { Container, Header, Left, Right, Content, List, ListItem, Thumbnail, Body } from 'native-base';
import PropTypes from 'prop-types';
import { BottomSheet } from 'react-native-btr';

import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import SvgSearch from '../../../assets/svgs/Search';
import SvgNotif from '../../../assets/svgs/Notification';
import SvgNotification from '../../../assets/svgs/Notification2';

// const dataArray = [
//   { title: 'Pesanan Masuk', content: 'Lorem ipsum dolor sit amet' },
//   { title: 'Dalam Proses', content: 'Lorem ipsum dolor sit amet' },
//   { title: 'Pesanan Selesai', content: 'Lorem ipsum dolor sit amet' }
// ];

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotif: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal(visible) {
    this.setState({ isNotif: visible });
  }
  closeModal() {
    this.setState({ isNotif: false });
  }
  close() {
    // eslint-disable-next-line no-useless-return
    return;
  }
  _onPress = () => {
    this.props.navigation.navigate('Foods');
  };
  _onPress2 = () => {
    this.props.navigation.navigate('Drinks');
  };
  _onPress3 = () => {
    this.props.navigation.navigate('Search');
  };
  _onPress4 = () => {
    this.props.navigation.navigate('Account');
  };
  _onPress5 = () => {
    this.props.navigation.navigate('Chart');
  };
  // eslint-disable-next-line no-unused-vars
  _onPress6 = () => {
    this.props.navigation.navigate('Chart');
  };
  _toggleBottomNavigationView = () => {
    // Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };

  renderNotif() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModal}>
          <SvgNotification />
        </TouchableOpacity>
        <List style={styles.listCard}>
          <ListItem avatar noBorder>
            <View style={styles.card}>
              <View style={styles.cardBody}>
                <Left>
                  <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                  <Body>
                    <View>
                      <Text style={styles.customers}>{I18n.t('customers')}</Text>
                    </View>

                    <Text style={styles.ordered}>{I18n.t('ordered')}</Text>
                    <Text style={styles.ordered}>{I18n.t('thats')}</Text>
                  </Body>
                </Left>
              </View>
            </View>
          </ListItem>
        </List>
      </View>
    );
  }

  renderList() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPress5}>
          <Text style={styles.pesan}>Pesanan</Text>
        </TouchableOpacity>
        <List style={styles.card2}>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <TouchableOpacity onPress={this._toggleBottomNavigationView}>
                  <View style={styles.icon2}>
                    <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                    <Text style={styles.price}>Rp.15.000</Text>
                  </View>
                  <View style={styles.icon2}>
                    <Text style={styles.ordered2}>12.12 A.M</Text>
                    <Text style={styles.date}>17/08/19</Text>
                  </View>
                </TouchableOpacity>
              </Body>
            </Left>
            <BottomSheet
              visible={this.state.visible}
              // setting the visibility state of the bottom shee
              onBackButtonPress={this._toggleBottomNavigationView}
              // Toggling the visibility state on the click of the back botton
              onBackdropPress={this._toggleBottomNavigationView}
              // Toggling the visibility state on the clicking out side of the sheet
            >
              <View style={styles.bottomNavigationView}>
                <View style={styles.containerBTNV}>
                  <Text style={styles.detail}>Detail Pesanan</Text>
                  <View style={styles.detailContent}>
                    <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                    <View style={styles.subject}>
                      <Text style={styles.customers}>{I18n.t('customers')}</Text>
                      <Text style={styles.ordered}>Ayam Goreng, Lele Goreng</Text>
                      <Text style={styles.ordered}>RP. 15.000</Text>
                    </View>
                  </View>
                  <View style={styles.catatan}>
                    <Text style={{ fontWeight: '600' }}>Catatan</Text>
                    <Text style={styles.ordered}>
                      Kalori adalah satuan unit yang digunakan untuk mengukur nilai energi yang diperoleh
                      tubuh ketika mengkonsumsi makanan/minuman.
                    </Text>
                  </View>
                </View>
              </View>
            </BottomSheet>
          </ListItem>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <View style={styles.icon2}>
                  <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                  <Text style={styles.price}>Rp.15.000</Text>
                </View>
                <View style={styles.icon2}>
                  <Text style={styles.ordered2}>12.12 A.M</Text>
                  <Text style={styles.date}>17/08/19</Text>
                </View>
              </Body>
            </Left>
          </ListItem>
        </List>
        <TouchableOpacity onPress={this._onPress6}>
          <Text style={styles.pesan}>Sedang Di Proses</Text>
        </TouchableOpacity>
        <List style={styles.card2}>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <View style={styles.icon2}>
                  <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                  <Text style={styles.price}>Rp.15.000</Text>
                </View>
                <View style={styles.icon2}>
                  <Text style={styles.ordered2}>12.12 A.M</Text>
                  <Text style={styles.date}>17/08/19</Text>
                </View>
              </Body>
            </Left>
          </ListItem>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <View style={styles.icon2}>
                  <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                  <Text style={styles.price}>Rp.15.000</Text>
                </View>
                <View style={styles.icon2}>
                  <Text style={styles.ordered2}>12.12 A.M</Text>
                  <Text style={styles.date}>17/08/19</Text>
                </View>
              </Body>
            </Left>
          </ListItem>
        </List>
        <TouchableOpacity onPress={this._onPress5}>
          <Text style={styles.pesan}>Selesai</Text>
        </TouchableOpacity>
        <List style={styles.card2}>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <View style={styles.icon2}>
                  <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                  <Text style={styles.price}>Rp.15.000</Text>
                </View>
                <View style={styles.icon2}>
                  <Text style={styles.ordered2}>12.12 A.M</Text>
                  <Text style={styles.date}>17/08/19</Text>
                </View>
              </Body>
            </Left>
          </ListItem>
          <ListItem avatar noBorder style={styles.cardBody}>
            <Left>
              <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail2} />
              <Body>
                <View style={styles.icon2}>
                  <Text style={styles.customers2}>{I18n.t('customers')}</Text>
                  <Text style={styles.price}>Rp.15.000</Text>
                </View>
                <View style={styles.icon2}>
                  <Text style={styles.ordered2}>12.12 A.M</Text>
                  <Text style={styles.date}>17/08/19</Text>
                </View>
              </Body>
            </Left>
          </ListItem>
        </List>
      </View>
    );
  }

  renderMenu() {
    return (
      <Container>
        <Header span style={styles.headerSpan}>
          <Left style={styles.lefttStyle}>
            <TouchableOpacity onPress={this._onPress4}>
              <Image source={IMAGES.icon} resizeMode="contain" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.halo}>{I18n.t('halo')}</Text>
            <View style={styles.theSeller}>
              <Text style={styles.seller}>{I18n.t('seller')}</Text>
              <Text style={styles.cafe}>{I18n.t('cafe')}</Text>
            </View>
          </Left>
          <Right style={styles.rightStyle}>
            <TouchableOpacity>
              <SvgSearch onPress={this._onPress3} />
            </TouchableOpacity>
            <View style={styles.margin} />
            <TouchableOpacity>
              <SvgNotif
                onPress={() => {
                  this.openModal(!this.state.openModal);
                }}
              />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.menuSeller}>
          <TouchableOpacity style={styles.marginFoods} onPress={this._onPress}>
            <Image source={IMAGES.foods} resizeMode="contain" style={styles.foods} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.marginDrinks} onPress={this._onPress2}>
            <Image source={IMAGES.drinks} resizeMode="contain" style={styles.drinks} />
          </TouchableOpacity>
        </View>
        {/* <Content padder style={styles.padder}>
          <Accordion dataArray={dataArray} expanded={0} />
        </Content> */}
      </Container>
    );
  }
  render() {
    // eslint-disable-next-line react/prop-types
    // const { isDelete } = this.state;
    return (
      <Container>
        <Content>
          <Modal
            animationType="fade"
            visible={this.state.isNotif}
            onRequestClose={() => this.close()}
            transparent
          >
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderNotif()}</View>
            </View>
          </Modal>
          <View style={styles.menu}>
            <View style={styles.containerCard} />
            {this.renderMenu()}
          </View>
          <View style={styles.list}>
            <View style={styles.containerCard} />
            {this.renderList()}
          </View>
        </Content>
      </Container>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
