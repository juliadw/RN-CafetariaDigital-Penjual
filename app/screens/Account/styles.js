import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  FONT_SIZE_HEADLINE6,
  FONT_SIZE_CAPTION,
  COLOR_FONT_TERTIARY_INACTIVE
} from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE
  },
  headAcount: { flexDirection: 'row', top: METRICS.doubleSection, left: METRICS.doubleBaseMargin },
  profile: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(8)
  },
  user: { color: COLOR_BLACK, fontSize: FONT_SIZE_HEADLINE6, fontWeight: 'bold', left: METRICS.baseMargin },
  inform: {
    color: COLOR_FONT_TERTIARY_INACTIVE,
    fontSize: FONT_SIZE_CAPTION,
    left: METRICS.baseMargin
  },
  listStyle: { top: METRICS.doubleSearchBarHeight }
});

export default styles;
