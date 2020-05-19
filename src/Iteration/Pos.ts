import {Map} from '../Misc/Iteration/Map.ts'
import {Iteration} from './Iteration.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Format} from './Format.ts'

/**
Get the position of **`I`** (**number**)
@param I to query
@param IMap to operate with another set of numbers
@returns **`number`**
@example
```ts
import {I} from 'ts-toolbelt.ts'

type i = I.IterationOf<'20'>

type test0 = I.Pos<i>         // 20
type test1 = I.Pos<I.Next<i>> // 21
```
*/
export type Pos<I extends Iteration, IMap extends Map = NumberMap> =
    Format<I, 'n', IMap>
