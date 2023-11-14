import {MEALS, CATEGORIES} from '../data/dummy-data'
import React,{useLayoutEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItem from '../components/MealItem';
//import {useRoute} from '@react-navigation/native'

const MealsOverviewScreen = ({route, navigation}) =>{   //route, navigation gets automatically by ReactNavigation
   // const route = useRoute();
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryIds.indexOf(catId) >=0;  //return true if mealItem.categoryIds has cadId
    });

    useLayoutEffect(()=>{    //all options of navigation can be set here but only in useEffect
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({title: categoryTitle})

    }, [catId, navigation])


    const renderMealItem = (itemData)=>{  //received automatically itemData from FlatList
       //itemData.item
        const item = itemData.item; //itemData.item is automatically given .data by FlatList
        const mealItemProps = {
            id : item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration :item.duration
        }

        return(
          <MealItem  {...mealItemProps} />
        )
    };

return(
  <View style={styles.container}>
     <FlatList
       data={displayedMeals}
       keyExtractor = {(item) => item.id}
       renderItem ={renderMealItem}
     />
  </View>
)
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})
