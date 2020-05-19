import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Next} from '../Iteration/Next.ts'
import {Pos} from '../Iteration/Pos.ts'
import {At} from './At.ts'
import {Cast} from '../Any/Cast.ts'
import {NonNullable as UNonNullable} from '../Union/NonNullable.ts'
import {UpdateField} from '../List/Update.ts'
import {Key} from '../Iteration/Key.ts'
import {Key as AKey} from '../Any/Key.ts'
import {List} from '../List/List.ts'
import {Length} from '../List/Length.ts'

/**
@hidden
*/
type ValidatePath<O, Path extends List<AKey>, I extends Iteration> =
    UpdateField<
        Path,
        Key<I>,
        [At<O & {}, Path[Pos<I>]>] extends [never]
        ? never
        : Path[Pos<I>]
    >

/**
@hidden
*/
type __PathValid<O, Path extends List<AKey>, I extends Iteration = IterationOf<'0'>> = {
    0: __PathValid<UNonNullable<At<O & {}, Path[Pos<I>]>>, ValidatePath<O, Path, I>, Next<I>>
    1: Path
}[
    Pos<I> extends Length<Path>
    ? 1
    : 0
]

/**
@hidden
*/
export type _PathValid<O extends object, Path extends List<AKey>> =
    __PathValid<O, Path> extends infer X
    ? Cast<X, List<AKey>>
    : never

/**
 * Replaces invalid parts of a path with `never`
 * @param O to be inspected
 * @param Path to be validated
 * @returns **`Index[]`**
 * @example
 * ```ts
 * import {A, L, O} from 'ts-toolbelt.ts'
 *
 * // Get a property in an object `o` at any depth with `path`
 * // `A.Cast<P, O.PathValid<O, P>>` makes sure `path` is valid
 * const getAt = <
 * O extends object,
 * P extends L.List<A.Index>
 * >(o: O, path: A.Cast<P, O.PathValid<O, P>>): O.Path<O, P> => {
 *     let valueAt = o
 *
 *     for (const p of path)
 *         valueAt = valueAt[p]
 *
 *     return valueAt as any
 * }
 *
 * const test0 = getAt({a: {b: {c: 1}}},          ['a', 'b'] as const) // {c: number}
 * const test1 = getAt({a: {b: {c: 1}}} as const, ['a', 'b'] as const) // {c: 1}
 * const test2 = getAt({a: {b: {c: 1}}},          ['x'] as const)      // error
 * ```
 */
export type PathValid<O extends object, Path extends List<AKey>> =
    O extends unknown
    ? Path extends unknown
      ? _PathValid<O, Path>
      : never
    : never
