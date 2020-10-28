import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,

  } from 'react-router-dom';
import PageContainer from './style/pageContainer'
import PostListRouteComponent from './components/routes/list';
import PostRouteComponent from './components/routes/post';
import RedirectToMainBlog from './components/routes/redirect';



const Blog = props => {

    return (
        <PageContainer>
            <Router>
                <Switch>
                    <Route path="/blog">
                        <PostListRouteComponent />
                    </Route>

                    <Route path="/post/:id/:slug">
                        <PostRouteComponent />
                    </Route>
                    
                    <Route render={RedirectToMainBlog}/>

                </Switch>
            </Router>
        </PageContainer>
    )
}

export default Blog