# Money X-Ray on Shopify (PERSIMO store)

- Product: "Money X-Ray" (handle `money-x-ray`), $27, digital (no shipping), created as a **draft**.
- Page template: `product.money-x-ray.json` in the live theme "Faceless Video Maker - product page", a copy of
  the video maker's template rewritten for Money X-Ray, with its own buy button snippet `mx-buy.liquid`.
  Section order follows the Miro board's hero and carousel rules.
- Carousel (9 images, board order): offer, before/after, key benefits, how it works, $0.00 Check (logical
  evidence), us vs them, inside the guide, inside the Action Kit, everything in one download (with guarantee).
- Page images in store Files: mx-s1-problem, mx-s2-report, mx-s3-tested, mx-look-guide, mx-sample, mx-kit.
- `images/` holds every uploaded image; `make_images.cjs` rebuilds them from rendered guide and kit pages.
  All numbers are the fictional test family's; no image uses a screenshot from a real account.

## Money X-Ray theme (unpublished copy of the live theme, in Money X-Ray colors)
- Theme "Money X-Ray": cream #f3efe9, ink #161514, green #1f7a5a buttons, light-green alternate sections,
  "Money X-Ray" wordmark logo (mx-logo.png), Money X-Ray home page, top bar and footer.
- Product page sections added from the buyer review: privacy ("Your statements stay yours"), a 20-second
  walkthrough video (mx-demo.mp4, an illustration with the fictional household), "Isn't this just asking
  ChatGPT?", and the founder story. Reviews still need real buyers.
- `make_demo.cjs` renders the walkthrough frames and the logo; join frames with ffmpeg xfade (3.6 s each).
