import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Check_Box = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={newValue => setToggleCheckBox(newValue)}
      />
    </View>
  );
};

export default Check_Box;
