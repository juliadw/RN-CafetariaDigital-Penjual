import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_FONT_PRIMARY_MAIN,
  FONT_SIZE_TITLE,
  FONT_SIZE_CAPTION,
  COLOR_GREY_PRIMARY
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: COLOR_WHITE
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    top: 60,
    left: 25
  },
  input: {
    height: scale(40),
    width: scale(260),
    borderWidth: scale(1),
    borderRadius: scale(5),
    color: COLOR_GREY_PRIMARY,
    borderColor: COLOR_GREY_PRIMARY,
    padding: METRICS.baseMargin,
    fontSize: FONT_SIZE_CAPTION,
    paddingHorizontal: scale(20),
    left: 25,
    top: 100
  },
  btn: { width: scale(260), height: scale(40), backgroundColor: COLOR_FONT_PRIMARY_MAIN, top: 100, left: 25 },
  btnText: {
    color: COLOR_WHITE,
    fontSize: FONT_SIZE_CAPTION
  },
  marginOne: { marginBottom: METRICS.fiveMargin },
  margin: { marginBottom: 15 }
});

export default styles;
