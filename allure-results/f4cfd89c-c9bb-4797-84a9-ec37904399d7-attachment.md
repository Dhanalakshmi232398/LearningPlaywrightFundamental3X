# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task2.spec.ts >> Verifying DSLR details in Flipkart
- Location: tests\07_WebTables\26Sept_Task2.spec.ts:26:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div.RG5Slk').nth(3).locator('../..').locator('div.hZ3P6w').first()

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e7]:
    - generic [ref=f1e9]:
      - link [ref=f1e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f1e11]
      - link "Explore Plus" [ref=f1e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f1e16]:
      - textbox "Search for products, brands and more" [ref=f1e18]: DSLR Camera
      - button [ref=f1e19] [cursor=pointer]
    - link "Login" [ref=f1e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D7
    - link "Become a Seller" [ref=f1e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f1e32]: More
    - link "Cart" [ref=f1e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f1e50]:
    - generic [ref=f1e51] [cursor=pointer]: Electronics
    - generic [ref=f1e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f1e57] [cursor=pointer]: Men
    - generic [ref=f1e60] [cursor=pointer]: Women
    - generic [ref=f1e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f1e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f1e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f1e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f1e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f1e74]:
    - generic [ref=f1e75]:
      - generic [ref=f1e77]:
        - generic [ref=f1e79]:
          - generic [ref=f1e80]: Filters
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: CATEGORIES
            - generic [ref=f1e87]:
              - img [ref=f1e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f1e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e93]:
              - img [ref=f1e95] [cursor=pointer]
              - link "Cameras" [ref=f1e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e99]:
              - img [ref=f1e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f1e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f1e104]: Brand
          - generic [ref=f1e109]:
            - generic [ref=f1e110]: Price
            - generic [ref=f1e118]:
              - generic [ref=f1e119] [cursor=pointer]
              - generic [ref=f1e126]:
                - generic [ref=f1e127]: .
                - generic [ref=f1e128]: .
                - generic [ref=f1e129]: .
                - generic [ref=f1e130]: .
                - generic [ref=f1e131]: .
                - generic [ref=f1e132]: .
                - generic: .
            - generic [ref=f1e133]:
              - combobox [ref=f1e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f1e136]: to
              - combobox [ref=f1e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f1e139]: Video Resolution
          - generic [ref=f1e144]:
            - generic [ref=f1e145] [cursor=pointer]: Customer Ratings
            - generic [ref=f1e150]:
              - generic "4★ & above" [ref=f1e151] [cursor=pointer]
              - generic "3★ & above" [ref=f1e156] [cursor=pointer]
              - generic "2★ & above" [ref=f1e161] [cursor=pointer]
              - generic "1★ & above" [ref=f1e166] [cursor=pointer]
          - generic [ref=f1e171]: Lens Mount
          - generic [ref=f1e176]: Mega Pixel
          - generic [ref=f1e181]: Effective Pixels
          - generic [ref=f1e186]: Sensor Size
          - generic [ref=f1e191]: Shutter Speed
          - generic [ref=f1e196]: Type
          - generic [ref=f1e201]: Color
          - generic [ref=f1e206]: Discount
          - generic [ref=f1e211]:
            - generic [ref=f1e212] [cursor=pointer]
            - generic [ref=f1e217]: "?"
          - generic [ref=f1e219]: Number of Lens
          - generic [ref=f1e224]: FPS in Burst Mode
          - generic [ref=f1e229]: Country Of Origin
          - generic [ref=f1e234]:
            - generic [ref=f1e235] [cursor=pointer]: Offers
            - generic [ref=f1e240]:
              - generic "Buy More, Save More" [ref=f1e241] [cursor=pointer]
              - generic "Special Price" [ref=f1e246] [cursor=pointer]
          - generic [ref=f1e251]: Maximum ISO
          - generic [ref=f1e256]: Maximum Shutter Speed
          - generic [ref=f1e261]: Availability
          - generic [ref=f1e266]: GST Invoice Available
          - generic [ref=f1e271]: Features
        - link "Need help? Help me decide Buying Guide" [ref=f1e277] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f1e278]: Need help?
          - generic [ref=f1e279]: Help me decide
          - img "Buying Guide" [ref=f1e282]
      - generic [ref=f1e283]:
        - generic [ref=f1e286]:
          - generic [ref=f1e287]:
            - link "Home" [ref=f1e289] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f1e293] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f1e297] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f1e301] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f1e302]: Showing 145 – 147 of 147 results for "DSLR Camera"
          - generic [ref=f1e303]:
            - generic [ref=f1e304]: Sort By
            - generic [ref=f1e305]: Relevance
            - generic [ref=f1e306] [cursor=pointer]: Popularity
            - generic [ref=f1e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e309] [cursor=pointer]: Newest First
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f1e314] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=6d7f7cdd-1abb-4a00-9046-3a9466b15914.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=6pxuw91suo0000001790527283809&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f1e319]
          - generic [ref=f1e324]:
            - generic [ref=f1e325]:
              - generic [ref=f1e326]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f1e328]:
                - listitem [ref=f1e329]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e330]: "• Sensor Type: CMOS"
                - listitem [ref=f1e331]: • WiFi Available
                - listitem [ref=f1e332]: • 4:2:0, 10bit
                - listitem [ref=f1e333]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f1e334]:
              - generic [ref=f1e336]:
                - generic [ref=f1e337]: ₹2,85,999
                - generic [ref=f1e338]: ₹2,89,990
                - generic [ref=f1e339]: 1% off
              - generic [ref=f1e340]: Only 1 left
              - generic [ref=f1e344]:
                - generic [ref=f1e345]: Upto
                - generic [ref=f1e346]: ₹58,650
                - generic [ref=f1e347]: Off on Exchange
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f1e352] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=6d7f7cdd-1abb-4a00-9046-3a9466b15914.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=6pxuw91suo0000001790527283809&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f1e357]
          - generic [ref=f1e362]:
            - generic [ref=f1e363]:
              - generic [ref=f1e364]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f1e366]:
                - listitem [ref=f1e367]: "• Effective Pixels: 50 MP"
                - listitem [ref=f1e368]: "• Sensor Type: CMOS"
                - listitem [ref=f1e369]: • WiFi Available
                - listitem [ref=f1e370]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f1e371]: • 2 Years Warranty
            - generic [ref=f1e372]:
              - generic [ref=f1e374]:
                - generic [ref=f1e375]: ₹4,70,990
                - generic [ref=f1e376]: ₹5,29,990
                - generic [ref=f1e377]: 11% off
              - generic [ref=f1e380]: Only 3 left
              - generic [ref=f1e384]:
                - generic [ref=f1e385]: Upto
                - generic [ref=f1e386]: ₹58,650
                - generic [ref=f1e387]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f1e392] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=6d7f7cdd-1abb-4a00-9046-3a9466b15914.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=6pxuw91suo0000001790527283809&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f1e397]
          - generic [ref=f1e402]:
            - generic [ref=f1e403]:
              - generic [ref=f1e404]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f1e406]:
                - listitem [ref=f1e407]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f1e408]: "• Effective Pixels: 50 MP"
                - listitem [ref=f1e409]: "• Sensor Type: CMOS"
                - listitem [ref=f1e410]: • WiFi Available
                - listitem [ref=f1e411]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f1e412]: • 2 Years Warranty
            - generic [ref=f1e413]:
              - generic [ref=f1e415]:
                - generic [ref=f1e416]: ₹4,70,990
                - generic [ref=f1e417]: ₹5,59,990
                - generic [ref=f1e418]: 15% off
              - generic [ref=f1e419]: Only 3 left
              - generic [ref=f1e423]:
                - generic [ref=f1e424]: Upto
                - generic [ref=f1e425]: ₹58,650
                - generic [ref=f1e426]: Off on Exchange
        - generic [ref=f1e429]:
          - generic [ref=f1e430]: Page 7 of 7
          - navigation [ref=f1e431]:
            - link "Previous" [ref=f1e432] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f1e433] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e434] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e435] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e436] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e437] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f1e438] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f1e439] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f1e441]:
      - generic [ref=f1e442]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e443]:
        - generic [ref=f1e444]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e447]
          - generic [ref=f1e448]:
            - link "1. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e449] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e450]: 1. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e452]:
                - generic [ref=f1e453]: "4.5"
                - generic [ref=f1e455]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e456]: "&154 Reviews"
              - generic [ref=f1e458]:
                - generic [ref=f1e459]: ₹78,990
                - generic [ref=f1e460]: 16% off
            - list [ref=f1e461]:
              - listitem [ref=f1e462]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e463]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e464]: "Sensor Type: CMOS"
        - generic [ref=f1e465]:
          - generic [ref=f1e466]: Most Helpful Review
          - generic [ref=f1e468]:
            - generic [ref=f1e469]:
              - generic [ref=f1e470]: "5"
              - paragraph [ref=f1e472]: Brilliant
            - generic [ref=f1e475]:
              - generic [ref=f1e476]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e477] [cursor=pointer]: Read full review
            - generic [ref=f1e479]:
              - paragraph [ref=f1e480]: Satyajit Acharjee
              - paragraph [ref=f1e485]: Certified Buyer
              - paragraph [ref=f1e486]: Aug, 2019
        - generic [ref=f1e487]:
          - generic [ref=f1e488]: Recent Review
          - generic [ref=f1e490]:
            - generic [ref=f1e491]:
              - generic [ref=f1e492]: "5"
              - paragraph [ref=f1e494]: Perfect product!
            - generic [ref=f1e495]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e500]:
              - paragraph [ref=f1e501]: Flipkart Customer
              - paragraph [ref=f1e506]: Certified Buyer
              - paragraph [ref=f1e507]: 3 months ago
      - generic [ref=f1e508]:
        - generic [ref=f1e509]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e512]
          - generic [ref=f1e513]:
            - link "2. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e514] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e515]: 2. Toy Imagine Top Quality Kid...
              - generic [ref=f1e517]:
                - generic [ref=f1e518]: "3.3"
                - generic [ref=f1e520]:
                  - text: 15 Ratings
                  - generic [ref=f1e521]: "&2 Reviews"
              - generic [ref=f1e523]:
                - generic [ref=f1e524]: ₹619
                - generic [ref=f1e525]: 61% off
            - list [ref=f1e526]:
              - listitem [ref=f1e527]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e528]: "Sensor Type: CCD"
              - listitem [ref=f1e529]: "1080"
        - generic [ref=f1e530]:
          - generic [ref=f1e531]: Most Helpful Review
          - generic [ref=f1e533]:
            - generic [ref=f1e534]:
              - generic [ref=f1e535]: "1"
              - paragraph [ref=f1e537]: Did not meet expectations
            - generic [ref=f1e538]: The battery is draining quickly.
            - generic [ref=f1e543]:
              - paragraph [ref=f1e544]: Komal Kumar Sahu
              - paragraph [ref=f1e549]: Certified Buyer
              - paragraph [ref=f1e550]: 3 months ago
        - generic [ref=f1e551]:
          - generic [ref=f1e552]: Recent Review
          - generic [ref=f1e554]:
            - generic [ref=f1e555]:
              - generic [ref=f1e556]: "1"
              - paragraph [ref=f1e558]: Did not meet expectations
            - generic [ref=f1e559]: The battery is draining quickly.
            - generic [ref=f1e564]:
              - paragraph [ref=f1e565]: Komal Kumar Sahu
              - paragraph [ref=f1e570]: Certified Buyer
              - paragraph [ref=f1e571]: 3 months ago
      - generic [ref=f1e572]:
        - generic [ref=f1e573]:
          - img "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera" [ref=f1e576]
          - generic [ref=f1e577]:
            - link "3. KMUYO 6 PACK OF 2 MINI PTZ ... 5 1 Ratings&1 Reviews ₹3,430 57% off" [ref=f1e578] [cursor=pointer]:
              - /url: /kmuyo-6-pack-2-mini-ptz-camera-dslr-ip/p/itmac7027059ac79?pid=DLLHZGYJQNBCMCDZ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e579]: 3. KMUYO 6 PACK OF 2 MINI PTZ ...
              - generic [ref=f1e581]:
                - generic [ref=f1e582]: "5"
                - generic [ref=f1e584]:
                  - text: 1 Ratings
                  - generic [ref=f1e585]: "&1 Reviews"
              - generic [ref=f1e587]:
                - generic [ref=f1e588]: ₹3,430
                - generic [ref=f1e589]: 57% off
            - list [ref=f1e590]:
              - listitem [ref=f1e591]: "Effective Pixels: 12 MP"
              - listitem [ref=f1e592]: "Sensor Type: CMOS"
              - listitem [ref=f1e593]: WiFi Available
        - generic [ref=f1e594]:
          - generic [ref=f1e595]: Most Helpful Review
          - generic [ref=f1e597]:
            - generic [ref=f1e598]:
              - generic [ref=f1e599]: "5"
              - paragraph [ref=f1e601]: Best in the market!
            - generic [ref=f1e602]: nice good excellent
            - generic [ref=f1e607]:
              - paragraph [ref=f1e608]: Flipkart Customer
              - paragraph [ref=f1e613]: Certified Buyer
              - paragraph [ref=f1e614]: 1 month ago
        - generic [ref=f1e615]:
          - generic [ref=f1e616]: Recent Review
          - generic [ref=f1e618]:
            - generic [ref=f1e619]:
              - generic [ref=f1e620]: "5"
              - paragraph [ref=f1e622]: Best in the market!
            - generic [ref=f1e623]: nice good excellent
            - generic [ref=f1e628]:
              - paragraph [ref=f1e629]: Flipkart Customer
              - paragraph [ref=f1e634]: Certified Buyer
              - paragraph [ref=f1e635]: 1 month ago
      - generic [ref=f1e636]:
        - generic [ref=f1e637]:
          - img "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens" [ref=f1e640]
          - generic [ref=f1e641]:
            - link "4. Canon EOS 1500D DSLR Camera... 4.5 17,241 Ratings&2,254 Reviews ₹40,299 19% off" [ref=f1e642] [cursor=pointer]:
              - /url: /canon-eos-1500d-dslr-camera-body-18-55-mm-ii-lens/p/itm033175ceb4ddd?pid=DLLFAEWE22ZAERXG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e643]: 4. Canon EOS 1500D DSLR Camera...
              - generic [ref=f1e645]:
                - generic [ref=f1e646]: "4.5"
                - generic [ref=f1e648]:
                  - text: 17,241 Ratings
                  - generic [ref=f1e649]: "&2,254 Reviews"
              - generic [ref=f1e651]:
                - generic [ref=f1e652]: ₹40,299
                - generic [ref=f1e653]: 19% off
            - list [ref=f1e654]:
              - listitem [ref=f1e655]: Self-Timer, Type C and Mini HDMI, 9 point AF with 1 centre cross-type AF point, Standard ISO 100 - 6400 (expandable to 12 800), Wi-Fi / NFC supported, Full HD video with fully manual control and selectable frame rates, 1080p recording at 30p, optical viewfinder
              - listitem [ref=f1e656]: "Effective Pixels: 24.1 MP"
              - listitem [ref=f1e657]: "Sensor Type: CMOS"
        - generic [ref=f1e658]:
          - generic [ref=f1e659]: Most Helpful Review
          - generic [ref=f1e661]:
            - generic [ref=f1e662]:
              - generic [ref=f1e663]: "5"
              - paragraph [ref=f1e665]: Just wow!
            - generic [ref=f1e666]: wonderful camera at this price!
            - generic [ref=f1e671]:
              - paragraph [ref=f1e672]: Flipkart Customer
              - paragraph [ref=f1e677]: Certified Buyer
              - paragraph [ref=f1e678]: Jun, 2019
        - generic [ref=f1e679]:
          - generic [ref=f1e680]: Recent Review
          - generic [ref=f1e682]:
            - generic [ref=f1e683]:
              - generic [ref=f1e684]: "1"
              - paragraph [ref=f1e686]: Useless product
            - generic [ref=f1e687]: Battery performance is not good.
            - generic [ref=f1e692]:
              - paragraph [ref=f1e693]: Anil Kumar
              - paragraph [ref=f1e698]: Certified Buyer
              - paragraph [ref=f1e699]: 7 months ago
      - generic [ref=f1e700]:
        - generic [ref=f1e701]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e704]
          - generic [ref=f1e705]:
            - link "5. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e706] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e707]: 5. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e709]:
                - generic [ref=f1e710]: "4.7"
                - generic [ref=f1e712]:
                  - text: 19 Ratings
                  - generic [ref=f1e713]: "&2 Reviews"
              - generic [ref=f1e715]:
                - generic [ref=f1e716]: ₹1,93,053
                - generic [ref=f1e717]: 17% off
            - list [ref=f1e718]:
              - listitem [ref=f1e719]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e720]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e721]: "Sensor Type: CMOS"
        - generic [ref=f1e722]:
          - generic [ref=f1e723]: Most Helpful Review
          - generic [ref=f1e725]:
            - generic [ref=f1e726]:
              - generic [ref=f1e727]: "5"
              - paragraph [ref=f1e729]: Mind-blowing purchase
            - generic [ref=f1e732]:
              - generic [ref=f1e733]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e734] [cursor=pointer]: Read full review
            - generic [ref=f1e736]:
              - paragraph [ref=f1e737]: SANTANU SENGUPTA
              - paragraph [ref=f1e742]: Certified Buyer
              - paragraph [ref=f1e743]: Sep, 2020
        - generic [ref=f1e744]:
          - generic [ref=f1e745]: Recent Review
          - generic [ref=f1e747]:
            - generic [ref=f1e748]:
              - generic [ref=f1e749]: "5"
              - paragraph [ref=f1e751]: Fabulous!
            - generic [ref=f1e752]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e757]:
              - paragraph [ref=f1e758]: Dr Vineet Marwaha
              - paragraph [ref=f1e763]: Certified Buyer
              - paragraph [ref=f1e764]: Jul, 2025
  - contentinfo [ref=f1e765]:
    - generic [ref=f1e767]:
      - generic [ref=f1e768]:
        - generic [ref=f1e769]:
          - generic [ref=f1e770]: ABOUT
          - link "Contact Us" [ref=f1e771] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e772] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e773] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e774] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e775] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e776] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e777]:
          - generic [ref=f1e778]: GROUP COMPANIES
          - link "Myntra" [ref=f1e779] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e780] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e781] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e782]:
          - generic [ref=f1e783]: HELP
          - link "Payments" [ref=f1e784] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e785] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e786] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e787] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e788]:
          - generic [ref=f1e789]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e790] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e791] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e792] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e793] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e794] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e795] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e796] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e797] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e799]:
          - generic [ref=f1e800]: "Mail Us:"
          - generic [ref=f1e803]:
            - paragraph [ref=f1e804]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e805]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e806]: Clove Embassy Tech Village,
            - paragraph [ref=f1e807]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e808]: Bengaluru, 560103,
            - paragraph [ref=f1e809]: Karnataka, India
          - generic [ref=f1e810]: Social
          - generic [ref=f1e811]:
            - link [ref=f1e813] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e816] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e819] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e822] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e825]:
          - generic [ref=f1e826]: "Registered Office Address:"
          - generic [ref=f1e829]:
            - paragraph [ref=f1e830]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e831]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e832]: Clove Embassy Tech Village,
            - paragraph [ref=f1e833]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e834]: Bengaluru, 560103,
            - paragraph [ref=f1e835]: Karnataka, India
            - paragraph [ref=f1e836]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e837]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e838] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e839] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e841]:
        - link "Become a Seller" [ref=f1e844] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e845]: Advertise
        - link "Gift Cards" [ref=f1e849] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e852] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e853]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1  | import {test, Page} from '@playwright/test';
  2  | 
  3  | 
  4  | async function printCameraNamePrice(page: Page, pageCount: number): Promise<void> {
  5  |   for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
  6  |     const cameraNames = page.locator('div.RG5Slk');
  7  | 
  8  |     for (let index = 0; index < await cameraNames.count(); index++) {
  9  |       const camera = cameraNames.nth(index);
  10 |       const name = (await camera.innerText()).trim();
  11 |       const priceLocator = camera.locator('xpath=../..').locator('div.hZ3P6w');
> 12 |       const price = await priceLocator.count() ? (await priceLocator.first().innerText()).trim() : 'Price unavailable';
     |                                                                              ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  13 |       console.log(`Page ${pageNumber} | ${name} | ${price}`);
  14 |     }
  15 | 
  16 |     if (pageNumber < pageCount) {
  17 |       const next = page.getByText('Next', { exact: true });
  18 |       await Promise.all([
  19 |         page.waitForURL(url => url.searchParams.get('page') === String(pageNumber + 1)),
  20 |         next.click(),
  21 |       ]);
  22 |     }
  23 |   }
  24 | }
  25 | 
  26 | test ("Verifying DSLR details in Flipkart", async ({page}) => {
  27 | 
  28 | 
  29 |     await page.goto("https://www.flipkart.com/");
  30 |     await page.locator("//span[@class='b3wTlE']").click();
  31 |     await page.waitForTimeout(5000);
  32 |     const searchBar = page.locator("//input[@name='q']").nth(0);
  33 |     await searchBar.click();
  34 |     await searchBar.fill("DSLR Camera");
  35 |     await searchBar.press('Enter');
  36 | 
  37 |     await printCameraNamePrice(page, 7);
  38 | 
  39 | });
```