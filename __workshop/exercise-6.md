# Exercise 6: Wrapping up Keyboard Support

There's two more tasks we should complete, to call this component keyboard-usable:

- When there are no provided suggestions - either because the user hasn't typed anything yet, or they've typed a string that doesn't match any strings - we shouldn't tweak the selected index. Perform that check before updating the state
- On `Escape`, close the typeahead dropdown. HINT: You'll need another piece of React state to manage this.
- Clamp the selected index to the acceptable range of values; tapping "UpArrow" when you're on the first item shouldn't do anything.

Implement these enhancements.
