import {Match} from '../Any/_Internal.ts'
import {Is} from '../Any/Is.ts'
import {At} from './At.ts'
import {Key} from '../Any/Key.ts'

/**
Check whether **`O`** has a field of key **`K`** that matches **`M`**
@param O to be inspected
@param K to choose field
@param M (?=`any`) to check field type
@param match (?=`'default'`) to change precision
@returns [[Boolean]]
@example
```ts
```
*/
export type Has<O extends object, K extends Key, M extends any = any, match extends Match = 'default'> =
    Is<At<O, K>, M, match>
