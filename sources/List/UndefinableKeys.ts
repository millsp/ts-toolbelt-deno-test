import {UndefinableKeys as OUndefinableKeys} from '../Object/UndefinableKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are **`undefined`**
@param L
@returns [[Key]]
@example
```ts
```
*/
export type UndefinableKeys<L extends List> =
    OUndefinableKeys<ObjectOf<L>>
