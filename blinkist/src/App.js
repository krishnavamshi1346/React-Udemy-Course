import logo from './logo.svg';
import React from 'react'
import './App.css';
import NestedGrid from './Component/Organsims/NestedGrid';
import InputField from './Component/Atoms/Input'
import NavTab from './Component/Organsims/NavTab'
import BookForm from './Component/Organsims/BookForm'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import BookStatus from './BookStatus'


import SearchIcon  from '@material-ui/icons/Search';
import MediaCard from './Component/Molecules/MediaCard';


function App() {

  
  
  return (
  
    <div className="App" >
      {/* <NavTab/>
     <br/><br/>
      <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}></Grid>
          <Grid item xs={4}><SearchIcon/> <InputField placeholder="searchbar" ></InputField></Grid>
          
     
     <Grid item xs={4}></Grid> <BookForm/></Grid>
     <NestedGrid/> */}
     <NavTab/>
     <h2 >Trending blinks</h2>
     <BookForm/>

<Provider store={store}>
     
      <BookStatus />
      <Router>
        <React.Fragment></React.Fragment>
      </Router>
    </Provider>
    
    </div>
  );
}

export default App;
