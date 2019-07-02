import React, {Component} from 'react';
const Post = ({post, clicked})=>{
    const style={  border:'1px solid blue', padding:'10px'}
    return(
      <section style={style} onClick={clicked}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
       </section>
    )
}
export default Post;