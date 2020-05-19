import {List} from './List.ts'

/**
Transform a [[List]] into an [[Union]]
@param L to transform
@returns **`any`**
@example
```ts
```
*/
export type UnionOf<L extends List> =
    L[number]
