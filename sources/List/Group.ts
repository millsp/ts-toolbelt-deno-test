import {Number} from '../Number/Number.ts'
import {_Drop} from './Drop.ts'
import {_Take} from './Take.ts'
import {Cast} from '../Any/Cast.ts'
import {Prepend} from './Prepend.ts'
import {_Reverse} from './Reverse.ts'
import {List} from './List.ts'
import {Naked} from './_Internal.ts'

/**
@hidden
*/
type __Group<L extends List, N extends Number, LN extends List = []> = {
    0: __Group<_Drop<L, N>, N, Prepend<LN, _Take<L, N>>>
    1: _Reverse<LN>
}[
    L extends List<never>
    ? 1
    : 0
]

/**
@hidden
*/
export type _Group<L extends List, N extends Number> =
    __Group<Naked<L>, N> extends infer X
    ? Cast<X, List>
    : never

/**
Split **`L`** into sub-[[List]]s every **`N`**
@param L to group
@param N to split at
@returns [[List]]
@example
```ts
```
*/
export type Group<L extends List, N extends Number> =
    L extends unknown
    ? N extends unknown
      ? _Group<L, N>
      : never
    : never
