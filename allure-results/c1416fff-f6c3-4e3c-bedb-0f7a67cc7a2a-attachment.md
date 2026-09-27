# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task2.spec.ts >> Verifying DSLR details in Flipkart
- Location: tests\07_WebTables\26Sept_Task2.spec.ts:31:5

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
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
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
          - generic [ref=f2e302]: Showing 145 – 147 of 147 results for "DSLR Camera"
          - generic [ref=f2e303]:
            - generic [ref=f2e304]: Sort By
            - generic [ref=f2e305]: Relevance
            - generic [ref=f2e306] [cursor=pointer]: Popularity
            - generic [ref=f2e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f2e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f2e309] [cursor=pointer]: Newest First
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f2e314] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=56f8a763-2519-419e-9642-08ccf68fd00b.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=b4cty3f5g00000001790529356941&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f2e319]
          - generic [ref=f2e324]:
            - generic [ref=f2e325]:
              - generic [ref=f2e326]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f2e328]:
                - listitem [ref=f2e329]: "• Effective Pixels: 33 MP"
                - listitem [ref=f2e330]: "• Sensor Type: CMOS"
                - listitem [ref=f2e331]: • WiFi Available
                - listitem [ref=f2e332]: • 4:2:0, 10bit
                - listitem [ref=f2e333]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f2e334]:
              - generic [ref=f2e336]:
                - generic [ref=f2e337]: ₹2,85,999
                - generic [ref=f2e338]: ₹2,89,990
                - generic [ref=f2e339]: 1% off
              - generic [ref=f2e340]: Only 1 left
              - generic [ref=f2e344]:
                - generic [ref=f2e345]: Upto
                - generic [ref=f2e346]: ₹58,650
                - generic [ref=f2e347]: Off on Exchange
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e352] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=56f8a763-2519-419e-9642-08ccf68fd00b.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=b4cty3f5g00000001790529356941&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f2e357]
          - generic [ref=f2e362]:
            - generic [ref=f2e363]:
              - generic [ref=f2e364]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f2e366]:
                - listitem [ref=f2e367]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e368]: "• Sensor Type: CMOS"
                - listitem [ref=f2e369]: • WiFi Available
                - listitem [ref=f2e370]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e371]: • 2 Years Warranty
            - generic [ref=f2e372]:
              - generic [ref=f2e374]:
                - generic [ref=f2e375]: ₹4,70,990
                - generic [ref=f2e376]: ₹5,29,990
                - generic [ref=f2e377]: 11% off
              - generic [ref=f2e380]: Only 3 left
              - generic [ref=f2e384]:
                - generic [ref=f2e385]: Upto
                - generic [ref=f2e386]: ₹58,650
                - generic [ref=f2e387]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e392] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=56f8a763-2519-419e-9642-08ccf68fd00b.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=b4cty3f5g00000001790529356941&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f2e397]
          - generic [ref=f2e402]:
            - generic [ref=f2e403]:
              - generic [ref=f2e404]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f2e406]:
                - listitem [ref=f2e407]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f2e408]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e409]: "• Sensor Type: CMOS"
                - listitem [ref=f2e410]: • WiFi Available
                - listitem [ref=f2e411]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e412]: • 2 Years Warranty
            - generic [ref=f2e413]:
              - generic [ref=f2e415]:
                - generic [ref=f2e416]: ₹4,70,990
                - generic [ref=f2e417]: ₹5,59,990
                - generic [ref=f2e418]: 15% off
              - generic [ref=f2e419]: Only 3 left
              - generic [ref=f2e423]:
                - generic [ref=f2e424]: Upto
                - generic [ref=f2e425]: ₹58,650
                - generic [ref=f2e426]: Off on Exchange
        - generic [ref=f2e429]:
          - generic [ref=f2e430]: Page 7 of 7
          - navigation [ref=f2e431]:
            - link "Previous" [ref=f2e432] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f2e433] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f2e434] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f2e435] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f2e436] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f2e437] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f2e438] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f2e439] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f2e441]:
      - generic [ref=f2e442]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f2e443]:
        - generic [ref=f2e444]:
          - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera" [ref=f2e447]
          - generic [ref=f2e448]:
            - link "1. BuyLuxe Mini Digital Camera... 3.3 60 Ratings&5 Reviews ₹538 73% off" [ref=f2e449] [cursor=pointer]:
              - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e450]: 1. BuyLuxe Mini Digital Camera...
              - generic [ref=f2e452]:
                - generic [ref=f2e453]: "3.3"
                - generic [ref=f2e455]:
                  - text: 60 Ratings
                  - generic [ref=f2e456]: "&5 Reviews"
              - generic [ref=f2e458]:
                - generic [ref=f2e459]: ₹538
                - generic [ref=f2e460]: 73% off
            - list [ref=f2e461]:
              - listitem [ref=f2e462]: "Effective Pixels: 13 MP"
              - listitem [ref=f2e463]: "Optical Zoom: 0"
              - listitem [ref=f2e464]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f2e465]:
          - generic [ref=f2e466]: Most Helpful Review
          - generic [ref=f2e468]:
            - generic [ref=f2e469]:
              - generic [ref=f2e470]: "3"
              - paragraph [ref=f2e472]: Decent product
            - generic [ref=f2e473]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e478]:
              - paragraph [ref=f2e479]: Flipkart Customer
              - paragraph [ref=f2e484]: Certified Buyer
              - paragraph [ref=f2e485]: 4 months ago
        - generic [ref=f2e486]:
          - generic [ref=f2e487]: Recent Review
          - generic [ref=f2e489]:
            - generic [ref=f2e490]:
              - generic [ref=f2e491]: "3"
              - paragraph [ref=f2e493]: Decent product
            - generic [ref=f2e494]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e499]:
              - paragraph [ref=f2e500]: Flipkart Customer
              - paragraph [ref=f2e505]: Certified Buyer
              - paragraph [ref=f2e506]: 4 months ago
      - generic [ref=f2e507]:
        - generic [ref=f2e508]:
          - img "POZUB strong Tripod stand + Dustproof Bag with Clip |Tripod stand for camera||Gimbal for smartphone|mobile phone stand|Multi-Use Selfie Stick Desktop Online Course Video Recording Special Design for Streaming, Video Blogs, Online Classes, Presentation, Creating Product Demos, Vlog,Video Blogging ,Gimbal,inMonopods Video Stand in Gimbal Stabilizer,Gimbal Monopod,Tripod Kit,inTripod Ball Head,inTripod Bracket,Tripod Clamp, inMonopod Kit, |in mobile holder for hand| stand for online classes| Camera stands high Quality Tripod, Monopod Kit, Monopod, Tripod Kit, Tripod Bracket, Tripod Ball Head ABS DSLR Camera" [ref=f2e511]
          - generic [ref=f2e512]:
            - link "2. POZUB strong Tripod stand +... 4 20 Ratings&1 Reviews ₹335 52% off" [ref=f2e513] [cursor=pointer]:
              - /url: /pozub-strong-tripod-stand-dustproof-bag-clip-tripod-camera-gimbal-smartphone-mobile-phone-stand-multi-use-selfie-stick-desktop-online-course-video-recording-special-design-streaming-blogs-classes-presentation-creating-product-demos-vlog-video-blogging-gimbal-inmonopods-gimbal-stabilizer-gimbal-monopod-tripod-kit-intripod-ball-head-intripod-bracket-tripod-clamp-inmonopod-kit-in-mobile-holder-hand-classes-camera-stands-high-quality-tripod-monopod-monopod-bracket-head-abs-dslr/p/itm9d620986eaefd?pid=CAMG6Q2RVRMCGMZP&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e514]: 2. POZUB strong Tripod stand +...
              - generic [ref=f2e516]:
                - generic [ref=f2e517]: "4"
                - generic [ref=f2e519]:
                  - text: 20 Ratings
                  - generic [ref=f2e520]: "&1 Reviews"
              - generic [ref=f2e522]:
                - generic [ref=f2e523]: ₹335
                - generic [ref=f2e524]: 52% off
            - list [ref=f2e525]:
              - listitem [ref=f2e526]: "Effective Pixels: 0 MP"
              - listitem [ref=f2e527]: "Optical Zoom: NA"
              - listitem [ref=f2e528]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f2e529]:
          - generic [ref=f2e530]: Most Helpful Review
          - generic [ref=f2e532]:
            - generic [ref=f2e533]:
              - generic [ref=f2e534]: "5"
              - paragraph [ref=f2e536]: Must buy!
            - generic [ref=f2e537]: Good products
            - generic [ref=f2e542]:
              - paragraph [ref=f2e543]: Flipkart Customer
              - paragraph [ref=f2e548]: Certified Buyer
              - paragraph [ref=f2e549]: Aug, 2022
        - generic [ref=f2e550]:
          - generic [ref=f2e551]: Recent Review
          - generic [ref=f2e553]:
            - generic [ref=f2e554]:
              - generic [ref=f2e555]: "5"
              - paragraph [ref=f2e557]: Must buy!
            - generic [ref=f2e558]: Good products
            - generic [ref=f2e563]:
              - paragraph [ref=f2e564]: Flipkart Customer
              - paragraph [ref=f2e569]: Certified Buyer
              - paragraph [ref=f2e570]: Aug, 2022
      - generic [ref=f2e571]:
        - generic [ref=f2e572]:
          - img "NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR Lens" [ref=f2e575]
          - generic [ref=f2e576]:
            - link "3. NIKON Z30 Mirrorless Camera... 4.3 158 Ratings&15 Reviews ₹70,999 3% off" [ref=f2e577] [cursor=pointer]:
              - /url: /nikon-z30-mirrorless-camera-z-dx-16-50-mm-f-3-5-6-3-vr-lens/p/itm63022ba3d2150?pid=DLLGGYSTMHSSXFZR&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e578]: 3. NIKON Z30 Mirrorless Camera...
              - generic [ref=f2e580]:
                - generic [ref=f2e581]: "4.3"
                - generic [ref=f2e583]:
                  - text: 158 Ratings
                  - generic [ref=f2e584]: "&15 Reviews"
              - generic [ref=f2e586]:
                - generic [ref=f2e587]: ₹70,999
                - generic [ref=f2e588]: 3% off
            - list [ref=f2e589]:
              - listitem [ref=f2e590]: 4K UHD video with 100% Angle view, 20 types of creative picture control, Compact Content Creation., Personalised Performance, Twist And Touch., Fuss-Free Focus., Eye-Detection AF & Animal-Detection AF / AF-F., SnapBridge, NX Studio, Webcam Utility, Wi-Fi Compatibility
              - listitem [ref=f2e591]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f2e592]: "Sensor Type: CMOS"
        - generic [ref=f2e593]:
          - generic [ref=f2e594]: Most Helpful Review
          - generic [ref=f2e596]:
            - generic [ref=f2e597]:
              - generic [ref=f2e598]: "4"
              - paragraph [ref=f2e600]: Pretty good
            - generic [ref=f2e603]:
              - generic [ref=f2e604]: Good camera,, good build quality, grip is comfortable, gives extensive manual control, the kit lens quality is actually good for the price, sensor and nikon'...
              - generic [ref=f2e605] [cursor=pointer]: Read full review
            - generic [ref=f2e607]:
              - paragraph [ref=f2e608]: Shankha Pal
              - paragraph [ref=f2e613]: Certified Buyer
              - paragraph [ref=f2e614]: Nov, 2023
        - generic [ref=f2e615]:
          - generic [ref=f2e616]: Recent Review
          - generic [ref=f2e618]:
            - generic [ref=f2e619]:
              - generic [ref=f2e620]: "5"
              - paragraph [ref=f2e622]: Terrific
            - generic [ref=f2e623]: Nice camera best in price range
            - generic [ref=f2e628]:
              - paragraph [ref=f2e629]: Somu Maurya
              - paragraph [ref=f2e634]: Certified Buyer
              - paragraph [ref=f2e635]: 5 months ago
      - generic [ref=f2e636]:
        - generic [ref=f2e637]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f2e640]
          - generic [ref=f2e641]:
            - link "4. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f2e642] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e643]: 4. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f2e645]:
                - generic [ref=f2e646]: "4.1"
                - generic [ref=f2e648]:
                  - text: 21 Ratings
                  - generic [ref=f2e649]: "&6 Reviews"
              - generic [ref=f2e651]:
                - generic [ref=f2e652]: ₹1,09,999
                - generic [ref=f2e653]: 11% off
            - list [ref=f2e654]:
              - listitem [ref=f2e655]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f2e656]: "Sensor Type: CMOS"
              - listitem [ref=f2e657]: Full HD
        - generic [ref=f2e658]:
          - generic [ref=f2e659]: Most Helpful Review
          - generic [ref=f2e661]:
            - generic [ref=f2e662]:
              - generic [ref=f2e663]: "5"
              - paragraph [ref=f2e665]: Shubham sanjay khanvilkar
            - generic [ref=f2e666]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f2e671]:
              - paragraph [ref=f2e672]: Shubham sanjay khanvilkar
              - paragraph [ref=f2e673]: Apr, 2016
        - generic [ref=f2e674]:
          - generic [ref=f2e675]: Recent Review
          - generic [ref=f2e677]:
            - generic [ref=f2e678]:
              - generic [ref=f2e679]: "5"
              - paragraph [ref=f2e681]: Brilliant
            - generic [ref=f2e682]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f2e687]:
              - paragraph [ref=f2e688]: Avijit Dasgupta
              - paragraph [ref=f2e693]: Certified Buyer
              - paragraph [ref=f2e694]: Oct, 2018
      - generic [ref=f2e695]:
        - generic [ref=f2e696]:
          - img "Canon EOS R8 Body Mirrorless Camera Body Only" [ref=f2e699]
          - generic [ref=f2e700]:
            - link "5. Canon EOS R8 Body Mirrorles... 4.6 68 Ratings&8 Reviews ₹1,14,990 19% off" [ref=f2e701] [cursor=pointer]:
              - /url: /canon-eos-r8-body-mirrorless-camera-only/p/itm950a990720df3?pid=DLLGQAQYC4TWGN8R&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e702]: 5. Canon EOS R8 Body Mirrorles...
              - generic [ref=f2e704]:
                - generic [ref=f2e705]: "4.6"
                - generic [ref=f2e707]:
                  - text: 68 Ratings
                  - generic [ref=f2e708]: "&8 Reviews"
              - generic [ref=f2e710]:
                - generic [ref=f2e711]: ₹1,14,990
                - generic [ref=f2e712]: 19% off
            - list [ref=f2e713]:
              - listitem [ref=f2e714]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e715]: "Sensor Type: CMOS"
              - listitem [ref=f2e716]: WiFi Available
        - generic [ref=f2e717]:
          - generic [ref=f2e718]: Most Helpful Review
          - generic [ref=f2e720]:
            - generic [ref=f2e721]:
              - generic [ref=f2e722]: "4"
              - paragraph [ref=f2e724]: Nice product
            - generic [ref=f2e725]: Best cameraCons1. Battery backup is very less2. Heating problem3. No bag included
            - generic [ref=f2e730]:
              - paragraph [ref=f2e731]: syed rahim
              - paragraph [ref=f2e736]: Certified Buyer
              - paragraph [ref=f2e737]: Jul, 2024
        - generic [ref=f2e738]:
          - generic [ref=f2e739]: Recent Review
          - generic [ref=f2e741]:
            - generic [ref=f2e742]:
              - generic [ref=f2e743]: "5"
              - paragraph [ref=f2e745]: Just wow!
            - generic [ref=f2e746]: This was a good camera and I got it for a good price in a sale the package was sealed and was delivered 2 days before the promised delivery date.
            - generic [ref=f2e751]:
              - paragraph [ref=f2e752]: Professor Sathian J.D
              - paragraph [ref=f2e757]: Certified Buyer
              - paragraph [ref=f2e758]: Nov, 2024
  - contentinfo [ref=f2e759]:
    - generic [ref=f2e761]:
      - generic [ref=f2e762]:
        - generic [ref=f2e763]:
          - generic [ref=f2e764]: ABOUT
          - link "Contact Us" [ref=f2e765] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f2e766] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f2e767] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f2e768] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f2e769] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f2e770] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f2e771]:
          - generic [ref=f2e772]: GROUP COMPANIES
          - link "Myntra" [ref=f2e773] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f2e774] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f2e775] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f2e776]:
          - generic [ref=f2e777]: HELP
          - link "Payments" [ref=f2e778] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f2e779] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f2e780] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f2e781] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f2e782]:
          - generic [ref=f2e783]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f2e784] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f2e785] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f2e786] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f2e787] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f2e788] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f2e789] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f2e790] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f2e791] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f2e793]:
          - generic [ref=f2e794]: "Mail Us:"
          - generic [ref=f2e797]:
            - paragraph [ref=f2e798]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e799]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e800]: Clove Embassy Tech Village,
            - paragraph [ref=f2e801]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e802]: Bengaluru, 560103,
            - paragraph [ref=f2e803]: Karnataka, India
          - generic [ref=f2e804]: Social
          - generic [ref=f2e805]:
            - link [ref=f2e807] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f2e810] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f2e813] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f2e816] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f2e819]:
          - generic [ref=f2e820]: "Registered Office Address:"
          - generic [ref=f2e823]:
            - paragraph [ref=f2e824]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e825]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e826]: Clove Embassy Tech Village,
            - paragraph [ref=f2e827]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e828]: Bengaluru, 560103,
            - paragraph [ref=f2e829]: Karnataka, India
            - paragraph [ref=f2e830]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f2e831]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f2e832] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f2e833] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f2e835]:
        - link "Become a Seller" [ref=f2e838] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f2e839]: Advertise
        - link "Gift Cards" [ref=f2e843] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f2e846] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f2e847]: © 2007-2026 Flipkart.com
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
  24  |     await page.waitForLoadState('networkidle');
  25  |   }
  26  | 
  27  |   }
  28  | 
  29  | }
  30  | 
  31  | test ("Verifying DSLR details in Flipkart", async ({page}) => {
  32  | 
  33  | 
  34  |     await page.goto("https://www.flipkart.com/");
  35  |     await page.locator("//span[@class='b3wTlE']").click();
  36  |     await page.waitForTimeout(5000);
  37  | 
  38  |     const searchBar = page.locator("//input[@name='q']").nth(0);
  39  |     await searchBar.click();
  40  |     await searchBar.fill("DSLR Camera");
  41  |     await searchBar.press('Enter');
  42  | 
  43  |     await dslrNamePrice(page, "DSLR Camera");
  44  | 
  45  | 
  46  |     await page.pause();
  47  | 
  48  | 
  49  | });
  50  | 
  51  | 
  52  | /* 
  53  | import { test } from '@playwright/test';
  54  | 
  55  | test('Search DSLR Camera across 7 pages and print name + price', async ({ page }) => {
  56  |   await page.goto('https://www.flipkart.com/');
  57  |   await page.locator("//span[@class='b3wTlE']").click();
  58  | 
  59  |   const searchBar = page.locator("//input[@name='q']").nth(0);
  60  |   await searchBar.click();
  61  |   await searchBar.fill('DSLR Camera');
  62  |   await searchBar.press('Enter');
  63  |   await page.waitForLoadState('networkidle');
  64  | 
  65  |   let found = false;
  66  | 
  67  |   for (let pageNo = 1; pageNo <= 7; pageNo++) {
  68  |     console.log(`--- Checking Page ${pageNo} ---`);
  69  | 
  70  |     const cards = page.locator("div[data-id]");
  71  |     const totalCards = await cards.count();
  72  | 
  73  |     for (let i = 0; i < totalCards; i++) {
  74  |       const card = cards.nth(i);
  75  |       const text = (await card.textContent()) || '';
  76  | 
  77  |       if (text.toLowerCase().includes('dslr')) {
  78  |         const name = (await card.locator('a').first().textContent())?.trim() || 'N/A';
  79  |         const price = (await card.locator('div._30jeq3').first().textContent())?.trim() || 'N/A';
  80  | 
  81  |         console.log('DSLR Name: ', name);
  82  |         console.log('DSLR Price: ', price);
  83  | 
  84  |         found = true;
  85  |         break;
  86  |       }
  87  |     }
  88  | 
  89  |     if (found) break;
  90  | 
  91  |     const next = page.locator('a span').filter({ hasText: 'Next' });
  92  |     if (await next.isDisabled()) {
  93  |       console.log('No more pages available.');
  94  |       break;
  95  |     }
  96  | 
  97  |     await next.click();
  98  |     await page.waitForLoadState('networkidle');
  99  |   }
  100 | 
  101 |   if (!found) {
  102 |     console.log('DSLR Camera not found in first 7 pages.');
  103 |   }
  104 | }); */
```