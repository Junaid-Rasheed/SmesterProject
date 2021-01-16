import React from 'react'
import './App.css';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom'


import {Header} from './components/Header'
import {TagName} from './components/TagName'
import {MenuBar} from './components/MenuBar'
import {Footer} from './components/Footer'
// Components2
import {Facebook} from './components2/Facebook'
import {Instagram} from './components2/Instagram'
import {Twitter} from './components2/Twitter'
import {Youtube} from './components2/Youtube'
import {Men} from './components2/Men'
import {Women} from './components2/Women'
import {AccessoriesMen} from './components2/AccessoriesMen'
import {AccessoriesWomen} from './components2/AccessoriesWomen'
import {Cart} from './components2/Cart'
import {Account} from './components2/Account'

import {Home}  from './components2/Home'


import {New} from './ProductDetail/New'

function App() {
  return ( 

<Router>

            <Header />
            <TagName />
            <MenuBar  />

    <Switch>
            <Route path="/" exact  component={Home} />
            <Route path="/Instagram" exact component={Instagram} />
            <Route path="/Facebook" exact component={Facebook} />
            <Route path="/Twitter" exact component={Twitter} />
            <Route path="/Youtube" exact component={Youtube} />
            <Route path="/Men" exact component={Men} />
            <Route path="/Women" exact component={Women} />
            <Route path="/AccessoriesWomen" exact component={AccessoriesWomen} />
            <Route path="/AccessoriesMen" exact component={AccessoriesMen} />
            <Route path="/Cart" exact component={Cart} />
            <Route path="/Account" exact component={Account} />

            <Route path="/New" exact component={New} />
    </Switch>
            <hr />
            <Footer />
</Router>


  );
}

export default App;
