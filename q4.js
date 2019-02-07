class SortArray {
	constructor(inputArray) {
		this.originalArray = inputArray;  
	}
	
	get getSortedArray() {
		return function(){
			return this.originalArray.slice(0).sort;
		}.bind(this);
	} 
}
class SortObjectArray extends SortArray {
	constructor(inputObjectArray) {
		super(inputObjectArray);	
	}
}

let sortObjectArray = new SortObjectArray(jsonObjects);
console.log(sortObjectArray.getSortedArray);
