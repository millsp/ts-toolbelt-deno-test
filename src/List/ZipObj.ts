import {Length} from './Length.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Next} from '../Iteration/Next.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Cast} from '../Any/Cast.ts'
import {MergeFlat} from '../Object/Merge.ts'
import {Record} from '../Object/Record.ts'
import {Key} from '../Any/Key.ts'
import {List} from './List.ts'
import {Naked} from './_Internal.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type __ZipObj<LKeys extends List<Key>, LFields extends List, O extends object = {}, I extends Iteration = IterationOf<'0'>> = {
    0: __ZipObj<LKeys, LFields, MergeFlat<O, Record<LKeys[Pos<I>], LFields[Pos<I>]>>, Next<I>>
    1: O
}[Extends<Pos<I>, Length<LKeys>>]

/**
@hidden
*/
export type _ZipObj<LKeys extends List<Key>, LFields extends List> =
    __ZipObj<Naked<LKeys>, Naked<LFields>> extends infer X
    ? Cast<X, object>
    : never

/**
Create an [[Object]] from [[List]]s of keys & fields
@param LKeys its keys
@param LFields its fields
@returns [[Object]]
@example
```ts
```
*/
export type ZipObj<LKeys extends List<Key>, LFields extends List> =
    LKeys extends unknown
    ? LFields extends unknown
      ? _ZipObj<LKeys, LFields>
      : never
    : never
