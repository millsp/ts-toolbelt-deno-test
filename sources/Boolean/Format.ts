import {Boolean} from './Boolean.ts'
import {Formats} from './_Internal.ts'

/**
Change the format of a [[Boolean]]
@param B to transform
@returns **`string | number | boolean`**
@example
```ts
import {B} from 'ts-toolbelt.ts'

type test0 = B.Format<B.True, 's'> // 'true'
type test1 = B.Format<B.True, 'b'> //  true
```
*/
export type Format<B extends Boolean, fmt extends Formats> = {
    'b': [ false,   true ][B] // 0:  false , 1:  true
    'n': B
    's': ['false', 'true'][B] // 0: 'false', 1: 'true'
}[fmt]
