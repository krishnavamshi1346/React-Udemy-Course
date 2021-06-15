import React,{Component} from 'react';
import './counterapp.css'
class CC extends React.Component{
    constructor()
    {
        super();
        this.state={
            number:0
        }
    }
    add=()=>{
        this.setState({number:this.state.number+1})
    }
    subract=()=>{
        this.setState({number:this.state.number-1})
    }
    
    render()
    {
        return <div>
            <h1>{this.state.number}
            </h1>
            <button onClick={this.add}>Add 1 </button>
            <button onClick={this.subract}>Subract 1</button>
            </div>
    }
}
export default CC;