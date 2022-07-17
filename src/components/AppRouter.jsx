import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Routes} from "../router";


  const AppRouter = () =>{
	return(
		<Switch>
			{Routes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Redirect to='/home'/>
		</Switch>
	);
  };
  export default AppRouter;