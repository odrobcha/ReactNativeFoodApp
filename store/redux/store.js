import {configureStore} from '@reduxjs/toolkit';
import favorites from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favorites  //to use ut with the name 'favoriteMeals' over the App
    }
});
