import {Match} from '../Any/_Internal.ts'
import {Includes as OIncludes} from '../Object/Includes.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Check whether **`L`** has entries that match **`M`**
@param L to be inspected
@param M to check entry type
@param match (?=`'default'`) to change precision
@returns [[Boolean]]
@example
```ts
```
*/
export type Includes<L extends List, M extends any, match extends Match = 'default'> =
    OIncludes<ObjectOf<L>, M, match>
