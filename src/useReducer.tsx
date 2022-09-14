import { useReducer } from 'react'
import { Reducer } from 'redux'

const initialState = {
  count: 0,
}

type ActionType =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string };

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
  case 'increment':
    return { count: state.count + action.payload }
  case 'decrement':
    return { count: state.count - Number(action.payload) }
  default:
    throw new Error()
  }
}

/** 如果项目中用了 redux，可以方便的使用 redux 中的 Reducer 来指定 reducer 的类型，这样可以正确推断返回值的类型 */
const reducer2: Reducer<typeof initialState, ActionType> = () => {
  return {
    count: 123
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer Example</h1>
      <h2>Count: {state.count}</h2>
      <p>
        <button onClick={() => { dispatch({ type: 'increment', payload: 1 }) }}>Add count</button>
        <button onClick={() => { dispatch({ type: 'decrement', payload: '2' }) }}>Reduce count</button>
      </p>
    </div>
  )
}

export default UseReducerExample
