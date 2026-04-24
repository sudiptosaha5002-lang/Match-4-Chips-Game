# 🎮 Match 4 Chips

> **A two-player Connect 4 strategy game with a hidden bomb twist!**

🔗 **Play Now →** [match4chipss.netlify.app](https://match4chipss.netlify.app/)

All age groups can play this game. Works on both **Desktop** & **Mobile** platforms.  
✅ Totally safe. 100% Trusted.

---

## 📖 Game Overview

**Match 4 Chips** is a two-player strategy board game inspired by the classic *Connect Four*. Players take turns dropping colored chips into a **7-column, 5-row** grid. The first player to connect **4 chips in a row** — horizontally, vertically, or diagonally — wins the game.

> ⚠️ **Hidden Bomb!** A secret bomb is randomly placed on the board at the start of each game. If a player drops their chip on the bomb cell, they **lose instantly** and their opponent wins!

---

## 🚀 How to Start

1. When the page loads, the game will **automatically prompt** you to enter details for both players.
2. If you close the prompts without finishing or want to change names later, click the **START** button.
3. **Enforced Setup:** You **must** complete the player details for both players before the board becomes active. If you try to click the board before setup, you will be reminded to click START.

| Prompt | What to Enter | Example |
|---|---|---|
| Player 1 Name | Any name | `Alice` |
| Player 1 Color | `red`, `blue`, `green`, `yellow`, or `pink` | `blue` |
| Player 2 Name | Any name | `Bob` |
| Player 2 Color | `red`, `blue`, `green`, `yellow`, or `pink` | `pink` |

4. After setup, the **START button** updates to show whose turn it is (e.g., `Alice Your Turn!!`).

> 💡 **Tip:** Choose **different colors** for each player so you can easily tell the chips apart on the board!

---

## 🕹️ How to Play

### Turn-by-Turn Gameplay

1. **Player 1 goes first.** Click any chip (circle) in the column where you want to drop your piece.
2. Your chip will **fall to the lowest available row** in that column — just like real gravity!
3. A **pop sound** 🔊 plays when your chip is placed.
4. The turn automatically switches to the other player.
5. The START button always displays **whose turn it is**.

### Board Layout

```
 Column:  1   2   3   4   5   6   7
        ┌───┬───┬───┬───┬───┬───┬───┐
 Row 1  │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │
        ├───┼───┼───┼───┼───┼───┼───┤
 Row 2  │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │
        ├───┼───┼───┼───┼───┼───┼───┤
 Row 3  │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │
        ├───┼───┼───┼───┼───┼───┼───┤
 Row 4  │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │
        ├───┼───┼───┼───┼───┼───┼───┤
 Row 5  │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │ ○ │
        └───┴───┴───┴───┴───┴───┴───┘
```

- **Gray circles** (○) = empty slots
- **Colored circles** = placed chips
- Chips always drop to the **bottom-most** empty slot in a column
- If a column is full, clicking it does nothing

---

## 🏆 How to Win

There are **three ways** to win:

### 1. Connect 4 in a Row

Line up **4 of your chips** consecutively in any direction:

| Direction | Example |
|---|---|
| **Horizontal** ➡️ | `🔵 🔵 🔵 🔵` across a row |
| **Vertical** ⬇️ | `🔵` stacked 4 high in a column |
| **Diagonal** ↗️↘️ | `🔵` in a diagonal line (either direction) |

When you connect 4, an alert announces: **"🎉 [Your Name] WON THE GAME!"**

### 2. 💥 Opponent Hits the Bomb

A **hidden bomb** is secretly placed on a random cell at the start. If your opponent drops their chip on that cell — **BOOM!** — they lose and you win automatically.

An alert announces: **"💥 BOOM! Bomb hit! [Your Name] WINS THE GAME!"**

> 📝 The bomb location is completely random and invisible to both players. There's no way to know where it is — it's pure luck (or misfortune)!

---

## 🔄 Restarting the Game

1. Click the **RESTART** button at any time.
2. A confirmation dialog asks: *"Do you want to play again?"*
   - **OK** → The board clears and resets. The game will automatically prompt you for new names.
   - **Cancel** → A "Thanks for playing!" message appears.

---

## 📋 Quick Reference

| Action | How |
|---|---|
| Start a new game | Click **START** → enter names & colors |
| Drop a chip | Click any circle in your desired column |
| Check whose turn | Look at the **START** button text |
| Restart | Click **RESTART** → confirm |

---

## 🧠 Strategy Tips

1. **Control the center** — Chips in columns 3, 4, and 5 give you more connection options in all directions.
2. **Think ahead** — Don't just focus on your own line; watch what your opponent is building and block them!
3. **Build multiple threats** — Try to create a situation where you have two ways to win simultaneously. Your opponent can only block one!
4. **Watch the columns** — A full column can't accept more chips. Use this to force your opponent into unfavorable positions.
5. **The bomb is random** — Don't stress about it. Focus on solid Connect 4 strategy and let luck handle the rest.

---

## 🛠️ Tech Stack

- **HTML5** — Game structure
- **CSS3** — Cyberpunk-themed responsive styling
- **JavaScript + jQuery** — Game logic & interactions
- **Canvas API** — Animated background

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

*Have fun and may the best strategist win! 🎯*
