# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\26Sept_Task2.spec.ts >> Verifying DSLR details in Flipkart
- Location: tests\07_WebTables\26Sept_Task2.spec.ts:41:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'hZ3P6w DeU9vF\']').nth(6)

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
          - generic [ref=f1e302]: Showing 145 – 148 of 148 results for "DSLR Camera"
          - generic [ref=f1e303]:
            - generic [ref=f1e304]: Sort By
            - generic [ref=f1e305]: Relevance
            - generic [ref=f1e306] [cursor=pointer]: Popularity
            - generic [ref=f1e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e309] [cursor=pointer]: Newest First
        - 'link "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only • Effective Pixels: 61 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹2,68,990 ₹2,93,990 8% off Only 2 left Upto ₹58,650 Off on Exchange" [ref=f1e314] [cursor=pointer]':
          - /url: /sony-ilce-7cr-sq-in5-mirrorless-camera-body-only/p/itmb6e85a95a474b?pid=DLLGVKJEQZ5MSERS&lid=LSTDLLGVKJEQZ5MSERSBQTO6P&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_145&otracker=search&otracker1=search&fm=Search&iid=16c56497-4d09-4e05-8a79-ffd2968c9592.DLLGVKJEQZ5MSERS.SEARCH&ppt=sp&ppn=sp&ssid=g2lxq7mgu80000001790542127080&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only" [ref=f1e319]
          - generic [ref=f1e324]:
            - generic [ref=f1e325]:
              - generic [ref=f1e326]: SONY ILCE-7CR/SQ IN5 Mirrorless Camera Body Only
              - list [ref=f1e328]:
                - listitem [ref=f1e329]: "• Effective Pixels: 61 MP"
                - listitem [ref=f1e330]: "• Sensor Type: CMOS"
                - listitem [ref=f1e331]: • WiFi Available
                - listitem [ref=f1e332]: • 4K
                - listitem [ref=f1e333]: • 2 Years Warranty
            - generic [ref=f1e334]:
              - generic [ref=f1e336]:
                - generic [ref=f1e337]: ₹2,68,990
                - generic [ref=f1e338]: ₹2,93,990
                - generic [ref=f1e339]: 8% off
              - generic [ref=f1e342]: Only 2 left
              - generic [ref=f1e346]:
                - generic [ref=f1e347]: Upto
                - generic [ref=f1e348]: ₹58,650
                - generic [ref=f1e349]: Off on Exchange
        - 'link "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4:2:0, 10bit • 2 years standard domestic warranty and 1 year extended warranty (upon registration) ₹2,85,999 ₹2,89,990 1% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f1e354] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx2b-festive-bundle-mirrorless-camera-body-only/p/itm72009e3a307cc?pid=DLLHGR2CYZP5YTZW&lid=LSTDLLHGR2CYZP5YTZWRSOEUR&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_146&otracker=search&otracker1=search&fm=Search&iid=16c56497-4d09-4e05-8a79-ffd2968c9592.DLLHGR2CYZP5YTZW.SEARCH&ppt=sp&ppn=sp&ssid=g2lxq7mgu80000001790542127080&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only" [ref=f1e359]
          - generic [ref=f1e364]:
            - generic [ref=f1e365]:
              - generic [ref=f1e366]: SONY FX ILME-FX2B_festive_bundle Mirrorless Camera Body Only
              - list [ref=f1e368]:
                - listitem [ref=f1e369]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e370]: "• Sensor Type: CMOS"
                - listitem [ref=f1e371]: • WiFi Available
                - listitem [ref=f1e372]: • 4:2:0, 10bit
                - listitem [ref=f1e373]: • 2 years standard domestic warranty and 1 year extended warranty (upon registration)
            - generic [ref=f1e374]:
              - generic [ref=f1e376]:
                - generic [ref=f1e377]: ₹2,85,999
                - generic [ref=f1e378]: ₹2,89,990
                - generic [ref=f1e379]: 1% off
              - generic [ref=f1e380]: Only 1 left
              - generic [ref=f1e384]:
                - generic [ref=f1e385]: Upto
                - generic [ref=f1e386]: ₹58,650
                - generic [ref=f1e387]: Off on Exchange
        - 'link "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless SONY Alpha Alpha 1 Mirrorless Camera Mirrorless • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,29,990 11% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f1e392] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera/p/itmb96d1148207d9?pid=DLLG6DTGTTFSVF9V&lid=LSTDLLG6DTGTTFSVF9VFEUCQ7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_147&otracker=search&otracker1=search&fm=Search&iid=16c56497-4d09-4e05-8a79-ffd2968c9592.DLLG6DTGTTFSVF9V.SEARCH&ppt=sp&ppn=sp&ssid=g2lxq7mgu80000001790542127080&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha Alpha 1 Mirrorless Camera Mirrorless" [ref=f1e397]
          - generic [ref=f1e402]:
            - generic [ref=f1e403]:
              - generic [ref=f1e404]: SONY Alpha Alpha 1 Mirrorless Camera Mirrorless
              - list [ref=f1e406]:
                - listitem [ref=f1e407]: "• Effective Pixels: 50 MP"
                - listitem [ref=f1e408]: "• Sensor Type: CMOS"
                - listitem [ref=f1e409]: • WiFi Available
                - listitem [ref=f1e410]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f1e411]: • 2 Years Warranty
            - generic [ref=f1e412]:
              - generic [ref=f1e414]:
                - generic [ref=f1e415]: ₹4,70,990
                - generic [ref=f1e416]: ₹5,29,990
                - generic [ref=f1e417]: 11% off
              - generic [ref=f1e420]: Only 3 left
              - generic [ref=f1e424]:
                - generic [ref=f1e425]: Upto
                - generic [ref=f1e426]: ₹58,650
                - generic [ref=f1e427]: Off on Exchange
        - 'link "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (... • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking • Effective Pixels: 50 MP • Sensor Type: CMOS • WiFi Available • Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264 • 2 Years Warranty ₹4,70,990 ₹5,59,990 15% off Only 3 left Upto ₹58,650 Off on Exchange" [ref=f1e432] [cursor=pointer]':
          - /url: /sony-alpha-1-mirrorless-camera-body-only-30-fps-50-1-mp-8k-30p-4k-120p-rechargeable-battery-np-fz100-black/p/itmb96d1148207d9?pid=DLLH4FQURCFKS7ZT&lid=LSTDLLH4FQURCFKS7ZTTFBMYJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_7_148&otracker=search&otracker1=search&fm=Search&iid=16c56497-4d09-4e05-8a79-ffd2968c9592.DLLH4FQURCFKS7ZT.SEARCH&ppt=sp&ppn=sp&ssid=g2lxq7mgu80000001790542127080&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (..." [ref=f1e437]
          - generic [ref=f1e442]:
            - generic [ref=f1e443]:
              - generic [ref=f1e444]: SONY Alpha 1 Mirrorless Camera Body Only | 30 FPS | 50.1 MP | 8K 30P, 4K 120P + Rechargeable Battery (...
              - list [ref=f1e446]:
                - listitem [ref=f1e447]: • | 30 FPS | 50.1 MP | 8K 30P, 4K 120P | Real-time Eye AF, Real time Tracking
                - listitem [ref=f1e448]: "• Effective Pixels: 50 MP"
                - listitem [ref=f1e449]: "• Sensor Type: CMOS"
                - listitem [ref=f1e450]: • WiFi Available
                - listitem [ref=f1e451]: "• Video Compression XAVC S: MPEG-4 AVC/H.264, AVCHD: MPEG-4 AVC/H.264"
                - listitem [ref=f1e452]: • 2 Years Warranty
            - generic [ref=f1e453]:
              - generic [ref=f1e455]:
                - generic [ref=f1e456]: ₹4,70,990
                - generic [ref=f1e457]: ₹5,59,990
                - generic [ref=f1e458]: 15% off
              - generic [ref=f1e459]: Only 3 left
              - generic [ref=f1e463]:
                - generic [ref=f1e464]: Upto
                - generic [ref=f1e465]: ₹58,650
                - generic [ref=f1e466]: Off on Exchange
        - generic [ref=f1e469]:
          - generic [ref=f1e470]: Page 7 of 7
          - navigation [ref=f1e471]:
            - link "Previous" [ref=f1e472] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f1e473] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e474] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e475] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e476] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e477] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
            - link "6" [ref=f1e478] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "7" [ref=f1e479] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=7
    - generic [ref=f1e481]:
      - generic [ref=f1e482]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e483]:
        - generic [ref=f1e484]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f1e487]
          - generic [ref=f1e488]:
            - link "1. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f1e489] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e490]: 1. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f1e492]:
                - generic [ref=f1e493]: "4.1"
                - generic [ref=f1e495]:
                  - text: 21 Ratings
                  - generic [ref=f1e496]: "&6 Reviews"
              - generic [ref=f1e498]:
                - generic [ref=f1e499]: ₹1,09,999
                - generic [ref=f1e500]: 11% off
            - list [ref=f1e501]:
              - listitem [ref=f1e502]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f1e503]: "Sensor Type: CMOS"
              - listitem [ref=f1e504]: Full HD
        - generic [ref=f1e505]:
          - generic [ref=f1e506]: Most Helpful Review
          - generic [ref=f1e508]:
            - generic [ref=f1e509]:
              - generic [ref=f1e510]: "5"
              - paragraph [ref=f1e512]: Shubham sanjay khanvilkar
            - generic [ref=f1e513]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f1e518]:
              - paragraph [ref=f1e519]: Shubham sanjay khanvilkar
              - paragraph [ref=f1e520]: Apr, 2016
        - generic [ref=f1e521]:
          - generic [ref=f1e522]: Recent Review
          - generic [ref=f1e524]:
            - generic [ref=f1e525]:
              - generic [ref=f1e526]: "5"
              - paragraph [ref=f1e528]: Brilliant
            - generic [ref=f1e529]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f1e534]:
              - paragraph [ref=f1e535]: Avijit Dasgupta
              - paragraph [ref=f1e540]: Certified Buyer
              - paragraph [ref=f1e541]: Oct, 2018
      - generic [ref=f1e542]:
        - generic [ref=f1e543]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e546]
          - generic [ref=f1e547]:
            - link "2. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e548] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e549]: 2. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e551]:
                - generic [ref=f1e552]: "4.5"
                - generic [ref=f1e554]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e555]: "&154 Reviews"
              - generic [ref=f1e557]:
                - generic [ref=f1e558]: ₹78,990
                - generic [ref=f1e559]: 16% off
            - list [ref=f1e560]:
              - listitem [ref=f1e561]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e562]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e563]: "Sensor Type: CMOS"
        - generic [ref=f1e564]:
          - generic [ref=f1e565]: Most Helpful Review
          - generic [ref=f1e567]:
            - generic [ref=f1e568]:
              - generic [ref=f1e569]: "5"
              - paragraph [ref=f1e571]: Brilliant
            - generic [ref=f1e574]:
              - generic [ref=f1e575]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e576] [cursor=pointer]: Read full review
            - generic [ref=f1e578]:
              - paragraph [ref=f1e579]: Satyajit Acharjee
              - paragraph [ref=f1e584]: Certified Buyer
              - paragraph [ref=f1e585]: Aug, 2019
        - generic [ref=f1e586]:
          - generic [ref=f1e587]: Recent Review
          - generic [ref=f1e589]:
            - generic [ref=f1e590]:
              - generic [ref=f1e591]: "5"
              - paragraph [ref=f1e593]: Perfect product!
            - generic [ref=f1e594]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e599]:
              - paragraph [ref=f1e600]: Flipkart Customer
              - paragraph [ref=f1e605]: Certified Buyer
              - paragraph [ref=f1e606]: 3 months ago
      - generic [ref=f1e607]:
        - generic [ref=f1e608]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e611]
          - generic [ref=f1e612]:
            - link "3. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e613] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e614]: 3. Toy Imagine Top Quality Kid...
              - generic [ref=f1e616]:
                - generic [ref=f1e617]: "3.3"
                - generic [ref=f1e619]:
                  - text: 15 Ratings
                  - generic [ref=f1e620]: "&2 Reviews"
              - generic [ref=f1e622]:
                - generic [ref=f1e623]: ₹619
                - generic [ref=f1e624]: 61% off
            - list [ref=f1e625]:
              - listitem [ref=f1e626]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e627]: "Sensor Type: CCD"
              - listitem [ref=f1e628]: "1080"
        - generic [ref=f1e629]:
          - generic [ref=f1e630]: Most Helpful Review
          - generic [ref=f1e632]:
            - generic [ref=f1e633]:
              - generic [ref=f1e634]: "1"
              - paragraph [ref=f1e636]: Did not meet expectations
            - generic [ref=f1e637]: The battery is draining quickly.
            - generic [ref=f1e642]:
              - paragraph [ref=f1e643]: Komal Kumar Sahu
              - paragraph [ref=f1e648]: Certified Buyer
              - paragraph [ref=f1e649]: 3 months ago
        - generic [ref=f1e650]:
          - generic [ref=f1e651]: Recent Review
          - generic [ref=f1e653]:
            - generic [ref=f1e654]:
              - generic [ref=f1e655]: "1"
              - paragraph [ref=f1e657]: Did not meet expectations
            - generic [ref=f1e658]: The battery is draining quickly.
            - generic [ref=f1e663]:
              - paragraph [ref=f1e664]: Komal Kumar Sahu
              - paragraph [ref=f1e669]: Certified Buyer
              - paragraph [ref=f1e670]: 3 months ago
      - generic [ref=f1e671]:
        - generic [ref=f1e672]:
          - img "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera" [ref=f1e675]
          - generic [ref=f1e676]:
            - link "4. KMUYO 6 PACK OF 2 MINI PTZ ... 5 1 Ratings&1 Reviews ₹3,430 57% off" [ref=f1e677] [cursor=pointer]:
              - /url: /kmuyo-6-pack-2-mini-ptz-camera-dslr-ip/p/itmac7027059ac79?pid=DLLHZGYJQNBCMCDZ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e678]: 4. KMUYO 6 PACK OF 2 MINI PTZ ...
              - generic [ref=f1e680]:
                - generic [ref=f1e681]: "5"
                - generic [ref=f1e683]:
                  - text: 1 Ratings
                  - generic [ref=f1e684]: "&1 Reviews"
              - generic [ref=f1e686]:
                - generic [ref=f1e687]: ₹3,430
                - generic [ref=f1e688]: 57% off
            - list [ref=f1e689]:
              - listitem [ref=f1e690]: "Effective Pixels: 12 MP"
              - listitem [ref=f1e691]: "Sensor Type: CMOS"
              - listitem [ref=f1e692]: WiFi Available
        - generic [ref=f1e693]:
          - generic [ref=f1e694]: Most Helpful Review
          - generic [ref=f1e696]:
            - generic [ref=f1e697]:
              - generic [ref=f1e698]: "5"
              - paragraph [ref=f1e700]: Best in the market!
            - generic [ref=f1e701]: nice good excellent
            - generic [ref=f1e706]:
              - paragraph [ref=f1e707]: Flipkart Customer
              - paragraph [ref=f1e712]: Certified Buyer
              - paragraph [ref=f1e713]: 1 month ago
        - generic [ref=f1e714]:
          - generic [ref=f1e715]: Recent Review
          - generic [ref=f1e717]:
            - generic [ref=f1e718]:
              - generic [ref=f1e719]: "5"
              - paragraph [ref=f1e721]: Best in the market!
            - generic [ref=f1e722]: nice good excellent
            - generic [ref=f1e727]:
              - paragraph [ref=f1e728]: Flipkart Customer
              - paragraph [ref=f1e733]: Certified Buyer
              - paragraph [ref=f1e734]: 1 month ago
      - generic [ref=f1e735]:
        - generic [ref=f1e736]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e739]
          - generic [ref=f1e740]:
            - link "5. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e741] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e742]: 5. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e744]:
                - generic [ref=f1e745]: "4.7"
                - generic [ref=f1e747]:
                  - text: 19 Ratings
                  - generic [ref=f1e748]: "&2 Reviews"
              - generic [ref=f1e750]:
                - generic [ref=f1e751]: ₹1,93,053
                - generic [ref=f1e752]: 17% off
            - list [ref=f1e753]:
              - listitem [ref=f1e754]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e755]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e756]: "Sensor Type: CMOS"
        - generic [ref=f1e757]:
          - generic [ref=f1e758]: Most Helpful Review
          - generic [ref=f1e760]:
            - generic [ref=f1e761]:
              - generic [ref=f1e762]: "5"
              - paragraph [ref=f1e764]: Mind-blowing purchase
            - generic [ref=f1e767]:
              - generic [ref=f1e768]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e769] [cursor=pointer]: Read full review
            - generic [ref=f1e771]:
              - paragraph [ref=f1e772]: SANTANU SENGUPTA
              - paragraph [ref=f1e777]: Certified Buyer
              - paragraph [ref=f1e778]: Sep, 2020
        - generic [ref=f1e779]:
          - generic [ref=f1e780]: Recent Review
          - generic [ref=f1e782]:
            - generic [ref=f1e783]:
              - generic [ref=f1e784]: "5"
              - paragraph [ref=f1e786]: Fabulous!
            - generic [ref=f1e787]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e792]:
              - paragraph [ref=f1e793]: Dr Vineet Marwaha
              - paragraph [ref=f1e798]: Certified Buyer
              - paragraph [ref=f1e799]: Jul, 2025
  - contentinfo [ref=f1e800]:
    - generic [ref=f1e802]:
      - generic [ref=f1e803]:
        - generic [ref=f1e804]:
          - generic [ref=f1e805]: ABOUT
          - link "Contact Us" [ref=f1e806] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e807] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e808] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e809] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e810] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e811] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e812]:
          - generic [ref=f1e813]: GROUP COMPANIES
          - link "Myntra" [ref=f1e814] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e815] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e816] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e817]:
          - generic [ref=f1e818]: HELP
          - link "Payments" [ref=f1e819] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e820] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e821] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e822] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e823]:
          - generic [ref=f1e824]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e825] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e826] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e827] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e828] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e829] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e830] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e831] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e832] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e834]:
          - generic [ref=f1e835]: "Mail Us:"
          - generic [ref=f1e838]:
            - paragraph [ref=f1e839]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e840]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e841]: Clove Embassy Tech Village,
            - paragraph [ref=f1e842]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e843]: Bengaluru, 560103,
            - paragraph [ref=f1e844]: Karnataka, India
          - generic [ref=f1e845]: Social
          - generic [ref=f1e846]:
            - link [ref=f1e848] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e851] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e854] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e857] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e860]:
          - generic [ref=f1e861]: "Registered Office Address:"
          - generic [ref=f1e864]:
            - paragraph [ref=f1e865]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e866]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e867]: Clove Embassy Tech Village,
            - paragraph [ref=f1e868]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e869]: Bengaluru, 560103,
            - paragraph [ref=f1e870]: Karnataka, India
            - paragraph [ref=f1e871]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e872]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e873] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e874] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e876]:
        - link "Become a Seller" [ref=f1e879] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e880]: Advertise
        - link "Gift Cards" [ref=f1e884] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e887] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e888]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1   | import {test, expect, Page, Locator} from '@playwright/test';
  2   | 
  3   | 
  4   | async function dslrNamePrice(page: Page, name: string): Promise<void> {
  5   | 
  6   |   let pageCount = 1;
  7   | 
  8   |   while (pageCount<=7) {
  9   |     const items = page.locator("//div[@class='RG5Slk']");//.filter({ hasText: name });
  10  |     const price = page.locator("//div[@class='hZ3P6w DeU9vF']");
  11  | 
  12  |     const count = await items.count();
  13  | 
  14  |     for (let i = 0; i< count; i++){
  15  |       const naming = await items.nth(i).innerText();
> 16  |       const amount = await price.nth(i).innerText();
      |                                         ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  17  |       console.log(naming, amount);
  18  |     }
  19  | 
  20  |     if(pageCount === 7){
  21  |       break;
  22  |     }
  23  | 
  24  |       const next = page.locator('a:has(span)').filter({ hasText: 'Next' });
  25  |       if (await next.count() === 0 || await next.isDisabled()) {
  26  |         break;
  27  |       }
  28  | 
  29  |       await next.click();
  30  |       await page.waitForLoadState('networkidle');
  31  |       //await page.waitForTimeout(5000);
  32  | 
  33  | 
  34  |       pageCount++;
  35  | 
  36  |     }
  37  | 
  38  |   }
  39  | 
  40  |   
  41  | test ("Verifying DSLR details in Flipkart", async ({page}) => {
  42  | 
  43  | 
  44  |     await page.goto("https://www.flipkart.com/");
  45  |     await page.locator("//span[@class='b3wTlE']").click();
  46  |     await page.waitForTimeout(5000);
  47  | 
  48  |     const searchBar = page.locator("//input[@name='q']").nth(0);
  49  |     await searchBar.click();
  50  |     await searchBar.fill("DSLR Camera");
  51  |     await searchBar.press('Enter');
  52  |     await page.waitForLoadState('networkidle');
  53  | 
  54  |     await dslrNamePrice(page, "DSLR Camera");
  55  | 
  56  | 
  57  |     await page.pause();
  58  | 
  59  | 
  60  | });
  61  | 
  62  | 
  63  | /* 
  64  | import { test } from '@playwright/test';
  65  | 
  66  | test('Search DSLR Camera across 7 pages and print name + price', async ({ page }) => {
  67  |   await page.goto('https://www.flipkart.com/');
  68  |   await page.locator("//span[@class='b3wTlE']").click();
  69  | 
  70  |   const searchBar = page.locator("//input[@name='q']").nth(0);
  71  |   await searchBar.click();
  72  |   await searchBar.fill('DSLR Camera');
  73  |   await searchBar.press('Enter');
  74  |   await page.waitForLoadState('networkidle');
  75  | 
  76  |   let found = false;
  77  | 
  78  |   for (let pageNo = 1; pageNo <= 7; pageNo++) {
  79  |     console.log(`--- Checking Page ${pageNo} ---`);
  80  | 
  81  |     const cards = page.locator("div[data-id]");
  82  |     const totalCards = await cards.count();
  83  | 
  84  |     for (let i = 0; i < totalCards; i++) {
  85  |       const card = cards.nth(i);
  86  |       const text = (await card.textContent()) || '';
  87  | 
  88  |       if (text.toLowerCase().includes('dslr')) {
  89  |         const name = (await card.locator('a').first().textContent())?.trim() || 'N/A';
  90  |         const price = (await card.locator('div._30jeq3').first().textContent())?.trim() || 'N/A';
  91  | 
  92  |         console.log('DSLR Name: ', name);
  93  |         console.log('DSLR Price: ', price);
  94  | 
  95  |         found = true;
  96  |         break;
  97  |       }
  98  |     }
  99  | 
  100 |     if (found) break;
  101 | 
  102 |     const next = page.locator('a span').filter({ hasText: 'Next' });
  103 |     if (await next.isDisabled()) {
  104 |       console.log('No more pages available.');
  105 |       break;
  106 |     }
  107 | 
  108 |     await next.click();
  109 |     await page.waitForLoadState('networkidle');
  110 |   }
  111 | 
  112 |   if (!found) {
  113 |     console.log('DSLR Camera not found in first 7 pages.');
  114 |   }
  115 | }); */
  116 | 
```