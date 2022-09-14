/// <reference types="@types/react" />

/** 一些常用的 Component Props 类型 */
declare interface CommonComponentProps {
  children?: React.ReactNode
  childrenElement: JSX.Element
  style: React.CSSProperties
  onChange: React.FormEventHandler<HTMLInputElement>
  /** 模拟 button 的 props 类型，并不包含 ref */
  btnProps: React.ComponentPropsWithoutRef<'button'>
  /** 转发 ref */
  btnPropsWithRef: React.ComponentPropsWithRef<'button'>
}

type User =  {
  username: string
  password: string
}
