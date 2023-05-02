import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../common/Login'


class App extends Component {

    render(){
        return (
            <>
                <Routes>
                    <Route exact path="/login" element={ <Login /> }></Route>
                </Routes>
            </>
        );
    }
}

export default App;