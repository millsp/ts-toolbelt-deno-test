import {NumberOf} from '../Number/NumberOf.ts'
import {Formats} from '../Iteration/_Internal.ts'
import {List} from './List.ts'

/**
Get the length of **`L`**
@param L to get length
@param fmt (?=`'n'`) output format
@returns [[String]] or **`number`**
@example
```ts
```
*/
export type Length<L extends List, fmt extends Formats = 'n'> =  {
    's': NumberOf<L['length']>
    'n': L['length']
}[fmt]
