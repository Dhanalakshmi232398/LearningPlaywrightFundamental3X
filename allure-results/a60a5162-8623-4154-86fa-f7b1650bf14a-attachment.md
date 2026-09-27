# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task2.spec.ts >> Verifying DSLR details in Flipkart
- Location: tests\07_WebTables\26Sept_Task2.spec.ts:25:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has(span)').filter({ hasText: 'Next' })
    - locator resolved to <a class="jgg0SZ" href="/search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic [ref=f2e7]:
    - generic [ref=f2e9]:
      - link [ref=f2e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f2e11]
      - link "Explore Plus" [ref=f2e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f2e16]:
      - textbox "Search for products, brands and more" [ref=f2e18]: DSLR Camera
      - button [ref=f2e19] [cursor=pointer]
    - link "Login" [ref=f2e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D6
    - link "Become a Seller" [ref=f2e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f2e32]: More
    - link "Cart" [ref=f2e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f2e50]:
    - generic [ref=f2e51] [cursor=pointer]: Electronics
    - generic [ref=f2e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f2e57] [cursor=pointer]: Men
    - generic [ref=f2e60] [cursor=pointer]: Women
    - generic [ref=f2e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f2e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f2e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f2e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f2e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f2e74]:
    - generic [ref=f2e75]:
      - generic [ref=f2e77]:
        - generic [ref=f2e79]:
          - generic [ref=f2e80]: Filters
          - generic [ref=f2e84]:
            - generic [ref=f2e85]: CATEGORIES
            - generic [ref=f2e87]:
              - img [ref=f2e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f2e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f2e93]:
              - img [ref=f2e95] [cursor=pointer]
              - link "Cameras" [ref=f2e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f2e99]:
              - img [ref=f2e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f2e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f2e104]: Brand
          - generic [ref=f2e109]:
            - generic [ref=f2e110]: Price
            - generic [ref=f2e118]:
              - generic [ref=f2e119] [cursor=pointer]
              - generic [ref=f2e126]:
                - generic [ref=f2e127]: .
                - generic [ref=f2e128]: .
                - generic [ref=f2e129]: .
                - generic [ref=f2e130]: .
                - generic [ref=f2e131]: .
                - generic [ref=f2e132]: .
                - generic: .
            - generic [ref=f2e133]:
              - combobox [ref=f2e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f2e136]: to
              - combobox [ref=f2e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f2e139]: Video Resolution
          - generic [ref=f2e144]:
            - generic [ref=f2e145] [cursor=pointer]: Customer Ratings
            - generic [ref=f2e150]:
              - generic "4★ & above" [ref=f2e151] [cursor=pointer]
              - generic "3★ & above" [ref=f2e156] [cursor=pointer]
              - generic "2★ & above" [ref=f2e161] [cursor=pointer]
              - generic "1★ & above" [ref=f2e166] [cursor=pointer]
          - generic [ref=f2e171]: Lens Mount
          - generic [ref=f2e176]: Mega Pixel
          - generic [ref=f2e181]: Effective Pixels
          - generic [ref=f2e186]: Sensor Size
          - generic [ref=f2e191]: Shutter Speed
          - generic [ref=f2e196]: Type
          - generic [ref=f2e201]: Color
          - generic [ref=f2e206]: Discount
          - generic [ref=f2e211]:
            - generic [ref=f2e212] [cursor=pointer]
            - generic [ref=f2e217]: "?"
          - generic [ref=f2e219]: Number of Lens
          - generic [ref=f2e224]: FPS in Burst Mode
          - generic [ref=f2e229]: Country Of Origin
          - generic [ref=f2e234]:
            - generic [ref=f2e235] [cursor=pointer]: Offers
            - generic [ref=f2e240]:
              - generic "Buy More, Save More" [ref=f2e241] [cursor=pointer]
              - generic "Special Price" [ref=f2e246] [cursor=pointer]
          - generic [ref=f2e251]: Maximum ISO
          - generic [ref=f2e256]: Maximum Shutter Speed
          - generic [ref=f2e261]: Availability
          - generic [ref=f2e266]: GST Invoice Available
          - generic [ref=f2e271]: Features
        - link "Need help? Help me decide Buying Guide" [ref=f2e277] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f2e278]: Need help?
          - generic [ref=f2e279]: Help me decide
          - img "Buying Guide" [ref=f2e282]
      - generic [ref=f2e283]:
        - generic [ref=f2e286]:
          - generic [ref=f2e287]:
            - link "Home" [ref=f2e289] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f2e293] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f2e297] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f2e301] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f2e302]: Showing 121 – 120 of 120 results for "DSLR Camera"
          - generic [ref=f2e303]:
            - generic [ref=f2e304]: Sort By
            - generic [ref=f2e305]: Relevance
            - generic [ref=f2e306] [cursor=pointer]: Popularity
            - generic [ref=f2e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f2e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f2e309] [cursor=pointer]: Newest First
        - generic [ref=f2e312]:
          - generic [ref=f2e313]: Page 6 of 5
          - navigation [ref=f2e314]:
            - link "Previous" [ref=f2e315] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "1" [ref=f2e316] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f2e317] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f2e318] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f2e319] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f2e320] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
    - generic [ref=f2e322]:
      - generic [ref=f2e323]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f2e324]:
        - generic [ref=f2e325]:
          - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera" [ref=f2e328]
          - generic [ref=f2e329]:
            - link "1. BuyLuxe Mini Digital Camera... 3.3 60 Ratings&5 Reviews ₹538 73% off" [ref=f2e330] [cursor=pointer]:
              - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e331]: 1. BuyLuxe Mini Digital Camera...
              - generic [ref=f2e333]:
                - generic [ref=f2e334]: "3.3"
                - generic [ref=f2e336]:
                  - text: 60 Ratings
                  - generic [ref=f2e337]: "&5 Reviews"
              - generic [ref=f2e339]:
                - generic [ref=f2e340]: ₹538
                - generic [ref=f2e341]: 73% off
            - list [ref=f2e342]:
              - listitem [ref=f2e343]: "Effective Pixels: 13 MP"
              - listitem [ref=f2e344]: "Optical Zoom: 0"
              - listitem [ref=f2e345]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f2e346]:
          - generic [ref=f2e347]: Most Helpful Review
          - generic [ref=f2e349]:
            - generic [ref=f2e350]:
              - generic [ref=f2e351]: "3"
              - paragraph [ref=f2e353]: Decent product
            - generic [ref=f2e354]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e359]:
              - paragraph [ref=f2e360]: Flipkart Customer
              - paragraph [ref=f2e365]: Certified Buyer
              - paragraph [ref=f2e366]: 4 months ago
        - generic [ref=f2e367]:
          - generic [ref=f2e368]: Recent Review
          - generic [ref=f2e370]:
            - generic [ref=f2e371]:
              - generic [ref=f2e372]: "3"
              - paragraph [ref=f2e374]: Decent product
            - generic [ref=f2e375]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e380]:
              - paragraph [ref=f2e381]: Flipkart Customer
              - paragraph [ref=f2e386]: Certified Buyer
              - paragraph [ref=f2e387]: 4 months ago
      - generic [ref=f2e388]:
        - generic [ref=f2e389]:
          - img "NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR Lens" [ref=f2e392]
          - generic [ref=f2e393]:
            - link "2. NIKON Z30 Mirrorless Camera... 4.3 158 Ratings&15 Reviews ₹70,999 3% off" [ref=f2e394] [cursor=pointer]:
              - /url: /nikon-z30-mirrorless-camera-z-dx-16-50-mm-f-3-5-6-3-vr-lens/p/itm63022ba3d2150?pid=DLLGGYSTMHSSXFZR&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e395]: 2. NIKON Z30 Mirrorless Camera...
              - generic [ref=f2e397]:
                - generic [ref=f2e398]: "4.3"
                - generic [ref=f2e400]:
                  - text: 158 Ratings
                  - generic [ref=f2e401]: "&15 Reviews"
              - generic [ref=f2e403]:
                - generic [ref=f2e404]: ₹70,999
                - generic [ref=f2e405]: 3% off
            - list [ref=f2e406]:
              - listitem [ref=f2e407]: 4K UHD video with 100% Angle view, 20 types of creative picture control, Compact Content Creation., Personalised Performance, Twist And Touch., Fuss-Free Focus., Eye-Detection AF & Animal-Detection AF / AF-F., SnapBridge, NX Studio, Webcam Utility, Wi-Fi Compatibility
              - listitem [ref=f2e408]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f2e409]: "Sensor Type: CMOS"
        - generic [ref=f2e410]:
          - generic [ref=f2e411]: Most Helpful Review
          - generic [ref=f2e413]:
            - generic [ref=f2e414]:
              - generic [ref=f2e415]: "4"
              - paragraph [ref=f2e417]: Pretty good
            - generic [ref=f2e420]:
              - generic [ref=f2e421]: Good camera,, good build quality, grip is comfortable, gives extensive manual control, the kit lens quality is actually good for the price, sensor and nikon'...
              - generic [ref=f2e422] [cursor=pointer]: Read full review
            - generic [ref=f2e424]:
              - paragraph [ref=f2e425]: Shankha Pal
              - paragraph [ref=f2e430]: Certified Buyer
              - paragraph [ref=f2e431]: Nov, 2023
        - generic [ref=f2e432]:
          - generic [ref=f2e433]: Recent Review
          - generic [ref=f2e435]:
            - generic [ref=f2e436]:
              - generic [ref=f2e437]: "5"
              - paragraph [ref=f2e439]: Terrific
            - generic [ref=f2e440]: Nice camera best in price range
            - generic [ref=f2e445]:
              - paragraph [ref=f2e446]: Somu Maurya
              - paragraph [ref=f2e451]: Certified Buyer
              - paragraph [ref=f2e452]: 5 months ago
      - generic [ref=f2e453]:
        - generic [ref=f2e454]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f2e457]
          - generic [ref=f2e458]:
            - link "3. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f2e459] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e460]: 3. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f2e462]:
                - generic [ref=f2e463]: "4.1"
                - generic [ref=f2e465]:
                  - text: 21 Ratings
                  - generic [ref=f2e466]: "&6 Reviews"
              - generic [ref=f2e468]:
                - generic [ref=f2e469]: ₹1,09,999
                - generic [ref=f2e470]: 11% off
            - list [ref=f2e471]:
              - listitem [ref=f2e472]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f2e473]: "Sensor Type: CMOS"
              - listitem [ref=f2e474]: Full HD
        - generic [ref=f2e475]:
          - generic [ref=f2e476]: Most Helpful Review
          - generic [ref=f2e478]:
            - generic [ref=f2e479]:
              - generic [ref=f2e480]: "5"
              - paragraph [ref=f2e482]: Shubham sanjay khanvilkar
            - generic [ref=f2e483]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f2e488]:
              - paragraph [ref=f2e489]: Shubham sanjay khanvilkar
              - paragraph [ref=f2e490]: Apr, 2016
        - generic [ref=f2e491]:
          - generic [ref=f2e492]: Recent Review
          - generic [ref=f2e494]:
            - generic [ref=f2e495]:
              - generic [ref=f2e496]: "5"
              - paragraph [ref=f2e498]: Brilliant
            - generic [ref=f2e499]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f2e504]:
              - paragraph [ref=f2e505]: Avijit Dasgupta
              - paragraph [ref=f2e510]: Certified Buyer
              - paragraph [ref=f2e511]: Oct, 2018
      - generic [ref=f2e512]:
        - generic [ref=f2e513]:
          - img "Canon EOS R8 Body Mirrorless Camera Body Only" [ref=f2e516]
          - generic [ref=f2e517]:
            - link "4. Canon EOS R8 Body Mirrorles... 4.6 68 Ratings&8 Reviews ₹1,14,990 19% off" [ref=f2e518] [cursor=pointer]:
              - /url: /canon-eos-r8-body-mirrorless-camera-only/p/itm950a990720df3?pid=DLLGQAQYC4TWGN8R&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e519]: 4. Canon EOS R8 Body Mirrorles...
              - generic [ref=f2e521]:
                - generic [ref=f2e522]: "4.6"
                - generic [ref=f2e524]:
                  - text: 68 Ratings
                  - generic [ref=f2e525]: "&8 Reviews"
              - generic [ref=f2e527]:
                - generic [ref=f2e528]: ₹1,14,990
                - generic [ref=f2e529]: 19% off
            - list [ref=f2e530]:
              - listitem [ref=f2e531]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e532]: "Sensor Type: CMOS"
              - listitem [ref=f2e533]: WiFi Available
        - generic [ref=f2e534]:
          - generic [ref=f2e535]: Most Helpful Review
          - generic [ref=f2e537]:
            - generic [ref=f2e538]:
              - generic [ref=f2e539]: "4"
              - paragraph [ref=f2e541]: Nice product
            - generic [ref=f2e542]: Best cameraCons1. Battery backup is very less2. Heating problem3. No bag included
            - generic [ref=f2e547]:
              - paragraph [ref=f2e548]: syed rahim
              - paragraph [ref=f2e553]: Certified Buyer
              - paragraph [ref=f2e554]: Jul, 2024
        - generic [ref=f2e555]:
          - generic [ref=f2e556]: Recent Review
          - generic [ref=f2e558]:
            - generic [ref=f2e559]:
              - generic [ref=f2e560]: "5"
              - paragraph [ref=f2e562]: Just wow!
            - generic [ref=f2e563]: This was a good camera and I got it for a good price in a sale the package was sealed and was delivered 2 days before the promised delivery date.
            - generic [ref=f2e568]:
              - paragraph [ref=f2e569]: Professor Sathian J.D
              - paragraph [ref=f2e574]: Certified Buyer
              - paragraph [ref=f2e575]: Nov, 2024
      - generic [ref=f2e576]:
        - generic [ref=f2e577]:
          - img "SONY Alpha ILCE-6400M/B IN5 Mirrorless Camera with 18-135 mm Zoom Lens Featuring Eye AF and 4K movie recording" [ref=f2e580]
          - generic [ref=f2e581]:
            - link "5. SONY Alpha ILCE-6400M/B IN5... 4.6 1,282 Ratings&153 Reviews ₹87,490 24% off" [ref=f2e582] [cursor=pointer]:
              - /url: /sony-alpha-ilce-6400m-b-in5-mirrorless-camera-18-135-mm-zoom-lens-featuring-eye-af-4k-movie-recording/p/itm8bb8f94012e57?pid=DLLFDJ8AHYXPQKRG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e583]: 5. SONY Alpha ILCE-6400M/B IN5...
              - generic [ref=f2e585]:
                - generic [ref=f2e586]: "4.6"
                - generic [ref=f2e588]:
                  - text: 1,282 Ratings
                  - generic [ref=f2e589]: "&153 Reviews"
              - generic [ref=f2e591]:
                - generic [ref=f2e592]: ₹87,490
                - generic [ref=f2e593]: 24% off
            - list [ref=f2e594]:
              - listitem [ref=f2e595]: 4K movies and pro-level features, Natural-looking images that match what you see, Cleaner images even in dim light, Creative movie production, High-resolution 4K recording, Create time-lapse movies, Vlog with useful features, Take advantage of various movie functions, A high resolution LCD monitor with handy touchscreen functions, Incredible image quality, Sophisticated eye recognition and tracking, Persistent tracking ability, High speed continuous shooting with AF/AE tracking, Bluetooth & NFC, Touch Screen
              - listitem [ref=f2e596]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e597]: "Sensor Type: CMOS"
        - generic [ref=f2e598]:
          - generic [ref=f2e599]: Most Helpful Review
          - generic [ref=f2e601]:
            - generic [ref=f2e602]:
              - generic [ref=f2e603]: "5"
              - paragraph [ref=f2e605]: Classy product
            - generic [ref=f2e608]:
              - generic [ref=f2e609]: As you know without lenses cameras are nothing. And Sony lenses are very expensive. It's not just a beginner level camera, its more than that, so if you are...
              - generic [ref=f2e610] [cursor=pointer]: Read full review
            - generic [ref=f2e612]:
              - paragraph [ref=f2e613]: Sachin Kumar Jha
              - paragraph [ref=f2e618]: Certified Buyer
              - paragraph [ref=f2e619]: Jul, 2020
        - generic [ref=f2e620]:
          - generic [ref=f2e621]: Recent Review
          - generic [ref=f2e623]:
            - generic [ref=f2e624]:
              - generic [ref=f2e625]: "4"
              - paragraph [ref=f2e627]: Delightful
            - generic [ref=f2e628]: Great quality with 18-135mm lens,If there was video stabilization as well, this camera+lens combo would have been perfect.
            - generic [ref=f2e633]:
              - paragraph [ref=f2e634]: Vivek Kumar
              - paragraph [ref=f2e639]: Certified Buyer
              - paragraph [ref=f2e640]: 5 days ago
  - contentinfo [ref=f2e641]:
    - generic [ref=f2e643]:
      - generic [ref=f2e644]:
        - generic [ref=f2e645]:
          - generic [ref=f2e646]: ABOUT
          - link "Contact Us" [ref=f2e647] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f2e648] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f2e649] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f2e650] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f2e651] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f2e652] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f2e653]:
          - generic [ref=f2e654]: GROUP COMPANIES
          - link "Myntra" [ref=f2e655] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f2e656] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f2e657] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f2e658]:
          - generic [ref=f2e659]: HELP
          - link "Payments" [ref=f2e660] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f2e661] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f2e662] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f2e663] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f2e664]:
          - generic [ref=f2e665]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f2e666] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f2e667] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f2e668] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f2e669] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f2e670] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f2e671] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f2e672] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f2e673] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f2e675]:
          - generic [ref=f2e676]: "Mail Us:"
          - generic [ref=f2e679]:
            - paragraph [ref=f2e680]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e681]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e682]: Clove Embassy Tech Village,
            - paragraph [ref=f2e683]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e684]: Bengaluru, 560103,
            - paragraph [ref=f2e685]: Karnataka, India
          - generic [ref=f2e686]: Social
          - generic [ref=f2e687]:
            - link [ref=f2e689] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f2e692] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f2e695] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f2e698] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f2e701]:
          - generic [ref=f2e702]: "Registered Office Address:"
          - generic [ref=f2e705]:
            - paragraph [ref=f2e706]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e707]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e708]: Clove Embassy Tech Village,
            - paragraph [ref=f2e709]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e710]: Bengaluru, 560103,
            - paragraph [ref=f2e711]: Karnataka, India
            - paragraph [ref=f2e712]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f2e713]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f2e714] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f2e715] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f2e717]:
        - link "Become a Seller" [ref=f2e720] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f2e721]: Advertise
        - link "Gift Cards" [ref=f2e725] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f2e728] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f2e729]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1   | import {test, expect, Page, Locator} from '@playwright/test';
  2   | 
  3   | 
  4   | async function dslrNamePrice(page: Page, name: string): Promise<{ items: Locator; price: Locator }> {
  5   | 
  6   |   while (true) {
  7   |     const items = page.locator("//div[@class='RG5Slk']").filter({ hasText: 'DSLR Camera' });
  8   |     if (await items.count()) {
  9   |       return { items, price: page.locator("//div[@class='hZ3P6w DeU9vF']") };
  10  |     }
  11  |     
  12  |     for(let i=0; i<6; i++){
  13  |     const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
  14  |     if (await next.isDisabled()) {
  15  |       throw new Error(`Row not found!: ${'DSLR Camera'}`);
  16  |     }
> 17  |     await next.click();
      |                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18  |     await page.waitForLoadState('networkidle');
  19  |   }
  20  | 
  21  |   }
  22  | 
  23  | }
  24  | 
  25  | test ("Verifying DSLR details in Flipkart", async ({page}) => {
  26  | 
  27  | 
  28  |     await page.goto("https://www.flipkart.com/");
  29  |     await page.locator("//span[@class='b3wTlE']").click();
  30  |     await page.waitForTimeout(5000);
  31  | 
  32  |     const searchBar = page.locator("//input[@name='q']").nth(0);
  33  |     await searchBar.click();
  34  |     await searchBar.fill("DSLR Camera");
  35  |     await searchBar.press('Enter');
  36  | 
  37  |     const { items, price } = await dslrNamePrice(page, "DSLR Camera");
  38  | 
  39  |     const naming = await items.locator("//div[@class='RG5Slk']").innerText();
  40  |     const amount = await price.locator("//div[@class='hZ3P6w DeU9vF']").innerText();
  41  |     console.log(naming, amount);
  42  | 
  43  |     await page.pause();
  44  | 
  45  | 
  46  | });
  47  | 
  48  | 
  49  | /* 
  50  | import { test } from '@playwright/test';
  51  | 
  52  | test('Search DSLR Camera across 7 pages and print name + price', async ({ page }) => {
  53  |   await page.goto('https://www.flipkart.com/');
  54  |   await page.locator("//span[@class='b3wTlE']").click();
  55  | 
  56  |   const searchBar = page.locator("//input[@name='q']").nth(0);
  57  |   await searchBar.click();
  58  |   await searchBar.fill('DSLR Camera');
  59  |   await searchBar.press('Enter');
  60  |   await page.waitForLoadState('networkidle');
  61  | 
  62  |   let found = false;
  63  | 
  64  |   for (let pageNo = 1; pageNo <= 7; pageNo++) {
  65  |     console.log(`--- Checking Page ${pageNo} ---`);
  66  | 
  67  |     const cards = page.locator("div[data-id]");
  68  |     const totalCards = await cards.count();
  69  | 
  70  |     for (let i = 0; i < totalCards; i++) {
  71  |       const card = cards.nth(i);
  72  |       const text = (await card.textContent()) || '';
  73  | 
  74  |       if (text.toLowerCase().includes('dslr')) {
  75  |         const name = (await card.locator('a').first().textContent())?.trim() || 'N/A';
  76  |         const price = (await card.locator('div._30jeq3').first().textContent())?.trim() || 'N/A';
  77  | 
  78  |         console.log('DSLR Name: ', name);
  79  |         console.log('DSLR Price: ', price);
  80  | 
  81  |         found = true;
  82  |         break;
  83  |       }
  84  |     }
  85  | 
  86  |     if (found) break;
  87  | 
  88  |     const next = page.locator('a span').filter({ hasText: 'Next' });
  89  |     if (await next.isDisabled()) {
  90  |       console.log('No more pages available.');
  91  |       break;
  92  |     }
  93  | 
  94  |     await next.click();
  95  |     await page.waitForLoadState('networkidle');
  96  |   }
  97  | 
  98  |   if (!found) {
  99  |     console.log('DSLR Camera not found in first 7 pages.');
  100 |   }
  101 | }); */
```