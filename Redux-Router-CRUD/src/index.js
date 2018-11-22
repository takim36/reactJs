import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PostsIndex from './components/PostsIndex';
import PostCreate from './components/PostCreate';
import PostShow from './components/PostShow';
import PostEdit from './components/PostEdit';
import reducers from './reducers';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/post/create"  component={PostCreate} />
          <Route path="/post/:id/edit"  component={PostEdit} />
          <Route path="/post/:id"  component={PostShow} />
          <Route path="/"  component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
