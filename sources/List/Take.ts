import {Number} from '../Number/Number.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Prepend} from './Prepend.ts'
import {Way} from '../Iteration/_Internal.ts'
import {List} from './List.ts'
import {Prev} from '../Iteration/Prev.ts'
import {Cast} from '../Any/Cast.ts'
import {Naked} from './_Internal.ts'
import {Tail} from './Tail.ts'
import {Extends} from '../Any/Extends.ts'

/**
starts in reverse from `N` till `N` = 0
@hidden
*/
type TakeForth<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> = {
    0: TakeForth<L, N, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[Extends<-1, Pos<I>>]

/**
starts in reverse from the end till `N` = 0
@hidden
*/
type TakeBack<L extends List, N extends Iteration> = {
    0: TakeBack<Tail<L>, Prev<N>>
    1: L
}[Extends<0, Pos<N>>]

/**
@hidden
*/
type __Take<L extends List, N extends Iteration, way extends Way> = {
    '->': TakeForth<L, N> // Reverse logic to work naturally #`Prepend`
    '<-': TakeBack<L, N>  // Reverse logic to work naturally #`Prepend`
}[way]

/**
@hidden
*/
export type _Take<L extends List, N extends Number, way extends Way = '->'> =
    __Take<Naked<L>, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never

/**
Extract **`N`** entries out of **`L`**
@param L to extract from
@param N to extract out
@param way (?=`'->'`) to extract from end
@returns [[List]]
@example
```ts
```
*/
export type Take<L extends List, N extends Number, way extends Way = '->'> =
    L extends unknown
    ? N extends unknown
      ? _Take<L, N, way>
      : never
    : never
