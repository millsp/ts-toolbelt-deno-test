import {Tail} from './Tail.ts'
import {Cast} from '../Any/Cast.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from '../Number/Number.ts'
import {Way} from '../Iteration/_Internal.ts'
import {List} from './List.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Prev} from '../Iteration/Prev.ts'
import {Prepend} from './Prepend.ts'
import {Naked} from './_Internal.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type DropForth<L extends List, N extends Iteration> = {
    0: DropForth<Tail<L>, Prev<N>>
    1: L
}[Extends<0, Pos<N>>]

/**
@hidden
*/
type DropBack<L extends List, N extends Iteration, I extends Iteration = Prev<N>, LN extends List = []> = {
    0: DropBack<L, N, Prev<I>, Prepend<LN, L[Pos<I>]>>
    1: LN
}[Extends<-1, Pos<I>>]

/**
@hidden
*/
type __Drop<L extends List, N extends Iteration, way extends Way = '->'> = {
    '->': DropForth<L, N>
    '<-': DropBack<L, N>
}[way]

/**
@hidden
*/
export type _Drop<L extends List, N extends Number, way extends Way = '->'> =
    __Drop<Naked<L>, IterationOf<N>, way> extends infer X
    ? Cast<X, List>
    : never

/**
Remove **`N`** entries out of **`L`**
@param L to remove from
@param N to remove out
@param way (?=`'->'`) from front: '->', from end: '<-'
@returns [[List]]
@example
```ts
```
*/
export type Drop<L extends List, N extends Number, way extends Way = '->'> =
    L extends unknown
    ? N extends unknown
      ? _Drop<L, N, way>
      : never
    : never
