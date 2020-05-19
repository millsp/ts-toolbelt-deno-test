import {Key} from '../Any/Key.ts'
import {x} from '../Any/x.ts'
import {Replace} from '../Union/Replace.ts'
import {MergeFlat} from './Merge.ts'
import {Exclude} from '../Union/Exclude.ts'
import {Keys} from './Keys.ts'

/**
Update in **`O`** the fields of key **`K`** with **`A`**.
Use the [[x]] placeholder to get the current field type.
@param O to update
@param K to chose fields
@param A to update with
@returns [[Object]]
@example
```ts
import {A, O} from 'ts-toolbelt.ts'

type User = {
    info: {
        name: string
        age: number
        payment: {}
    }
    id: number
}

type test0 = Update<User, 'id' | 'info', A.x | null>
// {
//     info: {
//         name: string;
//         age: number;
//         payment: {};
//     } | null;
//     id: number | null;
// }
```
*/
export type Update<O extends object, K extends Key, A extends any> =
    MergeFlat<{
        [P in keyof O]: P extends K                     // proceed with the known keys
                        ? Replace<A, x, O[P]>
                        : O[P]
    } & {}, Record<Exclude<K, Keys<O>>, Exclude<A, x>>> // add eventual missing keys
