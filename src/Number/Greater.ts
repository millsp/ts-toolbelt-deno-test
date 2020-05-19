import {_Minus} from './Minus.ts'
import {_IsPositive} from './IsPositive.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from './Number.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
@hidden
*/
export type _Greater<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    _IsPositive<_Minus<N1, N2, IMap>, IMap>

/**
Check if a [[Number]] is bigger than another one
@param N1 to compare
@param N2 to compare to
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.Greater<'7', '5'> // True
type test1 = N.Greater<'5', '5'> // False
type test2 = N.Greater<'5', '7'> // False
```
*/
export type Greater<N1 extends Number, N2 extends Number, IMap extends Map = NumberMap> =
    N1 extends unknown
    ? N2 extends unknown
      ? _Greater<IterationOf<N1, IMap>, IterationOf<N2, IMap>, IMap>
      : never
    : never
