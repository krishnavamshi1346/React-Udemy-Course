import React,{Component} from 'react';
import Child from './Child';
class Parent extends React.Component{
    constructor(props)
        {
            super(props);
        }
    render()
    {
        return <div> 
            <h1>
                This is Parent class Component
            </h1>
            <h1>Movie is {this.props.movie}</h1>
            <Child language='English'/>
        </div>
    }
}
export default Parent; 