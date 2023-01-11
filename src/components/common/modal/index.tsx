import {View, Text, Modal} from 'react-native';
import React from 'react';
import t from '../../../styles/theme';
import Button from '../Buttons';

interface ModalProps {
  title?: string;
  modalVisible?: boolean;
  setModalVisible?: any;
}

const CustomModal = ({title, modalVisible, setModalVisible}: ModalProps) => {
  return (
    <View>
      <Modal
        visible={modalVisible}
        animationType={'slide'}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
          <View style={[t.w80, t.p2, t.bgWhite, t.roundedSm]}>
            <View style={[t.itemsCenter, t.justifyCenter]}>
              <Text style={[t.textBlack, t.fontSansMedium, t.textLg]}>
                {title}
              </Text>
            </View>
            <View style={[t.selfCenter, t.mT5]}>
              <Button
                title="Continue"
                size="sm"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
