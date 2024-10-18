

class MyHashMap {

  public myMap: Array<Array<number>>;

  constructor() {
    this.myMap = new Array();
  }

  put(key: number, value: number): void {
    if (this.myMap.find((input) => input[0] === key))
      this.myMap.find(input => input[0] === key)[1] = value;
    else
      this.myMap.push([key,value])
  }

  get(key: number): number {
    if (this.myMap.find((input) => input[0] === key))
      return this.myMap.find((input) => input[0] === key)[1];
    else 
      return -1
  }

  remove(key: number): void {
    this.myMap = this.myMap.filter((input) => input[0] !== key);
  }
}

var myMap = new MyHashMap();
myMap.put(1,2);
myMap.put(2,3);
console.log(myMap);
myMap.remove(2);
console.log(myMap);