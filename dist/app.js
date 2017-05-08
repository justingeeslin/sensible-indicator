(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.sensible = typeof sensible !== "undefined" ? sensible : {};
sensible.classes = typeof sensible.classes !== "undefined" ? sensible.classes : {};

sensible.classes.Component = require('./js/sensibleComponent.js');

module.exports = sensible.classes.Component;

},{"./js/sensibleComponent.js":2}],2:[function(require,module,exports){
var Component = function (options) {
	var self = this;

	// An identifier for the component's current state.
	var state = '';

	var defaults = {
		// To log or not to log..
		debug: false,
		el : $(document.createDocumentFragment()),
		// The element to which this component (el) should be rendered/appended to.
		target: 'body',
		// The object / jQuery selection of the target
		targetEl : document.body,
		stateChange : function(oldState, newState) {
			self.log('Changing state from ' + oldState + ' to ' + newState);
			self.targetEl.trigger('stateChange.sensible', {
				'oldState': oldState,
				'newState': newState
			});
		},
		preload: function() { },
		postload: function() { },
		// Call render automatically upon construction becuse sometimes you just want to construct the thing. Disable if the component request data async and should not be show until it is loaded.
		autoRender: true,
	};

	if (typeof $contentTarget !== "undefined") {
		defaults.targetEl = $contentTarget;
	}

	$.extend(this, defaults, options);

	// Just incase the targetEl is not a jQuery selction or is a plain dom element, select it.
	this.targetEl = $(this.targetEl);

	this.log = function(msg) {
		if (self.debug) {
			console.log(msg);
		}
	}

	Object.defineProperty(this, 'state', {
		get: function() { return state; },
		set: function(newState) {
			this.stateChange(state, newState)
			state = newState;
			return true
		}
	});

	this.go = function(newState) {
		this.state = newState;
	}

	// Append the El with all of its markup and events to the targetEl
	this.render = function() {
		self.preload();
		self.log('Rendering..');
		self.targetEl.append(this.el);
		self.postload();
	}

	// Call render automatically upon construction
	if (this.autoRender) {
		this.render()
	}

	return this;
}



module.exports = Component;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL3NlbnNpYmxlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5zZW5zaWJsZSA9IHR5cGVvZiBzZW5zaWJsZSAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbnNpYmxlIDoge307XG5zZW5zaWJsZS5jbGFzc2VzID0gdHlwZW9mIHNlbnNpYmxlLmNsYXNzZXMgIT09IFwidW5kZWZpbmVkXCIgPyBzZW5zaWJsZS5jbGFzc2VzIDoge307XG5cbnNlbnNpYmxlLmNsYXNzZXMuQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9qcy9zZW5zaWJsZUNvbXBvbmVudC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbnNpYmxlLmNsYXNzZXMuQ29tcG9uZW50O1xuIiwidmFyIENvbXBvbmVudCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHQvLyBBbiBpZGVudGlmaWVyIGZvciB0aGUgY29tcG9uZW50J3MgY3VycmVudCBzdGF0ZS5cblx0dmFyIHN0YXRlID0gJyc7XG5cblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdC8vIFRvIGxvZyBvciBub3QgdG8gbG9nLi5cblx0XHRkZWJ1ZzogZmFsc2UsXG5cdFx0ZWwgOiAkKGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSksXG5cdFx0Ly8gVGhlIGVsZW1lbnQgdG8gd2hpY2ggdGhpcyBjb21wb25lbnQgKGVsKSBzaG91bGQgYmUgcmVuZGVyZWQvYXBwZW5kZWQgdG8uXG5cdFx0dGFyZ2V0OiAnYm9keScsXG5cdFx0Ly8gVGhlIG9iamVjdCAvIGpRdWVyeSBzZWxlY3Rpb24gb2YgdGhlIHRhcmdldFxuXHRcdHRhcmdldEVsIDogZG9jdW1lbnQuYm9keSxcblx0XHRzdGF0ZUNoYW5nZSA6IGZ1bmN0aW9uKG9sZFN0YXRlLCBuZXdTdGF0ZSkge1xuXHRcdFx0c2VsZi5sb2coJ0NoYW5naW5nIHN0YXRlIGZyb20gJyArIG9sZFN0YXRlICsgJyB0byAnICsgbmV3U3RhdGUpO1xuXHRcdFx0c2VsZi50YXJnZXRFbC50cmlnZ2VyKCdzdGF0ZUNoYW5nZS5zZW5zaWJsZScsIHtcblx0XHRcdFx0J29sZFN0YXRlJzogb2xkU3RhdGUsXG5cdFx0XHRcdCduZXdTdGF0ZSc6IG5ld1N0YXRlXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdHByZWxvYWQ6IGZ1bmN0aW9uKCkgeyB9LFxuXHRcdHBvc3Rsb2FkOiBmdW5jdGlvbigpIHsgfSxcblx0XHQvLyBDYWxsIHJlbmRlciBhdXRvbWF0aWNhbGx5IHVwb24gY29uc3RydWN0aW9uIGJlY3VzZSBzb21ldGltZXMgeW91IGp1c3Qgd2FudCB0byBjb25zdHJ1Y3QgdGhlIHRoaW5nLiBEaXNhYmxlIGlmIHRoZSBjb21wb25lbnQgcmVxdWVzdCBkYXRhIGFzeW5jIGFuZCBzaG91bGQgbm90IGJlIHNob3cgdW50aWwgaXQgaXMgbG9hZGVkLlxuXHRcdGF1dG9SZW5kZXI6IHRydWUsXG5cdH07XG5cblx0aWYgKHR5cGVvZiAkY29udGVudFRhcmdldCAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGRlZmF1bHRzLnRhcmdldEVsID0gJGNvbnRlbnRUYXJnZXQ7XG5cdH1cblxuXHQkLmV4dGVuZCh0aGlzLCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cblx0Ly8gSnVzdCBpbmNhc2UgdGhlIHRhcmdldEVsIGlzIG5vdCBhIGpRdWVyeSBzZWxjdGlvbiBvciBpcyBhIHBsYWluIGRvbSBlbGVtZW50LCBzZWxlY3QgaXQuXG5cdHRoaXMudGFyZ2V0RWwgPSAkKHRoaXMudGFyZ2V0RWwpO1xuXG5cdHRoaXMubG9nID0gZnVuY3Rpb24obXNnKSB7XG5cdFx0aWYgKHNlbGYuZGVidWcpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fVxuXHR9XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzdGF0ZScsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3RhdGU7IH0sXG5cdFx0c2V0OiBmdW5jdGlvbihuZXdTdGF0ZSkge1xuXHRcdFx0dGhpcy5zdGF0ZUNoYW5nZShzdGF0ZSwgbmV3U3RhdGUpXG5cdFx0XHRzdGF0ZSA9IG5ld1N0YXRlO1xuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdHRoaXMuZ28gPSBmdW5jdGlvbihuZXdTdGF0ZSkge1xuXHRcdHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcblx0fVxuXG5cdC8vIEFwcGVuZCB0aGUgRWwgd2l0aCBhbGwgb2YgaXRzIG1hcmt1cCBhbmQgZXZlbnRzIHRvIHRoZSB0YXJnZXRFbFxuXHR0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGYucHJlbG9hZCgpO1xuXHRcdHNlbGYubG9nKCdSZW5kZXJpbmcuLicpO1xuXHRcdHNlbGYudGFyZ2V0RWwuYXBwZW5kKHRoaXMuZWwpO1xuXHRcdHNlbGYucG9zdGxvYWQoKTtcblx0fVxuXG5cdC8vIENhbGwgcmVuZGVyIGF1dG9tYXRpY2FsbHkgdXBvbiBjb25zdHJ1Y3Rpb25cblx0aWYgKHRoaXMuYXV0b1JlbmRlcikge1xuXHRcdHRoaXMucmVuZGVyKClcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQ7XG4iXX0=
