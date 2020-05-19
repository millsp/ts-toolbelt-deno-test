import {Union} from './Union.ts'
import {Key} from '../Any/Key.ts'

/**
Get the keys of a [[Union]]
@param U
@returns [[Key]]
@example
```ts
```
*/
export type Keys<U extends Union> =
    (
        U extends unknown
        ? keyof U
        : never
    ) & Key
