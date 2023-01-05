import './style.css'

import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header'
import Inscription from './inscription'
import Home from './home'
import Login from './login'
import InscriptionOrg from './inscriptionOrg'
import EventList from './eventList'
import Events from './events'
import ForgetPass from './forgetPass'
import Dashboard from './dashboard'
import DashboardAd from './dashboardAd'
import DashboardOrg from './dashboardOrg'
import InscritEvent from './inscritEvent'
import Admin from './admin'
import Role from './role'
import LoginOrg from './loginOrg'



function All() {
	const [username, setUsername] = React.useState("")
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [passwordBix, setPasswordBix] = React.useState("")
	const [tel, setTel] = React.useState("")
	const [adress, setAdress] = React.useState("")
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path={"/"}>
					<Home />
				</Route>
				<Route path={"/inscription"}>
	           <Inscription
		         username={username} setUsername={setUsername}
				 email={email} setEmail={setEmail}
		         tel={tel} setTel={setTel}
				 password={password} setPassword={setPassword}
				 passwordBix={passwordBix} setPasswordBix={setPasswordBix}
				  />
                </Route>
				<Route path={"/inscriptionOrg"}>
   <InscriptionOrg
    username={username} setUsername={setUsername}
	email={email} setEmail={setEmail}
    tel={tel} setTel={setTel}
	adress={adress} setAdress={setAdress}
	password={password} setPassword={setPassword}
	passwordBix={passwordBix} setPasswordBix={setPasswordBix}
	  />
    </Route>
				<Route path={"/login"}>
					<Login
						username={username} setUserNameLogin={setUsername}
						password={password} setPasswordLogin={setPassword}
					 />
				</Route>
				<Route path={"/eventList"}>
                   <EventList />
				</Route>
				<Route path={"/events"}>
                <Events />
                </Route>
				<Route path={"/forgetPass"}>
                 <ForgetPass />
                </Route>
				<Route path={"/dashboard"}>
                <Dashboard />
                </Route>
				<Route path={"/dashboardOrg"}>
                 <DashboardOrg />
                 </Route>
				 <Route path={"/dashboardAd"}>
                    <DashboardAd />
                    </Route>
			<Route path={"/inscritEvent"}>
              <InscritEvent />
            </Route>
			<Route path={"/admin"}>
              <Admin/>
			</Route>
			<Route path={"/role"}>
               <Role />
             </Route>
			 <Route path={"/loginOrg"}>
              <LoginOrg />
            </Route>
             
			</Switch>
		</Router> 
	)
}

function Root() {
	return (
		<div className='EventHub'>
			<All/>
		</div>
	)
}

export default Root