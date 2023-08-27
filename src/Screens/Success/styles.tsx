import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bellIcon: {
    width: Metrics.measure(60),
    height: Metrics.measure(60),
    marginTop: Metrics.measure(40),
  },
  btnContainer: {
    position: 'absolute',
    bottom: Metrics.measure(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: Metrics.measure(22),
    textAlign: 'center',
    color: colors.GREYISH_BROWN,
    marginTop: Metrics.measure(20),
    marginLeft: Metrics.measure(15),
    marginRight: Metrics.measure(15),
    lineHeight: Metrics.measure(25),
  },
  loginBtnContainer: {
    width: Metrics.measure(300),
    backgroundColor: colors.WARM_GREY,
    height: Metrics.measure(45),
    borderRadius: Metrics.measure(5),
    justifyContent: 'center',
    marginTop: Metrics.measure(145),
    alignItems: 'center',
  },
  loginBtnText: {
    fontSize: Metrics.measure(20),
    color: colors.WHITE,
  },
  loginActiveBtnContainer: {
    width: Metrics.measure(300),
    backgroundColor: colors.PALE_TEAL,
    height: Metrics.measure(45),
    borderRadius: Metrics.measure(5),
    justifyContent: 'center',
    marginTop: Metrics.measure(15),
    alignItems: 'center',
  },
  skipContainer: {
    width: '100%',
    alignItems: 'center',
  },
  skipText: {
    fontSize: Metrics.measure(16),
    color: colors.WARM_GREY,
  },
});
