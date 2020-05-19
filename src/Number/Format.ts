import {Formats} from './_Internal.ts'
import {Number} from './Number.ts'
import {IsZero} from './IsZero.ts'
import {Not} from '../Boolean/Not.ts'
import {Pos} from '../Iteration/Pos.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
Change the format of a [[Number]]
@param B to transform
@param fmt (?=`'s'`) output format
@param IMap to operate with another set of numbers
@returns **`string | number | boolean`**
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.Format<'30', 'b'> // True
type test1 = N.Format<'30', 'n'> // 30
```
*/
export type Format<N extends Number, fmt extends Formats, IMap extends Map = NumberMap> = {
    'b': Not<IsZero<N, IMap>>
    'n': Pos<IterationOf<N, IMap>>
    's': N
}[fmt]
