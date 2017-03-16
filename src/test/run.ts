import * as value from './src/value/value'
// import { Subject } from 'rxjs/Subject';
import * as Rx from 'rxjs/Rx';

let subject = new Rx.Subject()
subject.subscribe(value => console.log(value));
subject.next(1)