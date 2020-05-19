import {Match} from '../Any/_Internal.ts'
import {SelectKeys as OSelectKeys} from '../Object/SelectKeys.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get the keys of **`L`** which entries match **`M`**
@param L to extract from
@param M to select entries
@param match (?=`'default'`) to change precision
@returns [[Key]]
@example
```ts
```
*/
export type SelectKeys<L extends List, M extends any, match extends Match = 'default'> =
    OSelectKeys<ObjectOf<L>, M, match>
