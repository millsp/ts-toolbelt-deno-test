import {Optional as OOptional} from '../Object/Optional.ts'
import {Depth} from '../Object/_Internal.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Key} from '../Any/Key.ts'

/**
Make **`L`** optional (deeply or not)
@param L to make optional
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Optional<L extends List, depth extends Depth = 'flat'> =
    Cast<OOptional<L, Key, depth>, List>
