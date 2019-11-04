
const phonesLoaded = (newPhones) =>{
  return{
      type:'PHONES_LOADED',
      payload:newPhones
  };
};

const phonesRequested = () =>{
  return{
    type: 'PHONES_REQUESTED'
  }
}
const phonesError = (error) =>{
  return{
    type: 'PHONES_ERROR',
    payload:error
  }
}
export{
    phonesLoaded,
    phonesRequested,
    phonesError,
}