import React, { useLayoutEffect } from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';
import IconButton from '../components/IconButton';

function CategoriesScreens({navigation}) {

    const headerButtonPressHandler = ()=>{
        navigation.navigate('Favorite')
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>{
                return(
                  <IconButton
                    icon="heart"
                    color="white"
                    onPress={headerButtonPressHandler}
                  />
                )
            }
        })
    }, [headerButtonPressHandler, navigation]);

    function renderCategoryItem(itemDate) {
        const pressHandler = () =>{
            navigation.navigate('MealsOverview', {
                categoryId: itemDate.item.id,
            })
        };
        return(
          <CategoryGridTitle
            onPress={pressHandler}
            title={itemDate.item.title}
            color={itemDate.item.color}/>
        )
    }

    return <FlatList data={CATEGORIES}
                     key={'_'}
                     keyExtractor={item => "_" + item.id}
                     renderItem = {renderCategoryItem}

                    // horizontal={false}
                     numColumns={2}  //to put two items in a row
    />

}
export default CategoriesScreens
