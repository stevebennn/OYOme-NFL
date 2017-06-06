import { Store } from '@ngrx/store';
import { productModel } from './product.model';
import { loadState } from './localstorage';

const persistedState = loadState();
const _productModel = (persistedState === undefined) ? productModel: persistedState;

export const product = ( state = _productModel, action ) => {
        switch(action.type) {

        // updates figure features of the product state
        case "UPDATE_FIGURE":
            return {
                ...state, // spreads the current state object
                [action.payload[0]]: action.payload[1] // replaces the key - val pair
            };

        // updates facial features of the product state
        case "UPDATE_FACE":
            return {
                ...state, // spreads the current state object
                ['face']: { // selects the face key
                    ...state['face'], // spreads the current face object
                    [action.payload[0]]: action.payload[1] // replaces the key - val pair 
                }
            }
        
        // resets the state to the initial productModel
        case "RESET":
            return productModel

        // if the case doesnt match... return the current state
        default: 
            return state;

    }
}