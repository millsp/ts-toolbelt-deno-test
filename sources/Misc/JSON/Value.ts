import {Primitive} from './Primitive.ts'
import {List} from './Array.ts'
import {Object} from './Object.ts'

/**
Any JSON data/value
*/
export type Value = Primitive | Object | List
