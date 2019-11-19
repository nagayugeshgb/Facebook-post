import React from 'react';
import  Navbar  from './Navbar';
import  PostData  from './PostData';
import PostList from './PostList';


class App extends React.Component {
       state={
        list:[]
       };
       addItem=item=>{
this.setState({
    list:[...this.state.list,item]
})
       };

       deletefunc=item=>{
        this.setState({
            list:this.state.list.filter( i => i !== item)
            })
        console.log(item)
        }
        render() { 
            return ( 
                <div >
                <Navbar/>
                <PostData addItem={this.addItem}/>
                <PostList items={this.state.list} deletefunc={this.deletefunc}/>
                </div>
             );
        }
    
    }
    export default App;

