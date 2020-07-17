# Exercise 8: Grouping by Category

Some typeaheads will group by category, like this:

![grouped](../__lecture/assets/grouped-by-cat.png)

Notice how the first _two_ books share a heading, "In Science Fiction & Fantasy". The challenging part of this stretch goal is to structure the rendered output in such a way that items sharing the same category are grouped.

HINT: One strategy is to create your own data structure, like this:

```js
const groupedSuggestions = [
  {
    categoryName: "Science Fiction & Fantasy",
    suggestions: [
      {
        /* Book 1 */
      },
      {
        /* Book 2 */
      },
    ],
  },
];
```

Then, you can use _nested .map calls_ to iterate first through every group, and then through every suggestion in every group.
