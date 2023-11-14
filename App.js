import React from 'react';
import { StyleSheet, Button} from 'react-native';
import CategoriesScreens from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <>
          <StatusBar style='light'/>
          <NavigationContainer >
              <Stack.Navigator
                screenOptions = {{
                    headerStyle : {backgroundColor: '#351401'},
                    headerTintColor :  'white',
                    contentStyle : {backgroundColor: "#3f2f25"}
                }}
              >
                  <Stack.Screen
                    name="MealsCategories"
                    component = {CategoriesScreens}
                    options={{
                        title: 'All categories',
                        // headerStyle : {backgroundColor: '#351401'},
                        // headerTintColor :  'white',
                        // contentStyle : {backgroundColor: "#3f2f25"}
                    }}/>
                  <Stack.Screen name="MealsOverview"
                                component = {MealsOverviewScreen}
                                // options = {({route, navigation})=>{  //route, navigation pass automatically by React navigation
                                //     const catId = route.params.categoryId
                                //     return {    // return options
                                //             title : catId
                                //     }
                                // }}
                  />
                  <Stack.Screen
                    name="MealDetail"
                    component = {MealDetailScreen}
                    // options={{
                    //     headerRight:()=>{
                    //         return(
                    //           <Button title="*"/>
                    //         )
                    //     }
                    // }}
                  />
              </Stack.Navigator>

          </NavigationContainer>
      </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
