import { promisify } from 'node:util';
import callbackGlog from 'glob';

export const glob = promisify(callbackGlog)
