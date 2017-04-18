(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sensible = typeof sensible !== "undefined" ? sensible : {};
sensible.classes = typeof sensible.classes !== "undefined" ? sensible.classes : {};

sensible.classes.ExpandCollapse = require('./js/sensibleExpandCollapse.js')
console.log(sensible)

},{"./js/sensibleExpandCollapse.js":2}],2:[function(require,module,exports){
var ExpandCollapse = function (opts) {
	var self = this;

	var defaults = {
		title : "Untitled",
		content : "Untitled Body.",
		slug : "untitled",
		url : 'untitled',
		classes : 'expand-collapse'
	};

	$.extend(this, defaults, opts);

	this.id = this.url.split('/').join('-');

	this.el = $('<div></div>');
	this.el.addClass(this.classes);
	this.el.append('<a href="#' + this.url + '" id="' + this.id + '">' + this.title + '</a>');
	var answer = $('<div style="display:none;">' + this.content + '</div>');
	this.el.append(answer);

	//Handles expanding and collapsing
	this.toggle = function(e) {
		//No need for this to bubble
		e.preventDefault()

		//Update the URL incase the windows is refreshed. Prevent default and use this because a normal click is a push and not a replace
		history.replaceState(null, null, $(this).attr('href') )

		console.log('Toggling... ' + self.slug);

		if (!self.isOpen()) {
			self.open();
		}
		else {
			self.close();
		}

	}

	this.isOpen = function() {
		console.log('This is my element:')
		console.log(self.el);

		return self.el.find('div').is(':visible');
	}

	this.close = function() {
		console.log('Closing: ' + self.slug);
		self.el.removeClass('open');
		answer.hide()
	}

	this.open = function() {
		console.log('Opening: ' + self.slug);
		self.el.addClass('open');
		answer.show()
	}

	$(this.el).on('click', ' > a', this.toggle);

	//Expose an events..
	// ...to toggle the activation. Maybe called when a screen un-slides to close it.
	$(this.el).on('toggle', this.toggle);
	// ...to close
	$(this.el).on('close', this.close);
	// ...to open
	$(this.el).on('open', this.open);

	$(this.el).on('go', this.toggle);

	$(this.el).on('go', function(e) {
		console.log('Go: ' + self.slug + ' by ');
		console.log(e.target);
	});

	//Append to the Document or whatever
	//If a target was supplied..
	if (typeof this.target !== undefined) {
		//... append to it.
		self.el.appendTo(self.target);
	}

	return this;
}

module.exports = ExpandCollapse;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImpzL3NlbnNpYmxlRXhwYW5kQ29sbGFwc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNlbnNpYmxlID0gdHlwZW9mIHNlbnNpYmxlICE9PSBcInVuZGVmaW5lZFwiID8gc2Vuc2libGUgOiB7fTtcbnNlbnNpYmxlLmNsYXNzZXMgPSB0eXBlb2Ygc2Vuc2libGUuY2xhc3NlcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbnNpYmxlLmNsYXNzZXMgOiB7fTtcblxuc2Vuc2libGUuY2xhc3Nlcy5FeHBhbmRDb2xsYXBzZSA9IHJlcXVpcmUoJy4vanMvc2Vuc2libGVFeHBhbmRDb2xsYXBzZS5qcycpXG5jb25zb2xlLmxvZyhzZW5zaWJsZSlcbiIsInZhciBFeHBhbmRDb2xsYXBzZSA9IGZ1bmN0aW9uIChvcHRzKSB7XG5cdHZhciBzZWxmID0gdGhpcztcblxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0dGl0bGUgOiBcIlVudGl0bGVkXCIsXG5cdFx0Y29udGVudCA6IFwiVW50aXRsZWQgQm9keS5cIixcblx0XHRzbHVnIDogXCJ1bnRpdGxlZFwiLFxuXHRcdHVybCA6ICd1bnRpdGxlZCcsXG5cdFx0Y2xhc3NlcyA6ICdleHBhbmQtY29sbGFwc2UnXG5cdH07XG5cblx0JC5leHRlbmQodGhpcywgZGVmYXVsdHMsIG9wdHMpO1xuXG5cdHRoaXMuaWQgPSB0aGlzLnVybC5zcGxpdCgnLycpLmpvaW4oJy0nKTtcblxuXHR0aGlzLmVsID0gJCgnPGRpdj48L2Rpdj4nKTtcblx0dGhpcy5lbC5hZGRDbGFzcyh0aGlzLmNsYXNzZXMpO1xuXHR0aGlzLmVsLmFwcGVuZCgnPGEgaHJlZj1cIiMnICsgdGhpcy51cmwgKyAnXCIgaWQ9XCInICsgdGhpcy5pZCArICdcIj4nICsgdGhpcy50aXRsZSArICc8L2E+Jyk7XG5cdHZhciBhbnN3ZXIgPSAkKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTpub25lO1wiPicgKyB0aGlzLmNvbnRlbnQgKyAnPC9kaXY+Jyk7XG5cdHRoaXMuZWwuYXBwZW5kKGFuc3dlcik7XG5cblx0Ly9IYW5kbGVzIGV4cGFuZGluZyBhbmQgY29sbGFwc2luZ1xuXHR0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL05vIG5lZWQgZm9yIHRoaXMgdG8gYnViYmxlXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHQvL1VwZGF0ZSB0aGUgVVJMIGluY2FzZSB0aGUgd2luZG93cyBpcyByZWZyZXNoZWQuIFByZXZlbnQgZGVmYXVsdCBhbmQgdXNlIHRoaXMgYmVjYXVzZSBhIG5vcm1hbCBjbGljayBpcyBhIHB1c2ggYW5kIG5vdCBhIHJlcGxhY2Vcblx0XHRoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCAkKHRoaXMpLmF0dHIoJ2hyZWYnKSApXG5cblx0XHRjb25zb2xlLmxvZygnVG9nZ2xpbmcuLi4gJyArIHNlbGYuc2x1Zyk7XG5cblx0XHRpZiAoIXNlbGYuaXNPcGVuKCkpIHtcblx0XHRcdHNlbGYub3BlbigpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHR9XG5cblx0fVxuXG5cdHRoaXMuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ1RoaXMgaXMgbXkgZWxlbWVudDonKVxuXHRcdGNvbnNvbGUubG9nKHNlbGYuZWwpO1xuXG5cdFx0cmV0dXJuIHNlbGYuZWwuZmluZCgnZGl2JykuaXMoJzp2aXNpYmxlJyk7XG5cdH1cblxuXHR0aGlzLmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0Nsb3Npbmc6ICcgKyBzZWxmLnNsdWcpO1xuXHRcdHNlbGYuZWwucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRhbnN3ZXIuaGlkZSgpXG5cdH1cblxuXHR0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnT3BlbmluZzogJyArIHNlbGYuc2x1Zyk7XG5cdFx0c2VsZi5lbC5hZGRDbGFzcygnb3BlbicpO1xuXHRcdGFuc3dlci5zaG93KClcblx0fVxuXG5cdCQodGhpcy5lbCkub24oJ2NsaWNrJywgJyA+IGEnLCB0aGlzLnRvZ2dsZSk7XG5cblx0Ly9FeHBvc2UgYW4gZXZlbnRzLi5cblx0Ly8gLi4udG8gdG9nZ2xlIHRoZSBhY3RpdmF0aW9uLiBNYXliZSBjYWxsZWQgd2hlbiBhIHNjcmVlbiB1bi1zbGlkZXMgdG8gY2xvc2UgaXQuXG5cdCQodGhpcy5lbCkub24oJ3RvZ2dsZScsIHRoaXMudG9nZ2xlKTtcblx0Ly8gLi4udG8gY2xvc2Vcblx0JCh0aGlzLmVsKS5vbignY2xvc2UnLCB0aGlzLmNsb3NlKTtcblx0Ly8gLi4udG8gb3BlblxuXHQkKHRoaXMuZWwpLm9uKCdvcGVuJywgdGhpcy5vcGVuKTtcblxuXHQkKHRoaXMuZWwpLm9uKCdnbycsIHRoaXMudG9nZ2xlKTtcblxuXHQkKHRoaXMuZWwpLm9uKCdnbycsIGZ1bmN0aW9uKGUpIHtcblx0XHRjb25zb2xlLmxvZygnR286ICcgKyBzZWxmLnNsdWcgKyAnIGJ5ICcpO1xuXHRcdGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcblx0fSk7XG5cblx0Ly9BcHBlbmQgdG8gdGhlIERvY3VtZW50IG9yIHdoYXRldmVyXG5cdC8vSWYgYSB0YXJnZXQgd2FzIHN1cHBsaWVkLi5cblx0aWYgKHR5cGVvZiB0aGlzLnRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0Ly8uLi4gYXBwZW5kIHRvIGl0LlxuXHRcdHNlbGYuZWwuYXBwZW5kVG8oc2VsZi50YXJnZXQpO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwYW5kQ29sbGFwc2U7XG4iXX0=
