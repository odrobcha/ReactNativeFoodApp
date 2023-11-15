import React, {useLayoutEffect} from 'react';
import { Text, StyleSheet, Image, View, ScrollView, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const MealDetailScreen = ({ navigation}) => {
    const route = useRoute();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const headerButtonPressHandler = () =>{
        console.log("pressed")
    }


    useLayoutEffect(()=>{
        navigation.setOptions({
                headerRight:()=>{
                    return(
                      <IconButton
                        icon="star"
                        color="white"
                        onPress={headerButtonPressHandler}
                       />
                    )
                }
        })
    }, [headerButtonPressHandler, navigation]);
    return (
      <ScrollView style={styles.rootContainer}>

              <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}/>
              <Text style={styles.title}>{selectedMeal.title}</Text>
              <MealDetails
                textStyle={styles.detailText}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
              />
              <View style={styles.listOuter}>
                  <View style={styles.listContainer}>
                      <SubTitle>Ingredients</SubTitle>
                      <List data={selectedMeal.ingredients}/>

                      <SubTitle>Steps</SubTitle>
                      <List data={selectedMeal.steps}/>
                  </View>
              </View>


      </ScrollView>
    );
};
export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuter: {
        alignItems: 'center'
    }

});
