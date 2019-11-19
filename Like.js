import React from 'react';
class Like extends React.Component{
   
    state={like:0}

    
    Likecount = ()=>{
        this.setState({
            like: this.state.like + 1
        })
    }


    render(){
         return(
            <li onClick={this.Likecount} className="col-2  btn btn-light ">{this.state.like}Like</li> 
            )
        }
    }
export default Like;

