# React setInterval Memory Leak
This example demonstrates a common error when using `setInterval` within a React component: forgetting to clear the interval in the cleanup function of `useEffect`. This leads to a memory leak because the interval continues to run even after the component is unmounted.

## Bug
The `bug.js` file contains a React component that uses `setInterval` to update a count every second. However, it fails to clear the interval in the `useEffect` cleanup function.  This causes the interval to persist indefinitely, leading to memory leaks.

## Solution
The `bugSolution.js` file provides the correct implementation, including a cleanup function that stops the interval when the component unmounts.