// import { useState, useEffect, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from 'react'

// interface User {
//   id: number
//   name: string
// }
// // Fibonacci sequence

// type fibFunc = (n: number) => number

// const fib: fibFunc = (n) => {
//   if (n < 2) return n
//   return fib(n - 1) + fib(n - 2)
// }

// const myNum = 5

// function App() {
//   // waiting for data the value is usually null
//   // useState<User>({} as User) --> is an assertion, lying to the compiler and my cause some errors

//   const [count, setCount] = useState<number>(0)
//   const [users, setUsers] = useState<User[] | null>(null)

//   const inputRef = useRef<HTMLInputElement>(null)

//   console.log(inputRef?.current)
//   console.log(inputRef?.current?.value) // optionl chaining

//   useEffect(() => {
//     console.log("Mounting")

//     return () => console.log("unmounting")
//   }, [])

//   const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])

//   const result = useMemo<number>(() => fib(myNum), [])

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={addTwo}>Add</button>
//       <h2>{result}</h2>
//       <input ref={inputRef} type="text" />
//     </>
//   )
// }

// export default App
