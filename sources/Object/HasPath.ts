import {Match} from '../Any/_Internal.ts'
import {Path as OPath} from './Path.ts'
import {Is} from '../Any/Is.ts'
import {Key} from '../Any/Key.ts'
import {List} from '../List/List.ts'

/**
Check whether **`O`** has nested properties that match **`M`**
@param O to be inspected
@param Path to be followed
@param M (?=`any`) to check field type
@param match (?=`'default'`) to change precision
@returns [[Boolean]]
@example
```ts
```
*/
export type HasPath<O extends object, Path extends List<Key>, M extends any = any, match extends Match = 'default'> =
    Is<OPath<O, Path>, M, match>
