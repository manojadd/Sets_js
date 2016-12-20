var object = {x: "hello"};
var set = new Set(["a", object]);
console.log(set);

set.add(NaN);   //can add nan.
console.log(set); 
console.log(set.has(NaN));   //yes nan ==nan so it can be searched
console.log(set.delete(NaN)); //will return the Set.has(value) would have previously returned. 
console.log(set.delete(NaN));

var set_arr = set.entries();  //will give an array [value,value]
console.log(set_arr);

console.log(set_arr.next().value); 
console.log(set_arr.next().value);
set.add("b");
var set_values = set.values();
console.log(set_values+" this is of values");
console.log(set_values.next()); //second attribute says whether the array is completely iterated yet.
console.log(set_values.next().done); //anyeway the next will move forward whether we used the value or not
console.log(set_values.next());
console.log(set_values.next());
var set_keys = set.keys();
console.log(set_keys +" this is of keys");

function display(value1,value2, set )
{
	console.log("key: " + value1+ " value: " + value2);
}
set.forEach(display);
var ob = {
	name: "manoj",
	age:23
};
console.log(ob);
console.log(typeof ob);
console.log(set.add("a")); //wont give error but wont add and returns the set as it is.


//var made_map = new Map(set);
//console.log(made_map);
set.delete("a");
//var made_map = new Map(set);
set.delete("b");











var capitals = [["Karnataka","Bengaluru"],["Telangana","Hyderabad"],["West Bengal","Kolkata"],["UP",""],["Assam"]];
console.log(capitals[1][1]);
var made_map = new Map(capitals);
console.log(made_map);
for (region of made_map) {
	console.log("State name: "+region[0]+ " Capital: "+region[1]);
}



made_map.set("UP","Lukhnow");
console.log(made_map);
made_map.set(function disp(){console.log("inside disp")},"disp capital");
console.log(made_map);
console.log(made_map.size);
console.log(made_map.delete("disp"));
console.log(made_map);
for (region of made_map) {
	console.log("State name: "+region[0]+ " Capital: "+region[1]);
}
console.log(made_map.has("disp()"));

made_map.delete("UP");

var arrrr = made_map.entries();

/*
console.log(arrrr);
for (hell of arrrr) {
	// statement
	console.log(hell[1]);
}
*/

for(keyss of made_map.keys())
{
	console.log(made_map.get(keyss));
}
for(values of made_map.values())
{
	console.log(values);
}
