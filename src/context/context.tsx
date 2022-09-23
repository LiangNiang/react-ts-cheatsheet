import { createContext, Dispatch, PropsWithChildren, Reducer, useReducer } from 'react'

// 简单示例
export interface IAppContext {
  name: string
  age: number
  sex?: string
}

export const AppContextSimple = createContext<IAppContext | null>(null)

export const sampleCtxValue: IAppContext = {
  name: 'liang',
  age: 18,
  sex: 'male'
}


// 复杂示例，封装 createContext
function createCtx<T>(defaultValue: T) {
  type MySetStateAction<S> = Partial<S> | ((prevState: S) => Partial<S>)
  type UpdateType = Dispatch<MySetStateAction<T>>
  const defaultUpdate: UpdateType = () => defaultValue
  const ctx = createContext({
    state: defaultValue,
    update: defaultUpdate
  })

  const reducer: Reducer<T, MySetStateAction<T>> = (state, payload) => {
    if (typeof payload === 'function') {
      const newV = payload(state)
      return {
        ...state,
        ...newV
      }
    }
    return {
      ...state,
      ...payload
    }
  }

  function Provider(props: PropsWithChildren) {
    const [state, update] = useReducer(reducer, defaultValue)
    return <ctx.Provider value={{ state, update }} {...props} />
  }

  return [ctx, Provider] as const
}

interface IAppContextComplex extends IAppContext {
  information?: {
    address?: string
    friends?: IAppContextComplex[]
  }
}

export const [AppContextComplex, AppContextComplexProvider] = createCtx<IAppContextComplex>({
  name: 'liang',
  age: 18
})
