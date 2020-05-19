import {NullableKeys as ONullableKeys} from '../Object/NullableKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are nullable
@param L
@returns [[Key]]
@example
```ts
```
*/
export type NullableKeys<L extends List> =
    ONullableKeys<ObjectOf<L>>
