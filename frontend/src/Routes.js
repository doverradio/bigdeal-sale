import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutUs from "./AboutUs";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                {/* Public */}
                <Route path="/" exact component={MainPage} />
                <Route path="/about" exact component={AboutUs} />
                
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
