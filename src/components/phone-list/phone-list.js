import React, {Component} from 'react';
import PhoneListItem from '../phone-list-item';
import { connect } from 'react-redux';

import { withPhonestoreService} from '../hoc';
import  {fetchPhones,phoneAddedToCart}  from '../../actions';
import { compose } from '../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import './phone-list.css';




const PhoneList = ( {phones,onAddedToCart } ) =>{
    return(
        <ul className="shop-list">
            {
                phones.map((phone)=>{
                    return <li key={phone.id}>
                        <PhoneListItem phone={phone}
                        onAddedToCart={()=> onAddedToCart(phone.id)}/>
                        </li>
                })
            }
        </ul>
    );
};


class PhoneListContainer extends Component{

    componentDidMount(){
        this.props.fetchPhones();
    }

    render(){
        const { phones, loading ,error,onAddedToCart} = this.props;

        if (loading) {
            return <Spinner/>;
        };
        if (error){
            return <ErrorIndicator/>;
        };

        return <PhoneList phones={phones} onAddedToCart={onAddedToCart}/>
    }
};

const mapStateToProps = ({ phoneList:{phones,loading,error}}) =>{
    return {phones,loading,error}
};

const mapDispatchToProps = ( dispatch , {phonestoreService}) =>{
    return{
        fetchPhones: fetchPhones(phonestoreService,dispatch),
        onAddedToCart: (id) => dispatch(phoneAddedToCart(id))
    };
};



export default compose(
    withPhonestoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(PhoneListContainer);
