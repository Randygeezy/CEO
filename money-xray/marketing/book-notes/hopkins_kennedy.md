# Hopkins + Kennedy notes for Money X-Ray

Hopkins, *Scientific Advertising* (Galletti edition, printed page "p"). Kennedy, *Reason Why Advertising* (author confirmed; no page numbers, so "pdf p"). Test facts: `money-xray/test-runs/`, answer key.

## 1. Core principles

**Salesmanship in print.** Both books open on the same idea: an ad is a salesman multiplied, and it is judged only by sales at a known cost (Hopkins p8-9; Kennedy pdf p3-4, p7). Hopkins' test for any idea: would this help a salesman facing the buyer? Cleverness and fine writing fail it (p9-11). Write to one typical buyer; don't joke, since "money spending is a serious matter" (p12). Kennedy: lose 400,000 readers who don't want hay; convince the 500 who do (pdf p10-11).

**Reason-why copy (Kennedy).** Brilliance without conviction sells nothing (pdf p18). Give reasons the shrewd, "show me" average buyer can follow without effort (pdf p6). Fit the voice to the class you sell to, the "responsive chord"; the same logic in the wrong voice loses 25-50% (pdf p8-9). A buyer convinced in advance finds the qualities you named and rebuys (pdf p23).

**Specificity (Hopkins ch. 7, p40-44).** Superlatives get discounted; a specific claim is either true or a lie, so people believe it. "Our net profit is 3 percent" beat "Lowest prices in America" (p41-42). Have an authority check every factual claim (p66).

**Offer service (ch. 3, p14-17).** Readers are selfish. The best ads ask no one to buy; they offer information or a risk-free way to prove the claim.

**Samples (ch. 13, p73-80).** The product is its own best salesman (p73). A sample earns the word "Free," gets action, captures a name for follow-up, and keys the ad (p73-75). Don't charge for it (p75-76). Give samples only to people who read your story and made some effort to ask (p79). But don't give the full product away: a food maker who gave his package free cheapened it (p36).

**Keyed tracking and testing.** Hopkins: every ad keyed, judged on cost per customer, not cost per reply (p3-4); test campaigns let "the thousands decide what the millions will do" (p88); one plan out of 50 cut selling cost 75% (p91). Kennedy is the procedure: a different reply address per ad per publication (pdf p25), split the copy across publications, cross it over the next month, use the same follow-up, then compare cost per inquiry and sales rate (pdf p25-26). Same $5 product: inquiries at $14.20 or 41 cents, depending on copy (pdf p20-21).

**Headlines (ch. 5, p26-31).** The headline's only job is to pick out the right people ("Hey there, Bill Jones," p26). A headline change alone often moves returns 5-10x (p29). Run several appeals (p30).

**Psychology (ch. 6, p32-39).** Curiosity is strong (p32); cheapness is weak and people judge by price (p33); "try it, pay later" beats "money back" (p34); confidence ("Try our rivals too") beats warnings (p36); a trusted named persona wins, so keep one voice (p37-38, p97-99). Be positive: show the good result, not the problem; positive ads outpulled negative ones 4 to 1, and never attack rivals (ch. 18, p100-101).

**Brief vs complete.** Hopkins: "The more you tell the more you sell" (p22). Tell the whole story in every ad, since a reader usually reads once (p45-47). Length has no fixed rule, but the story must be reasonably complete (p47). Kennedy: repeat one convincing ad 50 times rather than run 50 clever ones (pdf p18).

**The "preemptive claim."** Neither book uses the term (later writers named it). Its source is Hopkins' beer story (p43): every brewer steamed bottles and filtered water, but the one who first told the public how owned the claim. Ordinary facts, told first and specifically, become yours.

## 2. Applications to Money X-Ray

**Reasons why it works** (each tied to a test fact; the test is a fictional average US household):
1. *It proves its math before it talks.* Every account balanced to $0.00 (5/5 in each code run; 3/3 and 2/2 on the simulated free-plan runs).
2. *It catches what you'd miss.* 14 of 14 planted traps found: export duplicates, a possible double charge, a new $12 fee, a price rise, an unknown charge.
3. *It knows a duplicate from a double charge.* It removed 3 export duplicates (keeping them would have put the Visa $51.44 off) and kept the real DoorDash double charge flagged for the bank.
4. *It finds the leaks.* $340 in fees and interest in 3 months; 4 video plus 2 music services; Netflix $15.49 to $17.99; an unknown $45/month (SQ *JMK LLC).
5. *It notices what's missing.* $175/month going to a Discover card nobody uploaded; it asks for the statement instead of guessing.
6. *It tells you the truth.* When the chosen cuts saved $30 against a $300 goal, the report said so.
7. *It makes a plan.* Reference calculator: debt-free in 23 months instead of 62 on minimums, $5,495.67 less interest.
8. *Free plans work.* Hand math, no code, matched to the cent (simulated).
9. *No bank linking, no subscription.*

**A free sample.** Hopkins' rules applied to a digital product: a real piece of the product, asked for after reading the pitch, with a small effort (an email address works as his coupon), never the full product. Option A, the best fit: a "Subscription & Fee Finder" mini-prompt for one statement, which finds recurring charges, price rises and fees, then names what the full audit adds (balance check, all accounts, debt plan). Option B: the fictional family's sample report. Deliver as a Stan lead magnet; follow up on the same argument (p104).

**Key every channel.**
- Separate Stan link or product per channel (YouTube long-form, Shorts, Reels, email, bio). Add UTM tags per video (`utm_source=youtube&utm_medium=short&utm_content=v014`). Check whether Stan's analytics reads UTMs; if it doesn't, use separate products or links.
- Code per video only if Stan allows a code with no discount (confirm). Otherwise add one checkout question, "Which video sent you?"
- Judge on sales per 1,000 views and per click, not views (p4).

**A preemptive claim we can own honestly:** "Every account is balance-checked to $0.00 before you see a single finding." Any careful audit reconciles, but nobody says it, and it answers the real doubt: "can I trust AI math?" Wording must stay honest: the prompt makes the AI reconcile and say plainly when an account doesn't balance; it is not a promise of zero errors.

## 3. Draft copy

### Reason-why sales section (about 300 words)

**Why Money X-Ray finds what budgeting apps miss**

You earn real money, and by the 25th it's gone. Most tools show you a pie chart. Money X-Ray checks the math first.

**It balances every account to $0.00 before it tells you anything.** It starts with your statement's opening balance, adds every deposit, subtracts every charge, and has to land on the closing balance. If it doesn't, it stops and tells you why. In our test on an average American family's three months of statements, all five accounts balanced to the cent.

**It catches the traps.** We hid 14 problems in that family's statements. It found all 14: three duplicate rows from a bank export (left in, they would have put the Visa $51.44 off), a DoorDash order charged twice, a new $12 monthly bank fee, Netflix going from $15.49 to $17.99, and a $45 monthly charge nobody could name.

**It finds where the money really goes.** That family had about $1,500 a month left over on paper. It was piling up in checking while the Visa balance grew, and they paid $340 in fees and interest in three months. They had four video services and two music services. They were also paying $175 a month toward a Discover card they'd forgotten to mention.

**It tells you the truth.** When their planned cuts saved $30 a month against a $300 goal, the report said so.

**It builds your way out.** Its debt plan compares avalanche and snowball for you. For our test family the plan meant debt-free in 23 months instead of 62, with about $5,500 less interest. (That assumes $300 a month extra and one lump sum. Your numbers will differ.)

**No app. No bank login. No monthly fee.** Paste one prompt into the ChatGPT, Claude or Gemini you already use. Free plans work.

*The test family is fictional and built from government spending averages. Educational, not financial advice. AI can make mistakes, so check anything you act on.*

### Six headlines
1. Your Statements, Balanced to $0.00. Then We Show You Where the Money Went.
2. We Hid 14 Money Leaks in a Family's Statements. Money X-Ray Found All 14.
3. $1,500 a Month Left Over, and the Visa Still Grew. Here's Where It Went.
4. $340 in Fees and Interest in 3 Months, Found in One AI Chat.
5. Debt-Free in 23 Months Instead of 62: See the Plan Built From Real Statements.
6. Earn Good Money but Broke by the 25th? Find Out Why in One Chat, Without Linking Your Bank.

### Testing plan

| # | Variable | A (control) | B | Key | Metric | Decide when |
|---|---|---|---|---|---|---|
| 1 | Store headline | #1 balance-checked | #2 14 of 14 | Two Stan links, same video traffic split by week | Sales per 100 page visits | About 300 visits per arm, then cross over (Kennedy pdf p25) |
| 2 | Shorts hook | Problem ("broke by the 25th") | Specific find ("$45 charge nobody knew") | UTM `utm_content` per video | Clicks and sales per 1,000 views | 5+ videos per hook |
| 3 | Sample vs straight sale | Direct buy link | Free Fee Finder, then email follow-up | Separate Stan products | Sales per 1,000 views at 14 days | 2 weeks each, swapped |
| 4 | Sample type | Fee Finder | Sample report | Separate lead magnets | Opt-in to sale | 200 opt-ins each |
| 5 | Copy length | Short page | Full reason-why page | Two links | Sales per visit, refund rate | 300 visits each |
| 6 | Price | Price X | Price Y | Separate products, time-split | Revenue per visit (not sales count) | Run after 1-5 |

One change at a time; a handful of sales decides nothing, so cross the arms over before calling a winner.

## 4. Warnings

- **Fix the numbers before any copy goes out.** The answer key and the brief say the Visa costs "about $122 every month." The statements and every test run show $58.84-$63.11 (about $61/month; $184 in 3 months). The $340 fees+interest total is consistent. Debt: 23 vs 62 months and $5,495.67 less come from the reference calculator ($2,587.08 lump sum). One blind run got 22 months with a different lump sum. One source per figure (Hopkins' "censor," p66).
- **Label the demo.** Specific numbers hit hard, which is exactly why a reader will take them as a promise. Say the family is fictional, results vary, and the 14 traps were planted by us. Never imply savings, accuracy or debt-free dates for the buyer.
- **No fake urgency.** Hopkins recommends expiring offers (p105); use one only if real, and honor it.
- **No invented authority** (Hopkins' "we paid $100,000" device, p33): true facts only; the real founder is the persona.
- **Don't hide weak points.** Kennedy advises "subtly masking the bad ones" (pdf p8). That clashes with our rules. State the limits: on free plans, no exact total interest or debt-free date; PDFs and messy statements are less tested; AI can err; your statements go to your own AI provider.
- **A guarantee covers the money, not the outcome.** Hopkins' "try it, pay later" (p34) can't work for an instant download. A plain refund policy is fine. A guarantee of savings is not.
- **Don't knock rivals by name** (p100); factual contrasts are fine.
- **Long copy on phones.** Tell the full story, but stacked: headline, proof, bold-led reasons.
- **Lead with the cure** (prevention sells poorly, p59-60): "find where it went," not "avoid future debt."
- **Redact** names, account numbers and identifiers in anything made from the founder's real statements (stated preference).
