import React from 'react';
import { TouchableOpacity, Modal, Image, Alert } from 'react-native';
import { Container, Content, Thumbnail, Text, Left, Body, Right, View, List, ListItem } from 'native-base';
import { BottomSheet } from 'react-native-btr';
import PropTypes from 'prop-types';
import styles from './styles';
import I18n from '../../i18n';
import IMAGES from '../../configs/images';
import HEADER from '../../components/elements/Header';
import { ENDPOINT } from '../../configs';
import { COLOR_WHITE, FONT_HEADLINE5_PRIMARY, FONT_SIZE_OVERLINE } from '../../styles';
import { redsky } from '../../styles/colors';
import SvgDelete from '../../../assets/svgs/Delete';
import SvgClose from '../../../assets/svgs/Close';
import SvgEdit from '../../../assets/svgs/Edit';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDelete: false,
      isSuccess: false,
      isProcess: false,
      data: [],
      selectedId: ''
    };
    this.openModal = this.openModal.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.processModal = this.processModal.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }
  openModal(visible) {
    this.setState({ isDelete: visible });
  }
  processModal(visible) {
    this.setState({ isProcess: visible });
  }
  closeModal1() {
    this.setState({ isDelete: false });
  }
  closeModal2() {
    this.setState({ isProcess: false });
  }

  close() {
    // eslint-disable-next-line no-useless-return
    return;
  }
  process() {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate('Process');
  }
  _onPress = () => {
    this.props.navigation.navigate('EditFood');
  };
  _toggleBottomNavigationView = () => {
    // Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };

  async deleteItem() {
    try {
      const { selectedId, data } = this.state;
      const result = await ENDPOINT.deleteMenu(selectedId);
      if (result.code === 200) {
        this.setState({ isSuccess: true });
        setTimeout(() => {
          const newData = data.filter(item => item.menuId !== selectedId);
          this.setState({ isDelete: false, isSuccess: false, data: newData });
        }, 1000);
      } else {
        Alert.alert(JSON.stringify(result.data));
      }
    } catch (error) {
      Alert.alert(error);
    }
  }

  renderSuccess() {
    if (!this.state.isSuccess) {
      return (
        <View style={{ alignItems: 'center' }}>
          <Right>
            <TouchableOpacity onPress={() => this.closeModal1()} style={styles.closeModal}>
              <SvgClose />
            </TouchableOpacity>
          </Right>
          <Text style={[FONT_HEADLINE5_PRIMARY, styles.textBatal]}>Hapus makanan dari menu</Text>
          <Image source={IMAGES.batalPesan} style={styles.imageBatal} />
          <Right>
            <TouchableOpacity style={styles.batalkan} onPress={() => this.deleteItem()}>
              <Text style={[FONT_SIZE_OVERLINE, redsky]}>Hapus</Text>
            </TouchableOpacity>
          </Right>
        </View>
      );
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={[FONT_HEADLINE5_PRIMARY, styles.textDelete]}>Makanan berhasil dihapus</Text>
        <Image source={IMAGES.batalPesanSuccess} style={styles.imageDelete} />
        <Text>Kembali</Text>
      </View>
    );
  }

  renderProcess() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Right>
          <TouchableOpacity onPress={() => this.closeModal2()} style={styles.closeModal}>
            <SvgClose />
          </TouchableOpacity>
        </Right>
        <Text style={styles.textProccess}>Masukkan Pesanan kedalam proses </Text>
        <Image source={IMAGES.prosess} style={styles.imageProcess} />
        <View>
          <TouchableOpacity style={styles.lanjut} onPress={() => this.process}>
            <Text>Lanjutkan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderList() {
    return (
      <Container style={{ backgroundColor: COLOR_WHITE }}>
        <HEADER title="Makanan" back />
        <Content style={styles.content}>
          <List style={styles.card}>
            <ListItem avatar noBorder style={styles.cardBody}>
              <Left>
                <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                <Body>
                  <TouchableOpacity onPress={this._toggleBottomNavigationView}>
                    <View style={styles.icon}>
                      <Text style={styles.customers}>{I18n.t('foods')}</Text>
                      <TouchableOpacity
                        style={styles.deleted}
                        onPress={() => {
                          this.openModal(!this.state.openModal);
                        }}
                      >
                        <SvgDelete />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.success}
                        // onPress={() => {
                        //   this.processModal(!this.state.processModal);
                        // }}
                        onPress={this._onPress}
                      >
                        <SvgEdit />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.ordered}>RP. 15.000</Text>
                  </TouchableOpacity>
                </Body>
              </Left>
            </ListItem>
          </List>
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
                <Text style={styles.detail}>Makanan</Text>
                <View style={styles.detailContent}>
                  <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                  <View style={styles.subject}>
                    <Text style={styles.customers}>{I18n.t('foods')}</Text>
                    <Text style={styles.ordered}>RP. 15.000</Text>
                  </View>
                </View>
                <View style={styles.catatan}>
                  <Text style={{ fontWeight: '600' }}>Deskripsi</Text>
                  <Text style={styles.ordered}>
                    Kalori adalah satuan unit yang digunakan untuk mengukur nilai energi yang diperoleh tubuh
                    ketika mengkonsumsi makanan/minuman.
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheet>
        </Content>
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
            visible={this.state.isDelete}
            onRequestClose={() => this.close()}
            transparent
          >
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderSuccess()}</View>
            </View>
          </Modal>
          <Modal
            animationType="fade"
            visible={this.state.isProcess}
            onRequestClose={() => this.close()}
            transparent
          >
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderProcess()}</View>
            </View>
          </Modal>
          <View style={styles.menu}>
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
