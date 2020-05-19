import {Depth} from '../Object/_Internal.ts'
import {Undefinable as OUndefinable} from '../Object/Undefinable.ts'
import {ListOf} from '../Object/ListOf.ts'
import {Cast} from '../Any/Cast.ts'
import {Key} from '../Any/Key.ts'
import {ObjectOf} from './ObjectOf.ts'
import {Implements} from '../Any/Implements.ts'
import {Keys} from './Keys.ts'
import {List} from './List.ts'
import {NumberOf} from '../Any/_Internal.ts'

/**
Make some entries of **`L`** not **`undefined`** (deeply or not)
@param L to make non nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Undefinable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: Cast<OUndefinable<L, Key, depth>, List>
    0: ListOf<OUndefinable<ObjectOf<L>, NumberOf<K>, depth>>
}[Implements<Keys<L>, K>] & {}
