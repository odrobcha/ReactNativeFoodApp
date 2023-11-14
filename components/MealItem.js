import { Text, View, Pressable, Image, StyleSheet, Platform } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import MealDetails from './MealDetails';

const MealItem = ({ title, imageUrl, duration, complexity, affordability, id }) => {
    const navigation = useNavigation();
    const selectMealHandler = () =>{
        navigation.navigate('MealDetail', {mealId: id});
    };
    return (
      <View style={styles.mealItem}>
          <Pressable
            onPress={selectMealHandler}
            android_ripple ={{color: "#ccc"}}
            style={({pressed})=>[ pressed ? styles.buttonPressed : null]}
          >
              <View style={styles.innerContainer}>
                  <View>
                      <Image
                        style={styles.image}
                        source={{ uri: imageUrl }}/>
                      <Text style={styles.title}>{title}</Text>
                  </View>
                  <MealDetails duration={duration}
                               complexity={complexity}
                               affordability={affordability}
                  />

              </View>
          </Pressable>
      </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black', //O
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        margin: 8
    },

    innerContainer:{
        borderRadius: 8,
        overflow: "hidden"
    },
    buttonPressed: {
        opacity: 0.5
    },

});
