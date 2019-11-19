import React from 'react';
import Comment from './Comment';
import Like from './Like';

class PostList extends React.Component {
    
    state={textbox:false}
    
    
    newbox=(r)=>{
        this.setState({
          textbox:true
        })
    }
    
    render() { 
        return (
            <div>
    
            <ul className="list-group">
              {this.props.items.map(i=>{
            return(
                <div>
                      <li key={i} className="list-group-item">
                          <h2>{i}</h2>
                    </li>
                    <div className="container-fluid pt-2 pb-2">
                                    <ul className="row justify-content-between  pl-0">
                                        <li onClick={this.props.deletefunc.bind(this,i)} className="col-2 btn btn-light">Delete</li>
                                        <Like />
                                        <li onClick={this.newbox} className="col-2 btn btn-light float-right ">Comment </li>
                                    </ul> 
                                </div>
                                <div>{this.state.textbox && <Comment/>}</div>

                      </div>
                  )
              }) 
            }
                

                 </ul>
        </div>

          );
       
    }}
export default PostList ;