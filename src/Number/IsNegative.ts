import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from './Number.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
@hidden
*/
export type _IsNegative<N extends Iteration, IMap extends Map> = {
    '-': 1
    '+': 0
    '0': 0
}[N[6]]

/**
Check whether a [[Number]] is negative or not
@param N to check
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.IsNegative<'0'>  // False
type test1 = N.IsNegative<'-7'> // True
type test2 = N.IsNegative<'7'>  // False
```
*/
export type IsNegative<N extends Number, IMap extends Map = NumberMap> =
    _IsNegative<IterationOf<N, IMap>, IMap>
