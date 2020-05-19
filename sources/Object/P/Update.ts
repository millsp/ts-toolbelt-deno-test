import {IterationOf} from '../../Iteration/IterationOf.ts'
import {Iteration} from '../../Iteration/Iteration.ts'
import {Pos} from '../../Iteration/Pos.ts'
import {Next} from '../../Iteration/Next.ts'
import {Key} from '../../Any/Key.ts'
import {Update as OUpdate} from '../Update.ts'
import {LastIndex} from '../../List/LastIndex.ts'
import {List} from '../../List/List.ts'
import {_Record_RW} from './Record.ts'
import {Record} from '../Record.ts'

/**
@hidden
*/
type _Update<O, Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  O extends object                                                     // If it's an object
  ? Pos<I> extends LastIndex<Path>                                     // If it's the last index
    ? OUpdate<O, Path[Pos<I>], A>                                      // Use standard Update
    : (O & Record<Exclude<Path[Pos<I>], keyof O>, {}>) extends infer O // Fill in missing keys with non-object
      ? {
          [K in keyof O]: K extends Path[Pos<I>]                       // If K is part of path
                          ? _Update<O[K], Path, A, Next<I>>            // Keep diving
                          : O[K]                                       // Not part of path - x
        } & {}
      : never
  : O

/**
Update in **`O`** the fields at **`Path`** with **`A`**
(⚠️ this type is expensive)
@param O to update
@param Path to be followed
@param A to update with
@returns [[Object]]
@example
```ts
```
*/
export type Update<O extends object, Path extends List<Key>, A extends any> =
    _Update<O, Path, A>
