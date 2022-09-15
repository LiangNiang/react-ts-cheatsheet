import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentPropsStateRef from './component-props-state-ref'
import UseImperativeHandleExample from './useImperativeHandle'
import UseReducerExample from './useReducer'
import CustomHooksExample from './custom-hooks'
import ClassComponent from './class-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ComponentPropsStateRef />
    <hr />
    <UseReducerExample />
    <hr />
    <UseImperativeHandleExample />
    <hr />
    <CustomHooksExample />
    <hr />
    <ClassComponent message='hello' />
  </React.StrictMode>
)
