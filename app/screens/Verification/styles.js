import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_FONT_TERTIARY_GREY,
  FONT_TERTIARY_REGULAR,
  FONT_SIZE_CAPTION,
  FONT_SIZE_BODY1,
  FONT_SIZE_TITLE,
  COLOR_FONT_PRIMARY_MAIN
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  verify: {
    width: scale(140),
    height: scale(170),
    alignSelf: 'center'
  },
  verifyTitle: {
    fontWeight: '600',
    fontSize: FONT_SIZE_TITLE,
    top: 60,
    left: 26
  },
  verifyDsc: {
    color: COLOR_FONT_TERTIARY_GREY,
    fontFamily: FONT_TERTIARY_REGULAR,
    fontSize: FONT_SIZE_BODY1,
    top: 70,
    left: 26
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: scale(1),
    padding: scale(1),
    top: scale(85),
    alignSelf: 'center'
  },
  TextInputStyle: {
    height: scale(50),
    width: scale(60),
    left: 20,
    borderColor: COLOR_BASE_PRIMARY_MAIN,
    fontSize: FONT_SIZE_BODY1,
    textAlign: 'center'
  },
  btn: {
    width: scale(260),
    height: scale(40),
    backgroundColor: COLOR_FONT_PRIMARY_MAIN,
    left: 25
  },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_CAPTION
  },
  margin: { top: 30 }
});
export default styles;
