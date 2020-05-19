import {Number} from './Number.ts'
import {Formats} from '../Iteration/_Internal.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'
import {Negate} from './Negate.ts'
import {Max} from './Max.ts'

/**
Get the smallest [[Number]] within an [[Union]]
@param N [[Union]]
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.Min<'-2' | '10' | '3'>      // '-2'
type test1 = N.Min<'-2' | '10' | '3', 's'> // '-2'
type test2 = N.Min<'-2' | '10' | '3', 'n'> //  -2
type test3 = N.Min<'-2' | '10' | 'oops'>   // string
```
*/
export type Min<N extends Number, fmt extends Formats = 's', IMap extends Map = NumberMap> =
    Negate<Max<Negate<N, 's', IMap>, 's', IMap>, fmt, IMap>
