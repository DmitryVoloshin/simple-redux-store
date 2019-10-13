import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import PhoneStoreService from './services/store-service';
import { PhonestoreServiceProvider } from './components/phonestore-service-context';

import store from './store';

const phonestoreServcie = new PhoneStoreService();

ReactDOM.render( 
    <Provider store={store}>
        <ErrorBoundry>
            <PhonestoreServiceProvider value={phonestoreServcie}>
                <Router>
                    <App/>
                </Router>
            </PhonestoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
document.getElementById('root'));


