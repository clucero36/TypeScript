function maxKelements(nums: number[], k: number): number {
  let count = 0;
  const maxHeap = new MaxPriorityQueue((x, y) => y - x);

  for (let value of nums) {
      maxHeap.enqueue(value);
  }

  for (let x = 0; x < k; x++) {
      let val = maxHeap.dequeue().element;
      count += val;

      maxHeap.enqueue(Math.ceil(val/3));
  }

  return count;
};

// LeetCode provides class MaxPriorityQueue we can use to create a max-heap

// A max-heap is a complete binary tree in which the value at each node is greater than or equal to the value of its children. 
// Becuase its a complete binary tree, max-heaps are usually represented as an array with the max value being at arr[0]

// When we initialize MaxPriorityQueue, we must pass a sort function as a parameter to its constructor. 