import {Pick} from './Pick.ts'
import {Depth} from './_Internal.ts'
import {MergeFlat} from './Merge.ts'
import {Key} from '../Any/Key.ts'
import {Implements} from '../Any/Implements.ts'
import {Keys} from './Keys.ts'

/**
@hidden
*/
export type WritableFlat<O> = {
    -readonly [K in keyof O]: O[K]
}

/**
@hidden
*/
export type WritableDeep<O> = {
    -readonly [K in keyof O]: WritableDeep<O[K]>
}

/**
@hidden
*/
type WritablePart<O extends object, depth extends Depth> = {
    'flat': WritableFlat<O>,
    'deep': WritableDeep<O>,
}[depth]

/**
Make some fields of **`O`** writable (deeply or not)
@param O to make writable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Writable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: WritablePart<O, depth>
    0: MergeFlat<WritablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
