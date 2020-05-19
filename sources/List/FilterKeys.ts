import {FilterKeys as OFilterKeys} from '../Object/FilterKeys.ts'
import {Match} from '../Any/_Internal.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Filter out the keys of **`L`** which entries match **`M`**
@param L to remove from
@param M to select entries
@param match (?=`'default'`) to change precision
@returns [[Key]]
@example
```ts
```
*/
export type FilterKeys<L extends List, M extends any, match extends Match = 'default'> =
    OFilterKeys<ObjectOf<L>, M, match>
