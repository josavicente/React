import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Padre } from './06-memos/07-tarea-memo/Padre'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/counterWithCounterHook'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/simpleForm'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/memorize'
// import { MemorizeHook } from './06-memos/MemorizeHook'
// import { HooksApp } from './HooksApp'
import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemorizeHook /> */}
    {/* <CallBackHook /> */}
    {/* <Padre /> */}
    <TodoApp />
  </React.StrictMode>
)
