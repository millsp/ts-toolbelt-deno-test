import {_Omit as _OOmit} from '../Object/Omit.ts'
import {_ListOf} from '../Object/ListOf.ts'
import {Key} from '../Any/Key.ts'
import {List} from './List.ts'
import {_ObjectOf} from './ObjectOf.ts'
import {NumberOf} from '../Any/_Internal.ts'

/**
@hidden
*/
export type _Omit<L extends List, K extends Key> =
    _ListOf<_OOmit<_ObjectOf<L>, NumberOf<K>>>

/**
Remove out of **`L`** the entries of key **`K`**
@param L to remove from
@param K to chose entries
@returns [[List]]
@example
```ts
```
*/
export type Omit<L extends List, K extends Key> =
    L extends unknown
    ? _Omit<L, K>
    : never
