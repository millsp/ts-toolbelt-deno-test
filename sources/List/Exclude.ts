import {Match} from '../Any/_Internal.ts'
import {ListOf} from '../Object/ListOf.ts'
import {Exclude as OExclude} from '../Object/Exclude.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Exclude the entries of **`L1`** out of **`L`**
(If `match = 'default'`, no type checks are done)
@param L to remove from
@param L1 to remove out
@param match (?=`'default'`) to change precision
@returns [[List]]
@example
```ts
```
*/
export type Exclude<L extends List, L1 extends List, match extends Match = 'default'> =
    ListOf<OExclude<ObjectOf<L>, ObjectOf<L1>, match>>
