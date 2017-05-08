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
			self.targetEl.trigger('stateChange.' + self.eventNamespace, [oldState, newState]);
		},
		preload: function() { },
		postload: function() { },
		// To avoid collisions and incase you want to namespace individual components
		eventNamespace: 'sensible',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL3NlbnNpYmxlQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuc2Vuc2libGUgPSB0eXBlb2Ygc2Vuc2libGUgIT09IFwidW5kZWZpbmVkXCIgPyBzZW5zaWJsZSA6IHt9O1xuc2Vuc2libGUuY2xhc3NlcyA9IHR5cGVvZiBzZW5zaWJsZS5jbGFzc2VzICE9PSBcInVuZGVmaW5lZFwiID8gc2Vuc2libGUuY2xhc3NlcyA6IHt9O1xuXG5zZW5zaWJsZS5jbGFzc2VzLkNvbXBvbmVudCA9IHJlcXVpcmUoJy4vanMvc2Vuc2libGVDb21wb25lbnQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZW5zaWJsZS5jbGFzc2VzLkNvbXBvbmVudDtcbiIsInZhciBDb21wb25lbnQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0Ly8gQW4gaWRlbnRpZmllciBmb3IgdGhlIGNvbXBvbmVudCdzIGN1cnJlbnQgc3RhdGUuXG5cdHZhciBzdGF0ZSA9ICcnO1xuXG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHQvLyBUbyBsb2cgb3Igbm90IHRvIGxvZy4uXG5cdFx0ZGVidWc6IGZhbHNlLFxuXHRcdGVsIDogJChkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLFxuXHRcdC8vIFRoZSBlbGVtZW50IHRvIHdoaWNoIHRoaXMgY29tcG9uZW50IChlbCkgc2hvdWxkIGJlIHJlbmRlcmVkL2FwcGVuZGVkIHRvLlxuXHRcdHRhcmdldDogJ2JvZHknLFxuXHRcdC8vIFRoZSBvYmplY3QgLyBqUXVlcnkgc2VsZWN0aW9uIG9mIHRoZSB0YXJnZXRcblx0XHR0YXJnZXRFbCA6IGRvY3VtZW50LmJvZHksXG5cdFx0c3RhdGVDaGFuZ2UgOiBmdW5jdGlvbihvbGRTdGF0ZSwgbmV3U3RhdGUpIHtcblx0XHRcdHNlbGYubG9nKCdDaGFuZ2luZyBzdGF0ZSBmcm9tICcgKyBvbGRTdGF0ZSArICcgdG8gJyArIG5ld1N0YXRlKTtcblx0XHRcdHNlbGYudGFyZ2V0RWwudHJpZ2dlcignc3RhdGVDaGFuZ2UuJyArIHNlbGYuZXZlbnROYW1lc3BhY2UsIFtvbGRTdGF0ZSwgbmV3U3RhdGVdKTtcblx0XHR9LFxuXHRcdHByZWxvYWQ6IGZ1bmN0aW9uKCkgeyB9LFxuXHRcdHBvc3Rsb2FkOiBmdW5jdGlvbigpIHsgfSxcblx0XHQvLyBUbyBhdm9pZCBjb2xsaXNpb25zIGFuZCBpbmNhc2UgeW91IHdhbnQgdG8gbmFtZXNwYWNlIGluZGl2aWR1YWwgY29tcG9uZW50c1xuXHRcdGV2ZW50TmFtZXNwYWNlOiAnc2Vuc2libGUnLFxuXHRcdC8vIENhbGwgcmVuZGVyIGF1dG9tYXRpY2FsbHkgdXBvbiBjb25zdHJ1Y3Rpb24gYmVjdXNlIHNvbWV0aW1lcyB5b3UganVzdCB3YW50IHRvIGNvbnN0cnVjdCB0aGUgdGhpbmcuIERpc2FibGUgaWYgdGhlIGNvbXBvbmVudCByZXF1ZXN0IGRhdGEgYXN5bmMgYW5kIHNob3VsZCBub3QgYmUgc2hvdyB1bnRpbCBpdCBpcyBsb2FkZWQuXG5cdFx0YXV0b1JlbmRlcjogdHJ1ZSxcblx0fTtcblxuXHRpZiAodHlwZW9mICRjb250ZW50VGFyZ2V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0ZGVmYXVsdHMudGFyZ2V0RWwgPSAkY29udGVudFRhcmdldDtcblx0fVxuXG5cdCQuZXh0ZW5kKHRoaXMsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHQvLyBKdXN0IGluY2FzZSB0aGUgdGFyZ2V0RWwgaXMgbm90IGEgalF1ZXJ5IHNlbGN0aW9uIG9yIGlzIGEgcGxhaW4gZG9tIGVsZW1lbnQsIHNlbGVjdCBpdC5cblx0dGhpcy50YXJnZXRFbCA9ICQodGhpcy50YXJnZXRFbCk7XG5cblx0dGhpcy5sb2cgPSBmdW5jdGlvbihtc2cpIHtcblx0XHRpZiAoc2VsZi5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2cobXNnKTtcblx0XHR9XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0YXRlJywge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBzdGF0ZTsgfSxcblx0XHRzZXQ6IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG5cdFx0XHR0aGlzLnN0YXRlQ2hhbmdlKHN0YXRlLCBuZXdTdGF0ZSlcblx0XHRcdHN0YXRlID0gbmV3U3RhdGU7XG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0dGhpcy5nbyA9IGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuXHR9XG5cblx0Ly8gQXBwZW5kIHRoZSBFbCB3aXRoIGFsbCBvZiBpdHMgbWFya3VwIGFuZCBldmVudHMgdG8gdGhlIHRhcmdldEVsXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZi5wcmVsb2FkKCk7XG5cdFx0c2VsZi5sb2coJ1JlbmRlcmluZy4uJyk7XG5cdFx0c2VsZi50YXJnZXRFbC5hcHBlbmQodGhpcy5lbCk7XG5cdFx0c2VsZi5wb3N0bG9hZCgpO1xuXHR9XG5cblx0Ly8gQ2FsbCByZW5kZXIgYXV0b21hdGljYWxseSB1cG9uIGNvbnN0cnVjdGlvblxuXHRpZiAodGhpcy5hdXRvUmVuZGVyKSB7XG5cdFx0dGhpcy5yZW5kZXIoKVxuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudDtcbiJdfQ==
