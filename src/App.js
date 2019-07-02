import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import NewPost from './NewPost';
import FullPost from './FullPost';

import NavBar from './NavBar';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    const routes=[{path:'/posts', component:Posts, text:'All Posts'},
                  {path:'/posts/:id', component:FullPost, text:''},
                 {path:'/newpost', component:NewPost, text:'New Post'}
                 ];
  return (
      <BrowserRouter>
    <div className="App">
      <h1>Posts-App</h1>
      <NavBar routes={routes}/>
       {routes.map(el=>{
          return <Route component={el.component} path={el.path} key={el.text}/>
      })}
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
