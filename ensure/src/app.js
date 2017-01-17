// ----------------------------------------------------------------------------
// imports
//
var Backbone = require('backbone')
var $ = require('jquery')
Backbone.$ = $

var TodoCollection = require('./collections/todo-collection')
var AppView = require('./views/app-view')


// ----------------------------------------------------------------------------
// App
// * creates a new todo collection
// * creates a new app view
//   * passes the todo collection to it
//   * renders it to #todoapp
//
var App = Backbone.Router.extend({
  start: function() {
    window.todos = new TodoCollection()
    var view = new AppView({
      el: '#todoapp',
      collection: todos,
    })
    view.render()
  },
});

document.body.addEventListener('dblclick', function(eve){
    alert('abc');
    require.ensure(['./a'], function(require){
        var math = require('./a');

        alert(math.add(1, 3));
    }, 'math_ensure_js')
});

// ----------------------------------------------------------------------------
// exports
//
module.exports = new App()
