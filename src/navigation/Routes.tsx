import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from 'domain/Pokemon/HomeScreen'
import DetailsScreen from 'domain/Pokemon/DetailsScreen'

export type MainStackParamList = {
  HomeScreen: undefined
  DetailsScreen: undefined
}

const MainStack = createNativeStackNavigator()

const SCREENS = {
  HomeScreen: {
    component: HomeScreen,
  },
  DetailsScreen: {
    component: DetailsScreen,
  },
}

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
        )
      })}
    </MainStack.Navigator>
  )
}

export default Routes
