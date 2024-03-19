//your JS code here. If required.
function allMethods() {
  //write your code here
	// Get all properties of the Math object
  const mathProperties = Object.getOwnPropertyNames(Math);
  
  // Filter out the methods
  const methods = mathProperties.filter(prop => typeof Math[prop] === 'function');
  
  // Return comma-separated list of method names
  return methods.join(', ');
}

alert(allMethods());
