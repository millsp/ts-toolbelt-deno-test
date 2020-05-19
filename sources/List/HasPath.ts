import {HasPath as OHasPath} from '../Object/HasPath.ts'
import {Match} from '../Any/_Internal.ts'
import {Key} from '../Any/Key.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Check whether **`L`** has nested entries that match **`M`**
@param L to be inspected
@param Path to be followed
@param M (?=`any`) to check entry type
@param match (?=`'default'`) to change precision
@returns [[Boolean]]
@example
```ts
```
*/
export type HasPath<L extends List, Path extends List<Key>, M extends any = any, match extends Match = 'default'> =
    OHasPath<ObjectOf<L>, Path, M, match>
