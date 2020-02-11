import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  FONT_SIZE_BODY2,
  FONT_SIZE_SUBTITLE1,
  FONT_SIZE_CAPTION,
  FONT_SIZE_BUTTON,
  COLOR_FONT_SECONDARY_DARK,
  COLOR_FONT_PRIMARY_MAIN
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';
import { transparent, white } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE
  },
  headerSpan: {
    height: scale(180),
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },
  icon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(5)
  },
  lefttStyle: { left: METRICS.baseMargin, top: METRICS.doubleSection },
  rightStyle: { top: METRICS.screenBaseMargin, right: METRICS.baseMargin },
  margin: { marginLeft: METRICS.doubleBaseMargin },
  halo: { fontSize: FONT_SIZE_BODY2, color: COLOR_WHITE, top: METRICS.doubleBaseMargin },
  theSeller: { flexDirection: 'row' },
  seller: {
    fontSize: FONT_SIZE_SUBTITLE1,
    fontWeight: 'bold',
    color: COLOR_WHITE,
    left: METRICS.oneMargin,
    top: METRICS.doubleBaseMargin
  },
  cafe: {
    color: COLOR_WHITE,
    opacity: 10,
    fontSize: FONT_SIZE_SUBTITLE1,
    fontWeight: 'bold',
    top: METRICS.doubleBaseMargin,
    left: METRICS.fiveMargin
  },
  menuSeller: { flexDirection: 'row' },
  marginFoods: { top: METRICS.searchBarHeight, left: METRICS.doubleBaseMargin },
  foods: { width: scale(150), height: scale(200) },
  marginDrinks: { top: METRICS.searchBarHeight, left: METRICS.searchBarHeight },
  drinks: { width: scale(150), height: scale(200) },
  padder: {
    top: METRICS.searchBarHeight
  },
  modal: {
    flex: 1,
    width: '100%',
    backgroundColor: transparent,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start'
  },
  cardModal: {
    backgroundColor: white,
    width: scale(250),
    height: scale(400),
    borderRadius: 9,
    marginRight: 10,
    marginTop: 30
    // top: 10,
    // right: 10
    // height: 400,
    // width: 250
  },
  closeModal: {
    top: 10,
    alignItems: 'flex-end',
    right: 10
  },
  card: {
    width: scale(200),
    borderRadius: scale(10)
    // alignContent: 'center',
    // right: 20,
    // top: 50
  },
  cardBody: { height: scale(85) },
  thumbnail: { borderRadius: scale(3), width: 40, height: 40 },
  listCard: {
    marginTop: 20
  },
  ordered: {
    fontSize: 10
  },
  customers: {
    fontSize: 12
  },
  ordered2: {
    fontSize: FONT_SIZE_CAPTION,
    color: COLOR_FONT_SECONDARY_DARK,
    top: 3
  },
  date: {
    fontSize: FONT_SIZE_CAPTION,
    color: COLOR_FONT_SECONDARY_DARK,
    top: 3,
    left: 50,
    paddingHorizontal: 20
  },
  thumbnail2: { borderRadius: scale(3) },
  customers2: {
    fontSize: FONT_SIZE_BUTTON,
    fontWeight: 'bold'
  },
  icon2: { flexDirection: 'row' },
  price: { left: 15, paddingHorizontal: 20 },
  card2: {
    left: METRICS.section
  },
  list: {
    bottom: 250
  },
  pesan: {
    fontWeight: '600',
    color: COLOR_FONT_PRIMARY_MAIN,
    fontSize: 16,
    left: 26
  },
  bottomNavigationView: {
    backgroundColor: COLOR_WHITE,
    width: '100%',
    height: scale(350),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20)
  },
  containerBTNV: { flex: 1, flexDirection: 'column', justifyContent: 'flex-start', paddingHorizontal: 15 },
  detail: {
    padding: 20,
    fontSize: 25,
    fontWeight: '600'
  },
  detailContent: {
    flexDirection: 'row'
  },
  catatan: { top: 20 },
  button: {
    top: 50,
    width: scale(315),
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subject: { left: 10, flexDirection: 'column' }
});

export default styles;
