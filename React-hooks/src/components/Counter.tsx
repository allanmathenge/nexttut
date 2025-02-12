
import { ReactNode } from "react";
import { useCounter } from "../context/CounterContext";
import { useCounterText } from "../context/CounterContext";

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = useCounterText()

    return (
        <>
            <h2>{children(count)}</h2>
            <div className="">
                <button onClick={increment}>Add</button>
                <button onClick={decrement}>Add</button>
            </div>
            <input onChange={handleTextInput} type="text" />
            <p>{text}</p>
        </>
    )

}

export default Counter
