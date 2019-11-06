const phonesRequested = () =>{
  return{
    type: 'FETCH_PHONES_REQUEST'
  }
};
const phonesLoaded = (newPhones) =>{
  return{
      type:'FETCH_PHONES_SUCCESS',
      payload:newPhones
  };
};
const phonesError = (error) =>{
  return{
    type: 'FETCH_PHONES_FAILURE',
    payload:error
  }
};

 const phoneAddedToCart = ( phoneId ) => {
      return{
          type:'PHONE_ADDED_TO_CART',
          payload: phoneId
      }
}
const phoneRemovedFromCart = (phoneId) =>{
      return{
        type:'PHONE_REMOVED_FROM_CART',
        payload:phoneId
      }
};
const allPhonesRemovedFromCart = (phoneId) =>{
      return{
        type:'ALL_PHONES_REMOVED_FROM_CART',
        payload:phoneId
      }
}

const fetchPhones = (phonestoreService,dispatch) => () => {
  dispatch(phonesRequested());
   phonestoreService.getPhones()
       .then((data)=> dispatch(phonesLoaded(data)))
       .catch((err)=>dispatch(phonesError(err)));
};

export{
    fetchPhones,
    phoneAddedToCart,
    phoneRemovedFromCart,
    allPhonesRemovedFromCart,
};