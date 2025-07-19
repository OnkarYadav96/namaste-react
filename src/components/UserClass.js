import React from "react";
class UserClass extends React.Component {
   constructor(props){
        super(props);
        this.state={count:0,
            name:"Onkar"
        }
    };
    // in class based component render() function return JSX
  render() {
    return (
      <div className="user-card">
        <h2>Name:{this.props.name}</h2>
        <h3>Location:Baramati</h3>
        <h4>Contact: OnkarYadav@gmail.com</h4>
        <h4>Count: {this.state.count}</h4>
        <button onClick={()=>{ this.setState({count:this.state.count+1})}}>Increment</button>
      </div>
    );
  }
}

export default UserClass;
