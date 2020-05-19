import {Function} from './Function.ts'

/**
Extract parameters from a [[Function]]
@param F to extract from
@returns [[List]]
@example
```ts
import {F} from 'ts-toolbelt.ts'

const fn = (name: string, age: number) => {}

type test0 = F.ParamsOf<typeof fn>                         // [string, number]

type test1 = F.ParamsOf<(name: string, age: number) => {}> // [string, number]
```
*/
export type Parameters<F extends Function> =
    F extends ((...args: infer L) => any)
    ? L
    : never
