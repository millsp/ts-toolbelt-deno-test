import {Depth} from '../Object/_Internal.ts'
import {Required as ORequired} from '../Object/Required.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Key} from '../Any/Key.ts'

/**
Make **`L`** required (deeply or not)
@param L to make required
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Required<L extends List, depth extends Depth = 'flat'> =
    Cast<ORequired<L, Key, depth>, List>
