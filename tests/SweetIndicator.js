describe('SweetIndicator', function() {

    beforeAll(function() {
      container = $('<div id="content"></div>');
      $(document.body).append(container);

      container.append('<ul><li id="one">Item 1</li><li id="two">Item 2<ul><li id="three">Item 2.1</li><li>Item 2.2</li><li>Item 2.3</li></ul></li><li id="three">Item 3</li></ul>');

    });

    it('Should construct', function() {
      theSweetness = new sensible.classes.SweetIndicator({
        target : container,
        itemSelector : 'li',
        color : '#333',
        debug: true
      });
      expect(theSweetness instanceof sensible.classes.SweetIndicator).toBe(true)
    });

    it('Should indicate and update state when clicked on', function(done) {
      //The height (from the window) of the container
  		var containerTop = container.position().top
  		//The height of the item clicked
  		var itemTop = $('#one').position().top;
  		//How far to move. Might be negative (when moving up) which is totally okay.
  		var distanceToMove = itemTop - containerTop;
      $('#one').click();
      window.setTimeout(function() {
        expect(theSweetness.indicator.position().top).toBe(0)
        expect(theSweetness.state).toBe('one')
        done()
      }, 500)
    });

    it('Should indicate via options', function(done) {
      theSweetness = new sensible.classes.SweetIndicator({
        target : container,
        itemSelector : 'li',
        color : '#333',
        state: 'two'
      });
      //The height (from the window) of the container
  		var containerTop = container.position().top
  		//The height of the item clicked
  		var itemTop = $('#two').position().top;
  		//How far to move. Might be negative (when moving up) which is totally okay.
  		var distanceToMove = itemTop - containerTop;
      window.setTimeout(function() {
        // expect(theSweetness.indicator.css('top')).toBe(distanceToMove)
        expect(theSweetness.state).toBe('two')
        done()
      }, 500)
    });

    it('Should indicate via state assignment', function(done) {
      theSweetness = new sensible.classes.SweetIndicator({
        target : container,
        itemSelector : 'li',
        color : '#333',
      });
      theSweetness.state = 'one';
      window.setTimeout(function() {
        expect(theSweetness.state).toBe('one')
        done()
      }, 500)
    });

    it('Should use the state as preprocessed by the function', function(done) {
      theSweetness = new sensible.classes.SweetIndicator({
        target : container,
        itemSelector : 'li',
        color : '#333',
        statePreprocess: function(s) {
          return s.split('~')[0];
        }
      });
      theSweetness.state = 'one~remove';
      window.setTimeout(function() {
        expect(theSweetness.state).toBe('one')
        done()
      }, 500)
    });

});
