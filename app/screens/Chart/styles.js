import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  FONT_SIZE_CAPTION,
  COLOR_BASE_PRIMARY_MAIN
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color: COLOR_BLACK,
    fontSize: FONT_SIZE_CAPTION,
    fontWeight: 'bold',
    padding: METRICS.doubleBaseMargin,
    marginTop: METRICS.doubleBaseMargin,
    marginLeft: METRICS.doubleBaseMargin
  },

  tabStyle: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN
  },

  textStyle: {
    backgroundColor: COLOR_TRANSPARENT,
    color: COLOR_WHITE,
    fontWeight: 'bold',
    opacity: 0.5
  }
});

export default styles;
