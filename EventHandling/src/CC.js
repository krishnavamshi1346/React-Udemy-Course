import React,{Component} from 'react'
class CC extends React.Component{
    clickalert=()=>{
        alert("Button is clicked")
    }
    inputchange=()=>
    {
        alert("Input change");

    }
    overme=()=>
    {
        alert("hovring");
    }

    render(){
        return <div>
            <button onClick={this.clickalert}>
                Click me..
            </button>
            <input type="text" onChange={this.inputchange}></input>
            <h1 onMouseOver={this.overme}>Hover over me</h1>
            
        </div>
    }
}
export default CC;