import React, {useContext} from 'react';
// import {FavoritesContext} from '../store/context/favorites-context'; //to use ContextHook
import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';
import { View, StyleSheet, Text } from 'react-native';
import {useSelector} from 'react-redux';

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext);   //to use ContextHook
  // const favoriteMeals = MEALS.filter(meal=>{               //to use ContextHook
  //   return favoriteMealsCtx.ids.includes(meal.id)            //to use ContextHook
  // });

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal=>{
      return favoriteMealIds.includes(meal.id)
     });

  if (favoriteMeals.length === 0){
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    },
  text: {
      fontWeight: "bold",
    fontSize: 18,
    color: "white"
  }
})
