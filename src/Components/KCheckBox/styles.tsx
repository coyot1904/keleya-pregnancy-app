import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  checkboxContainer: {
    width: '100%',
    paddingLeft: Metrics.measure(27),
    paddingRight: Metrics.measure(27),
    flexDirection: 'row',
    marginBottom: Metrics.measure(0),
    marginTop: Metrics.measure(5),
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: Metrics.measure(3),
    fontSize: Metrics.measure(13),
    paddingRight: Metrics.measure(7),
    color: colors.GREYISH_BROWN,
  },
});
