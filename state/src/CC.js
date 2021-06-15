import React,{Component} from 'react';
class CC extends React.Component{
    constructor()
    {
        super();
        this.state={
            'Country':'India',
            'name':'Kv',
            'player':'Sachin'
        }
    }
    changename=()=>{
        this.setState({name:'A krishna vamshi',player:'Dhoni'})
    }
    render()
    {
        return <div>
                 <h1>Our Country is {this.state.Country}</h1>
                <h1>My name is {this.state.name}</h1>
                <h1>Player is {this.state.player}</h1>
                <button onClick={this.changename} >Change Name</button>
             </div>
    }
}
export default CC;