import {AssignUp as OAssignUp} from '../Object/AssignUp.ts'
import {List} from './List.ts'
import {ObjectOf} from './ObjectOf.ts'
import {ListOf} from '../Object/ListOf.ts'
import {Depth} from '../Object/_Internal.ts'

/**
Assign a list of [[List]] into **`L`** with [[MergeUp]] (last-in combines or overrides)
@param L to assign to
@param Ls to assign
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type AssignUp<L extends List, Ls extends List<List>, depth extends Depth = 'flat'> =
    ListOf<OAssignUp<ObjectOf<L>, {[K in keyof Ls]: ObjectOf<Ls[K] & {}>}, depth>>
    // in the mapped type above, we make sure tuples are not left with array properties
    // ! leaving array properties and using `Object` utilities is known to cause bugs
