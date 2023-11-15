import {useState} from 'react';
import {createContext} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id)=>{},
    removeFavorite: (id) =>{}
});

function FavoriteContextProvider ({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    function addFavorite(id){
        setFavoriteMealIds((currentFavIds)=>{
            return [...currentFavIds, id]
        })
    };

    function removeFavorite (id){
        setFavoriteMealIds((currentIds)=>{
            return currentIds.filter((mealId)=>{
                return mealId !== id
            })
        })
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoriteContextProvider
