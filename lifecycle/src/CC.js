import React,{ Component } from "react";
class CC extends React.Component{
    constructor()
    {
        super();
        this.state={
            number:0
        }
    }
    componentWillMount()
    {
        this.state.number=1;
    }
    componentDidMount()
    {
        alert("Did mount method is used")
    }
    render()
    {
        return <div>
            <h1>The number is {this.state.number}</h1>
        </div>
    }
}
export default CC;