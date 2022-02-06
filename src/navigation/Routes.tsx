import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../domain/Pokemon/HomeScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
};

const MainStack = createNativeStackNavigator();

const SCREENS = {
  HomeScreen: {
    component: HomeScreen,
  },
};

const Routes = () => {
  return (
    <MainStack.Navigator>
      {Object.entries({
        ...SCREENS,
      }).map(([name, props]) => {
        return (
          <MainStack.Screen
            key={name}
            name={name as keyof MainStackParamList}
            {...props}
          />
        );
      })}
    </MainStack.Navigator>
  );
};

export default Routes;
