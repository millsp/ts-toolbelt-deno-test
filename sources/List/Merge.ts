import {At} from '../Object/At.ts'
import {Depth} from '../Object/_Internal.ts'
import {ObjectOf} from './ObjectOf.ts'
import {ListOf} from '../Object/ListOf.ts'
import {Length} from './Length.ts'
import {Kind} from '../Any/Kind.ts'
import {List} from './List.ts'
import {Cast} from '../Any/Cast.ts'

/**
@hidden
*/
type MergeFlatTuple<L extends List, L1 extends List> = ListOf<ObjectOf<{
    [K in keyof L | keyof L1]: [At<L, K>] extends [never]
                               ? At<L1, K>
                               : At<L, K>
}>>

/**
@hidden
*/
type MergeFlatArray<L extends List, L1 extends List> =
    (L | L1) extends (infer L)[]
    ? L[]
    : never

/**
@hidden
*/
export type MergeFlat<L extends List, L1 extends List> =
    number extends Length<L | L1>
    // if we can't know the size, then get closest type
    ? MergeFlatArray<L, L1>
    // if it's a tuple then we proceed with the merging
    : MergeFlatTuple<L, L1>

/**
@hidden
*/
export type MergeDeep<O, O1> =
    Kind<(O | O1)> extends 'array'
    ? MergeFlat<Cast<O, List>, Cast<O1, List>> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<Cast<O1, List>, K>>} & {}
      : never
    : O

/**
Complete the fields of **`L`** with the ones of **`L1`**
('deep' option will skip any nullable object to be merged)
@param L to complete
@param L1 to copy from
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Merge<L extends List, L1 extends List, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<L, L1>
    'deep': MergeDeep<L, L1>
}[depth]
