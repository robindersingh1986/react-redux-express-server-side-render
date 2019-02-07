import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './Home';
import About from './About';

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                {/* <h1>{ this.state.title }</h1> */}
                <div>
                    Something here
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route path="/about" component={ About } />
                </Switch>
               {/*  <Switch>
                    <Route path='/' exact component={ Home } />
                    <Route path='/about' exact component={ About } />
                </Switch> */}
            </div>
        );
    }
}