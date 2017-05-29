import { Store, Action, ActionReducer, combineReducers } from '@ngrx/store';
import { productModel } from './product.model';

const _productModel = productModel;

export const product = ( state = _productModel, action ) => {
        switch(action.type) {

        // updates figure features of the product state
        case "UPDATE_FIGURE":
            return {
                ...state,
                [action.payload[0]]: action.payload[1]
            };

        // updates facial features of the product state    
        case "UPDATE_FACE":
            let _state = { ...state.face, [action.payload[0]]: action.payload[1]};
            return { ...state, ['face']: _state  };
        
        case "RESET":
            return productModel

        default: 
            return state;
    }
}