import {List} from './List.ts'
import {_UnNest} from './UnNest.ts'
import {Cast} from '../Any/Cast.ts'
import {Equals} from '../Any/Equals.ts'
import {Number} from '../Number/Number.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Extends} from '../Any/Extends.ts'
import {Next} from '../Iteration/Next.ts'
import {Or} from '../Boolean/Or.ts'
import {Boolean} from '../Boolean/Boolean.ts'

/**
@hidden
*/
type __Flatten<L extends List, LO extends List, strict extends Boolean, limit extends Iteration, I extends Iteration = IterationOf<'0'>> = {
    0: __Flatten<_UnNest<L, strict>, L, strict, limit, Next<I>>
    1: L
}[Or<Equals<L, LO>, Extends<limit, I>>]

/**
@hidden
*/
export type _Flatten<L extends List, strict extends Boolean, limit extends Number = string> =
    __Flatten<L, [], strict, IterationOf<limit>> extends infer X
    ? Cast<X, List>
    : never

/**
Remove all dimensions of **`L`** (10 max)
@param L to un-nest
@param strict (?=`1`) `0` to not preserve tuples
@param limit (?=`string`) to stop un-nesting at
@returns [[List]]
@example
```ts
```
*/
export type Flatten<L extends List, strict extends Boolean = 1, limit extends Number = string> =
    L extends unknown
    ? _Flatten<L, strict, limit>
    : never
