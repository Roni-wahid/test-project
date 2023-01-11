import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../Buttons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const DateAndTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} size="md" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Calendar /> */}
    </View>
  );
};

export default DateAndTimePicker;
