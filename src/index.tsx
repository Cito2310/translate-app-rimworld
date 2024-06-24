import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"
import { Provider } from 'react-redux';
import { store } from './store/store';
import { GetValuesProvider } from './context/useGetValuesContext';


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <Provider store={ store }>
            <GetValuesProvider>
            {/* <React.StrictMode> */}
                <App />
            {/* </React.StrictMode> */}
    </GetValuesProvider>
        </Provider>
);