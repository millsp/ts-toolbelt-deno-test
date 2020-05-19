import {IntersectKeys} from './IntersectKeys.ts'
import {Match} from '../Any/_Internal.ts'
import {Pick} from './Pick.ts'

/**
Get the intersecting fields of **`O`** & **`O1`**
(If `match = 'default'`, no type checks are done)
@param O to check similarities with
@param O1 to check similarities against
@returns [[Object]]
@example
```ts
```
*/
export type Intersect<O extends object, O1 extends object, match extends Match = 'default'> =
    Pick<O, IntersectKeys<O, O1, match>>
