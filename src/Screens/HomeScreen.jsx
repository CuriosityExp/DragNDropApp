import {View, Text} from 'react-native';
import React from 'react';
import {Button, Card, Icon} from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#EEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Card
        containerStyle={{
          borderRadius: 8,
          height: '20%',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 15, marginBottom: 10}}>
          A Journey to learn React Native Drax
        </Text>
        <Button
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}>
          Go to example
          <Icon
            name="arrow-right"
            color={'white'}
            type="feather"
            size={16}
            iconStyle={{marginLeft: 10}}
          />
        </Button>
      </Card>
    </View>
  );
};

export default HomeScreen;
