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
  ]
};
