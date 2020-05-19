import {Pos} from '../Iteration/Pos.ts'
import {_Append} from '../List/Append.ts'
import {_Concat} from '../List/Concat.ts'
import {_Drop} from '../List/Drop.ts'
import {Length} from '../List/Length.ts'
import {Next} from '../Iteration/Next.ts'
import {Cast} from '../Any/Cast.ts'
import {Parameters} from './Parameters.ts'
import {Return} from './Return.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Key} from '../Iteration/Key.ts'
import {NonNullable} from '../List/NonNullable.ts'
import {x} from '../Any/x.ts'
import {List} from '../List/List.ts'
import {Function} from './Function.ts'
import {Extends} from '../Any/Extends.ts'

/**
@hidden
*/
type GapOf<L1 extends List, L2 extends List, LN extends List, I extends Iteration = IterationOf<'0'>> =
    L1[Pos<I>] extends x
    ? _Append<LN, L2[Pos<I>]>
    : LN

/**
@hidden
*/
type _GapsOf<L1 extends List, L2 extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: _GapsOf<L1, L2, GapOf<L1, L2, LN, I>, Next<I>>
    1: _Concat<LN, _Drop<L2, Key<I>>>
}[Extends<Pos<I>, Length<L1>>]

/**
@hidden
*/
type GapsOf<L1 extends List, L2 extends List> =
    _GapsOf<L1, L2> extends infer X
    ? Cast<X, List>
    : never

/**
@hidden
*/
type Gaps<L extends List> = NonNullable<{
    [K in keyof L]?: L[K] | x
}>

/**
Curry a [[Function]]
@param F to curry
@returns [[Function]]
@example
```ts
import {F} from 'ts-toolbelt.ts'

/// If you are looking for creating types for `curry`
/// It handles placeholders and variable arguments
declare function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn>
```
*/
export type Curry<F extends Function> =
    <L extends List>(...args: Cast<L, Gaps<Parameters<F>>>) =>
        GapsOf<L, Parameters<F>> extends infer G
        ? Length<Cast<G, List>> extends infer L
          ? L extends 0 ? Return<F> : L extends 1
            // it means that it can continue being curried & can be called as terminating function
            ? Curry<(...args: Cast<G, List>) => Return<F>> & ((...args: Cast<G, List>) => Return<F>)
            // so it allows to continue currying (useless) & call the function (the last parameter)
            : Curry<(...args: Cast<G, List>) => Return<F>>
        : never
    : never
