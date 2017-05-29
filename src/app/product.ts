import { productModel } from './product.model';

// const t = JSON.parse(window.localStorage.getItem('model'));
const t = productModel;

export const product = ( state = t, action ) => {
        switch(action.type) {
        
        case "UPDATE_FIGURE":
            return {
                ...state,
                [action.payload[0]]: action.payload[1]
            };

        case "UPDATE_FACE":
            let _state = { ...state.face, [action.payload[0]]: action.payload[1]};
            return { ...state, ['face']: _state  };
        

        case "RESET":
            return productModel

        default: 
            return state;
    }
}