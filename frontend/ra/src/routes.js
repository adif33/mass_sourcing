import React from "react";
import { Route } from 'react-router-dom';

import DishList from "./containers/DishListView";
import DishDetail from "./containers/DishDetailView";

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={DishList} />
        <Route exact path='/:dishID' component={DishDetail} />
        </div>
);

export default BaseRouter;