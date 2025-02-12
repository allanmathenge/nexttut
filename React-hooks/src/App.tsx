import Counter from "./components/Counter"
import { CounterProvider } from "./context/CounterContext"
import { initState } from "./context/CounterContext"

export default function App() {
  return (
    <div>
      <CounterProvider count={initState.count} text={initState.text}>
        <Counter>
          {(num: number) => <span>Current count: {num}</span>}
        </Counter>
      </CounterProvider>
    </div>
  )
}
