import {MergeFlat} from './Merge.ts'
import {Pick} from './Pick.ts'
import {Depth} from './_Internal.ts'
import {Key} from '../Any/Key.ts'
import {Implements} from '../Any/Implements.ts'
import {Keys} from '../Union/Keys.ts'

/**
@hidden
*/
export type ReadonlyFlat<O> = {
    +readonly [K in keyof O]: O[K]
} & {}

/**
@hidden
*/
export type ReadonlyDeep<O> = {
    +readonly [K in keyof O]: ReadonlyDeep<O[K]>
}

/**
@hidden
*/
type ReadonlyPart<O extends object, depth extends Depth> = {
    'flat': ReadonlyFlat<O>,
    'deep': ReadonlyDeep<O>,
}[depth]

/**
Make some fields of **`O`** readonly (deeply or not)
@param O to make readonly
@param K (?=`Key`) to choose fields
@param depth (?=`'default'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Readonly<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: ReadonlyPart<O, depth>
    0: MergeFlat<ReadonlyPart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
