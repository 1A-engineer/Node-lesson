
import { generate, count } from "random-words";

console.log(generate());
//output: 'army'

console.log(generate(5));
//output: ['army', 'beautiful', 'became', 'if', 'actually']

console.log(generate({ minLength: 2 }));
//output: 'hello'

console.log(generate({ maxLength: 6 }));
//output: 'blue'

console.log(generate({ minLength: 5, maxLength: 5 }));
//output : 'world'

console.log(generate({ minLength: 11, maxLength: 10000 })); //maxLength limited to the longest possible word
//output: 'environment'

console.log(generate({ minLength: 10000, maxLength: 5 })); //minLength limited to the maxLength
//output: 'short'

console.log(generate({ min: 3, max: 10 }));
//output: ['became', 'arrow', 'article', 'therefore']

console.log(generate({ exactly: 2 }));
//output: ['beside', 'between']

console.log(generate({ min: 2, max: 3, seed: "my-seed" }));
//output: ['plenty', 'pure']

// this call will yield exactly the same results as the last since the same `seed` was used and the other inputs are identical
console.log(generate({ min: 2, max: 3, seed: "my-seed" }));
//output: ['plenty', 'pure']

console.log(generate({ exactly: 5, join: " " }));
//output: 'army beautiful became if exactly'

console.log(generate({ exactly: 5, join: "" }));
//output: 'armybeautifulbecameifexactly'

console.log(generate({ exactly: 2, minLength: 4 }));
//output: ['atom', 'window']

console.log(generate({ exactly: 5, maxLength: 4 }));
//output: ['army', 'come', 'eye', 'five', 'fur']

console.log(generate({ exactly: 2, minLength: 3, maxLength: 3 }));
//output: ['you, 'are']

console.log(generate({ exactly: 3, minLength: 5, maxLength: 100000 }));
//output: ['understanding', 'should', 'yourself']

console.log(generate({ exactly: 5, wordsPerString: 2 }));
//output: [ 'salt practical', 'also brief', 'country muscle', 'neighborhood beyond', 'grew pig' ]

console.log(generate({ exactly: 5, wordsPerString: 2, separator: "-" }));
//output: [ 'equator-variety', 'salt-usually', 'importance-becoming', 'stream-several', 'goes-fight' ]

console.log(
  generate({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word) => word.toUpperCase(),
  })
);
//output: [ 'HAVING LOAD', 'LOST PINE', 'GAME SLOPE', 'SECRET GIANT', 'INDEED LOCATION' ]

console.log(
  generate({
    exactly: 5,
    wordsPerString: 2,
    formatter: (word, index) => {
      return index === 0
        ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
        : word;
    },
  })
);
//output: [ 'Until smoke', 'Year strength', 'Pay knew', 'Fallen must', 'Chief arrow' ]

console.log(count());
//output: 1952

console.log(count({ minLength: 5 }));
//output: 1318 

console.log(count({ maxLength: 7 }));
//output: 1649

console.log(count({ minLength: 5, maxLength: 7 }));
//output: 1015