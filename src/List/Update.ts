import {Key as IKey} from '../Iteration/Key.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Key} from '../Any/Key.ts'
import {List} from './List.ts'
import {Replace} from '../Union/Replace.ts'
import {x} from '../Any/x.ts'
import {GreaterEq} from '../Number/GreaterEq.ts'
import {Length} from './Length.ts'
import {Overwrite} from './Overwrite.ts'
import {_Repeat} from './Repeat.ts'
import {Next} from '../Iteration/Next.ts'
import {Naked} from './_Internal.ts'
import {NumberOf} from '../Any/_Internal.ts'
import {Extends} from '../Any/Extends.ts'
import {Or} from '../Boolean/Or.ts'

/**
@hidden
*/
export type UpdateField<L extends List, K extends string, A extends any> = {
    [P in keyof L]: P extends K
                    ? Replace<A, x, L[P]>
                    : L[P]
} & {}

/**
@hidden
*/
type UpdateTuple<L extends List, K extends string, A extends any> =
    GreaterEq<K, Length<L, 's'>> extends 1
    ? UpdateField<Overwrite<_Repeat<undefined, IKey<Next<IterationOf<K>>>>, L>, K, A>
    : UpdateField<L, K, A>

/**
@hidden
*/
type UpdateList<L extends List, A extends any> =
    (L[number] | A)[]

/**
@hidden
*/
export type _Update<L extends List, K extends Key, A extends any> =
    Or<Extends<number, Length<L>>, Extends<number, K>> extends 1
    ? UpdateList<L, A>
    : UpdateTuple<Naked<L>, NumberOf<K> & string, A>

/**
Update in **`L`** the entries of key **`K`** with **`A`**.
Use the [[x]] placeholder to get the current field type.
@param L to update
@param K to chose fields
@param A to update with
@returns [[List]]
@example
```ts
```
*/
export type Update<L extends List, K extends Key, A extends any> =
    L extends unknown
    ? K extends unknown
      ? _Update<L, K, A>
      : never
    : never
