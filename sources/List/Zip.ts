import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Prepend} from './Prepend.ts'
import {Next} from '../Iteration/Next.ts'
import {Length} from './Length.ts'
import {Pos} from '../Iteration/Pos.ts'
import {_Reverse} from './Reverse.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Naked} from './_Internal.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type __Zip<L extends List, L1 extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __Zip<L, L1, Prepend<LN, [L[Pos<I>], L1[Pos<I>]]>, Next<I>>
    1: _Reverse<LN>
}[Extends<Pos<I>, Length<L>>]

/**
@hidden
*/
export type _Zip<L extends List, L1 extends List> =
    __Zip<Naked<L>, Naked<L1>> extends infer X
    ? Cast<X, List>
    : never

/**
Pair up the entries of **`L`** with **`L1`**
@param L to pair up
@param L1 to pair up with
@returns [[List]]
@example
```ts
```
*/
export type Zip<L extends List, L1 extends List> =
    L extends unknown
    ? L1 extends unknown
      ? _Zip<L, L1>
      : never
    : never
