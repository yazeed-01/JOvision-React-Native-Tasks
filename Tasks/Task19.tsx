import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { ClassPage } from '../Components/Task19MyClassPage';

export const Task19 = () => {
  const [showComponent, setShowComponent] = useState(false);

  const ClickHandler = () => {
    setShowComponent(!showComponent);
  };

  return (
    <View>
      <Button title="Show" onPress={ClickHandler} />
      {showComponent && <ClassPage />}
    </View>
  );
};
