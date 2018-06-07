# Live Battery Stationary Abuse (Ruby/Sapphire)

## Tools
- [VBA-RR](https://github.com/TASVideos/vba-rerecording/releases)
- Lua .dll files
     - [x86 lua.dll](https://www.dropbox.com/s/2o4hdphn7j9z349/lua-dll-x86.zip?dl=0)
     - [x64 lua.dll](https://www.dropbox.com/s/t8yttukleqserzp/lua-dll-x64.rar?dl=0)
     - Place these files in the same folder as VBA-RR.exe
- [PokeFinder](https://github.com/Admiral-Fish/PokeFinder/releases)
- [The Ruby/Sapphire Lua Scripts for your language](http://pokerng.forumcommunity.net/?t=56443955)
- [runasdate (Optional)](https://runasdate.en.softonic.com/)
- A Save File that has been ID abused 
    - Optional but recommended if going for shiny spreads with good IVs.

```
Note: This method will work on any Pokemon generated by Method 1 in Pokemon Ruby/Sapphire. Keep in mind that if you're looking for an specific spread to be shiny, ID/SID abuse might be required before attempting this RNG.
```

## VBA-RR Settings
- Make sure the save mode is set correctly
    - Options > Emulation > Save Type > Automatic & Flash 128K
- Real Time Clock must be enabled in order to obtain Live Battery seeds.

## Ruby/Sapphire PID/IV combinations
- This guide only applies to Ruby and Sapphire RNG.
  - Fire Red and Leaf Green have random seeding and Emerald will always have the initial seed of 0 unless you didn't Soft Reset or turn off the game.
- Also, spreads are limited due to the limited amount of valid PID/IV combos. You can read about PID generation more in-depth [here](https://www.smogon.com/ingame/rng/pid_iv_creation).
  - Because of the limited amount of PIDs that are linked with a good IV spread, it is recommended that you attempt an ID abuse before attempting to get a Shiny 5IV Pokemon (or any specific Shiny/IV combo).

## Generating the Seed
1. Find your spread that you want to hit.
    - Choose Gen 3 Stationary and click the "Searcher" tab. Input the spread you want and look for results.
    - If there are no results, adjust filters until there is a result that you want.

![search](https://snag.gy/ec6wP4.jpg)

- Input your chosen spread to get the seed and PID. Make sure it says Method 1!

2. Getting your Initial Seed
    - The seed you got from that screen was simply the seed you must hit when you press `A` on encounter.
    - To get your initial seed, go to "Gen 3 Tools" and hit "16-Bit Seed To Time". Copy and paste the seed into the highlighted bar.

![Seed To Time](https://snag.gy/N6RZkM.jpg)

- Make sure the year is set to 2000 as other years will not work correctly.
- This will give you your initial seed and the date you need to run the Ruby and Sapphire game on.

3. Finding the Frame to hit
    - On the screen of PokeFinder below, enter your initial seed and spread. Make sure that it is set to search "Method 1". It should look something like this:

![M1](https://snag.gy/mQuEG8.jpg)

- Hit "Generate" and look for results. If you don't get a result, try extending the max results to a higher number.

## Hitting the Desired Seed and Frame

1. Hitting the Initial Seed
    - Open runasdate (or change your computer clock) and set the date to one listed in "16-Bit Seed To Time". 
    - Set up the screen just like how it is shown below:

![runasdate](https://snag.gy/Fw7Xk9.jpg)

- Note that unlike Generations 4 and 5, only the hours and minutes matter for hitting the initial seed.
- Hit run and you will open VBA-RR. 
- Load the lua script for your game.

2. Finding Delay
  - Go to the final screen before encountering the target Pokemon.
  - Make a save state and note what frame you are on.
  - Hit `A` and enter the encounter.
  - Take note of the IVs of the Pokemon you encounterd.

![IVs](https://snag.gy/wpUMTv.jpg)

- Now, open a new PokeFinder and insert your initial seed and IVs.

![Finder](https://snag.gy/dVAqKe.jpg)

- Since I hit `A` on Frame 89016, that means 54 Frames went by between my last input (hitting `A`) and the IVs and PID being generated.
    - Therefore, to hit my 31/2/31/31/31/31 Modest spread, I must hit 180124.
    - Target Frame = Desired Frame - Delay

3. Advance Frames
    - Advance frames, paying attention to the frame counts. I recommend making a save state every 20,000 frames or so, just in case.
    - Advance until you reach your new target frame, pause the emulator again and hold the `A` button.
    - Unpause the emulator and hit your shiny frame! If you did everything right, you should be able to hit your desired spread on your Pokemon. If not, calculate how many frames you are off, reload a previous save state, adjust accordingly, and try again.
4. Enjoy your new Pokemon!
    Catch your Pokemon! (Make sure to make a save state)

 ![Regice](https://snag.gy/Rs2qYH.jpg)