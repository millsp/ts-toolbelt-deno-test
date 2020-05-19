import {NonNullableKeys as ONonNullableKeys} from '../Object/NonNullableKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are non-nullable
@param L
@returns [[Key]]
@example
```ts
```
*/
export type NonNullableKeys<L extends List> =
    ONonNullableKeys<ObjectOf<L>>
