import {Paths as OPaths} from '../Object/Paths.ts'
import {ObjectOf} from './ObjectOf.ts'
import {List} from './List.ts'

/**
Get all the possible paths of **`L`**
(⚠️ this won't work with circular-refs)
@param L to be inspected
@returns **`string[]`**
@example
```ts
```
*/
export type Paths<L extends List> =
    OPaths<ObjectOf<L>>
