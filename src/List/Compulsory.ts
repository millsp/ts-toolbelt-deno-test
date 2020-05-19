import {Depth} from '../Object/_Internal.ts'
import {Compulsory as OCompulsory} from '../Object/Compulsory.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from './List.ts'
import {Key} from '../Any/Key.ts'

/**
Make that **`L`**'s fields cannot be [[Nullable]] or [[Optional]] (it's like
[[Required]] & [[NonNullable]] at once).
@param L to make compulsory
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Compulsory<L extends List, depth extends Depth = 'flat'> =
    Cast<OCompulsory<L, Key, depth>, List>
