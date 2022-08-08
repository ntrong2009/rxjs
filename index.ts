import './style.css';

import { map, interval, timer } from 'rxjs';
import { tap, retryWhen, delayWhen } from 'rxjs/operators';

// const example = interval(10).pipe(
//   map((val) => {
//     if (val > 5) {
//       throw val;
//     }
//     return val;
//   }),
//   retryWhen((errors) => {
//     return errors.pipe(
//       tap((val) => {
//         console.log(`value ${val} was too high`);
//       }),
//       delayWhen((val) => {
//         return timer(val * 1000);
//       })
//     );
//   })
// );

// const subscribe = example.subscribe((val) => {
//   console.log(val);
// });

// timer(6000).subscribe((val) => {
//   console.log(val);
// });
