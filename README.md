# POPRUS: Shadow Quest — Ultimate Edition

A mobile-first action/adventure game prototype featuring the creator's supplied photos as in-game artwork.

## Included
- Main menu and story
- Touch movement
- Coins and energy crystals
- Enemy encounters and attack button
- Fortress mission goal
- Victory screen
- Progressive Web App files
- Ready to host on GitHub Pages or Cloudflare Pages

## To put online
1. Create a GitHub repository named `poprus-shadow-quest`.
2. Upload all files in this project.
3. Deploy with Cloudflare Pages or GitHub Pages.

## To make an Android Play Store app
Use this project as the web front-end, then wrap it with Capacitor:
- `npm create @capacitor/app`
- copy these web files into the web directory
- `npx cap add android`
- `npx cap sync`
- open/build with Android Studio
- generate a signed `.aab` for Google Play

The Android build and Play Store publishing require the relevant developer tools and account.
