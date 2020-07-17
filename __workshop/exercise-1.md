# Exercise 1: Initial Structure

This workshop comes with some data - in particular, it's an array of books. Many of them are wonderful, and are worth checking out. Especially for folks who are into sci-fi/fantasy!

Inside our `App.js`, we're importing that data. Check out `data.js` to see what it looks like. We'll want to pass `data.books` down to a new Typeahead component, so that the user can filter through this big list of books and find the one they're looking for.

Start by creating a new `Typeahead.js` component. As props, it should take:

- `data` - an array of objects representing all possible suggestions.
- `handleSelect` - a function that will be called when the user picks a suggestion.

Render it inside the main component, `App`:

```diff
import React from 'react';

+import data from '../data';

import GlobalStyles from './GlobalStyles';
+import Typeahead from './Typeahead';

function App(props) {
  // TODO!
  return (
    <>
      <GlobalStyles />
-     {/* TODO */}
+     <Typeahead
+       suggestions={data.books}
+       handleSelect={(suggestion) => {
+         window.alert(suggestion)
+       }}
+     />
    </>
  )
};
```

For now, our `handleSelect` function opens an alert dialog with the name of the book we've selected.

Inside our `Typeahead` component, let's start by creating an input. You should use React state to track the value the user has entered. You can also add a "Clear" button, which will reset this value.

When the user presses "enter" in this input, we'll submit the suggestion. **For now, just return what the user has typed in, without checking anything**.

_HINT:_ you'll want to use an `onKeyDown` event, and take a look at `ev.key` to see which key the user pressed.

Give this a shot, and then take a look at the hint for how we decided to do it.

> 🆘 **If you are stuck, or want to compare, you can look at this [hint](./_hints/hint-1.md).**

While we're here, we should also style the input and button to match the designs:

![initial design](../__lecture/assets/initial-design.png)

_HINT:_ Inside `App`, you probably want to wrap the `<Typeahead>` element in a `<Wrapper>` so that you can center it in the window.
