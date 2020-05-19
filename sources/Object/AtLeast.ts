import {_Omit} from './Omit.ts'
import {_Pick} from './Pick.ts'
import {Key} from '../Any/Key.ts'
import {Keys} from './Keys.ts'
import {RequiredFlat} from './Required.ts'
import {Extends} from '../Any/Extends.ts'
import {Compute} from '../Any/Compute.ts'
import {OptionalFlat} from './Optional.ts'

/**
@hidden
*/
type RequiredIfKeys<O extends object, K extends Key> =
    Extends<keyof O & K, K> extends 1
    ? RequiredFlat<O>
    : O

/**
@hidden
*/
type __AtLeast<O extends object, K extends Key> =
    K extends keyof O               // if we can operate on it
    ? _Pick<O, K> & OptionalFlat<O> // take entry & make rest optional
    : O

/**
@hidden
*/
type _AtLeast<O extends object, K extends Key> =
    Compute<__AtLeast<RequiredIfKeys<O, K>, K>>

/**
Make that at least one of the keys **`K`** are required in **`O`** at a time.
@param O to make required
@param K (?=`keyof O`) to choose fields
@returns [[Object]] [[Union]]
@example
```ts
```
*/
export type AtLeast<O extends object, K extends Key = Keys<O>> =
    O extends unknown
    ? _AtLeast<O, K>
    : never
