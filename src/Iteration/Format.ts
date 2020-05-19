import {Iteration} from './Iteration.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Formats} from './_Internal.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
Is [[Key]] and [[Pos]] in a single type
@param I to query
@param fmt output format
@param IMap to operate with another set of numbers
@returns **`string | number`**
@example
```ts
import {I} from 'ts-toolbelt.ts'

/// Let's make '20' an iteration
type i = I.IterationOf<'20'> // [...]

type fmtS = I.Fmt<i, 's'> // '20'
type fmtN = I.Fmt<i, 'n'> //  20
```
*/
export type Format<I extends Iteration, fmt extends Formats, IMap extends Map = NumberMap> = {
    's': I[2]
    'n': I[3]
}[fmt]
