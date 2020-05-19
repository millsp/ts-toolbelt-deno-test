import {Path as OPath} from '../Object/Path.ts'
import {Key} from '../Any/Key.ts'
import {List} from './List.ts'

/**
Get in **`L`** the type of nested properties
@param L to be inspected
@param Path to be followed
@returns **`any`**
@example
```ts
```
*/
export type Path<L extends List, Path extends List<Key>> =
    OPath<L, Path>
