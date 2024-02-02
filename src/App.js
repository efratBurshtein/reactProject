import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/home';
import { Suspense } from 'react';
import MyHome from './Components/myhome';
const Lazytodo = React.lazy(() => import('./Components/todo'))
const Lazypost = React.lazy(() => import('./Components/post'))
const Lazyphoto = React.lazy(() => import('./Components/photo'))
const Lazyusers = React.lazy(() => import('./Components/users'))
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
