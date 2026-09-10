# نقطة الحفظ — with admin portal

Same site as before, but now it's built with a static site generator (Eleventy) so
reviews are managed through a private admin panel at `/admin` instead of you editing
HTML files by hand.

## How it works
- Your reviews live as small text files in `src/reviews/*.md`.
- Eleventy turns each one into a real page automatically (`/reviews/<name>.html`) and
  keeps the homepage + reviews list in sync — you never touch HTML again.
- The `/admin` page is a private form (title, genre, pros/cons, verdict, etc.) that
  writes directly to those files for you.
- Only people you invite can log in to `/admin`. It's not linked anywhere on the
  public site, and even if someone finds the URL, they can't do anything without an
  account you created.

## One-time setup (~15 minutes)

### 1. Put the code on GitHub
1. Create a free account at github.com if you don't have one.
2. Create a new **repository** (e.g. `save-point`), keep it **private or public**,
   either works.
3. Upload everything in this folder **except** `node_modules` and `_site` (those
   aren't included in your download anyway) — drag and drop works fine on GitHub's
   website, no command line needed.

### 2. Connect it to Netlify (free hosting + the admin backend)
1. Create a free account at **netlify.com**, sign in with GitHub.
2. "Add new site" → "Import an existing project" → pick your `save-point` repo.
3. Netlify will read `netlify.toml` automatically (build command + publish folder
   already set) — just click **Deploy**.
4. After a minute you'll get a live link like `random-name-123.netlify.app`
   (you can rename it for free in Site settings → Domain management).

### 3. Turn on the admin portal
1. In your Netlify site → **Identity** tab → **Enable Identity**.
2. Identity → **Registration** → set to **Invite only** (this is what keeps it
   closed to just you two — nobody can sign themselves up).
3. Identity → **Services** → **Enable Git Gateway** (this lets the admin form save
   directly to GitHub on your behalf).
4. Identity → **Invite users** → enter your email and your friend's email. You'll
   each get an email to set a password.

### 4. Use it
- Go to `yoursite.netlify.app/admin`, log in.
- Click "New Review," fill the form, hit **Publish**.
- Netlify rebuilds automatically (~1 minute) and the new review is live —
  on the homepage, the reviews page, and its own page.

## Editing locally (optional)
If you ever want to preview changes on your own computer before pushing:
```
npm install
npx eleventy --serve
```
Opens at `localhost:8080`. Note: `/admin` login only works on the real Netlify
site, not this local preview — that's normal, it needs Identity to check who you are.
