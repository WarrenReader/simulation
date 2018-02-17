import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/pages/home.js';
import Bin from './components/bin/bin.js';
import CreateBin from './components/createbin/createbin.js';
import EditBin from './components/editbin/editbin.js';

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

    <Route path='/create/B1' render={() => <CreateBin letter="B" binNum="1"/>} />
    <Route path='/create/B2' render={() => <CreateBin letter="B" binNum="2"/>} />
    <Route path='/create/B3' render={() => <CreateBin letter="B" binNum="3"/>} />
    <Route path='/create/B4' render={() => <CreateBin letter="B" binNum="4"/>} />
    <Route path='/create/B5' render={() => <CreateBin letter="B" binNum="5"/>} />

    <Route path='/create/C1' render={() => <CreateBin letter="C" binNum="1"/>} />
    <Route path='/create/C2' render={() => <CreateBin letter="C" binNum="2"/>} />
    <Route path='/create/C3' render={() => <CreateBin letter="C" binNum="3"/>} />
    <Route path='/create/C4' render={() => <CreateBin letter="C" binNum="4"/>} />
    <Route path='/create/C5' render={() => <CreateBin letter="C" binNum="5"/>} />

    <Route path='/create/D1' render={() => <CreateBin letter="D" binNum="1"/>} />
    <Route path='/create/D2' render={() => <CreateBin letter="D" binNum="2"/>} />
    <Route path='/create/D3' render={() => <CreateBin letter="D" binNum="3"/>} />
    <Route path='/create/D4' render={() => <CreateBin letter="D" binNum="4"/>} />
    <Route path='/create/D5' render={() => <CreateBin letter="D" binNum="5"/>} />

    <Route path='/bin/A1' render={() => <EditBin letter="A" binNum="1" id="A1"/>} />
    <Route path='/bin/A2' render={() => <EditBin letter="A" binNum="2" id="A2"/>} />
    <Route path='/bin/A3' render={() => <EditBin letter="A" binNum="3" id="A3"/>} />
    <Route path='/bin/A4' render={() => <EditBin letter="A" binNum="4" id="A4"/>} />
    <Route path='/bin/A5' render={() => <EditBin letter="A" binNum="5" id="A5"/>} />
  </Switch>
)