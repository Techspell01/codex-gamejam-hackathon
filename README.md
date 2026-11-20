# Afterlight: Operation Paper Trail

**Codex Game Jam / Hackathon project** - a browser based, single player, open world mystery thriller built with Three.js.

## The operation

A creature has attacked Northside. Hunt it down, then question local residents, search three buildings for evidence, connect the clues at the case board, and race a rival contractor crew to Eastmere to recover Mara Venn's original recording.

Northside now has a denser commercial district with named multi story landmarks. Explore a glass front supermarket with shoppers and a cashier, busier shop streets, detailed pedestrians, marked asphalt roads, sidewalks, street drains, and a live map. Enterable doors, a drivable getaway vehicle, three camera views, and smooth walking controls are included.

## Play locally

1. Double click **Start Local Game.bat**.
2. Open **http://localhost:8080** in a browser.
3. Allow internet access so Three.js and the Poly Haven textures can load.

The game is a static web project; **serve.cjs** runs its tiny local server with Node.js.

## Controls

- **W / S** - move forward / backward
- **A / D** - move left / right
- **Shift** - run
- **Mouse** - look around while moving; hold right mouse button if pointer lock is unavailable
- **V** - cycle first person, follow, and overhead views
- **E** - talk, open a door, collect evidence, use the case board, enter or exit the vehicle
- **Left click** - fire; **R** - reload
- In the vehicle, **W / S** accelerate or brake and **A / D** steer

## Publish as a live game

The GitHub Pages workflow is ready at .github/workflows/pages.yml. Push the project to a GitHub repository on the main branch, then select **Settings > Pages > GitHub Actions**. The deployed URL will appear in the repository's Pages settings and deployment status.

## Web assets and credits

The browser downloads these CC0 textures from [Poly Haven](https://polyhaven.com):

- [Grass Ground](https://polyhaven.com/a/grass_ground) - town terrain
- [Clean Asphalt](https://polyhaven.com/a/clean_asphalt) - roads
- [Plastered Wall](https://polyhaven.com/a/plastered_wall), [Roof Slates 02](https://polyhaven.com/a/roof_slates_02), and [Wood Floor Worn](https://polyhaven.com/a/wood_floor_worn) - building materials

Three.js is loaded from jsDelivr. Internet access is required to play with the full materials.
