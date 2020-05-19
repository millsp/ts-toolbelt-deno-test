import {At} from '../Object/At.ts'
import {Overwrite} from '../Object/Overwrite.ts'
import {Compute} from '../Any/Compute.ts'
import {IntersectOf} from './IntersectOf.ts'
import {Strict} from './Strict.ts'

/**
@hidden
*/
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: U extends unknown
                      ? At<U, K>
                      : never
}>>

/**
Merge a [[Union]] of [[Object]]s into a single one
@param U to merge
@returns [[Object]]
@example
```ts
```
*/
export type Merge<U extends object> =
    Compute<_Merge<Strict<U>>>
