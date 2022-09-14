import React from 'react'
import ReactDOM from 'react-dom/client'
import ComponentPropsStateRef from './component-props-state-ref'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ComponentPropsStateRef />
  </React.StrictMode>
)
