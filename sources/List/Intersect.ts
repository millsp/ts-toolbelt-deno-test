import {Intersect as OIntersect} from '../Object/Intersect.ts'
import {Match} from '../Any/_Internal.ts'
import {ListOf} from '../Object/ListOf.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the intersecting entries of **`L`** & **`L1`**
(If `match = 'default'`, no type checks are done)
@param L to check similarities with
@param L1 to check similarities against
@returns [[List]]
@example
```ts
```
*/
export type Intersect<L extends List, L1 extends List, match extends Match = 'default'> =
    ListOf<OIntersect<ObjectOf<L>, ObjectOf<L1>, match>>
