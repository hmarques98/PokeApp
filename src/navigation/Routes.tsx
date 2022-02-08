import React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import HomeScreen from 'domain/Pokemon/HomeScreen'
import DetailsScreen from 'domain/Pokemon/DetailsScreen'

type StackScreenType = {
  [name: string]: {
    component(): JSX.Element
    options?: NativeStackNavigationOptions
  }
}

const SCREENS: StackScreenType = {
  HomeScreen: {
    component: HomeScreen,
  },
  DetailsScreen: {
    component: DetailsScreen,
  },
}

export type MainStackParamList = {
  HomeScreen: undefined
  DetailsScreen: {
    id: number
  }
}

const MainStack = createNativeStackNavigator()

const Routes = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
    {Object.entries({
      ...SCREENS,
    }).map(([name, props]) => (
      <MainStack.Screen key={name} name={name} {...props} />
    ))}
  </MainStack.Navigator>
)

export default Routes
