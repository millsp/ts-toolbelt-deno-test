import {Match, NumberOf} from '../Any/_Internal.ts'
import {Has as OHas} from '../Object/Has.ts'
import {Key} from '../Any/Key.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Check whether **`L`** has a entry of key **`K`** that matches **`M`**
@param L to be inspected
@param K to choose entry
@param M (?=`any`) to check entry type
@param match (?=`'default'`) to change precision
@returns [[Boolean]]
@example
```ts
```
*/
export type Has<L extends List, K extends Key, M extends any = any, match extends Match = 'default'> =
    OHas<ObjectOf<L>, NumberOf<K>, M, match>
