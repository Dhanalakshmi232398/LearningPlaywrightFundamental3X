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
  - waiting for locator('//div[@class=\'RG5Slk\']').nth(19)

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
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D5
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
          - generic [ref=f1e302]: Showing 97 – 115 of 115 results for "DSLR Camera"
          - generic [ref=f1e303]:
            - generic [ref=f1e304]: Sort By
            - generic [ref=f1e305]: Relevance
            - generic [ref=f1e306] [cursor=pointer]: Popularity
            - generic [ref=f1e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e309] [cursor=pointer]: Newest First
        - link [ref=f1e314] [cursor=pointer]:
          - /url: /sony-alpha-ilce-7m4-full-frame-mirrorless-camera-body-featuring-eye-af-4k-movie-recording/p/itmf54ab4da56f4d?pid=DLLGBKMZUZKSYUUR&lid=LSTDLLGBKMZUZKSYUURFNBMU5&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_97&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGBKMZUZKSYUUR.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha ILCE-7M4 Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording" [ref=f1e319]
          - generic [ref=f1e324]:
            - generic [ref=f1e325]:
              - generic [ref=f1e326]: SONY Alpha ILCE-7M4 Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording
              - generic [ref=f1e327]:
                - generic [ref=f1e328]: "4.3"
                - generic [ref=f1e331]: 96 Ratings & 18 Reviews
              - list [ref=f1e334]:
                - listitem [ref=f1e335]: • 7K oversampling for beautifully expressive, richly detailed images (When recording 4K movies at up to 30p, full-frame 7K oversampling is possible, resulting in high-resolution, highly detailed 4K. Select the mode that best suits your purpose, and let the camera deliver.), 4K 60p, 10-bit 4:2:2 recording capability, Flagship-quality still and movie imaging, Flagship-quality still and movie imaging, Still photography without compromise, Higher resolution, better colour reproduction, Quickly set the visual mood with ten Creative Look presets, Reliable autofocus, impressive speed, Fast Hybrid AF, evolved, continuous shooting with fast buffer release, Improved Real-time Eye AF (Keeping the targeted eye in focus so you can concentrate on composition), High-performance 'Active Mode' image stabilisation, Improvements in selection and editing workflow, Instantly turn your a7 IV into a web camera, Share your still images and movies immediately, Intuitive touch operations
                - listitem [ref=f1e336]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e337]: "• Sensor Type: CMOS"
                - listitem [ref=f1e338]: • WiFi Available
                - listitem [ref=f1e339]: • 4K
                - listitem [ref=f1e340]: • 2 Years Warranty
            - generic [ref=f1e341]:
              - generic [ref=f1e343]:
                - generic [ref=f1e344]: ₹1,86,990
                - generic [ref=f1e345]: ₹2,10,990
                - generic [ref=f1e346]: 11% off
              - generic [ref=f1e349]: Only few left
              - generic [ref=f1e353]:
                - generic [ref=f1e354]: Upto
                - generic [ref=f1e355]: ₹61,650
                - generic [ref=f1e356]: Off on Exchange
        - 'link "Canon EOS C50 Mirrorless Camera Body Only Canon EOS C50 Mirrorless Camera Body Only • Effective Pixels: 32 MP • Sensor Type: CMOS • WiFi Available • 7K • 2 Year warranty on the product ₹2,84,990 ₹2,99,900 4% off Only few left Upto ₹58,650 Off on Exchange" [ref=f1e361] [cursor=pointer]':
          - /url: /canon-eos-c50-mirrorless-camera-body-only/p/itm3b7f95ffd4daf?pid=DLLHHYDSPFTYYQUQ&lid=LSTDLLHHYDSPFTYYQUQ9IYZE4&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_98&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLHHYDSPFTYYQUQ.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "Canon EOS C50 Mirrorless Camera Body Only" [ref=f1e366]
          - generic [ref=f1e371]:
            - generic [ref=f1e372]:
              - generic [ref=f1e373]: Canon EOS C50 Mirrorless Camera Body Only
              - list [ref=f1e375]:
                - listitem [ref=f1e376]: "• Effective Pixels: 32 MP"
                - listitem [ref=f1e377]: "• Sensor Type: CMOS"
                - listitem [ref=f1e378]: • WiFi Available
                - listitem [ref=f1e379]: • 7K
                - listitem [ref=f1e380]: • 2 Year warranty on the product
            - generic [ref=f1e381]:
              - generic [ref=f1e383]:
                - generic [ref=f1e384]: ₹2,84,990
                - generic [ref=f1e385]: ₹2,99,900
                - generic [ref=f1e386]: 4% off
              - generic [ref=f1e389]: Only few left
              - generic [ref=f1e393]:
                - generic [ref=f1e394]: Upto
                - generic [ref=f1e395]: ₹58,650
                - generic [ref=f1e396]: Off on Exchange
        - link [ref=f1e401] [cursor=pointer]:
          - /url: /sony-alpha-ilce-7c-full-frame-mirrorless-camera-body-featuring-eye-af-4k-movie-recording/p/itm9404070d3ca7a?pid=DLLFYB4EFCUSKPA4&lid=LSTDLLFYB4EFCUSKPA4EXZAER&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_99&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLFYB4EFCUSKPA4.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha ILCE-7C Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording" [ref=f1e406]
          - generic [ref=f1e411]:
            - generic [ref=f1e412]:
              - generic [ref=f1e413]: SONY Alpha ILCE-7C Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording
              - generic [ref=f1e414]:
                - generic [ref=f1e415]: "4.6"
                - generic [ref=f1e418]: 114 Ratings & 13 Reviews
              - list [ref=f1e421]:
                - listitem [ref=f1e422]: • 4K recording34 for beautiful movie imagery (Full-pixel readout without pixel binning allows oversampling equivalent to 6K recording, for clean images with less moir?and jaggies.), Movie-making with room for creativity, Designed for optimal usability, Unique full-frame imagery, Enjoy the full-frame advantage, Expand your movie-making options (Achieve truly artistic movie-making with the superb control, image quality and dimensionality of full-frame), Stunning images, even at fast shutter speeds and in dim light, Wi-Fi,NFC & Bluetooth
                - listitem [ref=f1e423]: "• Effective Pixels: 24.2 MP"
                - listitem [ref=f1e424]: "• Sensor Type: CMOS"
                - listitem [ref=f1e425]: • WiFi Available
                - listitem [ref=f1e426]: • 4K
                - listitem [ref=f1e427]: • 2 Year Warranty
            - generic [ref=f1e428]:
              - generic [ref=f1e430]:
                - generic [ref=f1e431]: ₹1,30,990
                - generic [ref=f1e432]: ₹1,42,990
                - generic [ref=f1e433]: 8% off
              - generic [ref=f1e436]: Only 2 left
              - generic [ref=f1e440]:
                - generic [ref=f1e441]: Upto
                - generic [ref=f1e442]: ₹60,650
                - generic [ref=f1e443]: Off on Exchange
        - link [ref=f1e448] [cursor=pointer]:
          - /url: /sony-alpha-ilce-7cl-full-frame-mirrorless-camera-28-60-mm-zoom-lensfeaturing-eye-af-4k-movie-recording/p/itmd61df74331787?pid=DLLFYB4E3UBR9ZK7&lid=LSTDLLFYB4E3UBR9ZK7N5B9LW&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_100&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLFYB4E3UBR9ZK7.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha ILCE-7CL Full Frame Mirrorless Camera with 28-60 mm Zoom LensFeaturing Eye AF and 4K movie ..." [ref=f1e453]
          - generic [ref=f1e458]:
            - generic [ref=f1e459]:
              - generic [ref=f1e460]: SONY Alpha ILCE-7CL Full Frame Mirrorless Camera with 28-60 mm Zoom LensFeaturing Eye AF and 4K movie ...
              - generic [ref=f1e461]:
                - generic [ref=f1e462]: "4.6"
                - generic [ref=f1e465]: 114 Ratings & 13 Reviews
              - list [ref=f1e468]:
                - listitem [ref=f1e469]: • 4K recording34 for beautiful movie imagery (Full-pixel readout without pixel binning allows oversampling equivalent to 6K recording, for clean images with less moir?and jaggies.), Movie-making with room for creativity, Designed for optimal usability, Unique full-frame imagery, Enjoy the full-frame advantage, Expand your movie-making options (Achieve truly artistic movie-making with the superb control, image quality and dimensionality of full-frame), Stunning images, even at fast shutter speeds and in dim light, Wi-Fi,NFC & Bluetooth
                - listitem [ref=f1e470]: "• Effective Pixels: 24.2 MP"
                - listitem [ref=f1e471]: "• Sensor Type: CMOS"
                - listitem [ref=f1e472]: • WiFi Available
                - listitem [ref=f1e473]: • 4K
                - listitem [ref=f1e474]: • 2 Year Warranty
            - generic [ref=f1e475]:
              - generic [ref=f1e477]:
                - generic [ref=f1e478]: ₹1,57,990
                - generic [ref=f1e479]: ₹1,72,590
                - generic [ref=f1e480]: 8% off
              - generic [ref=f1e481]: Only 1 left
              - generic [ref=f1e485]:
                - generic [ref=f1e486]: Upto
                - generic [ref=f1e487]: ₹58,650
                - generic [ref=f1e488]: Off on Exchange
        - 'link "SONY Cinema Line FX30 (ILME-FX30) Mirrorless Camera Body only + Battery (NP-FZ100) SONY Cinema Line FX30 (ILME-FX30) Mirrorless Camera Body only + Battery (NP-FZ100) 5 4 Ratings & 0 Reviews • | Super 35 | Compact camera for Filmmaking | 4K120P | S-Cinetone | Dual Base ISO • Effective Pixels: 20.1 MP • Sensor Type: CMOS • WiFi Available • 4K • 1 Year Domestic Warranty ₹1,87,990 ₹1,99,990 6% off Only 4 left Upto ₹58,650 Off on Exchange" [ref=f1e493] [cursor=pointer]':
          - /url: /sony-cinema-line-fx30-ilme-fx30-mirrorless-camera-body-only-battery-np-fz100/p/itme0fe0f96d2626?pid=DLLH4FRFU6ZXKX89&lid=LSTDLLH4FRFU6ZXKX89IOEVCX&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_101&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLH4FRFU6ZXKX89.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Cinema Line FX30 (ILME-FX30) Mirrorless Camera Body only + Battery (NP-FZ100)" [ref=f1e498]
          - generic [ref=f1e503]:
            - generic [ref=f1e504]:
              - generic [ref=f1e505]: SONY Cinema Line FX30 (ILME-FX30) Mirrorless Camera Body only + Battery (NP-FZ100)
              - generic [ref=f1e506]:
                - generic [ref=f1e507]: "5"
                - generic [ref=f1e510]: 4 Ratings & 0 Reviews
              - list [ref=f1e513]:
                - listitem [ref=f1e514]: • | Super 35 | Compact camera for Filmmaking | 4K120P | S-Cinetone | Dual Base ISO
                - listitem [ref=f1e515]: "• Effective Pixels: 20.1 MP"
                - listitem [ref=f1e516]: "• Sensor Type: CMOS"
                - listitem [ref=f1e517]: • WiFi Available
                - listitem [ref=f1e518]: • 4K
                - listitem [ref=f1e519]: • 1 Year Domestic Warranty
            - generic [ref=f1e520]:
              - generic [ref=f1e522]:
                - generic [ref=f1e523]: ₹1,87,990
                - generic [ref=f1e524]: ₹1,99,990
                - generic [ref=f1e525]: 6% off
              - generic [ref=f1e528]: Only 4 left
              - generic [ref=f1e532]:
                - generic [ref=f1e533]: Upto
                - generic [ref=f1e534]: ₹58,650
                - generic [ref=f1e535]: Off on Exchange
        - 'link "SONY Alpha ILCE-7M3 Full Frame Mirrorless Camera Body Only Featuring Eye AF and 4K movie recording SONY Alpha ILCE-7M3 Full Frame Mirrorless Camera Body Only Featuring Eye AF and 4K movie recording 4.5 175 Ratings & 21 Reviews • 4K HDR movie recording capability/4K still image, Gain control of expressive freedom, Take aim with high AF performance, Capture decisive moments, More realistic, expressive movies, Shoot with more assured reliability, Always keep the eye in focus, AF-ON button and multi-selector, Comprehensive AF convenience, Anti-flicker shooting, Supports a wide range of needs in HDR movie production, High-resolution, high-contrast XGA OLED Tru-Finder?Wi-Fi, NFC & Bluetooth, Dual slots with UHS-II compatibility • Effective Pixels: 24.2 MP • Sensor Type: CMOS • WiFi Available • XAVC S, AVCHD • 2 Year Warranty ₹1,27,490 ₹1,46,990 13% off Only 4 left Upto ₹58,650 Off on Exchange" [ref=f1e540] [cursor=pointer]':
          - /url: /sony-alpha-ilce-7m3-full-frame-mirrorless-camera-body-only-featuring-eye-af-4k-movie-recording/p/itm9e0d891b4eb7f?pid=DLLF7GBGTVVCVHAQ&lid=LSTDLLF7GBGTVVCVHAQVEE3XQ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_102&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLF7GBGTVVCVHAQ.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha ILCE-7M3 Full Frame Mirrorless Camera Body Only Featuring Eye AF and 4K movie recording" [ref=f1e545]
          - generic [ref=f1e550]:
            - generic [ref=f1e551]:
              - generic [ref=f1e552]: SONY Alpha ILCE-7M3 Full Frame Mirrorless Camera Body Only Featuring Eye AF and 4K movie recording
              - generic [ref=f1e553]:
                - generic [ref=f1e554]: "4.5"
                - generic [ref=f1e557]: 175 Ratings & 21 Reviews
              - list [ref=f1e560]:
                - listitem [ref=f1e561]: • 4K HDR movie recording capability/4K still image, Gain control of expressive freedom, Take aim with high AF performance, Capture decisive moments, More realistic, expressive movies, Shoot with more assured reliability, Always keep the eye in focus, AF-ON button and multi-selector, Comprehensive AF convenience, Anti-flicker shooting, Supports a wide range of needs in HDR movie production, High-resolution, high-contrast XGA OLED Tru-Finder?Wi-Fi, NFC & Bluetooth, Dual slots with UHS-II compatibility
                - listitem [ref=f1e562]: "• Effective Pixels: 24.2 MP"
                - listitem [ref=f1e563]: "• Sensor Type: CMOS"
                - listitem [ref=f1e564]: • WiFi Available
                - listitem [ref=f1e565]: • XAVC S, AVCHD
                - listitem [ref=f1e566]: • 2 Year Warranty
            - generic [ref=f1e567]:
              - generic [ref=f1e569]:
                - generic [ref=f1e570]: ₹1,27,490
                - generic [ref=f1e571]: ₹1,46,990
                - generic [ref=f1e572]: 13% off
              - generic [ref=f1e575]: Only 4 left
              - generic [ref=f1e579]:
                - generic [ref=f1e580]: Upto
                - generic [ref=f1e581]: ₹58,650
                - generic [ref=f1e582]: Off on Exchange
        - 'link "SONY FX ILME-FX3A/Q IN5 Mirrorless Camera NP-FZ100 SONY FX ILME-FX3A/Q IN5 Mirrorless Camera NP-FZ100 • Effective Pixels: 12.1 MP • Sensor Type: CMOS • WiFi Available • 4k • 2 Year warranty on the product ₹3,67,990 ₹3,99,990 8% off Only few left Upto ₹58,650 Off on Exchange" [ref=f1e587] [cursor=pointer]':
          - /url: /sony-fx-ilme-fx3a-q-in5-mirrorless-camera-np-fz100/p/itm6137c96059181?pid=DLLHDXX3GK5PZXU5&lid=LSTDLLHDXX3GK5PZXU5BSCH11&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_103&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLHDXX3GK5PZXU5.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY FX ILME-FX3A/Q IN5 Mirrorless Camera NP-FZ100" [ref=f1e592]
          - generic [ref=f1e597]:
            - generic [ref=f1e598]:
              - generic [ref=f1e599]: SONY FX ILME-FX3A/Q IN5 Mirrorless Camera NP-FZ100
              - list [ref=f1e601]:
                - listitem [ref=f1e602]: "• Effective Pixels: 12.1 MP"
                - listitem [ref=f1e603]: "• Sensor Type: CMOS"
                - listitem [ref=f1e604]: • WiFi Available
                - listitem [ref=f1e605]: • 4k
                - listitem [ref=f1e606]: • 2 Year warranty on the product
            - generic [ref=f1e607]:
              - generic [ref=f1e609]:
                - generic [ref=f1e610]: ₹3,67,990
                - generic [ref=f1e611]: ₹3,99,990
                - generic [ref=f1e612]: 8% off
              - generic [ref=f1e613]: Only few left
              - generic [ref=f1e617]:
                - generic [ref=f1e618]: Upto
                - generic [ref=f1e619]: ₹58,650
                - generic [ref=f1e620]: Off on Exchange
        - 'link "NIKON Z Series Z F Mirrorless Camera NIKKOR Z 24-70MM F/4 S NIKON Z Series Z F Mirrorless Camera NIKKOR Z 24-70MM F/4 S 4.4 14 Ratings & 2 Reviews • Effective Pixels: 25.28 MP • Sensor Type: CMOS • WiFi Available • MOV • 1 Year ₹1,94,290 ₹2,21,995 12% off Only 2 left Upto ₹61,650 Off on Exchange" [ref=f1e625] [cursor=pointer]':
          - /url: /nikon-z-series-f-mirrorless-camera-nikkor-24-70mm-f-4-s/p/itm8a6d16111aeec?pid=DLLGYXTSZG4S96SE&lid=LSTDLLGYXTSZG4S96SEY9JLOI&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_104&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGYXTSZG4S96SE.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON Z Series Z F Mirrorless Camera NIKKOR Z 24-70MM F/4 S" [ref=f1e630]
          - generic [ref=f1e635]:
            - generic [ref=f1e636]:
              - generic [ref=f1e637]: NIKON Z Series Z F Mirrorless Camera NIKKOR Z 24-70MM F/4 S
              - generic [ref=f1e638]:
                - generic [ref=f1e639]: "4.4"
                - generic [ref=f1e642]: 14 Ratings & 2 Reviews
              - list [ref=f1e645]:
                - listitem [ref=f1e646]: "• Effective Pixels: 25.28 MP"
                - listitem [ref=f1e647]: "• Sensor Type: CMOS"
                - listitem [ref=f1e648]: • WiFi Available
                - listitem [ref=f1e649]: • MOV
                - listitem [ref=f1e650]: • 1 Year
            - generic [ref=f1e651]:
              - generic [ref=f1e653]:
                - generic [ref=f1e654]: ₹1,94,290
                - generic [ref=f1e655]: ₹2,21,995
                - generic [ref=f1e656]: 12% off
              - generic [ref=f1e659]: Only 2 left
              - generic [ref=f1e663]:
                - generic [ref=f1e664]: Upto
                - generic [ref=f1e665]: ₹61,650
                - generic [ref=f1e666]: Off on Exchange
        - 'link "NIKON Z5 Mirrorless Camera 24-200 mm NIKON Z5 Mirrorless Camera 24-200 mm 4.5 24 Ratings & 3 Reviews • 4K UHD/30p, Optical VR image stabilisation and electronic Vibration Reduction, Creative Picture Controls, Focus Peaking, Capture stills while recording, Timelapse made easy., Up your live stream., Right.In any light., Fully automatic.Totally manual., The eyes say it all., Focus anywhere., Tweak. Shoot. Create., Multiply your vision., Shift your focus., Easy pairing.Easy sharing., Tilt. Touch. Swipe. Pinch • Effective Pixels: 24.3 MP • Sensor Type: CMOS • WiFi Available • 4K UHD • 2 Year Warranty ₹1,41,299 ₹1,69,995 16% off Only 4 left Upto ₹60,650 Off on Exchange" [ref=f1e671] [cursor=pointer]':
          - /url: /nikon-z5-mirrorless-camera-24-200-mm/p/itmfe9f611e9889f?pid=DLLG2XDCFBXVUZTH&lid=LSTDLLG2XDCFBXVUZTHRY2NTG&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_105&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLG2XDCFBXVUZTH.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON Z5 Mirrorless Camera 24-200 mm" [ref=f1e676]
          - generic [ref=f1e681]:
            - generic [ref=f1e682]:
              - generic [ref=f1e683]: NIKON Z5 Mirrorless Camera 24-200 mm
              - generic [ref=f1e684]:
                - generic [ref=f1e685]: "4.5"
                - generic [ref=f1e688]: 24 Ratings & 3 Reviews
              - list [ref=f1e691]:
                - listitem [ref=f1e692]: • 4K UHD/30p, Optical VR image stabilisation and electronic Vibration Reduction, Creative Picture Controls, Focus Peaking, Capture stills while recording, Timelapse made easy., Up your live stream., Right.In any light., Fully automatic.Totally manual., The eyes say it all., Focus anywhere., Tweak. Shoot. Create., Multiply your vision., Shift your focus., Easy pairing.Easy sharing., Tilt. Touch. Swipe. Pinch
                - listitem [ref=f1e693]: "• Effective Pixels: 24.3 MP"
                - listitem [ref=f1e694]: "• Sensor Type: CMOS"
                - listitem [ref=f1e695]: • WiFi Available
                - listitem [ref=f1e696]: • 4K UHD
                - listitem [ref=f1e697]: • 2 Year Warranty
            - generic [ref=f1e698]:
              - generic [ref=f1e700]:
                - generic [ref=f1e701]: ₹1,41,299
                - generic [ref=f1e702]: ₹1,69,995
                - generic [ref=f1e703]: 16% off
              - generic [ref=f1e706]: Only 4 left
              - generic [ref=f1e710]:
                - generic [ref=f1e711]: Upto
                - generic [ref=f1e712]: ₹60,650
                - generic [ref=f1e713]: Off on Exchange
        - 'link "NIKON Z30 Mirrorless Camera Z DX 18 - 140 mm f/3.5 - 6.3 VR Lens NIKON Z30 Mirrorless Camera Z DX 18 - 140 mm f/3.5 - 6.3 VR Lens 4.3 158 Ratings & 15 Reviews • 4K UHD video with 100% Angle view, 20 types of creative picture control, Compact Content Creation., Personalised Performance, Twist And Touch., Fuss-Free Focus., Eye-Detection AF & Animal-Detection AF / AF-F., SnapBridge, NX Studio, Webcam Utility, Wi-Fi Compatibility • Effective Pixels: 20.9 MP • Sensor Type: CMOS • WiFi Available • 4K UHD • 2 Years Warranty ₹93,699 ₹97,795 4% off Only few left Upto ₹60,650 Off on Exchange" [ref=f1e718] [cursor=pointer]':
          - /url: /nikon-z30-mirrorless-camera-z-dx-18-140-mm-f-3-5-6-3-vr-lens/p/itm63022ba3d2150?pid=DLLGGYSTSENSR3HZ&lid=LSTDLLGGYSTSENSR3HZ5YZPGI&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_106&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGGYSTSENSR3HZ.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON Z30 Mirrorless Camera Z DX 18 - 140 mm f/3.5 - 6.3 VR Lens" [ref=f1e723]
          - generic [ref=f1e728]:
            - generic [ref=f1e729]:
              - generic [ref=f1e730]: NIKON Z30 Mirrorless Camera Z DX 18 - 140 mm f/3.5 - 6.3 VR Lens
              - generic [ref=f1e731]:
                - generic [ref=f1e732]: "4.3"
                - generic [ref=f1e735]: 158 Ratings & 15 Reviews
              - list [ref=f1e738]:
                - listitem [ref=f1e739]: • 4K UHD video with 100% Angle view, 20 types of creative picture control, Compact Content Creation., Personalised Performance, Twist And Touch., Fuss-Free Focus., Eye-Detection AF & Animal-Detection AF / AF-F., SnapBridge, NX Studio, Webcam Utility, Wi-Fi Compatibility
                - listitem [ref=f1e740]: "• Effective Pixels: 20.9 MP"
                - listitem [ref=f1e741]: "• Sensor Type: CMOS"
                - listitem [ref=f1e742]: • WiFi Available
                - listitem [ref=f1e743]: • 4K UHD
                - listitem [ref=f1e744]: • 2 Years Warranty
            - generic [ref=f1e745]:
              - generic [ref=f1e747]:
                - generic [ref=f1e748]: ₹93,699
                - generic [ref=f1e749]: ₹97,795
                - generic [ref=f1e750]: 4% off
              - generic [ref=f1e751]: Only few left
              - generic [ref=f1e755]:
                - generic [ref=f1e756]: Upto
                - generic [ref=f1e757]: ₹60,650
                - generic [ref=f1e758]: Off on Exchange
        - 'link "SONY ILCE-7CM2/SQ IN5 Mirrorless Camera Body Only Vlogging Made for Creators | Artificial Intelligence... SONY ILCE-7CM2/SQ IN5 Mirrorless Camera Body Only Vlogging Made for Creators | Artificial Intelligence... • Effective Pixels: 33 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 Years Warranty ₹1,95,990 ₹2,14,990 8% off Only 1 left Upto ₹58,650 Off on Exchange" [ref=f1e763] [cursor=pointer]':
          - /url: /sony-ilce-7cm2-sq-in5-mirrorless-camera-body-only-vlogging-made-creators-artificial-intelligence-based-autofocus/p/itm90c21cc0338d6?pid=DLLGUX2GHEFCUXWF&lid=LSTDLLGUX2GHEFCUXWFBEBMWQ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_107&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGUX2GHEFCUXWF.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY ILCE-7CM2/SQ IN5 Mirrorless Camera Body Only Vlogging Made for Creators | Artificial Intelligence..." [ref=f1e768]
          - generic [ref=f1e773]:
            - generic [ref=f1e774]:
              - generic [ref=f1e775]: SONY ILCE-7CM2/SQ IN5 Mirrorless Camera Body Only Vlogging Made for Creators | Artificial Intelligence...
              - list [ref=f1e777]:
                - listitem [ref=f1e778]: "• Effective Pixels: 33 MP"
                - listitem [ref=f1e779]: "• Sensor Type: CMOS"
                - listitem [ref=f1e780]: • WiFi Available
                - listitem [ref=f1e781]: • 4K
                - listitem [ref=f1e782]: • 2 Years Warranty
            - generic [ref=f1e783]:
              - generic [ref=f1e785]:
                - generic [ref=f1e786]: ₹1,95,990
                - generic [ref=f1e787]: ₹2,14,990
                - generic [ref=f1e788]: 8% off
              - generic [ref=f1e791]: Only 1 left
              - generic [ref=f1e795]:
                - generic [ref=f1e796]: Upto
                - generic [ref=f1e797]: ₹58,650
                - generic [ref=f1e798]: Off on Exchange
        - 'link "Canon EOS R6 Mark III Mirrorless Camera Body Only Canon EOS R6 Mark III Mirrorless Camera Body Only 4.6 5 Ratings & 1 Reviews • Effective Pixels: 32.5 MP • Sensor Type: CMOS • WiFi Available • 7K • 2 Year warranty on the product ₹2,34,990 ₹2,43,995 3% off Upto ₹61,650 Off on Exchange Bank Offer" [ref=f1e803] [cursor=pointer]':
          - /url: /canon-eos-r6-mark-iii-mirrorless-camera-body-only/p/itmd2742d260bb90?pid=DLLHHYDSTCDWQZZ8&lid=LSTDLLHHYDSTCDWQZZ8YKPQ2G&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_108&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLHHYDSTCDWQZZ8.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "Canon EOS R6 Mark III Mirrorless Camera Body Only" [ref=f1e808]
          - generic [ref=f1e813]:
            - generic [ref=f1e814]:
              - generic [ref=f1e815]: Canon EOS R6 Mark III Mirrorless Camera Body Only
              - generic [ref=f1e816]:
                - generic [ref=f1e817]: "4.6"
                - generic [ref=f1e820]: 5 Ratings & 1 Reviews
              - list [ref=f1e823]:
                - listitem [ref=f1e824]: "• Effective Pixels: 32.5 MP"
                - listitem [ref=f1e825]: "• Sensor Type: CMOS"
                - listitem [ref=f1e826]: • WiFi Available
                - listitem [ref=f1e827]: • 7K
                - listitem [ref=f1e828]: • 2 Year warranty on the product
            - generic [ref=f1e829]:
              - generic [ref=f1e831]:
                - generic [ref=f1e832]: ₹2,34,990
                - generic [ref=f1e833]: ₹2,43,995
                - generic [ref=f1e834]: 3% off
              - generic [ref=f1e838]:
                - generic [ref=f1e839]: Upto
                - generic [ref=f1e840]: ₹61,650
                - generic [ref=f1e841]: Off on Exchange
              - generic [ref=f1e842]: Bank Offer
        - link [ref=f1e849] [cursor=pointer]:
          - /url: /sony-alpha-ilce-7rm4-full-frame-mirrorless-camera-body-featuring-eye-af-4k-movie-recording/p/itm1919ecbbb79ff?pid=DLLFSDZTDNZHHHPH&lid=LSTDLLFSDZTDNZHHHPHFO0GNX&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_109&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLFSDZTDNZHHHPH.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha ILCE-7RM4 Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording" [ref=f1e854]
          - generic [ref=f1e859]:
            - generic [ref=f1e860]:
              - generic [ref=f1e861]: SONY Alpha ILCE-7RM4 Full Frame Mirrorless Camera Body Featuring Eye AF and 4K movie recording
              - generic [ref=f1e862]:
                - generic [ref=f1e863]: "3.4"
                - generic [ref=f1e866]: 5 Ratings & 0 Reviews
              - list [ref=f1e869]:
                - listitem [ref=f1e870]: • Incomparable rendering, Striking response, The highest-level burst speed in its class, Wide AF coverage, Fast AF despite higher resolution, Steadfast AF tracking further improved, High-precision AF in underlit conditions, Rely on smart AI-based Real-time Tracking, Real-time Eye AF with animal eye tracking for more success, Maximised productivity in professional portrait shooting, More efficient workflow, A different dimension of fidelity, Pro movie features, Steadfast AF tracking for stunning movies, Real-time Eye AF now for movie shooting, Touch Tracking for persistent focus on your subject
                - listitem [ref=f1e871]: "• Effective Pixels: 61 MP"
                - listitem [ref=f1e872]: "• Sensor Type: CMOS"
                - listitem [ref=f1e873]: • WiFi Available
                - listitem [ref=f1e874]: • NTSC/PAL
                - listitem [ref=f1e875]: • 2 Years Warranty
            - generic [ref=f1e876]:
              - generic [ref=f1e878]:
                - generic [ref=f1e879]: ₹2,64,990
                - generic [ref=f1e880]: ₹2,97,990
                - generic [ref=f1e881]: 11% off
              - generic [ref=f1e882]: Only 4 left
              - generic [ref=f1e886]:
                - generic [ref=f1e887]: Upto
                - generic [ref=f1e888]: ₹58,650
                - generic [ref=f1e889]: Off on Exchange
        - 'link "NIKON Z8 Mirrorless Camera 24 - 120MM LENS NIKON Z8 Mirrorless Camera 24 - 120MM LENS 4.5 19 Ratings & 4 Reviews • Effective Pixels: 52.37 MP • Sensor Type: CMOS • WiFi Available • 4K • 2 YEARS LIMITED WARRANTY ₹3,41,990 ₹3,79,495 9% off Big Billion Days Price Only 3 left" [ref=f1e894] [cursor=pointer]':
          - /url: /nikon-z8-mirrorless-camera-24-120mm-lens/p/itmb269d3b3df270?pid=DLLGRERAKWGKNGGG&lid=LSTDLLGRERAKWGKNGGGNZLMPJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_110&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGRERAKWGKNGGG.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON Z8 Mirrorless Camera 24 - 120MM LENS" [ref=f1e899]
          - generic [ref=f1e904]:
            - generic [ref=f1e905]:
              - generic [ref=f1e906]: NIKON Z8 Mirrorless Camera 24 - 120MM LENS
              - generic [ref=f1e907]:
                - generic [ref=f1e908]: "4.5"
                - generic [ref=f1e911]: 19 Ratings & 4 Reviews
              - list [ref=f1e914]:
                - listitem [ref=f1e915]: "• Effective Pixels: 52.37 MP"
                - listitem [ref=f1e916]: "• Sensor Type: CMOS"
                - listitem [ref=f1e917]: • WiFi Available
                - listitem [ref=f1e918]: • 4K
                - listitem [ref=f1e919]: • 2 YEARS LIMITED WARRANTY
            - generic [ref=f1e920]:
              - generic [ref=f1e922]:
                - generic [ref=f1e923]: ₹3,41,990
                - generic [ref=f1e924]: ₹3,79,495
                - generic [ref=f1e925]: 9% off
              - generic [ref=f1e926]: Big Billion Days Price
              - generic [ref=f1e929]: Only 3 left
        - 'link "SONY Alpha 7M3 Mirrorless Camera Body Only + Battery (NP-FZ100) - Black SONY Alpha 7M3 Mirrorless Camera Body Only + Battery (NP-FZ100) - Black 4.5 2 Ratings & 1 Reviews • 4K HDR movie recording capability/4K still image Gain control of expressive freedom Take aim with high AF performance, Capture decisive moments More realistic, expressive movies Shoot with more assured reliability Always keep the eye in focus, AF-ON button and multi-selector Comprehensive AF convenience Anti-flicker shooting Supports a wide range of needs in HDR movie production, High-resolution, high-contrast XGA OLED Tru-Finder?Wi-Fi, NFC & Bluetooth Dual slots with UHS-II compatibility • Effective Pixels: 24.2 MP • Sensor Type: CMOS • WiFi Available • XAVC S, AVCHD • 2 Year Warranty ₹1,27,490 ₹1,46,990 13% off Only 1 left Upto ₹60,650 Off on Exchange" [ref=f1e936] [cursor=pointer]':
          - /url: /sony-alpha-7m3-mirrorless-camera-body-only-battery-np-fz100-black/p/itm9e0d891b4eb7f?pid=DLLH4FRFDCBNPNYS&lid=LSTDLLH4FRFDCBNPNYSLFMKIF&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_111&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLH4FRFDCBNPNYS.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "SONY Alpha 7M3 Mirrorless Camera Body Only + Battery (NP-FZ100) - Black" [ref=f1e941]
          - generic [ref=f1e946]:
            - generic [ref=f1e947]:
              - generic [ref=f1e948]: SONY Alpha 7M3 Mirrorless Camera Body Only + Battery (NP-FZ100) - Black
              - generic [ref=f1e949]:
                - generic [ref=f1e950]: "4.5"
                - generic [ref=f1e953]: 2 Ratings & 1 Reviews
              - list [ref=f1e956]:
                - listitem [ref=f1e957]: • 4K HDR movie recording capability/4K still image Gain control of expressive freedom Take aim with high AF performance, Capture decisive moments More realistic, expressive movies Shoot with more assured reliability Always keep the eye in focus, AF-ON button and multi-selector Comprehensive AF convenience Anti-flicker shooting Supports a wide range of needs in HDR movie production, High-resolution, high-contrast XGA OLED Tru-Finder?Wi-Fi, NFC & Bluetooth Dual slots with UHS-II compatibility
                - listitem [ref=f1e958]: "• Effective Pixels: 24.2 MP"
                - listitem [ref=f1e959]: "• Sensor Type: CMOS"
                - listitem [ref=f1e960]: • WiFi Available
                - listitem [ref=f1e961]: • XAVC S, AVCHD
                - listitem [ref=f1e962]: • 2 Year Warranty
            - generic [ref=f1e963]:
              - generic [ref=f1e965]:
                - generic [ref=f1e966]: ₹1,27,490
                - generic [ref=f1e967]: ₹1,46,990
                - generic [ref=f1e968]: 13% off
              - generic [ref=f1e971]: Only 1 left
              - generic [ref=f1e975]:
                - generic [ref=f1e976]: Upto
                - generic [ref=f1e977]: ₹60,650
                - generic [ref=f1e978]: Off on Exchange
        - 'link "Canon EOS R6 Mark III Mirrorless Camera Body with RF24-105mm f/4L IS USM Canon EOS R6 Mark III Mirrorless Camera Body with RF24-105mm f/4L IS USM • Effective Pixels: 32.5 MP • Sensor Type: CMOS • WiFi Available • 7K • 2 Year warranty on the product ₹3,39,990 ₹3,43,995 1% off Only few left Upto ₹61,650 Off on Exchange" [ref=f1e983] [cursor=pointer]':
          - /url: /canon-eos-r6-mark-iii-mirrorless-camera-body-rf24-105mm-f-4l-usm/p/itm231a28c5e7e43?pid=DLLHHYDSMB5K2GMK&lid=LSTDLLHHYDSMB5K2GMK3V2GT7&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_112&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLHHYDSMB5K2GMK.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "Canon EOS R6 Mark III Mirrorless Camera Body with RF24-105mm f/4L IS USM" [ref=f1e988]
          - generic [ref=f1e993]:
            - generic [ref=f1e994]:
              - generic [ref=f1e995]: Canon EOS R6 Mark III Mirrorless Camera Body with RF24-105mm f/4L IS USM
              - list [ref=f1e997]:
                - listitem [ref=f1e998]: "• Effective Pixels: 32.5 MP"
                - listitem [ref=f1e999]: "• Sensor Type: CMOS"
                - listitem [ref=f1e1000]: • WiFi Available
                - listitem [ref=f1e1001]: • 7K
                - listitem [ref=f1e1002]: • 2 Year warranty on the product
            - generic [ref=f1e1003]:
              - generic [ref=f1e1005]:
                - generic [ref=f1e1006]: ₹3,39,990
                - generic [ref=f1e1007]: ₹3,43,995
                - generic [ref=f1e1008]: 1% off
              - generic [ref=f1e1011]: Only few left
              - generic [ref=f1e1015]:
                - generic [ref=f1e1016]: Upto
                - generic [ref=f1e1017]: ₹61,650
                - generic [ref=f1e1018]: Off on Exchange
        - 'link "NIKON Z6III Mirrorless Camera Body with Nikkor Z 24-200mm f/4-6.3 S NIKON Z6III Mirrorless Camera Body with Nikkor Z 24-200mm f/4-6.3 S 4.3 13 Ratings & 0 Reviews • Effective Pixels: 24 MP • Sensor Type: CMOS • WiFi Available • 4k • 2 Years Warranty ₹2,45,499 ₹3,05,990 19% off Only 4 left Upto ₹61,650 Off on Exchange" [ref=f1e1023] [cursor=pointer]':
          - /url: /nikon-z6iii-mirrorless-camera-body-nikkor-z-24-200mm-f-4-6-3-s/p/itm7bfc459996d0c?pid=DLLH34SNGU4KGG7J&lid=LSTDLLH34SNGU4KGG7JHAE3AU&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_113&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLH34SNGU4KGG7J.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "NIKON Z6III Mirrorless Camera Body with Nikkor Z 24-200mm f/4-6.3 S" [ref=f1e1028]
          - generic [ref=f1e1033]:
            - generic [ref=f1e1034]:
              - generic [ref=f1e1035]: NIKON Z6III Mirrorless Camera Body with Nikkor Z 24-200mm f/4-6.3 S
              - generic [ref=f1e1036]:
                - generic [ref=f1e1037]: "4.3"
                - generic [ref=f1e1040]: 13 Ratings & 0 Reviews
              - list [ref=f1e1043]:
                - listitem [ref=f1e1044]: "• Effective Pixels: 24 MP"
                - listitem [ref=f1e1045]: "• Sensor Type: CMOS"
                - listitem [ref=f1e1046]: • WiFi Available
                - listitem [ref=f1e1047]: • 4k
                - listitem [ref=f1e1048]: • 2 Years Warranty
            - generic [ref=f1e1049]:
              - generic [ref=f1e1051]:
                - generic [ref=f1e1052]: ₹2,45,499
                - generic [ref=f1e1053]: ₹3,05,990
                - generic [ref=f1e1054]: 19% off
              - generic [ref=f1e1057]: Only 4 left
              - generic [ref=f1e1061]:
                - generic [ref=f1e1062]: Upto
                - generic [ref=f1e1063]: ₹61,650
                - generic [ref=f1e1064]: Off on Exchange
        - 'link "FUJIFILM Mirrorless X-T4 Mirrorless Camera Body with XF16-80mm and XF33mm F1.4 R LM WR lens and BC-W23... FUJIFILM Mirrorless X-T4 Mirrorless Camera Body with XF16-80mm and XF33mm F1.4 R LM WR lens and BC-W23... 4.3 23 Ratings & 5 Reviews • Effective Pixels: 26.1 MP • Sensor Type: CMOS • WiFi Available • 4K, Full HD • 2 Years Warranty ₹2,84,998 Only 1 left Upto ₹61,650 Off on Exchange" [ref=f1e1069] [cursor=pointer]':
          - /url: /fujifilm-mirrorless-x-t4-camera-body-xf16-80mm-xf33mm-f1-4-r-lm-wr-lens-bc-w235-dual-batterycharger/p/itmbb595a5284668?pid=DLLGGTZTJZURWX2X&lid=LSTDLLGGTZTJZURWX2XCS9TSJ&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_114&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLGGTZTJZURWX2X.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - img "FUJIFILM Mirrorless X-T4 Mirrorless Camera Body with XF16-80mm and XF33mm F1.4 R LM WR lens and BC-W23..." [ref=f1e1074]
          - generic [ref=f1e1079]:
            - generic [ref=f1e1080]:
              - generic [ref=f1e1081]: FUJIFILM Mirrorless X-T4 Mirrorless Camera Body with XF16-80mm and XF33mm F1.4 R LM WR lens and BC-W23...
              - generic [ref=f1e1082]:
                - generic [ref=f1e1083]: "4.3"
                - generic [ref=f1e1086]: 23 Ratings & 5 Reviews
              - list [ref=f1e1089]:
                - listitem [ref=f1e1090]: "• Effective Pixels: 26.1 MP"
                - listitem [ref=f1e1091]: "• Sensor Type: CMOS"
                - listitem [ref=f1e1092]: • WiFi Available
                - listitem [ref=f1e1093]: • 4K, Full HD
                - listitem [ref=f1e1094]: • 2 Years Warranty
            - generic [ref=f1e1095]:
              - generic [ref=f1e1096]: ₹2,84,998
              - generic [ref=f1e1099]: Only 1 left
              - generic [ref=f1e1103]:
                - generic [ref=f1e1104]: Upto
                - generic [ref=f1e1105]: ₹61,650
                - generic [ref=f1e1106]: Off on Exchange
        - 'link "TOTAL Saneen Digital Camera for Photography, 4K 64MP WiFi Touch Screen DSLR Camera Body with 18-140 mm... Currently unavailable TOTAL Saneen Digital Camera for Photography, 4K 64MP WiFi Touch Screen DSLR Camera Body with 18-140 mm... • Effective Pixels: 20.9 MP • Sensor Type: CMOS • WiFi Available • 4k • NA ₹38,111 ₹99,999 61% off Bank Offer" [ref=f1e1111] [cursor=pointer]':
          - /url: /total-saneen-digital-camera-photography-4k-64mp-wifi-touch-screen-dslr-body-18-140-mm-lens/p/itm62ccdd96a610b?pid=DLLH8GBAZNQCBBGG&lid=LSTDLLH8GBAZNQCBBGGTMFXXX&marketplace=FLIPKART&q=DSLR+Camera&store=jek%2Fp31%2Ftrv&srno=s_5_115&otracker=search&otracker1=search&fm=Search&iid=47ec8222-3b71-4464-90f5-8b114ced9eeb.DLLH8GBAZNQCBBGG.SEARCH&ppt=sp&ppn=sp&ssid=zyoym5unk00000001790541957719&qH=198617266331bfb3&ov_redirect=true
          - generic [ref=f1e1113]:
            - img "TOTAL Saneen Digital Camera for Photography, 4K 64MP WiFi Touch Screen DSLR Camera Body with 18-140 mm..." [ref=f1e1116]
            - generic: Currently unavailable
          - generic [ref=f1e1121]:
            - generic [ref=f1e1122]:
              - generic [ref=f1e1123]: TOTAL Saneen Digital Camera for Photography, 4K 64MP WiFi Touch Screen DSLR Camera Body with 18-140 mm...
              - list [ref=f1e1125]:
                - listitem [ref=f1e1126]: "• Effective Pixels: 20.9 MP"
                - listitem [ref=f1e1127]: "• Sensor Type: CMOS"
                - listitem [ref=f1e1128]: • WiFi Available
                - listitem [ref=f1e1129]: • 4k
                - listitem [ref=f1e1130]: • NA
            - generic [ref=f1e1131]:
              - generic [ref=f1e1133]:
                - generic [ref=f1e1134]: ₹38,111
                - generic [ref=f1e1135]: ₹99,999
                - generic [ref=f1e1136]: 61% off
              - generic [ref=f1e1137]: Bank Offer
        - generic [ref=f1e1142]:
          - generic [ref=f1e1143]: Page 5 of 5
          - navigation [ref=f1e1144]:
            - link "Previous" [ref=f1e1145] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "1" [ref=f1e1146] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e1147] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e1148] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e1149] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e1150] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
    - generic [ref=f1e1152]:
      - generic [ref=f1e1153]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e1154]:
        - generic [ref=f1e1155]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f1e1158]
          - generic [ref=f1e1159]:
            - link "1. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f1e1160] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1161]: 1. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f1e1163]:
                - generic [ref=f1e1164]: "4.1"
                - generic [ref=f1e1166]:
                  - text: 21 Ratings
                  - generic [ref=f1e1167]: "&6 Reviews"
              - generic [ref=f1e1169]:
                - generic [ref=f1e1170]: ₹1,09,999
                - generic [ref=f1e1171]: 11% off
            - list [ref=f1e1172]:
              - listitem [ref=f1e1173]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f1e1174]: "Sensor Type: CMOS"
              - listitem [ref=f1e1175]: Full HD
        - generic [ref=f1e1176]:
          - generic [ref=f1e1177]: Most Helpful Review
          - generic [ref=f1e1179]:
            - generic [ref=f1e1180]:
              - generic [ref=f1e1181]: "5"
              - paragraph [ref=f1e1183]: Shubham sanjay khanvilkar
            - generic [ref=f1e1184]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f1e1189]:
              - paragraph [ref=f1e1190]: Shubham sanjay khanvilkar
              - paragraph [ref=f1e1191]: Apr, 2016
        - generic [ref=f1e1192]:
          - generic [ref=f1e1193]: Recent Review
          - generic [ref=f1e1195]:
            - generic [ref=f1e1196]:
              - generic [ref=f1e1197]: "5"
              - paragraph [ref=f1e1199]: Brilliant
            - generic [ref=f1e1200]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f1e1205]:
              - paragraph [ref=f1e1206]: Avijit Dasgupta
              - paragraph [ref=f1e1211]: Certified Buyer
              - paragraph [ref=f1e1212]: Oct, 2018
      - generic [ref=f1e1213]:
        - generic [ref=f1e1214]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e1217]
          - generic [ref=f1e1218]:
            - link "2. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e1219] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1220]: 2. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e1222]:
                - generic [ref=f1e1223]: "4.5"
                - generic [ref=f1e1225]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e1226]: "&154 Reviews"
              - generic [ref=f1e1228]:
                - generic [ref=f1e1229]: ₹78,990
                - generic [ref=f1e1230]: 16% off
            - list [ref=f1e1231]:
              - listitem [ref=f1e1232]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e1233]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e1234]: "Sensor Type: CMOS"
        - generic [ref=f1e1235]:
          - generic [ref=f1e1236]: Most Helpful Review
          - generic [ref=f1e1238]:
            - generic [ref=f1e1239]:
              - generic [ref=f1e1240]: "5"
              - paragraph [ref=f1e1242]: Brilliant
            - generic [ref=f1e1245]:
              - generic [ref=f1e1246]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e1247] [cursor=pointer]: Read full review
            - generic [ref=f1e1249]:
              - paragraph [ref=f1e1250]: Satyajit Acharjee
              - paragraph [ref=f1e1255]: Certified Buyer
              - paragraph [ref=f1e1256]: Aug, 2019
        - generic [ref=f1e1257]:
          - generic [ref=f1e1258]: Recent Review
          - generic [ref=f1e1260]:
            - generic [ref=f1e1261]:
              - generic [ref=f1e1262]: "5"
              - paragraph [ref=f1e1264]: Perfect product!
            - generic [ref=f1e1265]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e1270]:
              - paragraph [ref=f1e1271]: Flipkart Customer
              - paragraph [ref=f1e1276]: Certified Buyer
              - paragraph [ref=f1e1277]: 3 months ago
      - generic [ref=f1e1278]:
        - generic [ref=f1e1279]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e1282]
          - generic [ref=f1e1283]:
            - link "3. Toy Imagine Top Quality Kid... 3.3 15 Ratings&2 Reviews ₹619 61% off" [ref=f1e1284] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1285]: 3. Toy Imagine Top Quality Kid...
              - generic [ref=f1e1287]:
                - generic [ref=f1e1288]: "3.3"
                - generic [ref=f1e1290]:
                  - text: 15 Ratings
                  - generic [ref=f1e1291]: "&2 Reviews"
              - generic [ref=f1e1293]:
                - generic [ref=f1e1294]: ₹619
                - generic [ref=f1e1295]: 61% off
            - list [ref=f1e1296]:
              - listitem [ref=f1e1297]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e1298]: "Sensor Type: CCD"
              - listitem [ref=f1e1299]: "1080"
        - generic [ref=f1e1300]:
          - generic [ref=f1e1301]: Most Helpful Review
          - generic [ref=f1e1303]:
            - generic [ref=f1e1304]:
              - generic [ref=f1e1305]: "1"
              - paragraph [ref=f1e1307]: Did not meet expectations
            - generic [ref=f1e1308]: The battery is draining quickly.
            - generic [ref=f1e1313]:
              - paragraph [ref=f1e1314]: Komal Kumar Sahu
              - paragraph [ref=f1e1319]: Certified Buyer
              - paragraph [ref=f1e1320]: 3 months ago
        - generic [ref=f1e1321]:
          - generic [ref=f1e1322]: Recent Review
          - generic [ref=f1e1324]:
            - generic [ref=f1e1325]:
              - generic [ref=f1e1326]: "1"
              - paragraph [ref=f1e1328]: Did not meet expectations
            - generic [ref=f1e1329]: The battery is draining quickly.
            - generic [ref=f1e1334]:
              - paragraph [ref=f1e1335]: Komal Kumar Sahu
              - paragraph [ref=f1e1340]: Certified Buyer
              - paragraph [ref=f1e1341]: 3 months ago
      - generic [ref=f1e1342]:
        - generic [ref=f1e1343]:
          - img "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera" [ref=f1e1346]
          - generic [ref=f1e1347]:
            - link "4. KMUYO 6 PACK OF 2 MINI PTZ ... 5 1 Ratings&1 Reviews ₹3,430 57% off" [ref=f1e1348] [cursor=pointer]:
              - /url: /kmuyo-6-pack-2-mini-ptz-camera-dslr-ip/p/itmac7027059ac79?pid=DLLHZGYJQNBCMCDZ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1349]: 4. KMUYO 6 PACK OF 2 MINI PTZ ...
              - generic [ref=f1e1351]:
                - generic [ref=f1e1352]: "5"
                - generic [ref=f1e1354]:
                  - text: 1 Ratings
                  - generic [ref=f1e1355]: "&1 Reviews"
              - generic [ref=f1e1357]:
                - generic [ref=f1e1358]: ₹3,430
                - generic [ref=f1e1359]: 57% off
            - list [ref=f1e1360]:
              - listitem [ref=f1e1361]: "Effective Pixels: 12 MP"
              - listitem [ref=f1e1362]: "Sensor Type: CMOS"
              - listitem [ref=f1e1363]: WiFi Available
        - generic [ref=f1e1364]:
          - generic [ref=f1e1365]: Most Helpful Review
          - generic [ref=f1e1367]:
            - generic [ref=f1e1368]:
              - generic [ref=f1e1369]: "5"
              - paragraph [ref=f1e1371]: Best in the market!
            - generic [ref=f1e1372]: nice good excellent
            - generic [ref=f1e1377]:
              - paragraph [ref=f1e1378]: Flipkart Customer
              - paragraph [ref=f1e1383]: Certified Buyer
              - paragraph [ref=f1e1384]: 1 month ago
        - generic [ref=f1e1385]:
          - generic [ref=f1e1386]: Recent Review
          - generic [ref=f1e1388]:
            - generic [ref=f1e1389]:
              - generic [ref=f1e1390]: "5"
              - paragraph [ref=f1e1392]: Best in the market!
            - generic [ref=f1e1393]: nice good excellent
            - generic [ref=f1e1398]:
              - paragraph [ref=f1e1399]: Flipkart Customer
              - paragraph [ref=f1e1404]: Certified Buyer
              - paragraph [ref=f1e1405]: 1 month ago
      - generic [ref=f1e1406]:
        - generic [ref=f1e1407]:
          - img "NIKON D850 DSLR Camera Body Only" [ref=f1e1410]
          - generic [ref=f1e1411]:
            - link "5. NIKON D850 DSLR Camera Body... 4.7 19 Ratings&2 Reviews ₹1,93,053 17% off" [ref=f1e1412] [cursor=pointer]:
              - /url: /nikon-d850-dslr-camera-body-only/p/itm67ace0c4a825f?pid=DLLF65NSFMNPVPXD&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e1413]: 5. NIKON D850 DSLR Camera Body...
              - generic [ref=f1e1415]:
                - generic [ref=f1e1416]: "4.7"
                - generic [ref=f1e1418]:
                  - text: 19 Ratings
                  - generic [ref=f1e1419]: "&2 Reviews"
              - generic [ref=f1e1421]:
                - generic [ref=f1e1422]: ₹1,93,053
                - generic [ref=f1e1423]: 17% off
            - list [ref=f1e1424]:
              - listitem [ref=f1e1425]: 4K UHD Full Frame, Higher Resolution. Faster Speed. Greater Versatility., Fast continuous shooting, flagship autofocus and precise metering., 153 Point AF System, Autofocus Down to -4 EV, Speed to Match Your Vision, A Multimedia Powerhouse., Focus Peaking, Selectable Highlight Detection, TOUCH MONITOR Tilt and Touch, FOCUS STACKING, XQD Storage, Built-in Wireless Connectivity, Designed to Outperform., Phenomenal Battery Performance, Withstand the Elements, Extreme resolution meets extreme speed.
              - listitem [ref=f1e1426]: "Effective Pixels: 45.7 MP"
              - listitem [ref=f1e1427]: "Sensor Type: CMOS"
        - generic [ref=f1e1428]:
          - generic [ref=f1e1429]: Most Helpful Review
          - generic [ref=f1e1431]:
            - generic [ref=f1e1432]:
              - generic [ref=f1e1433]: "5"
              - paragraph [ref=f1e1435]: Mind-blowing purchase
            - generic [ref=f1e1438]:
              - generic [ref=f1e1439]: Master of all DSLRs in this category this is the best semi professional companion for amateur photographers. Best in class for wild life, landscape, portrait...
              - generic [ref=f1e1440] [cursor=pointer]: Read full review
            - generic [ref=f1e1442]:
              - paragraph [ref=f1e1443]: SANTANU SENGUPTA
              - paragraph [ref=f1e1448]: Certified Buyer
              - paragraph [ref=f1e1449]: Sep, 2020
        - generic [ref=f1e1450]:
          - generic [ref=f1e1451]: Recent Review
          - generic [ref=f1e1453]:
            - generic [ref=f1e1454]:
              - generic [ref=f1e1455]: "5"
              - paragraph [ref=f1e1457]: Fabulous!
            - generic [ref=f1e1458]: Steal deal. Great camera. Got everything sealed and original. Open box delivery is awesome and gives complete peace of mind.
            - generic [ref=f1e1463]:
              - paragraph [ref=f1e1464]: Dr Vineet Marwaha
              - paragraph [ref=f1e1469]: Certified Buyer
              - paragraph [ref=f1e1470]: Jul, 2025
  - contentinfo [ref=f1e1471]:
    - generic [ref=f1e1473]:
      - generic [ref=f1e1474]:
        - generic [ref=f1e1475]:
          - generic [ref=f1e1476]: ABOUT
          - link "Contact Us" [ref=f1e1477] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e1478] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e1479] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e1480] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e1481] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e1482] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e1483]:
          - generic [ref=f1e1484]: GROUP COMPANIES
          - link "Myntra" [ref=f1e1485] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e1486] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e1487] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e1488]:
          - generic [ref=f1e1489]: HELP
          - link "Payments" [ref=f1e1490] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e1491] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e1492] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e1493] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e1494]:
          - generic [ref=f1e1495]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e1496] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e1497] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e1498] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e1499] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e1500] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e1501] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e1502] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e1503] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e1505]:
          - generic [ref=f1e1506]: "Mail Us:"
          - generic [ref=f1e1509]:
            - paragraph [ref=f1e1510]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e1511]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e1512]: Clove Embassy Tech Village,
            - paragraph [ref=f1e1513]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e1514]: Bengaluru, 560103,
            - paragraph [ref=f1e1515]: Karnataka, India
          - generic [ref=f1e1516]: Social
          - generic [ref=f1e1517]:
            - link [ref=f1e1519] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e1522] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e1525] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e1528] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e1531]:
          - generic [ref=f1e1532]: "Registered Office Address:"
          - generic [ref=f1e1535]:
            - paragraph [ref=f1e1536]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e1537]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e1538]: Clove Embassy Tech Village,
            - paragraph [ref=f1e1539]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e1540]: Bengaluru, 560103,
            - paragraph [ref=f1e1541]: Karnataka, India
            - paragraph [ref=f1e1542]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e1543]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e1544] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e1545] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e1547]:
        - link "Become a Seller" [ref=f1e1550] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e1551]: Advertise
        - link "Gift Cards" [ref=f1e1555] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e1558] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e1559]: © 2007-2026 Flipkart.com
  - generic [ref=f1e1561]: Back to top
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
> 15  |       const naming = await items.nth(i).innerText();
      |                                         ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  16  |       const amount = await items.nth(i).innerText();
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
```