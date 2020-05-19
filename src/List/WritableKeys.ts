import {WritableKeys as OWritableKeys} from '../Object/WritableKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are writable
@param L
@returns [[Key]]
@example
```ts
```
*/
export type WritableKeys<L extends List> =
    OWritableKeys<ObjectOf<L>>
