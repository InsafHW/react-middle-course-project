import './Counter.scss'
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className={'count'}>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export {
    Counter,
}