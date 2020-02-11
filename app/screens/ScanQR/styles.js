import { StyleSheet } from 'react-native';
import {
  FONT_SIZE_CAPTION,
  FONT_SIZE_BUTTON,
  COLOR_FONT_SECONDARY_DARK,
  COLOR_BASE_FOOTER_CARD,
  COLOR_FONT_FOOTER_CARD,
  FONT_SIZE_BODY2,
  COLOR_EVENT_BATAL,
  COLOR_WHITE
} from '../../styles';
import { white, transparent, gray20 } from '../../styles/colors';
import METRICS from '../../constants/metrics';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: { top: METRICS.horizontalLineHeight },
  card: {
    left: METRICS.section
  },
  cardBody: { height: scale(85) },
  footerCard: { backgroundColor: COLOR_BASE_FOOTER_CARD, height: scale(30), color: COLOR_FONT_FOOTER_CARD },
  thumbnail: { borderRadius: scale(3) },
  customers: {
    fontSize: FONT_SIZE_BUTTON,
    fontWeight: 'bold'
  },
  ordered: {
    fontSize: FONT_SIZE_CAPTION,
    color: COLOR_FONT_SECONDARY_DARK
  },
  icon: { flexDirection: 'row' },
  deleted: { left: METRICS.section, paddingHorizontal: METRICS.setSearchBarHeight },
  modal: {
    flex: 1,
    width: '100%',
    backgroundColor: transparent,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardModal: {
    backgroundColor: white,
    width: '80%',
    height: '35%',
    padding: METRICS.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9
  },
  closeModal: {
    left: 120,
    top: METRICS.baseMargin
  },
  textBatal: {
    bottom: 45,
    fontSize: FONT_SIZE_BODY2,
    fontWeight: '600'
  },
  imageBatal: {
    width: scale(65),
    height: scale(65),
    top: 0
  },
  batalkan: {
    top: METRICS.searchBarHeight,
    left: 60,
    fontSize: 8,
    fontWeight: '600',
    color: COLOR_EVENT_BATAL
  },
  textProccess: {
    bottom: 80,
    fontSize: FONT_SIZE_BODY2,
    fontWeight: '600'
  },
  imageProcess: {
    width: scale(65),
    height: scale(65),
    bottom: 50
  },
  lanjut: {
    bottom: 20,
    left: 60,
    fontSize: 8,
    fontWeight: '600',
    color: COLOR_EVENT_BATAL
  },
  textAreaContainer: {
    borderColor: gray20,
    borderWidth: 1,
    padding: 2,
    bottom: 25
  },
  textArea: {
    height: 100,
    width: 200,
    bottom: 25,
    justifyContent: 'flex-start'
  },
  batalLanjut: {
    bottom: 5
  },
  textSuccess: {
    bottom: 5
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
