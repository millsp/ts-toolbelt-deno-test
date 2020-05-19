import {_Reverse} from './Reverse.ts'
import {List} from './List.ts'

/**
@hidden
*/
export type _Concat<L extends List, L1 extends List> =
    _Reverse<_Reverse<L>, L1>

/**
Attach **`L1`** at the end of **`L`**
@param L to concat with
@param L1 to be attached
@returns [[List]]
@example
```ts
```
*/
export type Concat<L extends List, L1 extends List> =
    L extends unknown
    ? L1 extends unknown
      ? _Concat<L, L1>
      : never
    : never
