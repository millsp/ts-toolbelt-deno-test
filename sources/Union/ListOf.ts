import {Last} from './Last.ts'
import {Prepend} from '../List/Prepend.ts'
import {Exclude} from './Exclude.ts'
import {List} from '../List/List.ts'
import {Union} from './Union.ts'
import {Cast} from '../Any/Cast.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type _ListOf<U, LN extends List = [], LastU = Last<U>> = {
    0: _ListOf<Exclude<U, LastU>, Prepend<LN, LastU>>
    1: LN
}[Extends<[U], [never]>]

/**
Transform a [[Union]] into a [[List]]
(⚠️ it might not preserve order)
@param U to transform
@returns [[List]]
@example
```ts
```
*/
export type ListOf<U extends Union> =
    _ListOf<U> extends infer X
    ? Cast<X, List>
    : never

// ! must not be distributed
