import {Number} from '../Number/Number.ts'
import {KeySet} from './KeySet.ts'
import {Omit} from './Omit.ts'
import {List} from './List.ts'

/**
Remove out of **`L`** a range of entries
@param L to remove from
@param From to start from
@param To to end with
@returns [[List]]
@example
```ts
```
*/
export type Remove<L extends List, From extends Number, To extends Number> =
    Omit<L, KeySet<From, To>>
