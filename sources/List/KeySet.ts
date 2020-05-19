import {Number} from '../Number/Number.ts'
import {Range} from '../Number/Range.ts'
import {UnionOf} from './UnionOf.ts'

/**
Create a set of keys
@param From to start with
@param To to end with
@returns [[Key]]
@example
```ts
```
*/
export type KeySet<From extends Number, To extends Number> =
    UnionOf<Range<From, To, '->'>>
