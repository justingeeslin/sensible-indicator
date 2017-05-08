describe('Component', function() {

    it('should construct', function() {
      aComponent = new sensible.classes.Component();
      expect(aComponent instanceof sensible.classes.Component).toBe(true)
    });

    it('should render', function() {
      aComponent = new sensible.classes.Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      expect(aComponent.targetEl.find('#turtles').length > 0).toBe(true)

		});

		it('should render manually without autorender', function() {
      aComponent = new sensible.classes.Component({
        el: $('<p id="pony">My little pony</p>'),
        autoRender: false
      });
      aComponent.render();
      expect(aComponent.targetEl.find('#pony').length > 0).toBe(true)
		});

    it('should call preload callback on render', function() {
      var didPreload = false;
      aComponent = new sensible.classes.Component({
        el: $('<p id="polly">Polly Pocket</p>'),
        preload: function() {
          didPreload = true;
        }
      });
      aComponent.render();
      expect(didPreload).toBe(true)
		});

    it('should call postload callback on render', function() {
      var didPostload = false;
      aComponent = new sensible.classes.Component({
        el: $('<p id="joe">GI Joe</p>'),
        preload: function() {
          didPostload = true;
        }
      });
      aComponent.render();
      expect(didPostload).toBe(true)
		});

    it('should get/set state', function() {
      aComponent = new sensible.classes.Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      aComponent.state = "Turtles";
      expect(aComponent.state).toBe("Turtles")

		});

    it('should set state via the go function', function() {
      aComponent = new sensible.classes.Component({
        el: $('<p id="turtles">Teenage Mutant Ninja Turtles</p>')
      });
      aComponent.go("Splinter");
      expect(aComponent.state).toBe("Splinter")

		});

    it('should emit state change event', function(done) {
      var eventEmitted = false;
      aComponent.targetEl.on('stateChange.sensible', function(e, oldState, newState) {
        eventEmitted = true;
        expect(eventEmitted).toBe(true)
        console.log(e);
        expect(oldState !== undefined).toBe(true)
        expect(newState).toBe("Ponies")
        done()
      })
      aComponent.state = "Ponies";

		});

    it('should set a custom namespace for state change event', function(done) {
      var myNamespace = 'sensitiveSkin';
      aComponent = new sensible.classes.Component({
        el: $('<p id="lotion">Jergins</p>'),
        eventNamespace: myNamespace
      });
      var eventEmitted = false;

      aComponent.targetEl.on('stateChange.sensitiveSkin', function(e, oldState, newState) {
        eventEmitted = true;
        expect(eventEmitted).toBe(true)
        console.log(e);
        expect(oldState !== undefined).toBe(true)
        expect(newState).toBe("Dark Wing Duck")
        done()
      })
      aComponent.state = "Dark Wing Duck";

		});

});
