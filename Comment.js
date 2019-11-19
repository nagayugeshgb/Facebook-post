import React from 'react';
class Comment extends React.Component{
   
    state={ com:[],comment:""}

    handlecomment= event =>{
        this.setState({comment: event.target.value})
               
         };

   addcom = ad => {
   
        this.setState({
              com:[...this.state.com,this.state.comment]
                 },
                 () => {
                     this.setState({comment:""})
                     
                    });
       
              }     
    
    deletecom=item=>{
                this.setState({
                    com:this.state.com.filter( i => i !== item)
                    })
            }
              



    render(){
         return(
            <div>
                
                    <textarea type="text" className="form-control mb-2" placeholder="Add comment here... "
                    onChange={this.handlecomment}  value={this.state.comment}/>
                    <button onClick={this.addcom} className="btn btn-primary d-block b-2"  >Add comment</button>
                   <div className=" ">{this.state.com.map(j =>{
                    return(
                        <ul className="list-group "><li  className="list-group-item pr-0 pb-0 ">
                            <i key={j}>   {j}      </i>
                            <button onClick={this.deletecom.bind(this,j)} className="btn btn-primary float-right  "  >Delete comment</button>
                        </li></ul>
                    )
                }
            )
        }
                </div>
            </div>
           
            )
        }
    }

export default Comment;