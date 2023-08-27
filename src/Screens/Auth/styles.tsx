import {StyleSheet} from 'react-native';
import Metrics from '../../Assets/Constants/Metrics';
import colors from '../../Assets/Constants/Colors';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: Metrics.measure(540),
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.measure(42),
    paddingLeft: Metrics.measure(80),
    paddingRight: Metrics.measure(80),
  },
  logo: {
    width: Metrics.measure(85),
    height: Metrics.measure(85),
  },
  logoText: {
    fontWeight: '500',
    color: colors.GREYISH_BROWN,
    fontSize: Metrics.measure(20),
    textAlign: 'center',
    marginTop: Metrics.measure(10),
  },
  getStartBtnContainer: {
    width: Metrics.measure(300),
    backgroundColor: colors.PALE_TEAL,
    height: Metrics.measure(45),
    borderRadius: Metrics.measure(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartBtnText: {
    color: colors.WHITE,
    fontSize: Metrics.measure(20),
    fontWeight: '500',
  },
  btnContainer: {
    position: 'absolute',
    bottom: Metrics.measure(15),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  loginContainer: {
    width: Metrics.measure(300),
    height: Metrics.measure(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.measure(0),
    marginBottom: Metrics.measure(10),
  },
  loginText: {
    color: colors.GREYISH_BROWN,
    fontSize: Metrics.measure(17),
    fontWeight: '500',
  },
});
