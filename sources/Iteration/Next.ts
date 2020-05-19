import {Map} from '../Misc/Iteration/Map.ts'
import {Iteration} from './Iteration.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'

/**
Move **`I`**'s position forward
@param I to move
@param IMap to operate with another set of numbers
@returns [[Iteration]]
@example
```ts
import {I} from 'ts-toolbelt.ts'

type i = I.IterationOf<'20'>

type test0 = I.Pos<i>         // 20
type test1 = I.Pos<I.Next<i>> // 21
```
*/
export type Next<I extends Iteration, IMap extends Map = NumberMap> =
    IMap[I[1]] // continues iterating
