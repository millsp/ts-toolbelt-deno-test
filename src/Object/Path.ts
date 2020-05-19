import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Next} from '../Iteration/Next.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Length} from '../List/Length.ts'
import {At} from './At.ts'
import {Cast} from '../Any/Cast.ts'
import {NonNullable} from '../Union/NonNullable.ts'
import {Key} from '../Any/Key.ts'
import {List} from '../List/List.ts'
import {Boolean} from '../Boolean/Boolean.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type __Path<O, Path extends List<Key>, strict extends Boolean, OPrev = O,  I extends Iteration = IterationOf<'0'>> = {
    0: __Path<At<NonNullable<O> & {}, Path[Pos<I>], strict>, Path, strict, O, Next<I>>
    // Use of `NonNullable` otherwise path cannot be followed #`undefined`
    1: O
}[Extends<Pos<I>, Length<Path>>]

/**
@hidden
*/
export type _Path<O extends object, Path extends List<Key>, strict extends Boolean = 1> =
    __Path<O, Path, strict> extends infer X
    ? Cast<X, any>
    : never

/**
Get in **`O`** the type of nested properties
For more advanced capabilities, see [[PathUp]]
@param O to be inspected
@param Path to be followed
@param strict (?=`1`) `0` to work with unions
@returns **`any`**
@example
```ts
```
*/
export type Path<O extends object, Path extends List<Key>, strict extends Boolean = 1> =
    //! O extends unknown // not needed, this is what strict = 0 does
    Path extends unknown
    ? _Path<O, Path, strict>
    : never
