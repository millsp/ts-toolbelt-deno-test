import {OptionalKeys as OOptionalKeys} from '../Object/OptionalKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** that are optional
@param L
@returns [[Key]]
@example
```ts
```
*/
export type OptionalKeys<L extends List> =
    OOptionalKeys<ObjectOf<L>>
