import React from 'react';
import {ImageBackground, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Constatns
import {Back} from '../../Assets/Images';

// Styles
import {styles} from './styles';

interface HeaderProps {
  bg: any;
  headerContainer?: object;
}

const KHeader: React.FC<HeaderProps> = ({bg, headerContainer}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={headerContainer ? headerContainer : styles.topContainer}
      source={bg}
      resizeMode="cover">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Back} resizeMode="contain" style={styles.backIcon} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default KHeader;
