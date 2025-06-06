# Candidate Notes - Charné Banger

Hello! Thank you for taking the time to review my coding task. Please see below for my changes and some of my thoughts.

## What I Changed (per goal)

1. Setup synchronisation of Redux store state
- For this I removed the need for two slices (`navUser` and `dashboardUser`) and created a shared slice `user` for both to use. Since the data, actions and reducers were exactly the same, there is no need for two slices.
- I created one shared store that both MFE components could get access to and update the user profiles work status. Doing it this way keeps both MFEs in sync on updates. This is a good pattern because you can continue to add to the `combineReducers` whether you want to share more state across components or have separate reducers for different for state that one would need and not necessarily the other.
- I then used the new shared state and call it in `UserAvatar` and `WorkStatusCard` components. 

2. Improve the usability/design of the dashboard availability component
- For this I removed the dropdown and implemented a radio button selector. A radio button is a better choice for a small list - it's considered best practice to use a radio button vs a dropdown when you have less than 5 options.
- I styled the component and based the selection colour off of the three options - green for `current`, yellow for `passive` and red for `not_looking`.
- I removed the "Your current status:" text and value as it seemed redundant and unecessary in the UI.
- In addition, I added a coloured icon to the Avatar component so it matches the colours of the selected radio button. This works visually with the changes to the radio button.

3. Fix the navigation's availability update component

