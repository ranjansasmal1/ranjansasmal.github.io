/*
	Fun little expirament with custom attributes
	Usage:
	<div id="foo" data-foo-bar="awesome" data-whatever="cool"></div>
	$('#foo').dataSet() // >> {fooBar: 'awesome', whatever: 'cool'}
	
	or 
	
	<div id="foo2"></div>
	$('#foo2').dataSet({fooBar: 'awesome', whatever: 'cool'}); // >> <div id="foo" data-foo-bar="awesome" data-whatever="cool"></div>
*/

(function($, undefined){
	
	$.fn.dataSet = function (attrMap) {
		
		// helper functions
		var normalizeName = function(givenName) {

			var parts = givenName.replace('data-', '').split('-'), i;
				
			// http://stackoverflow.com/questions/1026069/capitalize-first-letter-of-string-in-javascript
			for (i = 1; i < parts.length; i++) {
				parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1); // 
			}
			
			return parts.join('');
		};
		
		var denormalizeName = function (givenName) {
			// TODO
			// i need to turn a camelcase name into a hypenated one
			// like: fooBar into data-foo-bar
		};
		
		
		// only support one object for now
		if (this.length == 1 && attrMap === undefined) {
			var elm = this.get(0),
					attributes = elm.attributes,
					map = {},
					i,
					pattern = /^data\-/;
					
			if (elm.dataset !== undefined) {
				map = elm.dataset;
			}
			else {
				for (i = 0; i < attributes.length; i++){
					if (pattern.test(attributes[i].nodeName)) {
						map[normalizeName(attributes[i].nodeName)] = attributes[i].nodeValue;
					}
				}
				
			}

			return map;
		} 
		else {
			// use the map passed in to set attributes on the element
			for (var attr in attrMap) {
				if (attrMap.hasOwnProperty(attr)) {
					this.attr('data-' + attr, attrMap[attr]);
				}
			}
			
			return this;
		}
		
	};
	
})(jQuery);