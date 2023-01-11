import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import t from '../../styles/theme';
import {Modalize} from 'react-native-modalize';

const SuccessView = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <View style={[t.flex1, t.bgWhite, t.itemsCenter, t.justifyCenter]}>
        <Image
          source={require('../../assets/images/success.png')}
          style={(t.w44, t.h44)}
          resizeMode="contain"
        />
        <View style={[t.mT5]}>
          <Text style={[t.text2xl, t.fontSansBold, t.textBlack]}>
            Congrats !
          </Text>
        </View>
        <View style={[t.pX4]}>
          <TouchableOpacity onPress={onOpen}>
            <Text style={[t.textBlack, t.fontSansBold, t.p4]}>Modal</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modalize ref={modalizeRef} modalHeight={200} useNativeDriver={true}>
        <View style={[t.bgPrimary]}>
          <Text style={[t.textBlack]}>Hello Modal</Text>
        </View>
      </Modalize>
    </>
  );
};

export default SuccessView;
