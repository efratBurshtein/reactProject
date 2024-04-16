import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home';
import { Suspense } from 'react';
import MyHome from './components/home/myhome';
const Lazytodo = React.lazy(() => import('./components/task/todo'))
const Lazypost = React.lazy(() => import('./components/post/post'))
const Lazyphoto = React.lazy(() => import('./components/photo/photo'))
const Lazyusers = React.lazy(() => import('./components/user/users'))
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
         <Route index element={<MyHome/>}/>
         <Route path="/todo" element={<Suspense fallback="loading..."><Lazytodo /></Suspense>}/>
         <Route path="/post" element={<Suspense fallback="loading..."><Lazypost /></Suspense>}/>
         <Route path="/photo" element={<Suspense fallback="loading..."><Lazyphoto /></Suspense>}/>
         <Route path="/users" element={<Suspense fallback="loading..."><Lazyusers /></Suspense>}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
