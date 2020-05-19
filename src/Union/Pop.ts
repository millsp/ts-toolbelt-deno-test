import {Exclude} from './Exclude.ts'
import {Last} from './Last.ts'
import {Union} from './Union.ts'

/**
Remove an item out of **`U`**
(⚠️ it might not preserve order)
@param U to remove from
@returns [[Union]]
@example
```ts
```
*/
export type Pop<U extends Union> =
    Exclude<U, Last<U>>
