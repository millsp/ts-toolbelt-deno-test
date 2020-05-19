import {Tail} from './Tail.ts'
import {Length} from './Length.ts'
import {List} from './List.ts'

/**
Get the last entry of **`L`**
@param L to extract from
@returns **`any`**
@example
```ts
```
*/
export type Last<L extends List> =
    L[Length<Tail<L>>]
