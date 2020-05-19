import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Cast} from '../Any/Cast.ts'
import {Key} from '../Iteration/Key.ts'
import {Next} from '../Iteration/Next.ts'
import {_Append} from '../List/Append.ts'
import {Exclude} from '../Union/Exclude.ts'
import {List} from '../List/List.ts'
import {At} from './At.ts'

/**
@hidden
*/
type PickIfEntry<O extends object, LN extends List, I extends Iteration> =
    Key<I> extends keyof O
    ? _Append<LN, O[Cast<Key<I>, keyof O>]>
    : LN

/**
@hidden
*/
type __ListOf<O extends object, K, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __ListOf<O, Exclude<K, Key<I>>, PickIfEntry<O, LN, I>, Next<I>>
    1: LN
    2: At<O, number>[]
}[
    [K] extends [never]
    ? 1
    : number extends K
      ? 2
      : 0
]

/**
@hidden
*/
export type _ListOf<O extends object> =
    __ListOf<O, keyof O> extends infer X
    ? Cast<X, List>
    : never

/**
Transform an [[Object]] into a [[List]]
(It will only pick numeric literal indexes)
@param O to transform
@returns [[List]]
@example
```ts
```
*/
export type ListOf<O extends object> =
    O extends unknown
    ? _ListOf<O>
    : never
