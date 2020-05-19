import {_Pick as _OPick} from '../Object/Pick.ts'
import {_ListOf} from '../Object/ListOf.ts'
import {Key} from '../Any/Key.ts'
import {_ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'
import {NumberOf} from '../Any/_Internal.ts'

/**
@hidden
*/
export type _Pick<L extends List, K extends Key> =
    _ListOf<_OPick<_ObjectOf<L>, NumberOf<K>>>

/**
Extract out of **`L`** the entries of key **`K`**
@param L to extract from
@param K to chose entries
@returns [[List]]
@example
```ts
```
*/
export type Pick<L extends List, K extends Key> =
    L extends unknown
    ? _Pick<L, K>
    : never
