import  updateShoppingCart from  './update-shopping-cart';
import  updatePhoneList from './update-phone-list';


const reducer = (state ,action) =>{

    return {
        phoneList : updatePhoneList(state,action),
        shoppingCart:updateShoppingCart(state,action),
    }
};

export default reducer;