# Exercise 3: Conditional rendering

You may have noticed, after adding some styling, that a weird artifact is shown when there are no suggestions:

![initial design](../__lecture/assets/always-visible.gif)

This is because we're _always rendering_ the list of results!

Figure out whether or not we have any matched suggestions, and use that to determine whether to render or not

> HINT: You don't need a new piece of state to track this; you can use the # of results.
