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
          <h1 class="title">Tutti Mercado Online</h1>
          <div className="header">
            <div class="topnav">
              <a class="active" href="#">
                Início
              </a>
              <a href="#view-bakery">Padaria e Confeitaria</a>
              <a href="#view-butchery">Talho e Charcutaria</a>
              <a href="#view-fishery">Peixaria</a>
              <a href="#view-dairygood">Laticínios</a>
              <a href="#view-dryfood">Secos</a>
              <a href="#view-beverage">Bebidas</a>
              <a href="#view-cannedgood">Enlatados</a>
              <a href="#view-freshfood">Frescos</a>
              <a href="#view-frozenfood">Congelados</a>
              <a href="#view-careproduct">Higiene e Beleza</a>
              <a href="#view-householdproduct">Casa</a>
            </div>
          </div>
          <div className="content">
            <Route path="/" component={Home} />
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
