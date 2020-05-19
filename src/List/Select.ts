import {Match} from '../Any/_Internal.ts'
import {Select as OSelect} from '../Object/Select.ts'
import {ListOf} from '../Object/ListOf.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Extract the entries of **`L`** that match **`M`**
@param L to extract from
@param M to select entries
@param match (?=`'default'`) to change precision
@returns [[List]]
@example
```ts
```
*/
export type Select<L extends List, M extends any, match extends Match = 'default'> =
    ListOf<OSelect<ObjectOf<L>, M, match>>
