import React from 'react';
import {PhonestoreServiceConsumer} from '../phonestore-service-context'

const withPhonestoreService = () => (Wrapped) =>{

    return (props) => {
        return (
            <PhonestoreServiceConsumer>
                {
                    (phonestoreService) => {
                     return (  <Wrapped {...props} 
                                phonestoreService={phonestoreService}/>
                     )
                    }
                }
            </PhonestoreServiceConsumer>
        );
    }
}

export default withPhonestoreService;