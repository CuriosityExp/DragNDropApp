import {View, Text} from 'react-native';
import React from 'react';
import {Card} from '@rneui/base';

const DragNDropScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ADADAD',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <Card containerStyle={{width: '95%', borderRadius: 5}}>
        <Text>DragNDropScreen</Text>
      </Card>
    </View>
  );
};

export default DragNDropScreen;
