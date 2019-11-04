import React, {Component} from 'react';
import PhoneListItem from '../phone-list-item';
import { connect } from 'react-redux';

import { withPhonestoreService} from '../hoc';
import { phonesLoaded } from '../../actions';
import { compose } from '../utils';
import './phone-list.css';



class PhoneList extends Component{


    componentDidMount(){
        // get data
        const { phonestoreService,phonesLoaded } = this.props;
        phonestoreService.getPhones()
            .then((data)=>phonesLoaded(data));
        // action to store
    }

    render(){
        const { phones } = this.props;
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

const mapStateToProps = ({phones}) =>{
    return {phones}
};

const mapDispatchToProps  ={
      phonesLoaded
};

export default compose(
    withPhonestoreService(),
    connect(mapStateToProps,mapDispatchToProps)
)(PhoneList);
