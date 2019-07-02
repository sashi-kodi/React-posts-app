
import React,{ Component} from 'react';
import axios from 'axios';
import Post from './Post';
import FullPost from './FullPost';

class Posts extends Component{
    constructor(props){
        super(props);
        this.state={posts:[], selectedPost: null};
    }
    componentDidMount(){
        const url="/posts";
        axios.get(url)
        .then(response=>{
            this.setState({posts: response.data})
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    clickedHandler=(id)=>{
        this.setState({selectedPost: id});
        
    }
    render(){
        const style={display:'flex', flexDirection:'column', flexWrap:'wrap',alignItems:'center', flexBasis:'31%' };
        return(
            <React.Fragment>
           
               <FullPost id={this.state.selectedPost} />
            
            <div style={style}>
           { this.state.posts.map(post=>(
              <Post post={post} key={post.id} clicked={()=> this.clickedHandler(post.id)}/>
            
            )) 
           }
            </div>
             </React.Fragment>
         )
    }
}
export default Posts;