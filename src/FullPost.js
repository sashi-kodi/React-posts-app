import React,{ Component} from 'react';
import axios from 'axios';

class FullPost extends Component{
    constructor(props){
        super(props);
        this.state={loadedPost:null}
    }
    componentDidUpdate(){
        if((this.state.loadedPost && this.state.loadedPost.id !== this.props.id)|| !this.state.loadedPost){
            axios.get('/posts/'+ this.props.id)
            .then(response =>{
                this.setState({loadedPost: response.data})
            })
        }
    }
    render(){
        if(this.props.id){
            if(this.state.loadedPost){
                return(
                <section style={{border:'1px solid green', backgroundColor:'yellow'}}>
                    <p>{this.state.loadedPost.title}</p>
                </section>
                )
            }
            else{
                return <p style={{color:'red'}}>Loading Post Data</p>
            }
        }
        else{
            return null;
        }
    }
}
export default FullPost;