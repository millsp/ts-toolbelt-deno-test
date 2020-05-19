import {At} from './At.ts'
import {Replace} from '../Union/Replace.ts'
import {x} from '../Any/x.ts'
import {Exclude} from '../Union/Exclude.ts'

/**
Modify **`O`** with **`OMod`** & the [[x]] placeholder
@param O to copy from
@param OMod to copy to
@returns [[Object]]
@example
```ts
```
*/
export type Modify<O extends object, OMod extends object> = {
    [K in keyof OMod]: Replace<OMod[K], x, Exclude<At<O, K>, undefined>>
} & {}
