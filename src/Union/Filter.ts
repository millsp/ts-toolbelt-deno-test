import {Union} from './Union.ts'
import {Match} from '../Any/_Internal.ts'
import {Is} from '../Any/Is.ts'

/**
Remove **`M`** out of **`U`**
@param U to remove from
@param M to remove out
@returns [[Union]]
@example
```ts
```
*/
export type Filter<U extends Union, M extends Union, match extends Match = 'default'> =
    U extends unknown
    ? Is<U, M, match> extends 1
      ? never
      : U
    : never
