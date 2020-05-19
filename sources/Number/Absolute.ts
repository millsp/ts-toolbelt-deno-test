import {_Negate} from './Negate.ts'
import {_IsNegative} from './IsNegative.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from './Number.ts'
import {Formats} from '../Iteration/_Internal.ts'
import {Format} from '../Iteration/Format.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
@hidden
*/
export type _Absolute<N extends Iteration, IMap extends Map> = {
    0: N
    1: _Negate<N, IMap>
}[_IsNegative<N, IMap>]

/**
Get the absolute value of a [[Number]]
@param N to absolute
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.Absolute<'-20'>      // '20'

type test1 = N.Absolute<'-20', 's'> // '20'
type test2 = N.Absolute<'-20', 'n'> //  20
```
*/
export type Absolute<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N extends unknown
    ? Format<_Absolute<IterationOf<N, IMap>, IMap>, fmt, IMap>
    : never
