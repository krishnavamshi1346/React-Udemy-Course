import React,{Component} from 'react'
class Child extends React.Component{
    constructor(props)
        {
            super(props);
        }
    render()
    {
        return <div> 
            <h1>
                This is Child class Component
            </h1>
            <h1>
                Language is {this.props.language}
            </h1>
        </div>
    }
}
export default Child; 