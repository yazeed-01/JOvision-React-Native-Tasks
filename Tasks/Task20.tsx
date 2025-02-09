import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { MyClassPage } from '../Components/Task20MyClassPage';

export const Task20 = () => {
  const [showComponent, setShowComponent] = useState(false);

  const ClickHandler = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View>
      <Button title={showComponent ? 'Hide' : 'Show'} onPress={ClickHandler} />
      {showComponent && <MyClassPage />}
    </View>
  );
};
