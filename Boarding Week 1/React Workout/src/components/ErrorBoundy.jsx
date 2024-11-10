import React,{ Component } from "react";

export default class ErrorBoundy extends Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }

    static getDerviedStateFromError(error){
        this.state = {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.error('Error caught in ErrorBoundary:',error,errorInfo);
    }
    render(){
        if(this.state.hasError){
            return <h2>Something Went Wrong.Please try again later.</h2>
        }
        return this.props.children
    }
}
