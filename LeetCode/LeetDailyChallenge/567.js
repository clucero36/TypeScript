/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let countArr1 = [];
  let countArr2 = [];
  let map = new Map();
  for (let i = 0; i<26; ++i) {
      let char = String.fromCharCode(97 + i);
      map.set(char, i);
      countArr1.push(0);
      countArr2.push(0);
  }

  for (let x = 0; x < s1.length; x++) {
      countArr1[map.get(s1[x])]++;
  }    

  for (let x = 0; x <= s2.length - s1.length; x++) {
      for (let y = 0; y < s1.length; y++) {
          countArr2[map.get(s2[y+x])]++;
      }
      for (let z = 0; z < countArr1.length; z++) {
          if (z === countArr1.length-1) 
              return true;
          else if (countArr1[z] !== countArr2[z])
              break;
      }
      countArr2.fill(0);
  }



  return false;
  
  
  // let s1Arr = s1.split('');
  // let curIndex = 0;
  // let p1 = 0;
  // let p2 = 0;

  // while (curIndex < s2.length) {
  //     if ( s1Arr.indexOf(s2[p1]) !== -1 ) {
  //         s1Arr.splice(s1Arr.indexOf(s2[p1]) , 1);

  //         if ( s1Arr.length === 0 ) 
  //             return true;

  //         else {
  //             p1++;
  //         }
  //     }

  //     else {
  //         curIndex++;
  //         p1 = curIndex;
  //         s1Arr = s1.split('');
  //     }
  // }

  // return false;

};