var React = require('react');
var Catalog = require('./catalog/app-catalog');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var CatalogDetail = require('./product/app-catalogdetail');
var Template = require('./app-template.js');
var Locations = Router.Locations;
var Location  = Router.Location;

var App = React.createClass({
  render:function(){
      //template componenent from app-template.js
      //handler is the component that we want to render at the path
      //:item is passed as a prop to CatalogDetail
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
      </Template>
    );
  }
});

module.exports = App;
