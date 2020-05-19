import {_Omit} from './Omit.ts'
import {At} from './At.ts'
import {Compute} from '../Any/Compute.ts'
import {Depth} from './_Internal.ts'
import {Kind} from '../Any/Kind.ts'

/**
@hidden
*/
export type MergeFlat<O extends object, O1 extends object> =
    Compute<O & _Omit<O1, keyof O>>

/**
@hidden
*/
export type MergeDeep<O, O1> =
    (Kind<(O | O1)> extends 'object'
    ? MergeFlat<O & {}, O1 & {}> extends infer M
      ? {[K in keyof M]: MergeDeep<M[K], At<O1 & {}, K>>} & {}
      : never
    : O)

/**
Complete the fields of **`O`** with the ones of **`O1`**
('deep' option will skip nullable objects to be merged).
For more advanced capabilities, see [[MergeUp]].
@param O to complete
@param O1 to copy from
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Merge<O extends object, O1 extends object, depth extends Depth = 'flat'> = {
    'flat': MergeFlat<O, O1>
    'deep': MergeDeep<O, O1>
}[depth]
