import { useReducer, Reducer } from 'react'

const initialState = {
  count: 0,
}

type ActionType =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string };

const reducer: Reducer<typeof initialState, ActionType> = (state, action) => {
  switch (action.type) {
  case 'increment':
    return { count: state.count + action.payload }
  case 'decrement':
    return { count: state.count - Number(action.payload) }
  default:
    throw new Error()
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>useReducer Example</h1>
      <h2>Count: {state.count}</h2>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'increment', payload: 1 })
          }}
        >
          Add count
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'decrement', payload: '2' })
          }}
        >
          Reduce count
        </button>
      </p>
    </div>
  )
}

export default UseReducerExample
