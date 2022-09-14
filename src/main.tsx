import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentPropsStateRef from './component-props-state-ref'
import UseImperativeHandleExample from './useImperativeHandle'
import UseReducerExample from './useReducer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ComponentPropsStateRef />
    <hr />
    <UseReducerExample />
    <hr />
    <UseImperativeHandleExample />
  </React.StrictMode>
)
