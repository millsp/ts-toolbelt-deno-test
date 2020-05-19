import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from './Number.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
@hidden
*/
export type _IsZero<N extends Iteration, IMap extends Map> = {
    '-': 0
    '+': 0
    '0': 1
}[N[6]]

/**
Check whether a [[Number]] is null or not
@param N to check
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.IsZero<'0'>  // True
type test1 = N.IsZero<'-7'> // False
type test2 = N.IsZero<'7'>  // False
```
*/
export type IsZero<N extends Number, IMap extends Map = NumberMap> =
    _IsZero<IterationOf<N, IMap>, IMap>
