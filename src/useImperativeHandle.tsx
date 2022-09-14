import { forwardRef, useImperativeHandle, useRef } from 'react'

const UseImperativeHandleExample = () => {
  const childRef = useRef<ChildComponentHandle>(null)

  return (
    <div>
      <h1>useImperativeHandle Example</h1>
      <h2>
        <button onClick={() => childRef.current?.alertHello()}>调用 ChildComponent 的 alertHello</button>
      </h2>
      <ChildComponent ref={childRef} />
    </div>
  )
}


type ChildComponentHandle = {
  alertHello: () => void
}

type ChildComponentProps = Record<string, unknown>

const ChildComponent = forwardRef<ChildComponentHandle, ChildComponentProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    alertHello: () => {
      alert('hello')
    }
  }))

  return null
})
/** 加上 displayName 在调试工具里面可以显示组件名 */
ChildComponent.displayName = 'ChildComponent'

export default UseImperativeHandleExample
