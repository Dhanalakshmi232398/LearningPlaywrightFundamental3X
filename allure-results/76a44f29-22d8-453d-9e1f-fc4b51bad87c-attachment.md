# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task2.spec.ts >> Verifying DSLR details in Flipkart
- Location: tests\07_WebTables\26Sept_Task2.spec.ts:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has(span)').filter({ hasText: 'Next' })
    - locator resolved to <a class="jgg0SZ" href="/search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic [ref=f4e7]:
    - generic [ref=f4e9]:
      - link [ref=f4e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f4e11]
      - link "Explore Plus" [ref=f4e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f4e16]:
      - textbox "Search for products, brands and more" [ref=f4e18]: DSLR Camera
      - button [ref=f4e19] [cursor=pointer]
    - link "Login" [ref=f4e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D7
    - link "Become a Seller" [ref=f4e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f4e32]: More
    - link "Cart" [ref=f4e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f4e50]:
    - generic [ref=f4e51] [cursor=pointer]: Electronics
    - generic [ref=f4e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f4e57] [cursor=pointer]: Men
    - generic [ref=f4e60] [cursor=pointer]: Women
    - generic [ref=f4e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f4e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f4e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f4e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f4e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f4e74]:
    - generic [ref=f4e75]:
      - generic [ref=f4e77]:
        - generic [ref=f4e79]:
          - generic [ref=f4e80]: Filters
          - generic [ref=f4e84]:
            - generic [ref=f4e85]: CATEGORIES
            - generic [ref=f4e87]:
              - img [ref=f4e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f4e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f4e93]:
              - img [ref=f4e95] [cursor=pointer]
              - link "Cameras" [ref=f4e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f4e99]:
              - img [ref=f4e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f4e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f4e104]: Brand
          - generic [ref=f4e109]:
            - generic [ref=f4e110]: Price
            - generic [ref=f4e118]:
              - generic [ref=f4e119] [cursor=pointer]
              - generic [ref=f4e126]:
                - generic [ref=f4e127]: .
                - generic [ref=f4e128]: .
                - generic [ref=f4e129]: .
                - generic [ref=f4e130]: .
                - generic [ref=f4e131]: .
                - generic [ref=f4e132]: .
                - generic: .
            - generic [ref=f4e133]:
              - combobox [ref=f4e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f4e136]: to
              - combobox [ref=f4e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f4e139]: Video Resolution
          - generic [ref=f4e144]:
            - generic [ref=f4e145] [cursor=pointer]: Customer Ratings
            - generic [ref=f4e150]:
              - generic "4★ & above" [ref=f4e151] [cursor=pointer]
              - generic "3★ & above" [ref=f4e156] [cursor=pointer]
              - generic "2★ & above" [ref=f4e161] [cursor=pointer]
              - generic "1★ & above" [ref=f4e166] [cursor=pointer]
          - generic [ref=f4e171]: Lens Mount
          - generic [ref=f4e176]: Mega Pixel
          - generic [ref=f4e181]: Effective Pixels
          - generic [ref=f4e186]: Sensor Size
          - generic [ref=f4e191]: Shutter Speed
          - generic [ref=f4e196]: Type
          - generic [ref=f4e201]: Color
          - generic [ref=f4e206]: Discount
          - generic [ref=f4e211]:
            - generic [ref=f4e212] [cursor=pointer]
            - generic [ref=f4e217]: "?"
          - generic [ref=f4e219]: Number of Lens
          - generic [ref=f4e224]: FPS in Burst Mode
          - generic [ref=f4e229]: Country Of Origin
          - generic [ref=f4e234]:
            - generic [ref=f4e235] [cursor=pointer]: Offers
            - generic [ref=f4e240]:
              - generic "Buy More, Save More" [ref=f4e241] [cursor=pointer]
              - generic "Special Price" [ref=f4e246] [cursor=pointer]
          - generic [ref=f4e251]: Maximum ISO
          - generic [ref=f4e256]: Maximum Shutter Speed
          - generic [ref=f4e261]: Availability
          - generic [ref=f4e266]: GST Invoice Available
          - generic [ref=f4e271]: Features
        - link "Need help? Help me decide Buying Guide" [ref=f4e277] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f4e278]: Need help?
          - generic [ref=f4e279]: Help me decide
          - img "Buying Guide" [ref=f4e282]
      - generic [ref=f4e283]:
        - generic [ref=f4e286]:
          - generic [ref=f4e287]:
            - link "Home" [ref=f4e289] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f4e293] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f4e297] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f4e301] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f4e302]: Showing 145 – 147 of 147 results for "DSLR Camera"
          - generic [ref=f4e303]:
            - generic [ref=f4e304]: Sort By
            - generic [ref=f4e305]: Relevance
            - generic [ref=f4e306] [cursor=pointer]: Popularity
            - generic [ref=f4e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f4e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f4e309] [cursor=pointer]: Newest First
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f4e314] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=edbee00a-6cb4-464e-9b2a-7b5ad2744dbb.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=mlg1386ixc0000001790529127103&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f4e319]
          - generic [ref=f4e324]:
            - generic [ref=f4e325]:
              - generic [ref=f4e326]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f4e328]:
                - listitem [ref=f4e329]: "• Effective Pixels: 33 MP"
                - listitem [ref=f4e330]: "• Sensor Type: CMOS"
                - listitem [ref=f4e331]: • WiFi Available
                - listitem [ref=f4e332]: • 4:2:0, 10bit
                - listitem [ref=f4e333]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f4e334]:
              - generic [ref=f4e336]:
                - generic [ref=f4e337]: ₹2,85,999
                - generic [ref=f4e338]: ₹2,89,990
                - generic [ref=f4e339]: 1% off
              - generic [ref=f4e340]: Only 1 left
              - generic [ref=f4e344]:
                - generic [ref=f4e345]: Upto
                - generic [ref=f4e346]: ₹58,650
                - generic [ref=f4e347]: Off on Exchange
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f4e352] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=edbee00a-6cb4-464e-9b2a-7b5ad2744dbb.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=mlg1386ixc0000001790529127103&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f4e357]
          - generic [ref=f4e362]:
            - generic [ref=f4e363]:
              - generic [ref=f4e364]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f4e366]:
                - listitem [ref=f4e367]: "• Effective Pixels: 50 MP"
                - listitem [ref=f4e368]: "• Sensor Type: CMOS"
                - listitem [ref=f4e369]: • WiFi Available
                - listitem [ref=f4e370]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f4e371]: • 2 Years Warranty
            - generic [ref=f4e372]:
              - generic [ref=f4e374]:
                - generic [ref=f4e375]: ₹4,70,990
                - generic [ref=f4e376]: ₹5,29,990
                - generic [ref=f4e377]: 11% off
              - generic [ref=f4e380]: Only 3 left
              - generic [ref=f4e384]:
                - generic [ref=f4e385]: Upto
                - generic [ref=f4e386]: ₹58,650
                - generic [ref=f4e387]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f4e392] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=edbee00a-6cb4-464e-9b2a-7b5ad2744dbb.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=mlg1386ixc0000001790529127103&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f4e397]
          - generic [ref=f4e402]:
            - generic [ref=f4e403]:
              - generic [ref=f4e404]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f4e406]:
                - listitem [ref=f4e407]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f4e408]: "• Effective Pixels: 50 MP"
                - listitem [ref=f4e409]: "• Sensor Type: CMOS"
                - listitem [ref=f4e410]: • WiFi Available
                - listitem [ref=f4e411]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f4e412]: • 2 Years Warranty
            - generic [ref=f4e413]:
              - generic [ref=f4e415]:
                - generic [ref=f4e416]: ₹4,70,990
                - generic [ref=f4e417]: ₹5,59,990
                - generic [ref=f4e418]: 15% off
              - generic [ref=f4e419]: Only 3 left
              - generic [ref=f4e423]:
                - generic [ref=f4e424]: Upto
                - generic [ref=f4e425]: ₹58,650
                - generic [ref=f4e426]: Off on Exchange
        - generic [ref=f4e429]:
          - generic [ref=f4e430]: Page 7 of 7
          - navigation [ref=f4e431]:
            - link "Previous" [ref=f4e432] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f4e433] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f4e434] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f4e435] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f4e436] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f4e437] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f4e438] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f4e439] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f4e441]:
      - generic [ref=f4e442]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f4e443]:
        - generic [ref=f4e444]:
          - img "FUJIFILM X Series X-T4 Mirrorless Camera XF 16-55mm F2.8 R LM WR lens and BC-W235 Dual Battery Charger" [ref=f4e447]
          - generic [ref=f4e448]:
            - link "1. FUJIFILM X Series X-T4 Mirr... 4.3 23 Ratings&5 Reviews ₹2,74,998" [ref=f4e449] [cursor=pointer]:
              - /url: /fujifilm-x-series-x-t4-mirrorless-camera-xf-16-55mm-f2-8-r-lm-wr-lens-bc-w235-dual-battery-charger/p/itm577c34420c405?pid=DLLGGTZTWPWY4EV7&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f4e450]: 1. FUJIFILM X Series X-T4 Mirr...
              - generic [ref=f4e452]:
                - generic [ref=f4e453]: "4.3"
                - generic [ref=f4e455]:
                  - text: 23 Ratings
                  - generic [ref=f4e456]: "&5 Reviews"
              - generic [ref=f4e457]: ₹2,74,998
            - list [ref=f4e460]:
              - listitem [ref=f4e461]: "Effective Pixels: 26.1 MP"
              - listitem [ref=f4e462]: "Sensor Type: CMOS"
              - listitem [ref=f4e463]: WiFi Available
        - generic [ref=f4e464]:
          - generic [ref=f4e465]: Most Helpful Review
          - generic [ref=f4e467]:
            - generic [ref=f4e468]:
              - generic [ref=f4e469]: "5"
              - paragraph [ref=f4e471]: Classy product
            - generic [ref=f4e472]: Great camera for professional and personal purposes... Sharing one photograph without any edits...
            - generic [ref=f4e477]:
              - paragraph [ref=f4e478]: Jinan Sekhar E
              - paragraph [ref=f4e483]: Certified Buyer
              - paragraph [ref=f4e484]: May, 2022
        - generic [ref=f4e485]:
          - generic [ref=f4e486]: Recent Review
          - generic [ref=f4e488]:
            - generic [ref=f4e489]:
              - generic [ref=f4e490]: "5"
              - paragraph [ref=f4e492]: Just wow!
            - generic [ref=f4e493]: Camera csme in perfect sealed box . Camera is Compact and produces beautiful colors in pictures. Thanks to Flipcart for such sweet deal.
            - generic [ref=f4e498]:
              - paragraph [ref=f4e499]: PAWAN RANA
              - paragraph [ref=f4e504]: Certified Buyer
              - paragraph [ref=f4e505]: Nov, 2024
      - generic [ref=f4e506]:
        - generic [ref=f4e507]:
          - img "NIKON Z5II Mirrorless Camera Body Only" [ref=f4e510]
          - generic [ref=f4e511]:
            - link "2. NIKON Z5II Mirrorless Camer... 4.6 17 Ratings&1 Reviews ₹1,36,624 8% off" [ref=f4e512] [cursor=pointer]:
              - /url: /nikon-z5ii-mirrorless-camera-body-only/p/itmc160f2e7e191d?pid=DLLHBZMP9SQCTNG2&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f4e513]: 2. NIKON Z5II Mirrorless Camer...
              - generic [ref=f4e515]:
                - generic [ref=f4e516]: "4.6"
                - generic [ref=f4e518]:
                  - text: 17 Ratings
                  - generic [ref=f4e519]: "&1 Reviews"
              - generic [ref=f4e521]:
                - generic [ref=f4e522]: ₹1,36,624
                - generic [ref=f4e523]: 8% off
            - list [ref=f4e524]:
              - listitem [ref=f4e525]: "Effective Pixels: 25.28 MP"
              - listitem [ref=f4e526]: "Sensor Type: CMOS"
              - listitem [ref=f4e527]: WiFi Available
        - generic [ref=f4e528]:
          - generic [ref=f4e529]: Most Helpful Review
          - generic [ref=f4e531]:
            - generic [ref=f4e532]:
              - generic [ref=f4e533]: "5"
              - paragraph [ref=f4e535]: Highly recommended
            - generic [ref=f4e536]: Awesome product with an exceptional price for the 24-70mm lens kit
            - generic [ref=f4e541]:
              - paragraph [ref=f4e542]: Shiva B
              - paragraph [ref=f4e547]: Certified Buyer
              - paragraph [ref=f4e548]: 11 months ago
        - generic [ref=f4e549]:
          - generic [ref=f4e550]: Recent Review
          - generic [ref=f4e552]:
            - generic [ref=f4e553]:
              - generic [ref=f4e554]: "5"
              - paragraph [ref=f4e556]: Highly recommended
            - generic [ref=f4e557]: Awesome product with an exceptional price for the 24-70mm lens kit
            - generic [ref=f4e562]:
              - paragraph [ref=f4e563]: Shiva B
              - paragraph [ref=f4e568]: Certified Buyer
              - paragraph [ref=f4e569]: 11 months ago
      - generic [ref=f4e570]:
        - generic [ref=f4e571]:
          - img "NIKON Z6 II Body Mirrorless Camera with 64GB" [ref=f4e574]
          - generic [ref=f4e575]:
            - link "3. NIKON Z6 II Body Mirrorless... 4.3 22 Ratings&4 Reviews ₹1,21,799 23% off" [ref=f4e576] [cursor=pointer]:
              - /url: /nikon-z6-ii-body-mirrorless-camera-64gb/p/itmeec2a7d4b2bec?pid=DLLG3UVGWTSZHHPW&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f4e577]: 3. NIKON Z6 II Body Mirrorless...
              - generic [ref=f4e579]:
                - generic [ref=f4e580]: "4.3"
                - generic [ref=f4e582]:
                  - text: 22 Ratings
                  - generic [ref=f4e583]: "&4 Reviews"
              - generic [ref=f4e585]:
                - generic [ref=f4e586]: ₹1,21,799
                - generic [ref=f4e587]: 23% off
            - list [ref=f4e588]:
              - listitem [ref=f4e589]: 4K Ultra HD at 60p., Dual processors., Dual card slots., High-speed shooting., More autofocus power., Keep shooting into the evening with the same fast, accurate AF performance., subject tracking automatically, Eye-Detection.Better than ever., Now you can use Wide-Area (L) Mode to set boundaries for eye detection., Capture the eyes On Video, Slow down time and capture every detail of movement, Reverse focus rotation., Built-in inspiration for multimedia creators., Focus Shift Shooting, Direct connect. (PC or Mac), Live stream
              - listitem [ref=f4e590]: "Effective Pixels: 24.5 MP"
              - listitem [ref=f4e591]: "Sensor Type: CMOS"
        - generic [ref=f4e592]:
          - generic [ref=f4e593]: Most Helpful Review
          - generic [ref=f4e595]:
            - generic [ref=f4e596]:
              - generic [ref=f4e597]: "5"
              - paragraph [ref=f4e599]: Classy product
            - generic [ref=f4e602]:
              - generic [ref=f4e603]: Probably the best mirrorless camera in market.A great image stability out of the box.Night imaging is superb.In video Focus is very fast.Battery life is ...
              - generic [ref=f4e604] [cursor=pointer]: Read full review
            - generic [ref=f4e606]:
              - paragraph [ref=f4e607]: Aryasindhu Sahu
              - paragraph [ref=f4e612]: Certified Buyer
              - paragraph [ref=f4e613]: Nov, 2021
        - generic [ref=f4e614]:
          - generic [ref=f4e615]: Recent Review
          - generic [ref=f4e617]:
            - generic [ref=f4e618]:
              - generic [ref=f4e619]: "5"
              - paragraph [ref=f4e621]: Highly recommended
            - generic [ref=f4e622]: They have not Included 64GB Memory Card , Except that Everything is Good. Guys You won't Get Memory Card , As Additional battery Contains in package .
            - generic [ref=f4e627]:
              - paragraph [ref=f4e628]: prajwal t j
              - paragraph [ref=f4e633]: Certified Buyer
              - paragraph [ref=f4e634]: Jul, 2024
      - generic [ref=f4e635]:
        - generic [ref=f4e636]:
          - img "SONY Alpha ILCE-7C Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording" [ref=f4e639]
          - generic [ref=f4e640]:
            - link "4. SONY Alpha ILCE-7C Full Fra... 4.6 114 Ratings&13 Reviews ₹1,30,990 8% off" [ref=f4e641] [cursor=pointer]:
              - /url: /sony-alpha-ilce-7c-full-frame-mirrorless-camera-body-featuring-eye-af-4k-movie-recording/p/itm9404070d3ca7a?pid=DLLFYB4EFCUSKPA4&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f4e642]: 4. SONY Alpha ILCE-7C Full Fra...
              - generic [ref=f4e644]:
                - generic [ref=f4e645]: "4.6"
                - generic [ref=f4e647]:
                  - text: 114 Ratings
                  - generic [ref=f4e648]: "&13 Reviews"
              - generic [ref=f4e650]:
                - generic [ref=f4e651]: ₹1,30,990
                - generic [ref=f4e652]: 8% off
            - list [ref=f4e653]:
              - listitem [ref=f4e654]: 4K recording34 for beautiful movie imagery (Full-pixel readout without pixel binning allows oversampling equivalent to 6K recording, for clean images with less moir?and jaggies.), Movie-making with room for creativity, Designed for optimal usability, Unique full-frame imagery, Enjoy the full-frame advantage, Expand your movie-making options (Achieve truly artistic movie-making with the superb control, image quality and dimensionality of full-frame), Stunning images, even at fast shutter speeds and in dim light, Wi-Fi,NFC & Bluetooth
              - listitem [ref=f4e655]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f4e656]: "Sensor Type: CMOS"
        - generic [ref=f4e657]:
          - generic [ref=f4e658]: Most Helpful Review
          - generic [ref=f4e660]:
            - generic [ref=f4e661]:
              - generic [ref=f4e662]: "5"
              - paragraph [ref=f4e664]: Classy product
            - generic [ref=f4e665]: Amazing Camera , must buy, auto focusing system in video superb
            - generic [ref=f4e670]:
              - paragraph [ref=f4e671]: Bharat Atos
              - paragraph [ref=f4e676]: Certified Buyer
              - paragraph [ref=f4e677]: Apr, 2021
        - generic [ref=f4e678]:
          - generic [ref=f4e679]: Recent Review
          - generic [ref=f4e681]:
            - generic [ref=f4e682]:
              - generic [ref=f4e683]: "5"
              - paragraph [ref=f4e685]: Really Nice
            - generic [ref=f4e688]:
              - generic [ref=f4e689]: Purchasing the Sony A7C is one of the best decision that I have made, the picture quality are amazing, it works really great, if you are planning to buy this...
              - generic [ref=f4e690] [cursor=pointer]: Read full review
            - generic [ref=f4e692]:
              - paragraph [ref=f4e693]: Daniel Kibami
              - paragraph [ref=f4e698]: Certified Buyer
              - paragraph [ref=f4e699]: Apr, 2024
      - generic [ref=f4e700]:
        - generic [ref=f4e701]:
          - img "SONY Alpha 7SM3 Mirrorless Camera Body Only + Battery (NP-FZ100) - Black" [ref=f4e704]
          - generic [ref=f4e705]:
            - link "5. SONY Alpha 7SM3 Mirrorless ... 4.2 13 Ratings&1 Reviews ₹3,08,990 7% off" [ref=f4e706] [cursor=pointer]:
              - /url: /sony-alpha-7sm3-mirrorless-camera-body-only-battery-np-fz100-black/p/itm6a58f48e40f5e?pid=DLLH4FRFAZZKGBF2&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f4e707]: 5. SONY Alpha 7SM3 Mirrorless ...
              - generic [ref=f4e709]:
                - generic [ref=f4e710]: "4.2"
                - generic [ref=f4e712]:
                  - text: 13 Ratings
                  - generic [ref=f4e713]: "&1 Reviews"
              - generic [ref=f4e715]:
                - generic [ref=f4e716]: ₹3,08,990
                - generic [ref=f4e717]: 7% off
            - list [ref=f4e718]:
              - listitem [ref=f4e719]: "| 4K 120P | 4:2:2 10 bit | ISO 40-409600 | High Dynamic Range | Videographers & Creators"
              - listitem [ref=f4e720]: "Effective Pixels: 12.1 MP"
              - listitem [ref=f4e721]: "Sensor Type: CMOS"
        - generic [ref=f4e722]:
          - generic [ref=f4e723]: Most Helpful Review
          - generic [ref=f4e725]:
            - generic [ref=f4e726]:
              - generic [ref=f4e727]: "5"
              - paragraph [ref=f4e729]: Mind-blowing purchase
            - generic [ref=f4e730]: Loved it
            - generic [ref=f4e735]:
              - paragraph [ref=f4e736]: Arif Beg
              - paragraph [ref=f4e741]: Certified Buyer
              - paragraph [ref=f4e742]: Oct, 2021
        - generic [ref=f4e743]:
          - generic [ref=f4e744]: Recent Review
          - generic [ref=f4e746]:
            - generic [ref=f4e747]:
              - generic [ref=f4e748]: "5"
              - paragraph [ref=f4e750]: Mind-blowing purchase
            - generic [ref=f4e751]: Loved it
            - generic [ref=f4e756]:
              - paragraph [ref=f4e757]: Arif Beg
              - paragraph [ref=f4e762]: Certified Buyer
              - paragraph [ref=f4e763]: Oct, 2021
  - contentinfo [ref=f4e764]:
    - generic [ref=f4e766]:
      - generic [ref=f4e767]:
        - generic [ref=f4e768]:
          - generic [ref=f4e769]: ABOUT
          - link "Contact Us" [ref=f4e770] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f4e771] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f4e772] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f4e773] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f4e774] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f4e775] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f4e776]:
          - generic [ref=f4e777]: GROUP COMPANIES
          - link "Myntra" [ref=f4e778] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f4e779] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f4e780] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f4e781]:
          - generic [ref=f4e782]: HELP
          - link "Payments" [ref=f4e783] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f4e784] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f4e785] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f4e786] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f4e787]:
          - generic [ref=f4e788]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f4e789] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f4e790] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f4e791] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f4e792] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f4e793] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f4e794] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f4e795] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f4e796] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f4e798]:
          - generic [ref=f4e799]: "Mail Us:"
          - generic [ref=f4e802]:
            - paragraph [ref=f4e803]: Flipkart Internet Private Limited,
            - paragraph [ref=f4e804]: Buildings Alyssa, Begonia &
            - paragraph [ref=f4e805]: Clove Embassy Tech Village,
            - paragraph [ref=f4e806]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f4e807]: Bengaluru, 560103,
            - paragraph [ref=f4e808]: Karnataka, India
          - generic [ref=f4e809]: Social
          - generic [ref=f4e810]:
            - link [ref=f4e812] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f4e815] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f4e818] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f4e821] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f4e824]:
          - generic [ref=f4e825]: "Registered Office Address:"
          - generic [ref=f4e828]:
            - paragraph [ref=f4e829]: Flipkart Internet Private Limited,
            - paragraph [ref=f4e830]: Buildings Alyssa, Begonia &
            - paragraph [ref=f4e831]: Clove Embassy Tech Village,
            - paragraph [ref=f4e832]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f4e833]: Bengaluru, 560103,
            - paragraph [ref=f4e834]: Karnataka, India
            - paragraph [ref=f4e835]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f4e836]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f4e837] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f4e838] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f4e840]:
        - link "Become a Seller" [ref=f4e843] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f4e844]: Advertise
        - link "Gift Cards" [ref=f4e848] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f4e851] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f4e852]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1   | import {test, expect, Page, Locator} from '@playwright/test';
  2   | 
  3   | 
  4   | async function dslrNamePrice(page: Page, name: string): Promise<Locator> {
  5   | 
  6   |   while (true) {
  7   |     const items = page.locator("//div[@class='RG5Slk']").filter({ hasText: 'DSLR Camera' });
  8   |     if (await items.count()) {
  9   |       return items;
  10  |     }
  11  |     
  12  |     const price = page.locator("//div[@class='hZ3P6w DeU9vF']"); //.filter({ hasText: 'DSLR Camera' });
  13  |     if (await price.count()) {
  14  |       return price;
  15  |     
  16  |     }
  17  |     
  18  |     for(let i=0; i<7; i++){
  19  |     const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
  20  |     if (await next.isDisabled()) {
  21  |       throw new Error(`Row not found!: ${'DSLR Camera'}`);
  22  |     }
> 23  |     await next.click();
      |                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24  |   }
  25  |   
  26  |   }
  27  | 
  28  | }
  29  | 
  30  | test ("Verifying DSLR details in Flipkart", async ({page}) => {
  31  | 
  32  | 
  33  |     await page.goto("https://www.flipkart.com/");
  34  |     await page.locator("//span[@class='b3wTlE']").click();
  35  |     await page.waitForTimeout(5000);
  36  | 
  37  |     const searchBar = page.locator("//input[@name='q']").nth(0);
  38  |     await searchBar.click();
  39  |     await searchBar.fill("DSLR Camera");
  40  |     await searchBar.press('Enter');
  41  | 
  42  |     await dslrNamePrice(page, "DSLR Camera");
  43  | 
  44  | 
  45  |     await page.pause();
  46  | 
  47  | 
  48  | });
  49  | 
  50  | 
  51  | /* 
  52  | import { test } from '@playwright/test';
  53  | 
  54  | test('Search DSLR Camera across 7 pages and print name + price', async ({ page }) => {
  55  |   await page.goto('https://www.flipkart.com/');
  56  |   await page.locator("//span[@class='b3wTlE']").click();
  57  | 
  58  |   const searchBar = page.locator("//input[@name='q']").nth(0);
  59  |   await searchBar.click();
  60  |   await searchBar.fill('DSLR Camera');
  61  |   await searchBar.press('Enter');
  62  |   await page.waitForLoadState('networkidle');
  63  | 
  64  |   let found = false;
  65  | 
  66  |   for (let pageNo = 1; pageNo <= 7; pageNo++) {
  67  |     console.log(`--- Checking Page ${pageNo} ---`);
  68  | 
  69  |     const cards = page.locator("div[data-id]");
  70  |     const totalCards = await cards.count();
  71  | 
  72  |     for (let i = 0; i < totalCards; i++) {
  73  |       const card = cards.nth(i);
  74  |       const text = (await card.textContent()) || '';
  75  | 
  76  |       if (text.toLowerCase().includes('dslr')) {
  77  |         const name = (await card.locator('a').first().textContent())?.trim() || 'N/A';
  78  |         const price = (await card.locator('div._30jeq3').first().textContent())?.trim() || 'N/A';
  79  | 
  80  |         console.log('DSLR Name: ', name);
  81  |         console.log('DSLR Price: ', price);
  82  | 
  83  |         found = true;
  84  |         break;
  85  |       }
  86  |     }
  87  | 
  88  |     if (found) break;
  89  | 
  90  |     const next = page.locator('a span').filter({ hasText: 'Next' });
  91  |     if (await next.isDisabled()) {
  92  |       console.log('No more pages available.');
  93  |       break;
  94  |     }
  95  | 
  96  |     await next.click();
  97  |     await page.waitForLoadState('networkidle');
  98  |   }
  99  | 
  100 |   if (!found) {
  101 |     console.log('DSLR Camera not found in first 7 pages.');
  102 |   }
  103 | }); */
```