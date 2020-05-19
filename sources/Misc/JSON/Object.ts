import {Value} from './Value.ts'

/**
An object of JSON [[Value]]s
*/
export interface Object {
	[k: string]: Value;
}
