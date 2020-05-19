import {Length} from './Length.ts'
import {Formats} from '../Iteration/_Internal.ts'
import {Tail} from './Tail.ts'
import {List} from './List.ts'

/**
Get the last index of **`L`**
@param L to get from
@param fmt (?=`'n'`) output format
@returns [[String]] or **`number`**
@example
```ts
```
*/
export type LastIndex<L extends List, fmt extends Formats = 'n'> =
    Length<Tail<L>, fmt>
