import {_Minus} from './Minus.ts'
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
export type _Negate<N extends Iteration, IMap extends Map> =
    IterationOf<N[4], IMap>

/**
Negate a [[Number]]
@param N to negate
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.Negate<'-10'>     //  '10'
type test1 = N.Negate<'10'>      // '-10'
type test2 = N.Negate<'10', 's'> // '-10'
type test3 = N.Negate<'10', 'n'> //  -10
type test4 = N.Negate<'-100'>    // string
```
*/
export type Negate<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    N extends unknown
    ? Format<_Negate<IterationOf<N, IMap>, IMap>, fmt, IMap>
    : never
