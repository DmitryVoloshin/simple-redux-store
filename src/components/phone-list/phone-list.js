import React, {Component} from 'react';
import PhoneListItem from '../phone-list-item';
import { connect } from 'react-redux';

import { withPhonestoreService} from '../hoc'
import './phone-list.css';


class PhoneList extends Component{


    componentDidMount(){
        // get data
        const { phonestoreService } = this.props;
        const data = phonestoreService.getPhones();
        console.log(data)
    }

    render(){
        const { phones } = this.props;
        return(
            <ul>
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

export default withPhonestoreService()(connect(mapStateToProps)(PhoneList));