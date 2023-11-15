import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id)  //action.payload - name provided by redux
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
});

export const addFavorite = favoriteSlice.actions.addFavorite; //to useit trought app
export const removeFavorite = favoriteSlice.actions.removeFavorite; //to useit trought app
export default favoriteSlice.reducer //to use it in store.js
