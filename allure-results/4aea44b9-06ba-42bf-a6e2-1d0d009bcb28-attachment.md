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
    - locator resolved to <a class="jgg0SZ" href="/search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
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
          - generic [ref=f2e302]: Showing 145 – 148 of 148 results for "DSLR Camera"
          - generic [ref=f2e303]:
            - generic [ref=f2e304]: Sort By
            - generic [ref=f2e305]: Relevance
            - generic [ref=f2e306] [cursor=pointer]: Popularity
            - generic [ref=f2e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f2e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f2e309] [cursor=pointer]: Newest First
        - 'link "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only • Effective Pixels: 61 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹2,68,990 ₹2,93,990 8% off Only 2 left Upto ₹58,650 Off on Exchange" [ref=f2e314] [cursor=pointer]':
          - /url: /sony-ilce-7cr-sq-in5-mirrorless-camera-body-only/p/itmb6e85a95a474b?pid=DLLGVKJEQZ5MSERS&lid=LSTDLLGVKJEQZ5MSERSBQTO6P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=8b499bb2-3970-4b1a-b5b0-2f56b837206c.DLLGVKJEQZ5MSERS.SEARCH&ppt=sp&ppn=sp&ssid=gr019djfvk0000001790530885711&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only" [ref=f2e319]
          - generic [ref=f2e324]:
            - generic [ref=f2e325]:
              - generic [ref=f2e326]: SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only
              - list [ref=f2e328]:
                - listitem [ref=f2e329]: "• Effective Pixels: 61 MP"
                - listitem [ref=f2e330]: "• Sensor Type: CMOS"
                - listitem [ref=f2e331]: • WiFi Available
                - listitem [ref=f2e332]: • 4K
                - listitem [ref=f2e333]: • 2 Years Warranty
            - generic [ref=f2e334]:
              - generic [ref=f2e336]:
                - generic [ref=f2e337]: ₹2,68,990
                - generic [ref=f2e338]: ₹2,93,990
                - generic [ref=f2e339]: 8% off
              - generic [ref=f2e342]: Only 2 left
              - generic [ref=f2e346]:
                - generic [ref=f2e347]: Upto
                - generic [ref=f2e348]: ₹58,650
                - generic [ref=f2e349]: Off on Exchange
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f2e354] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=8b499bb2-3970-4b1a-b5b0-2f56b837206c.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=gr019djfvk0000001790530885711&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f2e359]
          - generic [ref=f2e364]:
            - generic [ref=f2e365]:
              - generic [ref=f2e366]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f2e368]:
                - listitem [ref=f2e369]: "• Effective Pixels: 33 MP"
                - listitem [ref=f2e370]: "• Sensor Type: CMOS"
                - listitem [ref=f2e371]: • WiFi Available
                - listitem [ref=f2e372]: • 4:2:0, 10bit
                - listitem [ref=f2e373]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f2e374]:
              - generic [ref=f2e376]:
                - generic [ref=f2e377]: ₹2,85,999
                - generic [ref=f2e378]: ₹2,89,990
                - generic [ref=f2e379]: 1% off
              - generic [ref=f2e380]: Only 1 left
              - generic [ref=f2e384]:
                - generic [ref=f2e385]: Upto
                - generic [ref=f2e386]: ₹58,650
                - generic [ref=f2e387]: Off on Exchange
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e392] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=8b499bb2-3970-4b1a-b5b0-2f56b837206c.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=gr019djfvk0000001790530885711&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f2e397]
          - generic [ref=f2e402]:
            - generic [ref=f2e403]:
              - generic [ref=f2e404]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f2e406]:
                - listitem [ref=f2e407]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e408]: "• Sensor Type: CMOS"
                - listitem [ref=f2e409]: • WiFi Available
                - listitem [ref=f2e410]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e411]: • 2 Years Warranty
            - generic [ref=f2e412]:
              - generic [ref=f2e414]:
                - generic [ref=f2e415]: ₹4,70,990
                - generic [ref=f2e416]: ₹5,29,990
                - generic [ref=f2e417]: 11% off
              - generic [ref=f2e420]: Only 3 left
              - generic [ref=f2e424]:
                - generic [ref=f2e425]: Upto
                - generic [ref=f2e426]: ₹58,650
                - generic [ref=f2e427]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f2e432] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_148&otracker=search&otracker1=search&fm=Search&iid=8b499bb2-3970-4b1a-b5b0-2f56b837206c.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=gr019djfvk0000001790530885711&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f2e437]
          - generic [ref=f2e442]:
            - generic [ref=f2e443]:
              - generic [ref=f2e444]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f2e446]:
                - listitem [ref=f2e447]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f2e448]: "• Effective Pixels: 50 MP"
                - listitem [ref=f2e449]: "• Sensor Type: CMOS"
                - listitem [ref=f2e450]: • WiFi Available
                - listitem [ref=f2e451]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f2e452]: • 2 Years Warranty
            - generic [ref=f2e453]:
              - generic [ref=f2e455]:
                - generic [ref=f2e456]: ₹4,70,990
                - generic [ref=f2e457]: ₹5,59,990
                - generic [ref=f2e458]: 15% off
              - generic [ref=f2e459]: Only 3 left
              - generic [ref=f2e463]:
                - generic [ref=f2e464]: Upto
                - generic [ref=f2e465]: ₹58,650
                - generic [ref=f2e466]: Off on Exchange
        - generic [ref=f2e469]:
          - generic [ref=f2e470]: Page 7 of 7
          - navigation [ref=f2e471]:
            - link "Previous" [ref=f2e472] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f2e473] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f2e474] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f2e475] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f2e476] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f2e477] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f2e478] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f2e479] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f2e481]:
      - generic [ref=f2e482]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f2e483]:
        - generic [ref=f2e484]:
          - img "BuyLuxe Mini Digital Camera for Kids for Girls and Boys | Gift for Young Children 13MP DSLR Camera" [ref=f2e487]
          - generic [ref=f2e488]:
            - link "1. BuyLuxe Mini Digital Camera... 3.3 60 Ratings&5 Reviews ₹538 73% off" [ref=f2e489] [cursor=pointer]:
              - /url: /buyluxe-mini-digital-camera-kids-girls-boys-gift-young-children-13mp-dslr/p/itm316d68b1bd03c?pid=CAMHKVKTZFH5KG4E&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e490]: 1. BuyLuxe Mini Digital Camera...
              - generic [ref=f2e492]:
                - generic [ref=f2e493]: "3.3"
                - generic [ref=f2e495]:
                  - text: 60 Ratings
                  - generic [ref=f2e496]: "&5 Reviews"
              - generic [ref=f2e498]:
                - generic [ref=f2e499]: ₹538
                - generic [ref=f2e500]: 73% off
            - list [ref=f2e501]:
              - listitem [ref=f2e502]: "Effective Pixels: 13 MP"
              - listitem [ref=f2e503]: "Optical Zoom: 0"
              - listitem [ref=f2e504]: "Sensor Type: CCD | LCD Size: 0 inch"
        - generic [ref=f2e505]:
          - generic [ref=f2e506]: Most Helpful Review
          - generic [ref=f2e508]:
            - generic [ref=f2e509]:
              - generic [ref=f2e510]: "3"
              - paragraph [ref=f2e512]: Decent product
            - generic [ref=f2e513]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e518]:
              - paragraph [ref=f2e519]: Flipkart Customer
              - paragraph [ref=f2e524]: Certified Buyer
              - paragraph [ref=f2e525]: 4 months ago
        - generic [ref=f2e526]:
          - generic [ref=f2e527]: Recent Review
          - generic [ref=f2e529]:
            - generic [ref=f2e530]:
              - generic [ref=f2e531]: "3"
              - paragraph [ref=f2e533]: Decent product
            - generic [ref=f2e534]: The quality of this camera is bad but it's good for kids it has games,music,etc
            - generic [ref=f2e539]:
              - paragraph [ref=f2e540]: Flipkart Customer
              - paragraph [ref=f2e545]: Certified Buyer
              - paragraph [ref=f2e546]: 4 months ago
      - generic [ref=f2e547]:
        - generic [ref=f2e548]:
          - img "NIKON Z30 Mirrorless Camera Z DX 16 - 50 mm f/3.5 - 6.3 VR Lens" [ref=f2e551]
          - generic [ref=f2e552]:
            - link "2. NIKON Z30 Mirrorless Camera... 4.3 158 Ratings&15 Reviews ₹70,999 3% off" [ref=f2e553] [cursor=pointer]:
              - /url: /nikon-z30-mirrorless-camera-z-dx-16-50-mm-f-3-5-6-3-vr-lens/p/itm63022ba3d2150?pid=DLLGGYSTMHSSXFZR&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e554]: 2. NIKON Z30 Mirrorless Camera...
              - generic [ref=f2e556]:
                - generic [ref=f2e557]: "4.3"
                - generic [ref=f2e559]:
                  - text: 158 Ratings
                  - generic [ref=f2e560]: "&15 Reviews"
              - generic [ref=f2e562]:
                - generic [ref=f2e563]: ₹70,999
                - generic [ref=f2e564]: 3% off
            - list [ref=f2e565]:
              - listitem [ref=f2e566]: 4K UHD video with 100% Angle view, 20 types of creative picture control, Compact Content Creation., Personalised Performance, Twist And Touch., Fuss-Free Focus., Eye-Detection AF & Animal-Detection AF / AF-F., SnapBridge, NX Studio, Webcam Utility, Wi-Fi Compatibility
              - listitem [ref=f2e567]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f2e568]: "Sensor Type: CMOS"
        - generic [ref=f2e569]:
          - generic [ref=f2e570]: Most Helpful Review
          - generic [ref=f2e572]:
            - generic [ref=f2e573]:
              - generic [ref=f2e574]: "4"
              - paragraph [ref=f2e576]: Pretty good
            - generic [ref=f2e579]:
              - generic [ref=f2e580]: Good camera,, good build quality, grip is comfortable, gives extensive manual control, the kit lens quality is actually good for the price, sensor and nikon'...
              - generic [ref=f2e581] [cursor=pointer]: Read full review
            - generic [ref=f2e583]:
              - paragraph [ref=f2e584]: Shankha Pal
              - paragraph [ref=f2e589]: Certified Buyer
              - paragraph [ref=f2e590]: Nov, 2023
        - generic [ref=f2e591]:
          - generic [ref=f2e592]: Recent Review
          - generic [ref=f2e594]:
            - generic [ref=f2e595]:
              - generic [ref=f2e596]: "5"
              - paragraph [ref=f2e598]: Terrific
            - generic [ref=f2e599]: Nice camera best in price range
            - generic [ref=f2e604]:
              - paragraph [ref=f2e605]: Somu Maurya
              - paragraph [ref=f2e610]: Certified Buyer
              - paragraph [ref=f2e611]: 5 months ago
      - generic [ref=f2e612]:
        - generic [ref=f2e613]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f2e616]
          - generic [ref=f2e617]:
            - link "3. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f2e618] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e619]: 3. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f2e621]:
                - generic [ref=f2e622]: "4.1"
                - generic [ref=f2e624]:
                  - text: 21 Ratings
                  - generic [ref=f2e625]: "&6 Reviews"
              - generic [ref=f2e627]:
                - generic [ref=f2e628]: ₹1,09,999
                - generic [ref=f2e629]: 11% off
            - list [ref=f2e630]:
              - listitem [ref=f2e631]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f2e632]: "Sensor Type: CMOS"
              - listitem [ref=f2e633]: Full HD
        - generic [ref=f2e634]:
          - generic [ref=f2e635]: Most Helpful Review
          - generic [ref=f2e637]:
            - generic [ref=f2e638]:
              - generic [ref=f2e639]: "5"
              - paragraph [ref=f2e641]: Shubham sanjay khanvilkar
            - generic [ref=f2e642]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f2e647]:
              - paragraph [ref=f2e648]: Shubham sanjay khanvilkar
              - paragraph [ref=f2e649]: Apr, 2016
        - generic [ref=f2e650]:
          - generic [ref=f2e651]: Recent Review
          - generic [ref=f2e653]:
            - generic [ref=f2e654]:
              - generic [ref=f2e655]: "5"
              - paragraph [ref=f2e657]: Brilliant
            - generic [ref=f2e658]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f2e663]:
              - paragraph [ref=f2e664]: Avijit Dasgupta
              - paragraph [ref=f2e669]: Certified Buyer
              - paragraph [ref=f2e670]: Oct, 2018
      - generic [ref=f2e671]:
        - generic [ref=f2e672]:
          - img "Canon EOS R8 Body Mirrorless Camera Body Only" [ref=f2e675]
          - generic [ref=f2e676]:
            - link "4. Canon EOS R8 Body Mirrorles... 4.6 68 Ratings&8 Reviews ₹1,14,990 19% off" [ref=f2e677] [cursor=pointer]:
              - /url: /canon-eos-r8-body-mirrorless-camera-only/p/itm950a990720df3?pid=DLLGQAQYC4TWGN8R&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e678]: 4. Canon EOS R8 Body Mirrorles...
              - generic [ref=f2e680]:
                - generic [ref=f2e681]: "4.6"
                - generic [ref=f2e683]:
                  - text: 68 Ratings
                  - generic [ref=f2e684]: "&8 Reviews"
              - generic [ref=f2e686]:
                - generic [ref=f2e687]: ₹1,14,990
                - generic [ref=f2e688]: 19% off
            - list [ref=f2e689]:
              - listitem [ref=f2e690]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e691]: "Sensor Type: CMOS"
              - listitem [ref=f2e692]: WiFi Available
        - generic [ref=f2e693]:
          - generic [ref=f2e694]: Most Helpful Review
          - generic [ref=f2e696]:
            - generic [ref=f2e697]:
              - generic [ref=f2e698]: "4"
              - paragraph [ref=f2e700]: Nice product
            - generic [ref=f2e701]: Best cameraCons1. Battery backup is very less2. Heating problem3. No bag included
            - generic [ref=f2e706]:
              - paragraph [ref=f2e707]: syed rahim
              - paragraph [ref=f2e712]: Certified Buyer
              - paragraph [ref=f2e713]: Jul, 2024
        - generic [ref=f2e714]:
          - generic [ref=f2e715]: Recent Review
          - generic [ref=f2e717]:
            - generic [ref=f2e718]:
              - generic [ref=f2e719]: "5"
              - paragraph [ref=f2e721]: Just wow!
            - generic [ref=f2e722]: This was a good camera and I got it for a good price in a sale the package was sealed and was delivered 2 days before the promised delivery date.
            - generic [ref=f2e727]:
              - paragraph [ref=f2e728]: Professor Sathian J.D
              - paragraph [ref=f2e733]: Certified Buyer
              - paragraph [ref=f2e734]: Nov, 2024
      - generic [ref=f2e735]:
        - generic [ref=f2e736]:
          - img "SONY Alpha ILCE-6400M/B IN5 Mirrorless Camera with 18-135 mm Zoom Lens Featuring Eye AF and 4K movie recording" [ref=f2e739]
          - generic [ref=f2e740]:
            - link "5. SONY Alpha ILCE-6400M/B IN5... 4.6 1,282 Ratings&153 Reviews ₹87,490 24% off" [ref=f2e741] [cursor=pointer]:
              - /url: /sony-alpha-ilce-6400m-b-in5-mirrorless-camera-18-135-mm-zoom-lens-featuring-eye-af-4k-movie-recording/p/itm8bb8f94012e57?pid=DLLFDJ8AHYXPQKRG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f2e742]: 5. SONY Alpha ILCE-6400M/B IN5...
              - generic [ref=f2e744]:
                - generic [ref=f2e745]: "4.6"
                - generic [ref=f2e747]:
                  - text: 1,282 Ratings
                  - generic [ref=f2e748]: "&153 Reviews"
              - generic [ref=f2e750]:
                - generic [ref=f2e751]: ₹87,490
                - generic [ref=f2e752]: 24% off
            - list [ref=f2e753]:
              - listitem [ref=f2e754]: 4K movies and pro-level features, Natural-looking images that match what you see, Cleaner images even in dim light, Creative movie production, High-resolution 4K recording, Create time-lapse movies, Vlog with useful features, Take advantage of various movie functions, A high resolution LCD monitor with handy touchscreen functions, Incredible image quality, Sophisticated eye recognition and tracking, Persistent tracking ability, High speed continuous shooting with AF/AE tracking, Bluetooth & NFC, Touch Screen
              - listitem [ref=f2e755]: "Effective Pixels: 24.2 MP"
              - listitem [ref=f2e756]: "Sensor Type: CMOS"
        - generic [ref=f2e757]:
          - generic [ref=f2e758]: Most Helpful Review
          - generic [ref=f2e760]:
            - generic [ref=f2e761]:
              - generic [ref=f2e762]: "5"
              - paragraph [ref=f2e764]: Classy product
            - generic [ref=f2e767]:
              - generic [ref=f2e768]: As you know without lenses cameras are nothing. And Sony lenses are very expensive. It's not just a beginner level camera, its more than that, so if you are...
              - generic [ref=f2e769] [cursor=pointer]: Read full review
            - generic [ref=f2e771]:
              - paragraph [ref=f2e772]: Sachin Kumar Jha
              - paragraph [ref=f2e777]: Certified Buyer
              - paragraph [ref=f2e778]: Jul, 2020
        - generic [ref=f2e779]:
          - generic [ref=f2e780]: Recent Review
          - generic [ref=f2e782]:
            - generic [ref=f2e783]:
              - generic [ref=f2e784]: "4"
              - paragraph [ref=f2e786]: Delightful
            - generic [ref=f2e787]: Great quality with 18-135mm lens,If there was video stabilization as well, this camera+lens combo would have been perfect.
            - generic [ref=f2e792]:
              - paragraph [ref=f2e793]: Vivek Kumar
              - paragraph [ref=f2e798]: Certified Buyer
              - paragraph [ref=f2e799]: 5 days ago
  - contentinfo [ref=f2e800]:
    - generic [ref=f2e802]:
      - generic [ref=f2e803]:
        - generic [ref=f2e804]:
          - generic [ref=f2e805]: ABOUT
          - link "Contact Us" [ref=f2e806] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f2e807] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f2e808] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f2e809] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f2e810] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f2e811] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f2e812]:
          - generic [ref=f2e813]: GROUP COMPANIES
          - link "Myntra" [ref=f2e814] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f2e815] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f2e816] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f2e817]:
          - generic [ref=f2e818]: HELP
          - link "Payments" [ref=f2e819] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f2e820] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f2e821] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f2e822] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f2e823]:
          - generic [ref=f2e824]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f2e825] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f2e826] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f2e827] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f2e828] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f2e829] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f2e830] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f2e831] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f2e832] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f2e834]:
          - generic [ref=f2e835]: "Mail Us:"
          - generic [ref=f2e838]:
            - paragraph [ref=f2e839]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e840]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e841]: Clove Embassy Tech Village,
            - paragraph [ref=f2e842]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e843]: Bengaluru, 560103,
            - paragraph [ref=f2e844]: Karnataka, India
          - generic [ref=f2e845]: Social
          - generic [ref=f2e846]:
            - link [ref=f2e848] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f2e851] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f2e854] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f2e857] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f2e860]:
          - generic [ref=f2e861]: "Registered Office Address:"
          - generic [ref=f2e864]:
            - paragraph [ref=f2e865]: Flipkart Internet Private Limited,
            - paragraph [ref=f2e866]: Buildings Alyssa, Begonia &
            - paragraph [ref=f2e867]: Clove Embassy Tech Village,
            - paragraph [ref=f2e868]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f2e869]: Bengaluru, 560103,
            - paragraph [ref=f2e870]: Karnataka, India
            - paragraph [ref=f2e871]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f2e872]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f2e873] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f2e874] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f2e876]:
        - link "Become a Seller" [ref=f2e879] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f2e880]: Advertise
        - link "Gift Cards" [ref=f2e884] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f2e887] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f2e888]: © 2007-2026 Flipkart.com
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
  12  |     for(let i=0; i<7; i++){
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