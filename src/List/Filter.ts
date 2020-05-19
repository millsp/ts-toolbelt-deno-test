import {Filter as OFilter} from '../Object/Filter.ts'
import {ListOf} from '../Object/ListOf.ts'
import {Match} from '../Any/_Internal.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Filter out of **`L`** the entries that match **`M`**
@param L to remove from
@param M to select entries
@param match (?=`'default'`) to change precision
@returns [[List]]
@example
```ts
```
*/
export type Filter<L extends List, M extends any, match extends Match = 'default'> =
    ListOf<OFilter<ObjectOf<L>, M, match>>
