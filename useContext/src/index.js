import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserDetailsComponent from "./UserDetailsComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(<UserDetailsComponent />, rootElement);
