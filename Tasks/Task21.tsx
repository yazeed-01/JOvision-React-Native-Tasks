import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { MyFunctionPage } from '../Components/Task21MyFunctionPage';

export const Task21 = () => {
  const [showComponent, setShowComponent] = useState(false);

  const ClickHandler = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View>
      <Button title={showComponent ? 'Hide' : 'Show'} onPress={ClickHandler} />
      {showComponent && <MyFunctionPage />}
    </View>
  );
};
