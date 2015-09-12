var React = require('react');
var AppStore = require('../stores/app-store');

var StoreWatchMixin = function(cb){
  return {
    //used to return private values from stores
    getInitialState:function(){
      return cb(this)
    },
    //listener for whenever something changes
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange)
    },
    _onChange: function(){
      //returns component
      this.setState(cb(this))
    }
  }
}

module.exports = StoreWatchMixin;
