export type Question = {
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizzes: Record<string, Question[]> = {
  'how-websites-work': [
    {
      prompt: 'Which layer should authoritatively check whether a book can be reserved?',
      options: ['CSS', 'The server that owns the reservation record', 'The browser button label'],
      answer: 1,
      explanation: 'The server must enforce availability when the reservation is stored.'
    },
    {
      prompt: 'Why does the sample page reset after refresh?',
      options: ['Its message is only temporary browser state', 'HTML cannot display text', 'Every refresh deletes the database'],
      answer: 0,
      explanation: 'The sample has no persistence, so reloading restores the initial document.'
    }
  ],
  'python-problem-solving': [
    {
      prompt: 'What is the daily target for 13 lessons over 4 days?',
      options: ['3', '4', '13'],
      answer: 1,
      explanation: 'Round upward so the target is sufficient to cover all lessons.'
    },
    {
      prompt: 'Why return a value rather than only printing it?',
      options: ['Returning automatically saves it', 'Printing always changes the type', 'Another part of the program can reuse the result'],
      answer: 2,
      explanation: 'Returned data can be tested, combined, or displayed separately.'
    }
  ],
  'git-team-workflow': [
    {
      prompt: 'What does the staging area represent?',
      options: ['The proposed content of the next commit', 'All remote branches', 'Only deleted files'],
      answer: 0,
      explanation: 'Staging selects the state that the next commit records.'
    },
    {
      prompt: 'What should you do before committing?',
      options: ['Delete unrelated files', 'Inspect git diff --staged', 'Assume every changed file belongs'],
      answer: 1,
      explanation: 'Review the staged difference to see exactly what you will record.'
    }
  ],
  'apis-and-json': [
    {
      prompt: 'Does valid JSON guarantee the expected application schema?',
      options: ['Yes, always', 'No; fields and types still need validation', 'Only when minified'],
      answer: 1,
      explanation: 'Syntactic validity does not prove that data matches the required shape.'
    },
    {
      prompt: 'What must you check after fetch receives HTTP 404?',
      options: ['Only whether the promise rejected', 'The CSS theme', 'The response status or response.ok'],
      answer: 2,
      explanation: 'Fetch can fulfill with an HTTP error response, so check its status.'
    }
  ],
  'networking-troubleshooting': [
    {
      prompt: 'What does localhost refer to on a phone?',
      options: ['Your laptop', 'The phone itself', 'The nearest public server'],
      answer: 1,
      explanation: 'Localhost always refers to the device making the request.'
    },
    {
      prompt: 'A homepage returns 200 but an API path returns 404. What is the best next step?',
      options: ['Replace the router immediately', 'Delete the browser', 'Inspect the API route and requested path'],
      answer: 2,
      explanation: 'A server answered, so investigate the specific missing resource first.'
    }
  ],
  'linux-command-line': [
    {
      prompt: 'Which command displays the current directory?',
      options: ['pwd', 'ps -ef', 'cat'],
      answer: 0,
      explanation: 'pwd prints the working directory.'
    },
    {
      prompt: 'What should you do first after a permission error?',
      options: ['Give everyone write access', 'Inspect the path, owner, and intended operation', 'Always run as administrator'],
      answer: 1,
      explanation: 'Establish whether your account should perform the operation before escalating.'
    }
  ],
  'sql-data-models': [
    {
      prompt: 'Why use a stable course identifier?',
      options: ['Titles can change or repeat', 'It makes backups unnecessary', 'It replaces all validation'],
      answer: 0,
      explanation: 'An identifier preserves references independently of display text.'
    },
    {
      prompt: 'What groups related database changes into a unit?',
      options: ['A CSS selector', 'A transaction', 'A course title'],
      answer: 1,
      explanation: 'A transaction allows related changes to commit together or roll back.'
    }
  ],
  'security-by-design': [
    {
      prompt: 'Which question is about authorization?',
      options: ['Who is the caller?', 'What color is the button?', 'May this caller read this submission?'],
      answer: 2,
      explanation: 'Authorization determines permission for an operation and resource.'
    },
    {
      prompt: 'Does Base64 make an API key private?',
      options: ['Yes', 'No; it is encoding, not encryption', 'Only in JavaScript'],
      answer: 1,
      explanation: 'Base64 is reversible representation and does not protect a secret.'
    }
  ],
  'containers-and-delivery': [
    {
      prompt: 'What is a running instance launched from an image?',
      options: ['A container', 'A source commit', 'A DNS record'],
      answer: 0,
      explanation: 'An image is the artifact; the container is the running instance.'
    },
    {
      prompt: 'Does persistent storage replace a recovery plan?',
      options: ['Yes, always', 'Only for databases', 'No; restoration still needs to be tested'],
      answer: 2,
      explanation: 'Persistence and recoverability solve different problems.'
    }
  ],
  'testing-and-debugging': [
    {
      prompt: 'What makes a useful test case?',
      options: ['It repeats the implementation formula', 'It checks a defined expected behavior', 'It only counts lines of code'],
      answer: 1,
      explanation: 'Useful checks protect requirements rather than duplicate implementation.'
    },
    {
      prompt: 'What should a debugging report contain?',
      options: ['Only “it is broken”', 'A guess without evidence', 'Reproduction steps and expected versus actual behavior'],
      answer: 2,
      explanation: 'Repeatable observations make investigation focused and verifiable.'
    }
  ],
  'react-interface-state': [
    {
      prompt: 'Where should the filtered list come from?',
      options: ['A calculation using query and course data', 'A second unrelated stored copy', 'A global variable updated by hand'],
      answer: 0,
      explanation: 'Derive it from existing data so copies cannot drift out of sync.'
    },
    {
      prompt: 'What makes a useful list key?',
      options: ['A random value each render', 'The displayed position in every case', 'A stable item identifier'],
      answer: 2,
      explanation: 'Stable keys preserve identity when items move or are filtered.'
    }
  ],
  'typescript-data-contracts': [
    {
      prompt: 'Does a type assertion validate a network response?',
      options: ['No', 'Yes', 'Only for arrays'],
      answer: 0,
      explanation: 'Assertions guide the checker; they do not inspect runtime data.'
    },
    {
      prompt: 'Why use unknown at an external boundary?',
      options: ['It disables every check', 'It requires narrowing before specific use', 'It converts all values to strings'],
      answer: 1,
      explanation: 'Unknown preserves uncertainty until checks establish the value’s shape.'
    }
  ],
  'free-domains-and-dns': [
    {
      prompt: 'Which DNS record points a subdomain to a target host domain?',
      options: ['MX record', 'CNAME record', 'TXT record'],
      answer: 1,
      explanation: 'A CNAME (Canonical Name) record aliases one domain name to another hostname.'
    },
    {
      prompt: 'Which of the following is a genuine free developer subdomain service?',
      options: ['is-a.dev via GitHub pull request', 'A site claiming .com is free forever without ads', 'Unverified redirect lottery links'],
      answer: 0,
      explanation: 'is-a.dev is a recognized open-source community service offering free subdomains for developers through GitHub pull requests.'
    }
  ],
  'free-website-hosting': [
    {
      prompt: 'Which host is best suited for hosting static websites directly from a Git repository with zero config?',
      options: ['Self-managed bare metal server', 'GitHub Pages or Cloudflare Pages', 'A dedicated expensive VPS'],
      answer: 1,
      explanation: 'GitHub Pages and Cloudflare Pages offer free, instant static hosting with continuous deployment directly from Git.'
    },
    {
      prompt: 'What is a common limitation of free dynamic backend tiers (like Render free tier)?',
      options: ['They never restart', 'They spin down after inactivity and have a cold-start delay', 'They charge hidden fees'],
      answer: 1,
      explanation: 'Free compute instances usually sleep when idle and take 30 to 50 seconds to spin back up on incoming requests.'
    }
  ],
  'deploy-your-first-website': [
    {
      prompt: 'Why should secret API keys and database credentials be kept in environment variables instead of committed to Git?',
      options: ['Environment variables make the code run slower', 'Committed secrets remain visible in Git commit history forever', 'Git deletes files containing keys'],
      answer: 1,
      explanation: 'Any file committed to Git is recorded in commit history, exposing credentials to anyone with access to the repo.'
    },
    {
      prompt: 'What happens on Vercel or Cloudflare Pages when you push a new commit to the main branch?',
      options: ['You must manually re-upload the zip file', 'An automatic build and deploy is triggered via CI/CD', 'The domain registration is cancelled'],
      answer: 1,
      explanation: 'Git-integrated platforms listen for push webhooks and automatically trigger fresh builds and deployments.'
    }
  ],
  'free-ui-and-design-resources': [
    {
      prompt: 'What is the primary benefit of copy-paste component libraries like shadcn/ui?',
      options: ['You do not own the source code', 'You own the component source directly in your project without version lock-in', 'It prevents using CSS'],
      answer: 1,
      explanation: 'shadcn/ui provides accessible, customizable component code that you copy directly into your repository, giving you full control.'
    },
    {
      prompt: 'What is an important consideration when embedding third-party chat or comment widgets?',
      options: ['They are guaranteed to be 0kb', 'They execute third-party JavaScript and may introduce privacy or tracking concerns', 'They replace your backend database entirely'],
      answer: 1,
      explanation: 'Third-party scripts run in the visitor browser and can load third-party trackers or cookies, so choose privacy-respecting options like Giscus.'
    }
  ],
  'free-apis-for-projects': [
    {
      prompt: 'If an API key is included in client-side browser JavaScript, is it secret?',
      options: ['Yes, because browsers hide JavaScript', 'No, anyone can inspect client-side network requests and scripts in DevTools', 'Only if minified with Base64'],
      answer: 1,
      explanation: 'Client-side code and network calls are completely visible to users in browser Developer Tools.'
    },
    {
      prompt: 'What HTTP status code usually indicates you have exceeded a free API rate limit?',
      options: ['200 OK', '404 Not Found', '429 Too Many Requests'],
      answer: 2,
      explanation: 'HTTP 429 Too Many Requests is the standard response when you exceed an API rate or quota limit.'
    }
  ],
  'free-custom-ui-widgets': [
    {
      prompt: 'Which three CSS properties are combined to build clean glassmorphic cards?',
      options: ['Display block, float left, and z-index', 'Semi-transparent background, backdrop-filter blur, and subtle border', 'Only bold font weight'],
      answer: 1,
      explanation: 'Glassmorphism requires a semi-transparent dark background, backdrop-filter blur, and a subtle accent border to achieve depth and contrast.'
    },
    {
      prompt: 'Why animate transform and opacity rather than width or margin for UI widget micro-animations?',
      options: ['Transform and opacity render on the GPU composite layer without causing browser reflows', 'Width animation is prohibited in CSS', 'Opacity changes the text font size automatically'],
      answer: 0,
      explanation: 'GPU-accelerated properties (transform and opacity) do not trigger layout reflows, ensuring smooth 60fps animations on all devices.'
    }
  ],
  'next-app-router-rendering': [
    {
      prompt: 'A course catalog page shows the same published courses to every visitor and updates a few times a day. Which rendering strategy fits best?',
      options: ['Server-side rendering on every request', 'Incremental static regeneration with a revalidate window', 'Marking the whole page a client component'],
      answer: 1,
      explanation: 'ISR serves a cached static page and regenerates it in the background after the revalidate window, matching content that changes occasionally but not per visitor.'
    },
    {
      prompt: 'A page reads a session cookie to show whether the current visitor is enrolled in each course. What does this force?',
      options: ['The page becomes cacheable forever', 'The page must render per request', 'The page can stay purely static'],
      answer: 1,
      explanation: 'Reading request-specific data such as cookies makes the response depend on the visitor, so the page must render on every request instead of being reused from a static cache.'
    }
  ],
  'state-management-patterns': [
    {
      prompt: 'A fast-changing notification count and the signed-in user are both stored in one Context. Why does an unrelated header component re-render on every notification update?',
      options: ['Context re-renders every consumer when the Provider value changes, regardless of which field a component reads', 'React always re-renders the whole app on any state change', 'Notification counts are stored in a separate virtual DOM'],
      answer: 0,
      explanation: 'Every consumer of a Context re-renders whenever the value passed to its Provider changes, even if that consumer only reads an unrelated field.'
    },
    {
      prompt: 'Why is the list of courses in a catalog treated as server-cached state rather than plain client state?',
      options: ['Because it never changes after the app loads', 'Because its true value lives on a server and the browser only holds a copy that can go stale', 'Because it must be stored in a dedicated store like Redux'],
      answer: 1,
      explanation: 'Server-cached state is a client-side copy of data whose real source of truth is a server, which is why a query library handles its fetching, caching, and refetching.'
    }
  ],
  'web-performance-core-vitals': [
    {
      prompt: 'A hero image is set with CSS background-image and only becomes visible after four seconds. Which Core Web Vital does this most directly hurt?',
      options: ['CLS', 'LCP', 'INP'],
      answer: 1,
      explanation: 'LCP measures how long the largest visible element takes to render, and a late-discovered background image delays exactly that.'
    },
    {
      prompt: 'Clicking an "Enroll" button feels sluggish because a large synchronous filter runs inside the same click handler. Which metric does this affect, and what is a valid fix?',
      options: ['CLS; add width and height to images', 'INP; break up or defer the long task off the immediate click handler', 'LCP; preload the button font'],
      answer: 1,
      explanation: 'INP measures the delay between an interaction and the next visual update, and a long synchronous task on the main thread during that click is the direct cause.'
    }
  ],
  'accessible-interfaces': [
    {
      prompt: 'Why should an "Enroll" action be a real button element instead of a div with an onClick handler?',
      options: ['A div cannot have any CSS styling applied to it', 'A real button is focusable and activates with Enter and Space without extra code', 'Divs are not allowed inside a form'],
      answer: 1,
      explanation: 'A native button element already receives keyboard focus and responds to Enter and Space, which a div would need role, tabindex, and manual key handling to reproduce.'
    },
    {
      prompt: 'Why is placeholder text not an adequate substitute for a label element on an email input?',
      options: ['Placeholder text disappears once typing starts and is not reliably announced like a real label', 'Placeholder text is only visible to screen readers', 'Inputs cannot have placeholder text and a label at the same time'],
      answer: 0,
      explanation: 'Placeholder text vanishes as soon as the user types and many screen readers announce it differently from or not at all compared to a connected label.'
    }
  ],
  'frontend-testing-strategy': [
    {
      prompt: 'Where should a boundary case for a discount-calculation function, such as a discount larger than 100 percent, be tested?',
      options: ['In a Playwright end-to-end test', 'In a unit test, since it is pure logic with plain inputs and outputs', 'It does not need a dedicated test since the UI will show if it is wrong'],
      answer: 1,
      explanation: 'A unit test isolates the pure calculation and checks boundary conditions in milliseconds without needing a rendered component or a browser.'
    },
    {
      prompt: 'A Testing-Library test sometimes fails asserting that filtered results appear immediately after a keystroke. What is the likely cause and fix?',
      options: ['The component is broken and must be rewritten', 'A race condition against an asynchronous update; use an async query like findByText or waitFor', 'The test should be moved to a unit test instead'],
      answer: 1,
      explanation: 'Asserting before an asynchronous update has completed is a common source of flakiness, and Testing Library async utilities wait for the expected change instead of racing it.'
    }
  ],
  'auth-and-oauth-flows': [
    {
      prompt: 'Where should the exchange of an authorization code for an access token happen?',
      options: ['In browser JavaScript, right after the redirect', 'Server to server, using the client secret', 'Inside the consent screen itself'],
      answer: 1,
      explanation: 'The code exchange requires the client secret, which must never be exposed to the browser.'
    },
    {
      prompt: 'Why is storing an access token in localStorage risky?',
      options: ['localStorage has a size limit too small for tokens', 'Any script that runs on the page, including an injected one, can read it', 'localStorage only works over HTTP, not HTTPS'],
      answer: 1,
      explanation: 'Anything readable by page JavaScript can be read and exfiltrated by an injected or compromised script.'
    }
  ],
  'caching-strategies': [
    {
      prompt: 'What does a long Cache-Control max-age save that an ETag revalidation does not?',
      options: ['An entire round trip to the server', 'The database query itself', 'The TLS handshake only'],
      answer: 0,
      explanation: 'With a long max-age the browser does not contact the server again until it expires; ETag still asks every time.'
    },
    {
      prompt: 'Why combine a short TTL with explicit purge on writes?',
      options: ['TTL alone is illegal under HTTP', 'A missed purge self-heals once the TTL expires', 'Explicit purge removes the need for any cache'],
      answer: 1,
      explanation: 'The TTL acts as a safety net so a bug in the purge path does not leave stale data forever.'
    }
  ],
  'message-queues-async-work': [
    {
      prompt: 'Why should the enrollment request handler enqueue a job instead of sending the welcome email inline?',
      options: ['Emails cannot be sent from request handlers', 'A slow or failing email provider should not block or fail the enrollment request', 'Queues are required by HTTP'],
      answer: 1,
      explanation: 'Moving unpredictable, non-critical work off the request path keeps the response fast and resilient.'
    },
    {
      prompt: 'Why must a job handler be idempotent?',
      options: ['Because messages are always sent twice on purpose', 'Because redelivery after a crash can cause the same message to be processed more than once', 'Because queues discard messages after one attempt'],
      answer: 1,
      explanation: 'An unacknowledged message is redelivered, so the same handler run can happen more than once.'
    }
  ],
  'graphql-fundamentals': [
    {
      prompt: 'What causes the N+1 problem when listing courses with instructor names?',
      options: ['GraphQL forbids nested fields', 'Each course instructor resolver fires its own lookup by default, one per course', 'The schema does not allow lists'],
      answer: 1,
      explanation: 'Independent per-item resolvers each issue their own lookup unless batching is added.'
    },
    {
      prompt: 'When is a tailored REST endpoint still the simpler choice?',
      options: ['When many different clients need very different shapes of the same data', 'When one client needs one fixed, predictable shape that benefits from HTTP caching', 'When the server has no database'],
      answer: 1,
      explanation: 'A single stable shape is easy to cache and debug with ordinary HTTP tooling.'
    }
  ],
  'websockets-realtime': [
    {
      prompt: 'What HTTP status confirms a successful WebSocket upgrade?',
      options: ['200 OK', '101 Switching Protocols', '204 No Content'],
      answer: 1,
      explanation: 'The server responds with 101 to confirm the connection is switching to WebSocket framing.'
    },
    {
      prompt: 'Why use exponential backoff with jitter when reconnecting?',
      options: ['To guarantee messages are never lost', 'To avoid many clients retrying in lockstep and overwhelming a struggling server', 'Because WebSockets require a delay by specification'],
      answer: 1,
      explanation: 'Backoff with randomness spreads out reconnect attempts instead of hammering the server at once.'
    }
  ],
  'cicd-pipelines-in-depth': [
    {
      prompt: 'Why should lint and test stages run before the build stage?',
      options: ['So a broken change is caught before time is spent producing an artifact', 'Because build stages cannot report failures', 'Tests only work after an artifact exists'],
      answer: 0,
      explanation: 'Catching a failure before the build stage keeps the failure close to its cause and avoids wasting time on a doomed artifact.'
    },
    {
      prompt: 'What does re-deploying the previous tagged artifact accomplish?',
      options: ['It upgrades the database automatically', 'It provides a fast rollback to a known-good release', 'It deletes the failing pipeline run'],
      answer: 1,
      explanation: 'Keeping tagged artifacts around lets a rollback simply re-deploy the last known-good one.'
    }
  ],
  'docker-kubernetes-fundamentals': [
    {
      prompt: 'Why does a container start faster than a virtual machine?',
      options: ['It shares the host kernel instead of booting its own OS', 'It has no image', 'It always runs without a CPU limit'],
      answer: 0,
      explanation: 'A container reuses the host kernel and isolates a process, unlike a VM which boots a full operating system.'
    },
    {
      prompt: 'What does a Kubernetes service provide that talking to a pod directly does not?',
      options: ['A stable address that survives pods being recreated', 'Free storage for the pod', 'A guarantee the pod never crashes'],
      answer: 0,
      explanation: 'Pods get new addresses each time they are recreated, so a service supplies the stable, load-balanced address other components rely on.'
    }
  ],
  'monitoring-and-observability': [
    {
      prompt: 'Which pillar is best for finding which service in a request chain was slow?',
      options: ['Logs', 'Metrics', 'Traces'],
      answer: 2,
      explanation: 'A trace reconstructs one request across services as spans, showing exactly where the time went.'
    },
    {
      prompt: 'Why is "CPU above 80 percent" usually a weaker alert than "checkout error rate above 5 percent"?',
      options: ['CPU can never spike', 'A CPU spike may not affect any user, while a checkout error rate directly reflects user impact', 'Error rate cannot be measured'],
      answer: 1,
      explanation: 'Symptom-based alerts tied to user impact avoid paging on causes, like a batch job, that may not matter to users.'
    }
  ],
  'infrastructure-as-code': [
    {
      prompt: 'What does terraform plan do before you apply anything?',
      options: ['It applies changes silently', 'It previews exactly what would be created, changed, or destroyed', 'It deletes the state file'],
      answer: 1,
      explanation: 'Plan compares configuration and state against real infrastructure and shows the intended changes without making them.'
    },
    {
      prompt: 'What is configuration drift?',
      options: ['A planned Terraform upgrade', 'A mismatch between declared configuration and real infrastructure, often from a manual change', 'A faster way to apply changes'],
      answer: 1,
      explanation: 'Drift happens when reality diverges from the configuration, commonly after an emergency manual fix outside the normal workflow.'
    }
  ],
  'rate-limiting-and-scaling': [
    {
      prompt: 'What boundary problem does token bucket avoid compared to fixed window limiting?',
      options: ['A near-double burst of requests across a window reset', 'Slower response times', 'Incompatibility with HTTP'],
      answer: 0,
      explanation: 'Fixed window can allow a burst at the end of one window and another at the start of the next; token bucket has no reset instant.'
    },
    {
      prompt: 'Why must a rate limit counter be shared, such as in Redis, once a service scales horizontally?',
      options: ['A local per-instance counter would let a client get a separate quota per instance', 'Redis is required by HTTP', 'Local counters are always faster'],
      answer: 0,
      explanation: 'A load balancer spreads requests across instances, so a counter kept only in one instance\'s memory would not see requests routed elsewhere.'
    }
  ],
  'data-structures-essentials': [
    {
      prompt: 'Why does inserting an element in the middle of an array typically cost O(n)?',
      options: ['Because indexing an array is O(n)', 'Because every element after the insertion point must shift', 'Because arrays cannot hold more than one data type'],
      answer: 1,
      explanation: 'Keeping the array contiguous means shifting all later elements down to make room.'
    },
    {
      prompt: 'Which structure best supports instantly looking up one student record by ID?',
      options: ['A hash map', 'A stack', 'A linked list'],
      answer: 0,
      explanation: 'A hash map gives average O(1) lookup by key instead of scanning every record.'
    }
  ],
  'algorithms-and-big-o': [
    {
      prompt: 'What does Big-O notation primarily describe?',
      options: ['The exact number of seconds a program takes', 'How cost grows as the input size increases', 'Which programming language was used'],
      answer: 1,
      explanation: 'Big-O describes the shape of the growth curve, ignoring constant factors and hardware.'
    },
    {
      prompt: 'What turns an O(n^2) duplicate-removal function into an O(n) one?',
      options: ['Removing all loops entirely', 'Checking membership in a set instead of scanning a list each time', 'Switching from Python to another language'],
      answer: 1,
      explanation: 'A set gives O(1) average membership checks, so the loop no longer scans a growing list each iteration.'
    }
  ],
  'regular-expressions-practical': [
    {
      prompt: 'What is the key difference between a greedy and a lazy quantifier?',
      options: ['Greedy matches as much as possible; lazy matches as little as possible', 'Greedy only matches digits', 'Lazy quantifiers ignore character classes'],
      answer: 0,
      explanation: 'Greedy quantifiers expand to the largest match that still lets the pattern succeed; lazy ones stop at the smallest.'
    },
    {
      prompt: 'Why is a plain regex a poor tool for matching nested HTML tags?',
      options: ['Regex cannot contain angle bracket characters', 'Regex has no built-in way to track nesting depth', 'HTML tags are always too long for a regex to match'],
      answer: 1,
      explanation: 'A regex engine has no memory of how deep it is inside nested tags, unlike a parser that tracks nesting with a stack.'
    }
  ],
  'git-internals-and-plumbing': [
    {
      prompt: 'What does a Git blob object store?',
      options: ['A file\'s raw content, with no filename attached', 'A directory listing of names and modes', 'A commit message and its parent hashes'],
      answer: 0,
      explanation: 'A blob is pure content; the name and mode pairing live in a tree object instead.'
    },
    {
      prompt: 'What is a Git branch, at the object level?',
      options: ['A full copy of every file at that point in history', 'A small file containing one commit hash', 'A compressed tree object listing every file'],
      answer: 1,
      explanation: 'A branch is a ref: a small file under .git/refs/heads holding a single commit hash that moves forward on each commit.'
    }
  ],
  'free-developer-resources-communities': [
    {
      prompt: 'What should you check before starting work on an open-source pull request?',
      options: ['Nothing, just open the pull request', 'Its CONTRIBUTING file and any code of conduct', 'Whether the maintainer is currently online'],
      answer: 1,
      explanation: 'CONTRIBUTING.md states the expected workflow and review process, and skipping it is a common reason a first PR gets closed unreviewed.'
    },
    {
      prompt: 'Which is a stronger signal that a developer community is worth joining?',
      options: ['A channel dominated by self-promotion links', 'Replies that explain their reasoning rather than only pasting code', 'A very high total member count'],
      answer: 1,
      explanation: 'Explained reasoning suggests experienced, engaged members, while raw member count and link spam do not indicate quality.'
    }
  ]
};
