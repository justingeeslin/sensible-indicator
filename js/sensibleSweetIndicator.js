var extend = require('extend')
require('sensible-component')
var SweetIndicator = function (opts) {
	var self = this;

	var defaults = {
		target : $(document.body),
		color : 'black',
		itemSelector : 'li'
	};

	$.extend(this, defaults, opts);

	self = extend(self, new sensible.classes.Component(self))

	// Items that might be clicked on.
	var items = this.target.find(this.itemSelector);

	var container = $('<div class="sensible indicator"></div>')

	var indicator = this.indicator = $('<div class="bar">&nbsp;</div>');
	indicator.css('background-color', this.color);
	indicator.css('position', 'absolute');
	indicator.css('left', '0');
	indicator.css('top', '0');
	container.append(indicator);

	items.on('click go', function() {
		self.log('Clicking/Going on this item. Setting the state..')
		self.state = '#' + $(this)[0].id;
	})

	var indicate = function(el) {
		self.log('Clicked/Activated the item. Indicating: ' + el.text()  + ' with a height of ' + el.height());

		//The height (from the window) of the container
		var containerTop = container.position().top
		//The height of the item clicked
		var itemTop = el.position().top;
		//How far to move. Might be negative (when moving up) which is totally okay.
		var distanceToMove = itemTop - containerTop;


		//Change the height of the bar and Slide to the item
		console.log('Moving the indicator to: ' + distanceToMove + 'px');
		indicator.animate({
			top: distanceToMove + 'px',
			height: el.height()
		}, 250);

	}

	// Insert (only one)
	container.insertBefore(this.target.filter(':first'));

	this.stateChange = function(oldState, newState) {
		console.log('State Change: ' + oldState + ', ' + newState)
		if (newState.length < 0) {
			//Activate the first item
			self.log('Indicating the first item' + items.filter(':first').text() + ' from the following items');
			indicate(items.filter(':first'))
		}
		else {
			self.log('Indicating an item for the following state:' + newState);
			indicate(items.filter(newState))
		}
	}


	return this;
}

module.exports = SweetIndicator;
