import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/home.js';
import Bin from './components/bin/bin.js';
import CreateBin from './components/createbin/createbin.js';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/bins/A' render={() => <Bin letter="A"/>} />
    <Route path='/bins/B' render={() => <Bin letter="B"/>} />
    <Route path='/bins/C' render={() => <Bin letter="C"/>} />
    <Route path='/bins/D' render={() => <Bin letter="D"/>} />
    <Route path='/create/A1' render={() => <CreateBin letter="A" binNum="1"/>} />
    <Route path='/create/A2' render={() => <CreateBin letter="A" binNum="2"/>} />
    <Route path='/create/A3' render={() => <CreateBin letter="A" binNum="3"/>} />
    <Route path='/create/A4' render={() => <CreateBin letter="A" binNum="4"/>} />
    <Route path='/create/A5' render={() => <CreateBin letter="A" binNum="5"/>} />
  </Switch>
)