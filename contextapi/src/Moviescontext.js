import React,{Component} from "react";
export const Moviesprovider=React.createContext()
class  Moviescontext extends React.Component{
constructor()
    {
        super();
        this.state={
            director:"Christopher Nolan",
            movie:"Interstellar",
            changemovie:this.changemovie,
            changedirector:this.changedirector
        }
    }
    changemovie=()=>{
        this.setState({movie:"Avatar"})
    }
    changedirector=()=>{
        this.setState({director:"James Cameron"})
    }
    render()
    {
        return  <div>
            <Moviesprovider.Provider value={{...this.state}}>
                {this.props.children}
            </Moviesprovider.Provider>
        </div>
    }
}
export default Moviescontext;