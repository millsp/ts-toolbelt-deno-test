import {_Pick} from './Pick.ts'
import {Exclude} from '../Union/Exclude.ts'
import {Key} from '../Any/Key.ts'
import {Keys} from './Keys.ts'

export type _Omit<O extends object, K extends Key> =
    _Pick<O, Exclude<Keys<O>, K>>

/**
Remove out of **`O`** the fields of key **`K`**
@param O to remove from
@param K to chose fields
@returns [[Object]]
@example
```ts
```
*/
export type Omit<O extends object, K extends Key> =
    O extends unknown
    ? _Omit<O, K>
    : never
