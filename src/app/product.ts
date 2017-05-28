import { productModel } from './product.model';

const t = JSON.parse(window.localStorage.getItem('model'));

const pushToStorage = (model) => {
    window.localStorage.setItem('model',JSON.stringify(model));
}

export const product = (
    
    state = t, action) => {

    switch(action.type) {

        case "UPDATE_FIGURE":
            let obj = Object.assign({},t);
            obj[action.payload[0]] = action.payload[1];
            pushToStorage(obj);
            return obj
        
        default: 
            return state;
    }
}