import {Depth} from '../Object/_Internal.ts'
import {Writable as OWritable} from '../Object/Writable.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Key} from '../Any/Key.ts'

/**
Make **`L`** writable (deeply or not)
@param L to make writable
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Writable<L extends List, depth extends Depth = 'flat'> =
    Cast<OWritable<L, Key, depth>, List>
