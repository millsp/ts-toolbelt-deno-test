import {Union} from './Union.ts'
import {Not} from '../Boolean/Not.ts'
import {Extends} from '../Any/Extends.ts'

/**
Check whether **`U`** contains **`U1`**
@param U to be inspected
@param U1 to check within
@returns [[Boolean]]
@example
```ts
```
*/
export type Has<U extends Union, U1 extends Union> =
    Not<Extends<Exclude<U1, U>, U1>>
