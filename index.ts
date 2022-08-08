import './style.css';

import { map, interval } from 'rxjs';

const source = interval(10);
const example = source.pipe(
  map((val) => {
    if (val > 5) {
      throw val;
    }
    return val;
  })
);

const subscribe = example.subscribe((val) => {
  console.log(val);
});
