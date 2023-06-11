import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import t from '../../styles/theme';

const DateRangePicker = () => {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');

  const minDate = new Date(); // Today
  const maxDate = new Date(2025, 6, 3);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };
  return (
    <View>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        // scrollable={true}
        // horizontal={false}
        todayBackgroundColor="#DF0039"
        selectedDayColor="#7300e6"
        selectedDayTextColor="#FFFFFF"
        selectedRangeStartStyle={[t.bgError]}
        selectedRangeStyle={[t.bgErrorLight]}
        selectedRangeEndStyle={[t.bgError]}
        onDateChange={onDateChange}
      />
      <Text>SELECTED START DATE:{startDate}</Text>
      <Text>SELECTED END DATE:{endDate}</Text>
    </View>
  );
};

export default DateRangePicker;
