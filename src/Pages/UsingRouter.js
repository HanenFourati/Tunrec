import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import AboutUs from './AboutUs.js'
import ProfilPage from './ProfilPage.js'
const CallHome = () => (
    <Home />
    )
const CallAboutus = () => (
    <AboutUs />
    )
class UsingRouter extends React.Component{
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={CallHome} />
                    <Route exact path="/aboutus" component={CallAboutus}/>
                    <Route exact path="/user/:id" render={(props)=> <ProfilPage  id={props.match.params.id} />} />
                </Switch>
            </div>
        )
    }

}
export default UsingRouter