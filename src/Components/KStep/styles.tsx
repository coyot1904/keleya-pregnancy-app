import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  active: {
    width: Metrics.measure(10),
    height: Metrics.measure(10),
    borderRadius: Metrics.measure(5),
    backgroundColor: colors.PALE_TEAL,
    marginLeft: Metrics.measure(5),
  },
  normal: {
    width: Metrics.measure(10),
    height: Metrics.measure(10),
    borderRadius: Metrics.measure(5),
    backgroundColor: colors.LIGHT_TEAL,
    marginLeft: Metrics.measure(5),
  },
  stepContainer: {
    flexDirection: 'row',
  },
});
