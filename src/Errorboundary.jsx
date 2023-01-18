import { Component } from "react";
import { Link } from "react-router-dom";

class Errorboundary extends Component{
    state = {hasError:false}

    static getDerivedStateFromError() {
        return { hasError: true };
      }

    componentDidCatch(error,info){
        console.error("Error Boundary caught an error ",error,info);
    }

render(){
    if(this.state.hasError){
        return (
            <h1>
                There was an error, with the listing.<Link to="/">Click here</Link>{" "} to home page.
            </h1>
        );
    }
    return this.props.children;
}
    

}

export default Errorboundary;