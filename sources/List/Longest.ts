import {Exclude} from '../Union/Exclude.ts'
import {List} from './List.ts'
import {Keys} from './Keys.ts'

/**
Get the longest [[List]] of **`L`** & **`L1`**
(**`L`** has priority if both lengths are equal)
@param L to compare length
@param L1 to compare length
@returns **`L`** or **`L1`**
@example
```ts
```
*/
export type Longest<L extends List, L1 extends List> =
    [Exclude<Keys<L1>, Keys<L>>] extends [never]
    ? L
    : L1
