import {ReadonlyKeys as OReadonlyKeys} from '../Object/ReadonlyKeys.ts'
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
export type ReadonlyKeys<L extends List> =
    OReadonlyKeys<ObjectOf<L>>
