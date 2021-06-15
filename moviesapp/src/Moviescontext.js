import React,{Component, useContext,createContext} from "react"
import Addmovie from './Addmovie';
export const Moviesprovider=createContext()
class MoviesContext extends React.Component{
    constructor(){
        super();
        this.state={
            movies:[],
            addmovie:this.addmovie
        }
    }
    addmovie=(movie)=>{
                this.setState({movies:[...this.state.movies,movie]})
            }
    render()
    {
        return <div> 
        <Moviesprovider.Provider value={{...this.state}}>
            {this.props.children}
        </Moviesprovider.Provider>
        </div>
    }
}
export default MoviesContext ;