# Pasar Malam — Cari Bedanya!

[![Make.fun bounty entry](https://make.fun/badge.svg?competition=best-spot-the-difference-game-20261121-0451)](https://make.fun/bounties/best-spot-the-difference-game-20261121-0451)

A cozy spot-the-difference game set across three Indonesian scenes: a lively night market, a sunny garden, and a tropical beach. Find seven small changes in each pair of hand-drawn Canvas pictures. Click either panel or use the keyboard; hints pulse a remaining difference, and tiny WebAudio tones reward finds and mark misses.

## Run it

Open game/index.html in a desktop browser, or serve the game/ directory locally and open its index.html. The game uses classic JavaScript and local Canvas and WebAudio APIs, with no network assets.

## Screenshots

The screenshots are captured from the running game in headless Chromium through Playwright at 1280×720. URL parameters set the scene and found markers for repeatable cover, garden, and victory states. Run node capture.cjs in an environment with Playwright and Chromium installed.
