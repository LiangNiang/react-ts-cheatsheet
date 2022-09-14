import { useState, Reducer } from 'react'

/** 自定义 hook 返回数组 */
function useToggle(initialValue = false) {
  const [v, setV] = useState(initialValue)
  const toggle = () => setV((pv) => !pv)

  /** 使用 as const 将数组推断为元组，这样当解构的时候就可以获得正确的类型推断 */
  return [v, toggle] as const
}

const CustomHooksExample = () => {
  const [visible, toggle] = useToggle(true)
  return (
    <div>
      <h1>Custom Hooks</h1>
      <h2>
        <button onClick={toggle}>Toggle Hello World Visible</button>
      </h2>
      <h2 style={{ display: visible ? 'inline' : 'none' }}>Hello World</h2>
    </div>
  )
}

export default CustomHooksExample