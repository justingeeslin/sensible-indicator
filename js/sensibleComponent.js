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
		},
		enumerable: true
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
