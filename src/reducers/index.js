

const initialState={
    phoneList:{
        phones: [],
        loading:true,
        error:null,
    },
    shoppingCart:{
        cartItems:[
        ],
        orderTotal:0
    },
 
};


const updateCartItems = ( cartItems, item, idx ) =>{
    if(item.count === 0) {
        return[
            ...cartItems.slice(0,idx),
            ...cartItems.slice(idx + 1),
        ];
    }

    if(idx === -1){
        return[
            ...cartItems,
            item
        ]
    }
    return[
        ...cartItems.slice(0,idx),
        item,
        ...cartItems.slice(idx + 1),
    ]
};

const updateCartItem = ( phone, item = {} , quantity) =>{

    const { id = phone.id,
         model = phone.model,
         count = 0,
         total = 0 } = item;

        return{
            id,
            model,
            count: count + quantity,
            total: total+ quantity*phone.price,
        }
};

 const updateOrder = ( state,phoneId,quantity ) =>{
    const {phoneList : {phones},shoppingCart: {cartItems} } = state;
    const phone = phones.find(({id})=> id === phoneId);
    const itemIndex = cartItems.findIndex(({id}) => id === phoneId)
    const item = cartItems[itemIndex];


    const newItem = updateCartItem(phone,item,quantity)
        return{
            orderTotal:0,
           cartItems:updateCartItems(cartItems,newItem,itemIndex)
        };
 };

 const updatePhoneList = (state,action) => {
     switch(action.type){
        case 'FETCH_PHONES_REQUEST':
                return{
                    phones : [],
                    loading:true,
                    error:null,
                };
            case 'FETCH_PHONES_SUCCESS':
                return {
                    phones:action.payload,
                    loading:false,
                    error:null,
                } ;
            case 'FETCH_PHONES_FAILURE':
                return{
                    phones : [],
                    loading:false,
                    error:action.payload
                };
     }
 };
 const updateShoppingCart = (state,action) =>{
     switch(action.type){
        case 'PHONE_ADDED_TO_CART':
                return updateOrder(state,action.payload,1);
        case 'PHONE_REMOVED_FROM_CART':
                return updateOrder(state,action.payload, -1);
        case 'ALL_PHONES_REMOVED_FROM_CART':   
                const item = state.shoppingCart.cartItems.find(({id})=>id === action.payload);
                return updateOrder(state,action.payload, -item.count);
     }
 };
const reducer = (state = initialState,action) =>{

    switch (action.type){
        case 'FETCH_PHONES_REQUEST':
        case 'FETCH_PHONES_SUCCESS':
        case 'FETCH_PHONES_FAILURE':
           return{
               ...state,
               phoneList:updatePhoneList(state,action),
           };
        
        case 'PHONE_ADDED_TO_CART':
        case 'PHONE_REMOVED_FROM_CART':
        case 'ALL_PHONES_REMOVED_FROM_CART':
            return{
                ...state,
                shoppingCart:updateShoppingCart(state,action)
            };
        
        default:
            return state;
    }
};

export default reducer;