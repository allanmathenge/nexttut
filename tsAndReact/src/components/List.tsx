import { ReactNode } from "react";

interface ItemProps<T> {
    items: T[],
    render: ((items: T) => ReactNode)
}

const List = <T,>({items, render}: ItemProps<T>) => {
    return (
        <>
            {
                items.map((item, i) => (
                    <li key={i}>
                        {render(item)}
                    </li>
                ))
            }
        </>
    )
}

export default List