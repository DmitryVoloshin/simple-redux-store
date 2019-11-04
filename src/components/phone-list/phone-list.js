import React, {Component} from 'react';
import PhoneListItem from '../phone-list-item';
import { connect } from 'react-redux';

import { withPhonestoreService} from '../hoc';
import { phonesLoaded,phonesRequested,phonesError} from '../../actions';
import { compose } from '../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import './phone-list.css';


class PhoneList extends Component{

    componentDidMount(){
        this.props.fetchPhones()
    }

    render(){
        const { phones, loading ,error} = this.props;

        if (loading) {
            return <Spinner/>;
        };
        if (error){
            return <ErrorIndicator/>;
        };
        return(
            <ul className="shop-list">
                {
                    phones.map((phone)=>{
                        return <li key={phone.id}><PhoneListItem phone={phone}/></li>
                    })
                }
            </ul>
        );
    }
};

const mapStateToProps = ({phones,loading,error}) =>{
    return {phones,loading,error}
};

const mapDispatchToProps = ( dispatch , ownProps) =>{
    const { phonestoreService } = ownProps;
    return{
        fetchPhones: () => {
           dispatch(phonesRequested());
            phonestoreService.getPhones()
                .then((data)=> dispatch(phonesLoaded(data)))
                .catch((err)=>dispatch(phonesError(err)));
        }
    }
}

export default compose(
    withPhonestoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(PhoneList);
