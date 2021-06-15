import React,{Component} from 'react';
class CC extends React.Component{
    constructor()
    {
        super();
        this.state={
            color:'red',
            bgcolor:'blue'
        }
    }
    changebgcolor=()=>
    {
        this.setState({bgcolor:'grey'})
    }
changecolor=()=>{
    this.setState({color:'green'});
}
    render()
    {
        return <div>
            <h1 style={{color:this.state.color,backgroundColor:this.state.bgcolor}}>This is Dynamic CSS</h1>
            <button onClick={this.changecolor}>
                Change color
            </button>
            <br/>
            <button onClick={this.changebgcolor}>
                Change background
            </button>
        </div>
    }
}
export default CC;