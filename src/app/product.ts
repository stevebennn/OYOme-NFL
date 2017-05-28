import { productModel } from './product.model';

const prod = productModel;

export const product = (
    
    state = prod, action) => {

    switch(action.type) {

        case "UPDATE_FIGURE":
            let obj = Object.assign({},prod);
            obj[action.payload[0]] = action.payload[1];
            console.log(obj)
            return obj
        
        default: 
            return state;
    }
}