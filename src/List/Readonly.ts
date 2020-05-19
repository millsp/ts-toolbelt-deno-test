import {Depth} from '../Object/_Internal.ts'
import {Readonly as OReadonly} from '../Object/Readonly.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Key} from '../Any/Key.ts'

/**
Make **`L`** readonly (deeply or not)
@param L to make readonly
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Readonly<L extends List, depth extends Depth = 'flat'> =
    Cast<OReadonly<L, Key, depth>, List>
