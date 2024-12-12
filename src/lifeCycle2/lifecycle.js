import React, {Component} from 'react'

export default class LifeCycle extends Component{
    
    constructor(){
        console.log("constructing")
        super()
        this.state={products:[]}

    }
    componentDidMount(){
        console.log("mounting")
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                this.setState({products:json})
            })
        }
    
     static getDerivedStateFromProps(){
        console.log("statederiving from props")
    }
    
    render(){
        console.log("rendering")
        return(
            <div>{this.state.products.map((a,b)=>{return(<h1>{a.title}</h1>)})}</div>
        )
    }
}