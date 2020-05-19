import {_Omit} from '../Object/Omit.ts'
import {Has} from '../Union/Has.ts'
import {At} from '../Object/At.ts'
import {List} from './List.ts'

/**
@hidden
*/
export type _ObjectOf<L extends object> =
    Has<keyof L, keyof List> extends 1         // check that is is an array
    ? number extends At<L, 'length'>           // ^^^ handles mixed up objs
      ? _Omit<L, Exclude<keyof any[], number>> // preserves arrays
      : _Omit<L, keyof any[]>                  // transforms tuples
    : L

/**
Transform a [[List]] or an **`Array`** into an [[Object]]
@param L to transform
@returns [[Object]]
@example
```ts
```
*/
export type ObjectOf<L extends object> =
    L extends unknown
    ? _ObjectOf<L>
    : never
