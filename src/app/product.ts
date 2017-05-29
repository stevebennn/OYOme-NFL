import { productModel } from './product.model';

// const t = JSON.parse(window.localStorage.getItem('model'));
const t = productModel;

const pushToStorage = (model) => {
    window.localStorage.setItem('model',JSON.stringify(model));
}

export const product = ( state = t, action ) => {
    
    switch(action.type) {

        case "UPDATE_FIGURE":
            var obj = Object.assign({},state);
            obj[action.payload[0]] = action.payload[1];
            pushToStorage(obj);
            return obj

        case "UPDATE_FACE":
            var obj = Object.assign({},state);
            obj.face[action.payload[0]] = action.payload[1];
            pushToStorage(obj);
            return obj
        
        default: 
            return state;
    }
    
}