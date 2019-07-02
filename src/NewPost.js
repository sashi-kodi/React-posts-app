import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const NewPost=(props)=>{
    const [postbody, setPostBody]=useState("");
    const [postTitle, setPostTitle]=useState("");
    
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const newPost={title:postTitle, body:postbody, userId:1 };
        postData(newPost);
    }
    const postData=(post)=>{
        axios.post("/posts", post)
        .then(response=> {
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    const onChangeHandler=(e)=>{
        if (e.target.name === 'postbody'){
            setPostBody(e.target.value);
        }
        else{
             setPostTitle(e.target.value);
            
        }
    }
    return(
        <React.Fragment>
        
            <h1>NewPost</h1> 
            <form onSubmit={handleFormSubmit} style={{width:'20%'}}>
              <div className="form-group">
                <label htmlFor="posttitle">Post Title:</label>
                <input name="posttitle" type="text" className="form-control" id="posttitle" onChange={onChangeHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="postbody">Post Body:</label>
                <input type="text" className="form-control" id="postbody" name="postbody" onChange={onChangeHandler}/>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
}
export default NewPost;