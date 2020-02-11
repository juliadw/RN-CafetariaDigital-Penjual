/* eslint-disable global-require */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { TouchableOpacity, Modal, Image, Alert, ScrollView } from 'react-native';
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
import { BottomSheet } from 'react-native-btr';

import styles from './styles';
import I18n from '../../../i18n';
import IMAGES from '../../../configs/images';
import SvgTime from '../../../../assets/svgs/Time';
import SvgDelete from '../../../../assets/svgs/Delete';
import SvgSuccess from '../../../../assets/svgs/Success';
import { COLOR_BASE_PRIMARY_MAIN, FONT_HEADLINE5_PRIMARY, FONT_SIZE_OVERLINE } from '../../../styles';
import { redsky } from '../../../styles/colors';
import SvgClose from '../../../../assets/svgs/Close';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDelete: false,
      isProcess: false
    };
    this.openModal = this.openModal.bind(this);
    this.processModal = this.processModal.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }
  openModal(visible) {
    this.setState({ isDelete: visible });
  }
  // batalModal(visible) {
  //   this.setState({ isBatal: visible });
  // }
  // SuccesBatalModal(visible) {
  //   this.setState({ isSuccessBatal: visible });
  // }
  processModal(visible) {
    this.setState({ isProcess: visible });
  }
  closeModal1() {
    this.setState({ isDelete: false });
  }
  closeModal2() {
    this.setState({ isProcess: false });
  }
  // closeModalBatal() {
  //   this.setState({ isBatal: false });
  // }
  // closeModalBatalSucces() {
  //   this.setState({ isSuccessBatal: false });
  // }

  close() {
    // eslint-disable-next-line no-useless-return
    return;
  }

  process = () => {
    // eslint-disable-next-line react/prop-types
    this.props.navigation.navigate('Process');
  };
  clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
  _toggleBottomNavigationView = () => {
    // Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };

  renderSuccess() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Right>
          <TouchableOpacity onPress={() => this.closeModal1()} style={styles.closeModal}>
            <SvgClose />
          </TouchableOpacity>
        </Right>
        <Text style={[FONT_HEADLINE5_PRIMARY, styles.textBatal]}>Batalkan transaksi pesanan ?</Text>
        <Image source={IMAGES.batalPesan} style={styles.imageBatal} />
        <Right>
          <TouchableOpacity style={styles.batalkan} onPress={() => this.closeModal1()}>
            <Text style={[FONT_SIZE_OVERLINE, redsky]}>Batalkan transaksi</Text>
          </TouchableOpacity>
        </Right>
      </View>
    );
  }

  // renderBatalInput() {
  //   return (
  //     <View style={{ alignItems: 'center' }}>
  //       <Right>
  //         <TouchableOpacity onPress={() => this.closeModalBatal()} style={styles.closeModal}>
  //           <SvgClose />
  //         </TouchableOpacity>
  //       </Right>
  //       <Text style={[FONT_HEADLINE5_PRIMARY, styles.textBatal]}>Batalkan Transaksi</Text>
  //       <View style={styles.textAreaContainer}>
  //         <TextInput
  //           style={styles.textArea}
  //           underlineColorAndroid="transparent"
  //           placeholder="Alasan membatalkan transaksi pesanan..."
  //           placeholderTextColor="grey"
  //           numberOfLines={10}
  //           multiline
  //         />
  //       </View>
  //       <View>
  //         <TouchableOpacity style={styles.batalLanjut} onPress={() => this.SuccesBatalModal()}>
  //           <Text>Lanjutkan</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // }
  // renderSuccessBatal() {
  //   return (
  //     <View style={{ alignItems: 'center' }}>
  //       <Text style={[FONT_HEADLINE5_PRIMARY, styles.textSuccess]}>Makanana Berhasil di hapus</Text>
  //       <Image source={IMAGES.batalPesan} style={styles.imageBatal} />
  //       <Right>
  //         <TouchableOpacity style={styles.batalkan} onPress={() => this.batalModal()}>
  //           <Text style={[FONT_SIZE_OVERLINE, redsky]} onPress={() => this.closeModalBatalSucces()}>
  //             Kembali
  //           </Text>
  //         </TouchableOpacity>
  //       </Right>
  //     </View>
  //   );
  // }

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
      <Container style={{ backgroundColor: COLOR_BASE_PRIMARY_MAIN }}>
        <Content style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card style={styles.card}>
              <CardItem style={styles.cardBody}>
                <Left>
                  <Thumbnail source={IMAGES.profileUser} style={styles.thumbnail} />
                  <Body>
                    <TouchableOpacity onPress={this._toggleBottomNavigationView}>
                      <View style={styles.icon}>
                        <Text style={styles.customers}>{I18n.t('customers')}</Text>
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
                          onPress={() => {
                            this.processModal(!this.state.processModal);
                          }}
                        >
                          <SvgSuccess />
                        </TouchableOpacity>
                      </View>

                      <Text style={styles.ordered}>{I18n.t('ordered')}</Text>
                      <Text style={styles.ordered}>{I18n.t('thats')}</Text>
                    </TouchableOpacity>
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
          {/* <Modal
            animationType="fade"
            visible={this.state.isBatal}
            onRequestClose={() => this.close()}
            transparent
          >
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderBatalInput()}</View>
            </View>
          </Modal> */}
          {/* <Modal
            animationType="fade"
            visible={this.state.isSuccessBatal}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
            transparent
          >
            <View style={styles.modal}>
              <View style={styles.cardModal}>{this.renderSuccessBatal()}</View>
            </View>
          </Modal> */}
          <View style={styles.menu}>
            <View style={styles.containerCard} />
            {this.renderList()}
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.clickHandler}
              style={styles.TouchableOpacityStyle}
            >
              <Image
                // We are making FAB using TouchableOpacity with an image
                // We are using online image here
                source={require('../../../../assets/images/Keranjang.png')}
                // You can use you project image Example below
                // source={require('./images/float-add-icon.png')}
                style={styles.FloatingButtonStyle}
              />
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
