import {Exclude} from '../Union/Exclude.ts'
import {List} from './List.ts'
import {Keys as UKeys} from '../Union/Keys.ts'

/**
Get the keys of a [[List]]
@param L
@returns [[Key]]
@example
```ts
```
*/
export type Keys<L extends List> =
    Exclude<UKeys<L>, keyof any[]> | number
    // re-include `number`, it's a "own key"
