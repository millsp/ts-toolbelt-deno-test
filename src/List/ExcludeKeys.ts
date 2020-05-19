import {ExcludeKeys as OExcludeKeys} from '../Object/ExcludeKeys.ts'
import {Match} from '../Any/_Internal.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Exclude the keys of **`L1`** out of the keys of **`L`**
(If `match = 'default'`, no type checks are done)
@param L to remove the keys from
@param L1 to remove the keys out
@param match (?=`'default'`) to change precision
@returns [[Key]]
@example
```ts
```
*/
export type ExcludeKeys<L extends List, L1 extends List, match extends Match = 'default'> =
    OExcludeKeys<ObjectOf<L>, ObjectOf<L1>, match>
