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
Error: locator.isDisabled: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has(span)').filter({ hasText: 'Next' })

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
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D7
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
          - generic [ref=f2e302]: Showing 145 – 146 of 146 results for "DSLR Camera"
          - generic [ref=f2e303]:
            - generic [ref=f2e304]: Sort By
            - generic [ref=f2e305]: Relevance
            - generic [ref=f2e306] [cursor=pointer]: Popularity
            - generic [ref=f2e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f2e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f2e309] [cursor=pointer]: Newest First
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e314] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=7c66e115-d340-48bd-ac15-154e6becaa7f.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=do9k24v39c0000001790538306955&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f2e319]
          - generic [ref=f2e324]:
            - generic [ref=f2e325]:
              - generic [ref=f2e326]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f2e328]:
                - listitem [ref=f2e329]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e330]: "• Sensor Type: CMOS"
                - listitem [ref=f2e331]: • WiFi Available
                - listitem [ref=f2e332]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e333]: • 2 Years Warranty
            - generic [ref=f2e334]:
              - generic [ref=f2e336]:
                - generic [ref=f2e337]: ₹4,70,990
                - generic [ref=f2e338]: ₹5,29,990
                - generic [ref=f2e339]: 11% off
              - generic [ref=f2e342]: Only 3 left
              - generic [ref=f2e346]:
                - generic [ref=f2e347]: Upto
                - generic [ref=f2e348]: ₹58,650
                - generic [ref=f2e349]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e354] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=7c66e115-d340-48bd-ac15-154e6becaa7f.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=do9k24v39c0000001790538306955&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f2e359]
          - generic [ref=f2e364]:
            - generic [ref=f2e365]:
              - generic [ref=f2e366]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f2e368]:
                - listitem [ref=f2e369]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f2e370]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e371]: "• Sensor Type: CMOS"
                - listitem [ref=f2e372]: • WiFi Available
                - listitem [ref=f2e373]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e374]: • 2 Years Warranty
            - generic [ref=f2e375]:
              - generic [ref=f2e377]:
                - generic [ref=f2e378]: ₹4,70,990
                - generic [ref=f2e379]: ₹5,59,990
                - generic [ref=f2e380]: 15% off
              - generic [ref=f2e381]: Only 3 left
              - generic [ref=f2e385]:
                - generic [ref=f2e386]: Upto
                - generic [ref=f2e387]: ₹58,650
                - generic [ref=f2e388]: Off on Exchange
        - generic [ref=f2e391]:
          - generic [ref=f2e392]: Page 7 of 7
          - navigation [ref=f2e393]:
            - link "Previous" [ref=f2e394] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f2e395] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f2e396] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f2e397] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f2e398] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f2e399] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f2e400] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f2e401] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f2e403]:
      - generic [ref=f2e404]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f2e405]:
        - generic [ref=f2e406]:
          - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera" [ref=f2e409]
          - generic [ref=f2e410]:
            - link "1. BuyLuxe Mini Digital Camera... 3.3 60 Ratings&5 Reviews ₹538 73% off" [ref=f2e411] [cursor=pointer]:
              - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e412]: 1. BuyLuxe Mini Digital Camera...
              - generic [ref=f2e414]:
                - generic [ref=f2e415]: "3.3"
                - generic [ref=f2e417]:
                  - text: 60 Ratings
                  - generic [ref=f2e418]: "&5 Reviews"
              - generic [ref=f2e420]:
                - generic [ref=f2e421]: ₹538
                - generic [ref=f2e422]: 73% off
            - list [ref=f2e423]:
              - listitem [ref=f2e424]: "Effective Pixels: 13 MP"
              - listitem [ref=f2e425]: "Optical Zoom: 0"
              - listitem [ref=f2e426]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f2e427]:
          - generic [ref=f2e428]: Most Helpful Review
          - generic [ref=f2e430]:
            - generic [ref=f2e431]:
              - generic [ref=f2e432]: "3"
              - paragraph [ref=f2e434]: Decent product
            - generic [ref=f2e435]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e440]:
              - paragraph [ref=f2e441]: Flipkart Customer
              - paragraph [ref=f2e446]: Certified Buyer
              - paragraph [ref=f2e447]: 4 months ago
        - generic [ref=f2e448]:
          - generic [ref=f2e449]: Recent Review
          - generic [ref=f2e451]:
            - generic [ref=f2e452]:
              - generic [ref=f2e453]: "3"
              - paragraph [ref=f2e455]: Decent product
            - generic [ref=f2e456]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e461]:
              - paragraph [ref=f2e462]: Flipkart Customer
              - paragraph [ref=f2e467]: Certified Buyer
              - paragraph [ref=f2e468]: 4 months ago
      - generic [ref=f2e469]:
        - generic [ref=f2e470]:
          - img "SONY ILCE6100K/BQ IN5 Mirrorless Camera Body with SELP16502 Power Zoom" [ref=f2e473]
          - generic [ref=f2e474]:
            - link "2. SONY ILCE6100K/BQ IN5 Mirro... 4.6 403 Ratings&62 Reviews ₹63,490 16% off" [ref=f2e475] [cursor=pointer]:
              - /url: /sony-ilce6100k-bq-in5-mirrorless-camera-body-selp16502-power-zoom/p/itmdab4dd74a57d7?pid=DLLH8PFFGTH6EFUG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e476]: 2. SONY ILCE6100K/BQ IN5 Mirro...
              - generic [ref=f2e478]:
                - generic [ref=f2e479]: "4.6"
                - generic [ref=f2e481]:
                  - text: 403 Ratings
                  - generic [ref=f2e482]: "&62 Reviews"
              - generic [ref=f2e484]:
                - generic [ref=f2e485]: ₹63,490
                - generic [ref=f2e486]: 16% off
            - list [ref=f2e487]:
              - listitem [ref=f2e488]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e489]: "Sensor Type: CMOS"
              - listitem [ref=f2e490]: WiFi Available
        - generic [ref=f2e491]:
          - generic [ref=f2e492]: Most Helpful Review
          - generic [ref=f2e494]:
            - generic [ref=f2e495]:
              - generic [ref=f2e496]: "5"
              - paragraph [ref=f2e498]: Brilliant
            - generic [ref=f2e499]: The camera is the beastIts autofocus is beyond imaginationYou will love it
            - generic [ref=f2e504]:
              - paragraph [ref=f2e505]: ajoy mondal
              - paragraph [ref=f2e510]: Certified Buyer
              - paragraph [ref=f2e511]: Oct, 2022
        - generic [ref=f2e512]:
          - generic [ref=f2e513]: Recent Review
          - generic [ref=f2e515]:
            - generic [ref=f2e516]:
              - generic [ref=f2e517]: "1"
              - paragraph [ref=f2e519]: Unsatisfactory
            - generic [ref=f2e520]: Do not buy. It is not a good product specially it's lens
            - generic [ref=f2e525]:
              - paragraph [ref=f2e526]: Shubham Choubey
              - paragraph [ref=f2e531]: Certified Buyer
              - paragraph [ref=f2e532]: 11 days ago
      - generic [ref=f2e533]:
        - generic [ref=f2e534]:
          - img "SONY Alpha 7M3K Mirrorless Camera Body with 28-70mm Zoom + Battery (NP-FZ100) - Black" [ref=f2e537]
          - generic [ref=f2e538]:
            - link "3. SONY Alpha 7M3K Mirrorless ... 4.6 364 Ratings&44 Reviews ₹1,41,490 12% off" [ref=f2e539] [cursor=pointer]:
              - /url: /sony-alpha-7m3k-mirrorless-camera-body-28-70mm-zoom-battery-np-fz100-black/p/itm562f7f32aeb3b?pid=DLLH4FRFDPXZ4N5D&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e540]: 3. SONY Alpha 7M3K Mirrorless ...
              - generic [ref=f2e542]:
                - generic [ref=f2e543]: "4.6"
                - generic [ref=f2e545]:
                  - text: 364 Ratings
                  - generic [ref=f2e546]: "&44 Reviews"
              - generic [ref=f2e548]:
                - generic [ref=f2e549]: ₹1,41,490
                - generic [ref=f2e550]: 12% off
            - list [ref=f2e551]:
              - listitem [ref=f2e552]: 4K HDR movie recording capability/4K still image, Gain control of expressive freedom, Take aim with high AF performance, Capture decisive moments, More realistic, expressive movies, Shoot with more assured reliability, Always keep the eye in focus, AF-ON button and multi-selector, Comprehensive AF convenience, Anti-flicker shooting, Supports a wide range of needs in HDR movie production,, High-resolution, high-contrast XGA OLED Tru-Finder?Wi-Fi, NFC & Bluetooth, Dual slots with UHS-II compatibility
              - listitem [ref=f2e553]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e554]: "Sensor Type: CMOS"
        - generic [ref=f2e555]:
          - generic [ref=f2e556]: Most Helpful Review
          - generic [ref=f2e558]:
            - generic [ref=f2e559]:
              - generic [ref=f2e560]: "5"
              - paragraph [ref=f2e562]: Super!
            - generic [ref=f2e563]: I am a wedding photographer from Lucknow.. so It was my dream to have this camera.💕✨
            - generic [ref=f2e568]:
              - paragraph [ref=f2e569]: Ayush Gupta
              - paragraph [ref=f2e574]: Certified Buyer
              - paragraph [ref=f2e575]: Feb, 2022
        - generic [ref=f2e576]:
          - generic [ref=f2e577]: Recent Review
          - generic [ref=f2e579]:
            - generic [ref=f2e580]:
              - generic [ref=f2e581]: "5"
              - paragraph [ref=f2e583]: Simply awesome
            - generic [ref=f2e584]: Good camera. However the kit lens was not as good as expected. The photo which I attached is taken using 55
            - generic [ref=f2e589]:
              - paragraph [ref=f2e590]: Prithviraj Santra
              - paragraph [ref=f2e595]: Certified Buyer
              - paragraph [ref=f2e596]: 22 days ago
      - generic [ref=f2e597]:
        - generic [ref=f2e598]:
          - img "NIKON Z5II Mirrorless Camera Body with 24-200mm lens" [ref=f2e601]
          - generic [ref=f2e602]:
            - link "4. NIKON Z5II Mirrorless Camer... 4.6 17 Ratings&1 Reviews ₹2,01,790 2% off" [ref=f2e603] [cursor=pointer]:
              - /url: /nikon-z5ii-mirrorless-camera-body-24-200mm-lens/p/itm867363bfbe050?pid=DLLHBZMPU3BGUYZQ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e604]: 4. NIKON Z5II Mirrorless Camer...
              - generic [ref=f2e606]:
                - generic [ref=f2e607]: "4.6"
                - generic [ref=f2e609]:
                  - text: 17 Ratings
                  - generic [ref=f2e610]: "&1 Reviews"
              - generic [ref=f2e612]:
                - generic [ref=f2e613]: ₹2,01,790
                - generic [ref=f2e614]: 2% off
            - list [ref=f2e615]:
              - listitem [ref=f2e616]: "Effective Pixels: 25.28 MP"
              - listitem [ref=f2e617]: "Sensor Type: CMOS"
              - listitem [ref=f2e618]: WiFi Available
        - generic [ref=f2e619]:
          - generic [ref=f2e620]: Most Helpful Review
          - generic [ref=f2e622]:
            - generic [ref=f2e623]:
              - generic [ref=f2e624]: "5"
              - paragraph [ref=f2e626]: Highly recommended
            - generic [ref=f2e627]: Awesome product with an exceptional price for the 24-70mm lens kit
            - generic [ref=f2e632]:
              - paragraph [ref=f2e633]: Shiva B
              - paragraph [ref=f2e638]: Certified Buyer
              - paragraph [ref=f2e639]: 11 months ago
        - generic [ref=f2e640]:
          - generic [ref=f2e641]: Recent Review
          - generic [ref=f2e643]:
            - generic [ref=f2e644]:
              - generic [ref=f2e645]: "5"
              - paragraph [ref=f2e647]: Highly recommended
            - generic [ref=f2e648]: Awesome product with an exceptional price for the 24-70mm lens kit
            - generic [ref=f2e653]:
              - paragraph [ref=f2e654]: Shiva B
              - paragraph [ref=f2e659]: Certified Buyer
              - paragraph [ref=f2e660]: 11 months ago
      - generic [ref=f2e661]:
        - generic [ref=f2e662]:
          - img "Canon EOS R100 Mirrorless Camera RF-S 18-45mm f/4.5-6.3 IS STM" [ref=f2e665]
          - generic [ref=f2e666]:
            - link "5. Canon EOS R100 Mirrorless C... 4.4 2,079 Ratings&203 Reviews ₹48,460 25% off" [ref=f2e667] [cursor=pointer]:
              - /url: /canon-eos-r100-mirrorless-camera-rf-s-18-45mm-f-4-5-6-3-stm/p/itm3bc65ea11d81b?pid=DLLGQAQYNT39ZJTG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e668]: 5. Canon EOS R100 Mirrorless C...
              - generic [ref=f2e670]:
                - generic [ref=f2e671]: "4.4"
                - generic [ref=f2e673]:
                  - text: 2,079 Ratings
                  - generic [ref=f2e674]: "&203 Reviews"
              - generic [ref=f2e676]:
                - generic [ref=f2e677]: ₹48,460
                - generic [ref=f2e678]: 25% off
            - list [ref=f2e679]:
              - listitem [ref=f2e680]: DIGIC 8 Image Processor, 4K 24p Video with Crop, Full HD 60p, Dual Pixel CMOS AF with 143 AF Zones, 6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, 3" 1.04m-Dot LCD Screen, Creative Assist Mode, Silent Mode for Quiet Operation, Bluetooth with SD Card Slot
              - listitem [ref=f2e681]: "Effective Pixels: 24.1 MP"
              - listitem [ref=f2e682]: "Sensor Type: CMOS"
        - generic [ref=f2e683]:
          - generic [ref=f2e684]: Most Helpful Review
          - generic [ref=f2e686]:
            - generic [ref=f2e687]:
              - generic [ref=f2e688]: "4"
              - paragraph [ref=f2e690]: Worth the money
            - generic [ref=f2e691]: Good camera for beginners.
            - generic [ref=f2e696]:
              - paragraph [ref=f2e697]: Pradeep Kumar
              - paragraph [ref=f2e702]: Certified Buyer
              - paragraph [ref=f2e703]: Nov, 2023
        - generic [ref=f2e704]:
          - generic [ref=f2e705]: Recent Review
          - generic [ref=f2e707]:
            - generic [ref=f2e708]:
              - generic [ref=f2e709]: "4"
              - paragraph [ref=f2e711]: Worth the money
            - generic [ref=f2e712]: Good camera for beginners
            - generic [ref=f2e717]:
              - paragraph [ref=f2e718]: Apurba Mandal
              - paragraph [ref=f2e723]: Certified Buyer
              - paragraph [ref=f2e724]: 1 month ago
  - contentinfo [ref=f2e725]:
    - generic [ref=f2e727]:
      - generic [ref=f2e728]:
        - generic [ref=f2e729]:
          - generic [ref=f2e730]: ABOUT
          - link "Contact Us" [ref=f2e731] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f2e732] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f2e733] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f2e734] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f2e735] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f2e736] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f2e737]:
          - generic [ref=f2e738]: GROUP COMPANIES
          - link "Myntra" [ref=f2e739] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f2e740] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f2e741] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f2e742]:
          - generic [ref=f2e743]: HELP
          - link "Payments" [ref=f2e744] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f2e745] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f2e746] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f2e747] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f2e748]:
          - generic [ref=f2e749]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f2e750] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f2e751] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f2e752] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f2e753] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f2e754] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f2e755] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f2e756] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f2e757] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f2e759]:
          - generic [ref=f2e760]: "Mail Us:"
          - generic [ref=f2e763]:
            - paragraph [ref=f2e764]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e765]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e766]: Clove Embassy Tech Village,
            - paragraph [ref=f2e767]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e768]: Bengaluru, 560103,
            - paragraph [ref=f2e769]: Karnataka, India
          - generic [ref=f2e770]: Social
          - generic [ref=f2e771]:
            - link [ref=f2e773] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f2e776] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f2e779] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f2e782] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f2e785]:
          - generic [ref=f2e786]: "Registered Office Address:"
          - generic [ref=f2e789]:
            - paragraph [ref=f2e790]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e791]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e792]: Clove Embassy Tech Village,
            - paragraph [ref=f2e793]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e794]: Bengaluru, 560103,
            - paragraph [ref=f2e795]: Karnataka, India
            - paragraph [ref=f2e796]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f2e797]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f2e798] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f2e799] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f2e801]:
        - link "Become a Seller" [ref=f2e804] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f2e805]: Advertise
        - link "Gift Cards" [ref=f2e809] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f2e812] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f2e813]: © 2007-2026 Flipkart.com
  - generic [ref=f2e815]: Back to top
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
  12  |     for(let i=0; i<=6; i++){
  13  |     const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
> 14  |     if (await next.isDisabled()) {
      |                    ^ Error: locator.isDisabled: Test timeout of 30000ms exceeded.
  15  |       throw new Error(`Row not found!: ${'DSLR Camera'}`);
  16  |     }
  17  |     await next.click();
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