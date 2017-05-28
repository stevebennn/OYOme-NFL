import { productModel } from './product.model';

// const t = JSON.parse(window.localStorage.getItem('model'));
const t = productModel;

const pushToStorage = (model) => {
    window.localStorage.setItem('model',JSON.stringify(model));
}

export const product = (
    
    state = t, action) => {

    switch(action.type) {

        case "UPDATE_FIGURE":
            let obj = Object.assign({},state);
            obj[action.payload[0]] = action.payload[1];
            pushToStorage(obj);
            return obj

        case "UPDATE_FACE":
            let _obj = Object.assign({},state);
            _obj.face[action.payload[0]] = action.payload[1];
            pushToStorage(_obj);
            return _obj
        
        default: 
            return state;
    }
}