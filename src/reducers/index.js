

const initialState={
    phones: [
        {
            id:1,
            model:"iPhone6",
            memory:" 64gb",
            price:" 499$"
        },
        {
           id:2,
           model:"iPhone7",
           memory:" 128gb",
           price:" 699$"
        },
        {
            id:3,
            model:"iPhone7",
            memory:" 256gb",
            price:" 799$"
        }
    ]
};

const reducer = (state = initialState,action) =>{

    switch (action.type){
        case 'PHONES_LOADED':
            return {
                phones:action.payload
            } ;
        default:
            return state;
    }
};

export default reducer;