/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable import/first */
/* eslint-disable react-native/no-raw-text */
import React, { Component } from 'react';
import { Container, Header, Content, Text, Left, Body, Right, Title } from 'native-base';
import { Image, TouchableOpacity, View } from 'react-native';
import { IMAGES } from '../../configs';

export default class HeaderTitleSubtitleExample extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesanan')}>
              <Image source={IMAGES.back} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{ color: '#000000' }}>Pembayaran</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginTop: 30 }}>
            <Image source={IMAGES.qr} style={{ height: 170, width: 170 }} />
            <Text style={{ marginTop: 30, color: '#30B27C', fontSize: 15 }}>
              Silahkan berikan kode ini kepada penjual
            </Text>
            <View style={{ width: 330, borderWidth: 1, borderColor: '#c4c4c4', marginTop: 20 }} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 20,
              color: '#c4c4c4',
              marginLeft: 30,
              marginRight: 30
            }}
          >
            <Left>
              <Text>Nomor pemesanan</Text>
            </Left>
            <Right>
              <Text>ASFSAVA</Text>
            </Right>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 5,
              color: '#c4c4c4',
              marginLeft: 30,
              marginRight: 30
            }}
          >
            <Left>
              <Text>Subtotal</Text>
            </Left>
            <Right>
              <Text>Rp. 35.000</Text>
            </Right>
          </View>
        </Content>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginTop: 70 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <View
              style={{
                borderRadius: 5,
                width: 300,
                height: 50,
                marginBottom: 35,
                backgroundColor: '#30B27C',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#ffffff' }}>Pesan Lainya</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
