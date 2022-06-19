import { Dispatch, SetStateAction } from 'react'

type Dispatcher<T> = Dispatch<SetStateAction<T>>

export default Dispatcher
