

const initialState={
    phones: [],
    loading:true,
    error:null,
};

const reducer = (state = initialState,action) =>{

    switch (action.type){
        case 'PHONES_REQUESTED':
            return{
                phones : [],
                loading:true,
                error:null,
            };
        case 'PHONES_LOADED':
            return {
                phones:action.payload,
                loading:false,
                error:null,
            } ;
        case 'PHONES_ERROR':
            return{
                phones : [],
                loading:false,
                error:action.payload
            };
        default:
            return state;
    }
};

export default reducer;