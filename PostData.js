import React from 'react';

class PostData extends React.Component {
    state={ input:" "}
     handleInputChange=event=>{
         this.setState({
        input:event.target.value
         })
     }
     handleSubmit=e=>{
         this.props.addItem(this.state.input)
         this.setState({ input : " "})
        }

    render() { 
        return ( 
            <div>
        <textarea rows="4" cols="50" className="form-control" onChange={this.handleInputChange}
        value={this.state.input} />
        <button className="btn btn-primary float-right" onClick={this.handleSubmit}>Post</button><br/>
    </div>
         );
    }
}
 
export default PostData;
