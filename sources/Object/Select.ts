import {SelectKeys} from './SelectKeys.ts'
import {Match} from '../Any/_Internal.ts'
import {Pick} from './Pick.ts'

/**
Extract the fields of **`O`** that match **`M`**
@param O to extract from
@param M to select fields
@param match (?=`'default'`) to change precision
@returns [[Object]]
@example
```ts
```
*/
export type Select<O extends object, M extends any, match extends Match = 'default'> =
    Pick<O, SelectKeys<O, M, match>>
