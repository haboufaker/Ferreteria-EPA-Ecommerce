import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { theme} from './theme';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./state";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoW_7zXAu7oDCi4j_5r3IatF4kZbLn-tg",
  authDomain: "ecommerce-react-js-be97c.firebaseapp.com",
  projectId: "ecommerce-react-js-be97c",
  storageBucket: "ecommerce-react-js-be97c.appspot.com",
  messagingSenderId: "999056292280",
  appId: "1:999056292280:web:f8a4964b85796a3f17774d",
  measurementId: "G-HZ0VRV1TNG"
};

initializeApp(firebaseConfig);

const store = configureStore({
  reducer: { cart: cartReducer },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


