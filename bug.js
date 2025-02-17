```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to use setInterval
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Missing cleanup function to stop the interval
    // This causes memory leak

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```