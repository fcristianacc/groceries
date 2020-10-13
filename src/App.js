import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/home/home.js";
import ViewBakery from "./components/bakery/view-bakery/view-bakery.js";
import ViewButchery from "./components/butchery/view-butchery/view-butchery.js";
import ViewFishery from "./components/fishery/view-fishery/view-fishery.js";
import ViewDairyGood from "./components/dairygoods/view-dairygood/view-dairygood.js";
import ViewDryFood from "./components/dryfood/view-dryfood/view-dryfood.js";
import ViewBeverage from "./components/beverages/view-beverage/view-beverage.js";
import ViewCannedGood from "./components/cannedgoods/view-cannedgood/view-cannedgood.js";
import ViewFreshFood from "./components/freshfood/view-freshfood/view-freshfood.js";
import ViewFrozenFood from "./components/frozenfood/view-frozenfood/view-frozenfood.js";
import ViewCareProduct from "./components/careproducts/view-careproduct/view-careproduct.js";
import ViewHouseholdProduct from "./components/householdproducts/view-householdproduct/view-householdproduct.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 class="title">Online Tutti Market</h1>
          <div className="header">
            <div class="topnav">
              <a href="#home">Home</a>
              <a href="#view-bakery">Bakery</a>
              <a href="#view-butchery">Butchery</a>
              <a href="#view-fishery">Fishery</a>
              <a href="#view-dairygood">Dairy Goods</a>
              <a href="#view-dryfood">Dry Food</a>
              <a href="#view-beverage">Beverages</a>
              <a href="#view-cannedgood">Canned Goods</a>
              <a href="#view-freshfood">Fresh Food</a>
              <a href="#view-frozenfood">Frozen Food</a>
              <a href="#view-careproduct">Care Products</a>
              <a href="#view-householdproduct">Household Products</a>
            </div>
          </div>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/view-bakery" component={ViewBakery} />
            <Route path="/view-butchery" component={ViewButchery} />
            <Route path="/view-fishery" component={ViewFishery} />
            <Route path="/view-dairygood" component={ViewDairyGood} />
            <Route path="/view-dryfood" component={ViewDryFood} />
            <Route path="/view-beverage" component={ViewBeverage} />
            <Route path="/view-cannedgood" component={ViewCannedGood} />
            <Route path="/view-freshfood" component={ViewFreshFood} />
            <Route path="/view-frozenfood" component={ViewFrozenFood} />
            <Route path="/view-careproduct" component={ViewCareProduct} />
            <Route
              path="/view-householdproduct"
              component={ViewHouseholdProduct}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
