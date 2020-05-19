import {Key} from '../Any/Key.ts'
import {Cast} from '../Any/Cast.ts'
import {Implements} from '../Any/Implements.ts'
import {Depth} from '../Object/_Internal.ts'
import {Nullable as ONullable} from '../Object/Nullable.ts'
import {ListOf} from '../Object/ListOf.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'
import {Keys} from './Keys.ts'
import {NumberOf} from '../Any/_Internal.ts'

/**
Make some entries of **`L`** nullable (deeply or not)
@param L to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[List]]
@example
```ts
```
*/
export type Nullable<L extends List, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: Cast<ONullable<L, Key, depth>, List>
    0: ListOf<ONullable<ObjectOf<L>, NumberOf<K>, depth>>
}[Implements<Keys<L>, K>] & {}
