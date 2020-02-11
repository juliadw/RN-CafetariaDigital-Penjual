import { StyleSheet } from 'react-native';
import { COLOR_FONT_PRIMARY_MAIN, COLOR_WHITE } from '../../styles';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_FONT_PRIMARY_MAIN
  },
  bottomNavigationView: {
    backgroundColor: COLOR_WHITE,
    width: '100%',
    height: scale(450),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10)
  }
});

export default styles;
