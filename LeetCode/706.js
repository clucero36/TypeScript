var MyHashMap = /** @class */ (function () {
    function MyHashMap() {
        this.myMap = new Array();
    }
    MyHashMap.prototype.put = function (key, value) {
        if (this.myMap.find(function (input) { return input[0] === key; }))
            this.myMap.find(function (input) { return input[0] === key; })[1] = value;
        else
            this.myMap.push([key, value]);
    };
    MyHashMap.prototype.get = function (key) {
        if (this.myMap.find(function (input) { return input[0] === key; }))
            return this.myMap.find(function (input) { return input[0] === key; })[1];
        else
            return -1;
    };
    MyHashMap.prototype.remove = function (key) {
        this.myMap = this.myMap.filter(function (input) { return input[0] !== key; });
    };
    return MyHashMap;
}());
var myMap = new MyHashMap();
myMap.put(1, 2);
myMap.put(2, 3);
console.log(myMap);
myMap.remove(2);
console.log(myMap);
