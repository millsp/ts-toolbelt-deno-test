import {RequiredKeys as ORequiredKeys} from '../Object/RequiredKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are readonly
@param L
@returns [[Key]]
@example
```ts
```
*/
export type RequiredKeys<L extends List> =
    ORequiredKeys<ObjectOf<L>>
