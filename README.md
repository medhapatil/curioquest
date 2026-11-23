# CurioSponge ✦
A free, offline-friendly, mobile-first learning game. Built with Next.js App Router, TypeScript, Tailwind CSS and local JSON. No authentication, backend, paid API or database.

## Deploy without installing anything
1. Download the ZIP and **extract it** on your Mac (double-click the ZIP).
2. At [github.com/new](https://github.com/new), create a **private** repository named `curiosponge`. Do not initialize with a README.
3. In the new repository, choose **uploading an existing file** (or **Add file → Upload files**). Drag **all files and folders inside** the extracted `curiosponge` folder into the upload area, not the ZIP itself. GitHub's browser uploader may not preserve empty folders; this project does not depend on empty folders. Commit the files. If your browser refuses a folder, use GitHub Desktop instead.
4. At [vercel.com/new](https://vercel.com/new), sign in with GitHub, import `curiosponge`, leave Framework Preset as Next.js and build settings as defaults, then Deploy. Use the free Hobby plan. No environment variables.
5. Visit the assigned `*.vercel.app` URL. On iPhone, open it in Safari → Share → **Add to Home Screen** → Add. Open from the Home Screen.
6. **Offline test:** Open the installed app while online, wait for it to finish loading, then turn on Airplane Mode and reopen. All lessons are bundled in the JavaScript build. The service worker caches the app shell and its static scripts after first successful load. If offline fails, go online and reload once; verify Safari is not in Private Browsing.

## Add lessons later
Edit `data/lessons.json` directly on GitHub (pencil icon), or upload a replacement file with the same path, and commit. Vercel redeploys automatically after commits to your production branch. JSON must remain valid. Each lesson has an ID unique across the entire file, one of the eight topic IDs, a 0-based `correctIndex`, and a `paths` array. Do not delete old IDs: they link to existing progress.

Ask ChatGPT:
> Generate 50 original, fact-checked CurioSponge lessons as a **downloadable replacement `lessons.json`**, preserving every existing lesson and its ID. Use the schema in the attached `data/lessons.json`. Keep topic IDs unchanged, give each new lesson a unique ID, use exactly 3 answer choices with one unambiguously correct answer and a 0-based `correctIndex`, include deeper content, and use only real verified source URLs. Validate the JSON, IDs, answer indices, and source links. Return a replacement file, not code snippets.

**Attach your latest `lessons.json`** to that request so no content is lost.

## Storage and privacy
Progress, quiz answers, feedback, bookmarks, daily plans, preferences, and interest events live in this device's browser `localStorage` under `curioquest-v1` (retained for compatibility with previous CurioQuest progress). No account and no cross-device sync. Use Settings → Export to save a backup JSON; import it on another device to transfer progress. Clearing Safari website data may erase progress. Back up periodically.

## Daily recommendation rules
The first visit each day freezes a deterministic selection keyed by the local calendar date. The selection uses user-adjustable topic weights plus feedback, bookmarks, deep dives, and completion. About 20% of draws use equal topic/lesson weighting to encourage exploration. Topics never get zero weight. Completed lessons are excluded from the daily pool; the Explore tab lets you review them. Settings affect subsequent days, not the current frozen plan.

## Learning paths
Paths are curated filters and progress views over the same lesson bank. They are optional and can overlap. They are not certified curricula or medical guidance.

## Technical notes
- `npm install && npm run test && npm run typecheck && npm run build` (optional; Vercel runs the install/build automatically).
- Static export `output: 'export'` creates an `out/` directory on build.
- Service worker caches same-origin GET requests and pre-caches homepage and Next static assets found in the generated HTML. On an initial install, open the app while online and allow it to finish caching before going offline.
- Source URLs in lessons are references for further reading; some lessons intentionally contain no external reference when explaining a basic definition or an original decision scenario. Source links require internet, but lesson text works offline.
- Daily streaks count local calendar days with at least one completed lesson, and allow an uncompleted current day without immediately ending yesterday's streak.
- XP: 20 per lesson, 5 per deep dive, 3 per Love. Level increases every 150 XP.

## Limitations
No cross-device sync. Browser storage can be deleted by the OS/browser. Offline availability depends on successful first cache population and service worker support. This app provides educational information, not medical advice. For production medical products, independent domain review is required.


## Approved Ink & Paper design
The interface is permanently dark (ink #101715), with muted sage controls and minimal surfaces. Lesson explanations and quiz cards alone use warm ivory (#F5F0E7) for comfortable reading. Headings use Newsreader, UI text uses Inter. No theme toggle is required. Fonts are fetched from Google Fonts when online, with system fallbacks offline.
