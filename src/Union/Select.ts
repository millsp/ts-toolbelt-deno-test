import {Union} from './Union.ts'
import {Is} from '../Any/Is.ts'
import {Match} from '../Any/_Internal.ts'

/**
Extract the part of **`U`** that matches **`M`**
@param U to extract from
@param M to select with
@returns [[Union]]
@example
```ts
```
*/
export type Select<U extends Union, M extends any, match extends Match = 'default'> =
    U extends unknown
    ? Is<U, M, match> extends 1
      ? U
      : never
    : never
