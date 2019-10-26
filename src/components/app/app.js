import React from 'react';
import './app.css';
import { withPhonestoreService } from '../hoc';

const App = ({ phonestoreService }) =>{
    console.log(phonestoreService.getPhones())
    return <div>Working App</div>
};

export default withPhonestoreService()(App)