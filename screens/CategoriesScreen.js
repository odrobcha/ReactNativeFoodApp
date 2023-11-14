import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTitle from '../components/CategoryGridTile';

function CategoriesScreens({navigation}) {

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
