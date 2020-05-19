import {Key} from '../Any/Key.ts'
import {AtLeast as OAtLeast} from '../Object/AtLeast.ts'
import {ObjectOf} from './ObjectOf.ts'
import {_ListOf} from '../Object/ListOf.ts'
import {List} from './List.ts'
import {NumberOf} from '../Any/_Internal.ts'
import {Keys} from './Keys.ts'

/**
Make that at least one of the keys **`K`** are required in **`L`** at a time.
@param L to make required
@param K (?=`keyof L`) to choose fields
@returns [[List]] [[Union]]
@example
```ts
```
*/
export type AtLeast<L extends List, K extends Key = Keys<L>> =
    OAtLeast<ObjectOf<L>, NumberOf<K>> extends infer U
    ? U extends unknown // we distribute over the union
      ? _ListOf<U & {}> // each union member to a list
      : never
    : never
