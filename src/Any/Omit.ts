import {_Omit as _OOmit} from '../Object/Omit.ts'
import {_Omit as _LOmit} from '../List/Omit.ts'
import {Key} from './Key.ts'
import {List} from '../List/List.ts'
import {Union} from '../Union/Union.ts'

/**
 * Remove out from each member of union **`U`** the fields of key **`K`**
 * @param U to remove from
 * @param K to chose fields
 * @returns [[Union]]
 * @example
 * ```ts
 * import {U} from 'ts-toolbelt.ts'
 *
 * type O = {type: 'foo'; other: number} | {type: 'bar'; other: string} | [0, 1]
 * type test0 = U.Omit<O, 'other' | '0'> // {type: 'foo'} | {type: 'bar'} | [1]
 * ```
 */
export type Omit<U extends Union, K extends Key> =
    U extends object
    ? U extends List
      ? _LOmit<U, K>
      : _OOmit<U, K>
    : U
