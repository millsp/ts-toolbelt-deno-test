import {_Omit} from './Omit.ts'
import {List} from './List.ts'
import {LastIndex} from './LastIndex.ts'
import {Naked} from './_Internal.ts'

/**
@hidden
*/
export type _Pop<L extends List> =
    _Omit<L, LastIndex<Naked<L>, 's'>>

/**
Remove the last element out of **`L`**
@param L to remove from
@returns [[List]]
@example
```ts
```
*/
export type Pop<L extends List> =
    L extends unknown
    ? _Pop<L>
    : never
