import {Prepend} from './Prepend.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Next} from '../Iteration/Next.ts'
import {Length} from './Length.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Naked} from './_Internal.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type __Reverse<L extends List, LO extends List, I extends Iteration = IterationOf<'0'>> = {
    0: __Reverse<L, Prepend<LO, L[Pos<I>]>, Next<I>>
    1: LO
}[Extends<Pos<I>, Length<L>>]

/**
@hidden
*/
export type _Reverse<L extends List, LO extends List = []> =
    __Reverse<Naked<L>, LO> extends infer X
    ? Cast<X, List>
    : never

/**
Turn a [[List]] the other way around
@param L to reverse
@param LO (?=`[]`) to prepend to
@returns [[List]]
@example
```ts
```
*/
export type Reverse<L extends List, LO extends List = []> =
    L extends unknown
    ? LO extends unknown
      ? _Reverse<L, LO>
      : never
    : never
