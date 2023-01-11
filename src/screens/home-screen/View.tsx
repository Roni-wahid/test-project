import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Input from '../../components/common/Inputs';
import Button from '../../components/common/Buttons';
import t from '../../styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import {useNavigation} from '@react-navigation/native';
import C_Carousel from '../../components/common/carousel';
import Badge from '../../components/common/badge';
import Avatar from '../../components/common/avatar';
import Card_1 from '../../components/common/card';
import Divider from '../../components/common/divider';
import DateAndTimePicker from '../../components/common/date-time-picker';
import DropdownComponent from '../../components/common/dropdown';
import CustomModal from '../../components/common/modal';
import SuccessModal from '../../components/common/modal/SuccessModal';
import FilePicker from '../../components/common/file-picker';
import Check_Box from '../../components/common/checkbox';
import Menu_1 from '../../components/common/menu';
import Switch_ from '../../components/common/switch';
import Counter from '../../components/common/counter';

const HomeScreenView = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  return (
    <ScrollView style={[t.bgPaper, t.flex1]}>
      {/* Carousel */}
      <C_Carousel />
      <View>
        <Text style={[t.text2xl, t.textGray800, t.selfCenter]}>
          Button Component
        </Text>
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Small'} size="sm" variant="primary" />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Medium'} variant={'secondary'} size={'md'} />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Large'} size="lg" />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Full'} variant={'primary'} size={'lg'} full shadow />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Outline'} outline size="md" radius="md" />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button title={'Outline'} outline size="lg" radius="lg" full />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button
          variant="primary"
          radius="lg"
          icon={
            <View>
              <Ionicons name="add" size={40} color={colors.white} />
            </View>
          }
        />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button
          outline
          radius="full"
          size="sm"
          icon={
            <View>
              <Ionicons name="add" size={40} color={colors.primary} />
            </View>
          }
        />
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Button
          outline
          radius="lg"
          icon={
            <View style={[t.flexRow, t.pY2, t.pX4]}>
              {/* <Ionicons name="close" size={20} color={colors.primary} /> */}
              <Text style={[t.textBlack, t.mR2, t.fontSansMedium]}>
                Right Icon
              </Text>
              <Ionicons name="close" size={20} color={colors.secondary} />
            </View>
          }
        />
      </View>
      {/* Inputs */}
      <View style={[t.mT2]}>
        <Text style={[t.text2xl, t.textGray800, t.selfCenter]}>
          Input Components
        </Text>
      </View>
      <View style={[t.mT5, t.pX4]}>
        <Input placeholder="TextInput" radius="sm" />
      </View>
      <TouchableOpacity
        style={[t.mT5, t.pX4]}
        onPress={() => navigation.navigate('Search')}>
        <Input
          placeholder={'Search'}
          radius="md"
          iconLeft={<Ionicons name="search" size={24} color={colors.black} />}
        />
      </TouchableOpacity>
      <View style={[t.mT5, t.pX4]}>
        <Input
          inputType={'outline'}
          placeholder={'Username'}
          radius="lg"
          iconLeft={
            <Ionicons name="person-outline" size={24} color={colors.black} />
          }
        />
      </View>
      <View style={[t.mY5, t.pX4]}>
        <Input
          placeholder={'Password'}
          keyboardType="default"
          iconLeft={
            <Ionicons name="lock-open-outline" size={24} color={colors.black} />
          }
          iconRight={
            <Ionicons name="eye-off-outline" size={24} color={colors.black} />
          }
        />
      </View>
      <View style={[t.mT4, t.pX4]}>
        <TouchableOpacity onPress={() => navigation.navigate('Success')}>
          <Text style={[t.textBlack, t.fontSansBold, t.p4]}>Success</Text>
        </TouchableOpacity>
      </View>
      <View style={[t.pX4]}>
        <TouchableOpacity onPress={() => navigation.navigate('Error')}>
          <Text style={[t.textBlack, t.fontSansBold, t.p4]}>Error</Text>
        </TouchableOpacity>
      </View>
      <View style={[t.pX4]}>
        <TouchableOpacity onPress={() => navigation.navigate('Loader')}>
          <Text style={[t.textBlack, t.fontSansBold, t.p4]}>Loader</Text>
        </TouchableOpacity>
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Badge label={1} />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Avatar
          size={'md'}
          bg={[t.bgPrimary]}
          source={{
            uri: 'https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png',
          }}
        />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Divider />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Card_1
          title={'Card Title'}
          source={{
            uri: 'https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
        />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <DateAndTimePicker />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <DropdownComponent />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Button
          title="Custom Modal"
          size="sm"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Button
          title="Success Modal"
          size="sm"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <CustomModal
        title="Custom Modal"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SuccessModal
        modalVisible={successModalVisible}
        setModalVisible={setSuccessModalVisible}
      />
      <View style={[t.mY4, t.pX5]}>
        <FilePicker />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Check_Box />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Menu_1 />
      </View>
      <View style={[t.mY4, t.pX5]}>
        <Switch_ />
      </View>
      <View style={[t.mY4, t.pX5, t.w36]}>
        <Counter />
      </View>
    </ScrollView>
  );
};

export default HomeScreenView;
