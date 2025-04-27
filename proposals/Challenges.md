# Problem Statement

Pokemon RNG faces some long-term issues:

- No clear starting point for beginners.
- Difficulty for users to discover new RNG methods and build knowledge.
- The existing Discord is primarily a help platform; users join, ask a question, and leave.
- RNG is mostly a solo activity, making community building difficult.

RNG activity was higher when tied to shared goals in broader communities, such as shiny egg exchanges, trading communities, and raid groups. These provided natural entry points for beginners and encouraged long-term participation.

With many of these communities fading, we've seen a decline in RNG activity. Today, there is no central shared goal driving the community.

# Proposed Solution

[PokemonRNG.com](http://pokemonrng.com/) should create a shared goal to encourage interaction and community growth.

I propose adding RNG Challenges: a set of tasks that players can complete for recognition, status, and bragging rights.

**Challenge Structure:**

- The site's navigation drawer will have an expandable "Challenges" section with navigation categories for each game.
- Each game will have challenge pages for different challenge categories, like "Tool Assisted" and "Retail".

**Navigation Structure:**

```
**Challenges** (header)
- Challenges
  - Emerald (expandable category)
    - Tool Assisted (challenge page with leaderboard)
    - Retail (challenge page with leaderboard)
**Guides**
- Gen 3 (expandable category)
  - Emerald
    - Guides

```

**Each Challenge Page Includes:**

- **Tasks Tab:**
  - Tasks presented as a responsive grid of cards. Each card displays a short title and a status icon (checkmark or circular progress bar).
  - Tasks grouped by difficulty (Easy, Medium, Hard).
  - Clicking on a card opens a modal with more detailed information, such as a description, requirements, and links to guides.
  - Cards have a visual indicator to clearly show they can be clicked.
  - Players can mark tasks as completed or in progress within the modal to track their progress.
  - Easy tasks are designed to be approachable even for complete beginners.
  - This would be stored offline per-device.
- **Leaderboard Tab:**
  - Displays a table of Discord users and how many tasks they have completed.

**Task Completion and Scoring:**

- Players submit proof of task completion in a new Discord `#challenge` channel.
- Proof typically consists of a screenshot showing the relevant accomplishment.
- Moderators or trusted verifiers review proofs as they have time.
- Since this is a for-fun, community-run initiative, we cannot guarantee specific verification times. We aim to be timely, but instant verifications are not guaranteed.
- Initially, the leaderboard will update manually, a maximum of once per day. Automated updates will be explored as participation grows.

**Discord Roles Based on Points:**

- Beginner: 1 challenge
- Bronze: 30% of total challenge points
- Silver: 50%
- Gold: 90%
- Legend: 100%

(Example: If a challenge has 10 tasks, completing 5 tasks earns Silver.)

Players participating in multiple challenges will have the highest role they've achieved.

**Grace Period for New Tasks:** If new tasks are added to a challenge, players will retain their roles for 7 days before recalculations adjust based on the new point totals.

**Personal Metrics:**

At the top of each challenge page, players will see a set of accumulated metrics that track their progress:

- **Overall Progress** (progress bar showing completion percentage)
- **Completed/Total Counts** (number of tasks completed vs. total tasks)
- **Last Updated Date** (when the challenge leaderboard was last refreshed)

This provides a quick summary of where each player stands in relation to their challenges.

# Future Considerations

Challenges open the door for many future possibilities. These are thoughts for the future that won’t necessarily happen, and don’t need to be planned out now. They’re intended to show possibilities of what can be built on top of challenges.

- **Seasonal, Monthly, and Special Challenges:**
  - Smaller sets of tasks, possibly time-limited.
  - Seasonal challenges will rotate in and out.
  - Regular challenges will be permanent.
  - Some challenges may encourage team activities, such as RNGing shiny eggs for other players.
  - Themed events could include Nuzlocke challenges, ROM hack-specific challenges, etc.
  - Could include larger cross-gen challenges.
- **Badges:**
  - Can be earned via special challenges.
  - Badges displayed on leaderboards and next to usernames in Discord.
- **Possible Prizes:**
  - Top leaderboard participants could earn occasional prizes during seasonal events.
- **Compare Personal Progress:**
  - Allow players to compare their progress on challenges with others on their personal progress pages.
- **Leaderboard Player Hover Stats:**
  - Hovering over players on leaderboards will display their overall stats across all challenges.
- **Personal Overall Metrics:**
  - A single page to track metrics across all challenges.
  - Shows current challenge.
  - Quick view with helpful info like the next task.
- **Track Weekly Update Streaks:**
  - Players will have a visual tracker of their weekly streaks, showing how consistently they are completing tasks or engaging in challenges.
- **Hall of Fame:**
  - Users can submit info and screenshots to be displayed in a special page.
- **Online Syncing:**
  - Sync between devices.
  - Online verification.
  - Public/private personal collection with screenshots and notes.

# Conclusion

By creating ongoing shared goals and building a whole new gaming element to RNG as a whole, we can provide a natural starting point for newcomers, promote skill development, and make RNG a community-driven activity.
