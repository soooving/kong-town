import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../common/Home';
import Login from '../common/Login'

import Frame from '../frame/Layout'


class App extends Component {

    render(){
        return (
            <>
                <Routes>
                    {/* !   [ ROUTE ] - COMMON */}
                    <Route exact path="/"       element={ <Home /> }></Route>
                    <Route exact path="/login"  element={ <Login /> }></Route>

                    <Route element={ <Frame /> }>
                        <Route exact path="/test"  element={ <Home /> }></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default App;