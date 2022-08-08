import './style.css';

import { of, map, Observable } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe((data) => {
    console.log(data);
  });
