angular.module('customFilter',[])
.filter('custom', function() {
  return function(input, search) {
    if (!input) return input;
    if (!search) return input;
    var expected = ('' + search).toLowerCase();
    var result = {};
    angular.forEach(input, function(value, key) {
      var actual = ('' + value).toLowerCase();
      if (actual.indexOf(expected) !== -1) {
        result[key] = value;
      }
    });
    return result;
  }
})
.filter('directionName', function() {
	return function(direction) {
		if (direction.x === 1) {
			return "East";
		}
		else if (direction.x === -1) {
			return "West";
		}
		else if (direction.y === 1) {
			return "North";
		}
		else if (direction.y === -1) {
			return "South";
		}
	}
});