import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react"
import List from "./components/List"

function App() {

  const [count, setCount ] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello there"} />
      <Section title="Different Title">This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee", "code", "sleep", 23]} render={(item: (string | number )) => <span className="bold">{item}</span>} />
    </>
  )
}

export default App

{/* <List items={["23", "coffee", "code", "sleep"]} render={(items) => <span className="gold">{items}</span>} /> */}

