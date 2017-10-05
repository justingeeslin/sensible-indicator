var extend = require('extend')
var Component = require('sensible-component')
var SweetIndicator = function (opts) {
	var self = this;

	var defaults = {
		color : 'black',
		itemSelector : 'li'
	};

	$.extend(this, defaults, opts);

	self = extend(self, new Component(self))

	// Items that might be clicked on.
	var items = this.target.find(this.itemSelector);

	var container = $('<div class="sensible indicator"></div>')
	container.css('position', 'absolute');

	var indicator = this.indicator = $('<div class="bar">&nbsp;</div>');
	indicator.css('position', 'absolute');
	indicator.css('background-color', this.color);

	indicator.css('left', '0');
	indicator.css('top', '0');
	container.append(indicator);

	items.on('click go', function() {
		self.log('Clicking/Going on this item. Setting the state..')
		self.state = $(this)[0].id;
	})

	var indicate = function(el) {
		if (el === undefined || el.length <= 0) {
			console.warn('Attempting to indicate an element that is not there.', el);
			return;
		}
		self.log('Clicked/Activated the item. Indicating: ' + el.text()  + ' with a height of ' + el.height());

		//The height (from the window) of the container
		var containerTop = container.position().top
		//The height of the item clicked
		var itemTop = el.position().top;
		//How far to move. Might be negative (when moving up) which is totally okay.
		var distanceToMove = itemTop - containerTop;


		//Change the height of the bar and Slide to the item
		indicator.animate({
			top: distanceToMove + 'px',
			height: el.height()
		}, 250);

	}

	// Insert (only one)
	container.insertBefore(this.target.filter(':first'));

	this.stateChange = function(oldState, newState) {
		self.log('Indicator State Change: ' + oldState + ', ' + newState)
		if (newState.length < 0) {
			//Activate the first item
			self.log('Indicating the first item' + items.filter(':first').text() + ' from the following items');
			indicate(items.filter(':first'))
		}
		else {
			self.log('Indicating an item for the following state:' + newState);
			indicate(items.filter('#' + newState))
		}
	}


	return this;
}

module.exports = SweetIndicator;
