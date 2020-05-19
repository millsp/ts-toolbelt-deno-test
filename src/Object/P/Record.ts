import {Modx} from '../_Internal.ts'
import {IterationOf} from '../../Iteration/IterationOf.ts'
import {Iteration} from '../../Iteration/Iteration.ts'
import {Pos} from '../../Iteration/Pos.ts'
import {Next} from '../../Iteration/Next.ts'
import {Key} from '../../Any/Key.ts'
import {LastIndex} from '../../List/LastIndex.ts'
import {List} from '../../List/List.ts'

/**
@hidden
*/
type _Record_RR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    readonly [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                                    ? A
                                    : _Record_RR<Path, A, Next<I>>
  } & {}

/**
@hidden
*/
export type _Record_RW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    [Key in Path[Pos<I>]]: Pos<I> extends LastIndex<Path>
                           ? A
                           : _Record_RW<Path, A, Next<I>>
  } & {}

/**
@hidden
*/
type _Record_OR<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    readonly [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                                     ? A
                                     : _Record_OR<Path, A, Next<I>>
  } & {}

/**
@hidden
*/
type _Record_OW<Path extends List<Key>, A, I extends Iteration = IterationOf<'0'>> =
  {
    [Key in Path[Pos<I>]]?: Pos<I> extends LastIndex<Path>
                            ? A
                            : _Record_OW<Path, A, Next<I>>
  } & {}

/**
Create an object filled with **`A`** for the fields at the end of **`Path`**
@param Path to choose fields
@param A to fill fields with
@param modx (?=`['!', 'W']`) to set modifiers
@returns [[Object]]
@example
```ts
```
*/
export type Record<Path extends List<Key>, A, modx extends Modx = ['!', 'W']> = {
  '!': {
      'R': _Record_RR<Path, A>
      'W': _Record_RW<Path, A>
  },
  '?': {
      'R': _Record_OR<Path, A>
      'W': _Record_OW<Path, A>
  }
}[modx[0]][modx[1]]
