const products = [
  {
    "id": "SP001",
    "title": "Premium Wireless Headphones",
    "shortDescription": "Noise cancelling bluetooth headphones",
    "discountedPrice": 249.99,
    "originalPrice": 299.99,
    "colors": ["#000000", "#FFFFFF", "#C0C0C0"],
    "category": "Electronics",
    "brand": "SoundMaster",
    "displayImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    "ratings": 4.5,
    "reviews": [
      "Great sound quality!",
      "Battery life is impressive",
      "Very comfortable for long sessions"
    ],
    "longDescription": "Experience premium sound quality with our wireless headphones featuring active noise cancellation, 30-hour battery life, and premium memory foam ear cushions.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&q=80"
    ]
  },
  {
    "id": "SP002",
    "title": "Smart Fitness Watch",
    "shortDescription": "Advanced health tracking smartwatch",
    "discountedPrice": 179.99,
    "originalPrice": 199.99,
    "colors": ["#000000", "#FF0000", "#0000FF"],
    "category": "Wearables",
    "brand": "TechFit",
    "displayImage": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    "ratings": 4.3,
    "reviews": [
      "Accurate fitness tracking",
      "Battery lasts for days",
      "Beautiful display"
    ],
    "longDescription": "Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring, sleep tracking, and 14+ exercise modes.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
      "https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80"
    ]
  },
  {
    "id": "SP003",
    "title": "Professional DSLR Camera",
    "shortDescription": "High-resolution professional camera",
    "discountedPrice": 1299.99,
    "originalPrice": 1499.99,
    "colors": ["#000000"],
    "category": "Photography",
    "brand": "PhotoPro",
    "displayImage": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Amazing image quality",
      "Professional features",
      "Robust build quality"
    ],
    "longDescription": "Capture stunning photos with this professional-grade DSLR camera featuring 45MP full-frame sensor, 4K video recording, and advanced autofocus system.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
      "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=800&q=80",
      "https://images.unsplash.com/photo-1455894127589-22f75500213a?w=800&q=80"
    ]
  },
  {
    "id": "SP004",
    "title": "Gaming Laptop",
    "shortDescription": "High-performance gaming laptop",
    "discountedPrice": 1799.99,
    "originalPrice": 1999.99,
    "colors": ["#000000", "#FF0000"],
    "category": "Computers",
    "brand": "GameMaster",
    "displayImage": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Excellent gaming performance",
      "Great cooling system",
      "Beautiful display"
    ],
    "longDescription": "Experience ultimate gaming performance with this laptop featuring RTX 3080 graphics, 32GB RAM, and 165Hz QHD display.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
      "https://images.unsplash.com/photo-1585247226801-bc613c441316?w=800&q=80"
    ]
  },
  {
    "id": "SP005",
    "title": "Wireless Earbuds",
    "shortDescription": "Premium wireless earbuds",
    "discountedPrice": 149.99,
    "originalPrice": 179.99,
    "colors": ["#FFFFFF", "#000000", "#00FF00"],
    "category": "Electronics",
    "brand": "AudioPro",
    "displayImage": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80",
    "ratings": 4.4,
    "reviews": [
      "Great sound quality",
      "Comfortable fit",
      "Good battery life"
    ],
    "longDescription": "Enjoy premium sound quality with these wireless earbuds featuring active noise cancellation and 24-hour battery life with charging case.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b57?w=800&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800&q=80"
    ]
  },

  {
    "id": "SP006",
    "title": "Premium Smart Watch",
    "shortDescription": "Advanced fitness and health tracking",
    "discountedPrice": 299.99,
    "originalPrice": 349.99,
    "colors": ["#000000", "#SILVER", "#GOLD"],
    "category": "Wearables",
    "brand": "TechLife",
    "displayImage": "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Excellent health tracking features",
      "Great battery life",
      "Beautiful display quality"
    ],
    "longDescription": "Stay connected and healthy with this premium smartwatch featuring ECG monitoring, sleep tracking, GPS, and 5-day battery life.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80"
    ]
  },
  {
    "id": "SP007",
    "title": "4K Drone with Camera",
    "shortDescription": "Professional aerial photography drone",
    "discountedPrice": 799.99,
    "originalPrice": 899.99,
    "colors": ["#FFFFFF", "#000000"],
    "category": "Photography",
    "brand": "SkyCapture",
    "displayImage": "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Incredible stability",
      "Amazing 4K footage",
      "Easy to control"
    ],
    "longDescription": "Capture breathtaking aerial footage with this professional drone featuring 4K camera, 3-axis gimbal, 30-minute flight time, and intelligent flight modes.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
      "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=800&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80"
    ]
  },
  {
    "id": "SP008",
    "title": "Mechanical Gaming Keyboard",
    "shortDescription": "RGB mechanical keyboard with Cherry MX switches",
    "discountedPrice": 129.99,
    "originalPrice": 159.99,
    "colors": ["#000000", "#GREY"],
    "category": "Gaming",
    "brand": "GameTech",
    "displayImage": "https://images.unsplash.com/photo-1595225353945-8a93ffbd7e99?w=800&q=80",
    "ratings": 4.5,
    "reviews": [
      "Excellent typing experience",
      "Beautiful RGB lighting",
      "Solid build quality"
    ],
    "longDescription": "Dominate your games with this premium mechanical keyboard featuring Cherry MX switches, per-key RGB lighting, and aircraft-grade aluminum frame.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-358a6d8ee11b?w=800&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&q=80"
    ]
  },
  {
    "id": "SP009",
    "title": "Ultra-Wide Gaming Monitor",
    "shortDescription": "34-inch curved gaming monitor",
    "discountedPrice": 499.99,
    "originalPrice": 599.99,
    "colors": ["#000000"],
    "category": "Gaming",
    "brand": "ViewPro",
    "displayImage": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Immersive gaming experience",
      "Great color accuracy",
      "Smooth refresh rate"
    ],
    "longDescription": "Experience immersive gaming with this 34-inch ultrawide monitor featuring 144Hz refresh rate, 1ms response time, and HDR support.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&q=80",
      "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?w=800&q=80",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&q=80"
    ]
  },
  {
    "id": "SP010",
    "title": "Wireless Gaming Mouse",
    "shortDescription": "High-precision wireless gaming mouse",
    "discountedPrice": 79.99,
    "originalPrice": 99.99,
    "colors": ["#000000", "#WHITE"],
    "category": "Gaming",
    "brand": "GamePro",
    "displayImage": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Perfect precision",
      "Great battery life",
      "Comfortable grip"
    ],
    "longDescription": "Achieve gaming perfection with this wireless gaming mouse featuring 25,000 DPI sensor, 70-hour battery life, and customizable RGB lighting.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
      "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?w=800&q=80"
    ]
  },
  {
    "id": "SP011",
    "title": "Professional Microphone",
    "shortDescription": "USB condenser microphone",
    "discountedPrice": 129.99,
    "originalPrice": 149.99,
    "colors": ["#000000", "#SILVER"],
    "category": "Audio",
    "brand": "AudioTech",
    "displayImage": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Crystal clear audio",
      "Professional quality",
      "Easy setup"
    ],
    "longDescription": "Record professional-quality audio with this USB condenser microphone featuring cardioid pattern, zero-latency monitoring, and plug-and-play setup.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?w=800&q=80",
      "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?w=800&q=80",
      "https://images.unsplash.com/photo-1624094669475-8c4f6b66787d?w=800&q=80"
    ]
  },
  {
    "id": "SP012",
    "title": "Portable SSD",
    "shortDescription": "1TB external solid state drive",
    "discountedPrice": 149.99,
    "originalPrice": 179.99,
    "colors": ["#000000", "#BLUE"],
    "category": "Storage",
    "brand": "DataPro",
    "displayImage": "https://images.unsplash.com/photo-1628557044797-f21654b12f18?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Lightning-fast transfers",
      "Compact design",
      "Reliable performance"
    ],
    "longDescription": "Store and transfer files at lightning speed with this portable SSD featuring 1050MB/s read speeds, shock-resistant design, and USB-C connectivity.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1628557044644-7e83d6b8e42f?w=800&q=80",
      "https://images.unsplash.com/photo-1531492643958-ae9d4c0537d1?w=800&q=80",
      "https://images.unsplash.com/photo-1624001621241-d457c41291ab?w=800&q=80"
    ]
  },
  {
    "id": "SP013",
    "title": "Wireless Charging Stand",
    "shortDescription": "15W fast wireless charging stand",
    "discountedPrice": 39.99,
    "originalPrice": 49.99,
    "colors": ["#000000", "#WHITE"],
    "category": "Accessories",
    "brand": "PowerTech",
    "displayImage": "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=800&q=80",
    "ratings": 4.5,
    "reviews": [
      "Fast charging",
      "Sleek design",
      "Works great"
    ],
    "longDescription": "Charge your devices in style with this wireless charging stand featuring 15W fast charging, dual coils for flexible placement, and LED charging indicator.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1585338835875-5313424f4a36?w=800&q=80",
      "https://images.unsplash.com/photo-1587037542794-6c5ef0088e76?w=800&q=80",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80"
    ]
  },
  {
    "id": "SP014",
    "title": "Noise-Cancelling Earbuds",
    "shortDescription": "True wireless ANC earbuds",
    "discountedPrice": 159.99,
    "originalPrice": 199.99,
    "colors": ["#000000", "#WHITE", "#NAVY"],
    "category": "Audio",
    "brand": "SoundPro",
    "displayImage": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Excellent noise cancellation",
      "Great sound quality",
      "Comfortable fit"
    ],
    "longDescription": "Immerse yourself in music with these premium wireless earbuds featuring active noise cancellation, 24-hour battery life, and touch controls.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=800&q=80",
      "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b57?w=800&q=80",
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80"
    ]
  },
  {
    "id": "SP015",
    "title": "4K Webcam",
    "shortDescription": "Professional streaming webcam",
    "discountedPrice": 149.99,
    "originalPrice": 179.99,
    "colors": ["#000000"],
    "category": "Accessories",
    "brand": "StreamPro",
    "displayImage": "https://images.unsplash.com/photo-1622959588758-b0a33d0f7b31?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Excellent video quality",
      "Great in low light",
      "Easy to set up"
    ],
    "longDescription": "Stream and conference in 4K quality with this professional webcam featuring HDR support, built-in privacy cover, and dual noise-cancelling microphones.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1591815302525-756a9bcc3425?w=800&q=80",
      "https://images.unsplash.com/photo-1587576644921-f617167a1420?w=800&q=80",
      "https://images.unsplash.com/photo-1583477007172-3972f7ebf597?w=800&q=80"
    ]
  },
  {
    "id": "SP016",
    "title": "Professional Mirrorless Camera",
    "shortDescription": "Full-frame mirrorless digital camera",
    "discountedPrice": 1999.99,
    "originalPrice": 2299.99,
    "colors": ["#000000"],
    "category": "Photography",
    "brand": "PhotoMaster",
    "displayImage": "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Outstanding image quality",
      "Excellent low light performance",
      "Professional build quality"
    ],
    "longDescription": "Capture life's moments in stunning detail with this professional mirrorless camera featuring 45MP full-frame sensor, 8K video recording, and advanced eye-tracking autofocus.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800&q=80",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&q=80",
      "https://images.unsplash.com/photo-1552168324-d612d77725e3?w=800&q=80"
    ]
  },
  {
    "id": "SP017",
    "title": "Gaming PC Tower",
    "shortDescription": "High-end gaming desktop computer",
    "discountedPrice": 2499.99,
    "originalPrice": 2799.99,
    "colors": ["#000000", "#WHITE"],
    "category": "Gaming",
    "brand": "GameForce",
    "displayImage": "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800&q=80",
    "ratings": 4.9,
    "reviews": [
      "Beast of a machine",
      "Runs everything at max settings",
      "Beautiful RGB lighting"
    ],
    "longDescription": "Experience ultimate gaming performance with this custom gaming PC featuring RTX 4080, Intel i9 processor, 32GB RAM, and liquid cooling system.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80",
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&q=80"
    ]
  },
  {
    "id": "SP018",
    "title": "Studio Lighting Kit",
    "shortDescription": "Professional photography lighting set",
    "discountedPrice": 299.99,
    "originalPrice": 349.99,
    "colors": ["#000000"],
    "category": "Photography",
    "brand": "StudioPro",
    "displayImage": "https://images.unsplash.com/photo-1598908314732-07113901949e?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Professional quality lighting",
      "Easy to set up",
      "Very versatile"
    ],
    "longDescription": "Create professional-quality photos with this complete studio lighting kit featuring LED lights, softboxes, stands, and wireless remote control.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1593080358201-08e4ff5038ae?w=800&q=80",
      "https://images.unsplash.com/photo-1621962728420-d4466362aec4?w=800&q=80",
      "https://images.unsplash.com/photo-1533425962554-06f6e8c116f4?w=800&q=80"
    ]
  },
  {
    "id": "SP019",
    "title": "Portable Power Station",
    "shortDescription": "500Wh portable battery generator",
    "discountedPrice": 499.99,
    "originalPrice": 599.99,
    "colors": ["#000000", "#BLUE"],
    "category": "Electronics",
    "brand": "PowerMax",
    "displayImage": "https://images.unsplash.com/photo-1583934555852-537536e49071?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Great for camping",
      "Long battery life",
      "Multiple output options"
    ],
    "longDescription": "Power your adventures with this portable power station featuring 500Wh capacity, multiple outputs, solar charging capability, and LED display.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1583934584129-419caf086b8d?w=800&q=80",
      "https://images.unsplash.com/photo-1589873371514-60ae91e80b26?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
    ]
  },
  {
    "id": "SP020",
    "title": "360-Degree Camera",
    "shortDescription": "8K 360° virtual reality camera",
    "discountedPrice": 399.99,
    "originalPrice": 449.99,
    "colors": ["#000000"],
    "category": "Photography",
    "brand": "VRCam",
    "displayImage": "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Amazing 360 footage",
      "Easy to use",
      "Great app integration"
    ],
    "longDescription": "Capture immersive 360-degree content with this advanced camera featuring 8K resolution, stabilization, and wireless streaming capabilities.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80",
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=800&q=80",
      "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=800&q=80"
    ]
  },
  {
    "id": "SP021",
    "title": "USB Microphone Arm Stand",
    "shortDescription": "Professional microphone boom arm",
    "discountedPrice": 79.99,
    "originalPrice": 99.99,
    "colors": ["#000000"],
    "category": "Audio",
    "brand": "StudioTech",
    "displayImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Sturdy construction",
      "Easy adjustment",
      "Professional quality"
    ],
    "longDescription": "Position your microphone perfectly with this professional boom arm featuring cable management, 360-degree rotation, and desk clamp mount.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1598550473146-58759859d2b7?w=800&q=80",
      "https://images.unsplash.com/photo-1598550473191-627d72ea3510?w=800&q=80",
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80"
    ]
  },
  {
    "id": "SP022",
    "title": "Smart Home Security Camera",
    "shortDescription": "1080p wireless security camera",
    "discountedPrice": 89.99,
    "originalPrice": 109.99,
    "colors": ["#WHITE", "#BLACK"],
    "category": "Smart Home",
    "brand": "SecureView",
    "displayImage": "https://images.unsplash.com/photo-1558000143-a78f8299c40b?w=800&q=80",
    "ratings": 4.5,
    "reviews": [
      "Clear night vision",
      "Easy setup",
      "Great app features"
    ],
    "longDescription": "Monitor your home 24/7 with this smart security camera featuring 1080p HD video, night vision, two-way audio, and motion detection alerts.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1563966732-4fa112177a6e?w=800&q=80",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80"
    ]
  },
  {
    "id": "SP023",
    "title": "Computer Desk",
    "shortDescription": "Gaming/Office desk with LED",
    "discountedPrice": 199.99,
    "originalPrice": 249.99,
    "colors": ["#BLACK", "#WHITE"],
    "category": "Furniture",
    "brand": "DeskPro",
    "displayImage": "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
    "ratings": 4.6,
    "reviews": [
      "Sturdy construction",
      "Great cable management",
      "Perfect gaming setup"
    ],
    "longDescription": "Level up your setup with this gaming desk featuring RGB lighting, cable management system, headphone hook, and cup holder.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?w=800&q=80",
      "https://images.unsplash.com/photo-1587212695349-59772bd589f4?w=800&q=80",
      "https://images.unsplash.com/photo-1598257006626-48b0c252070d?w=800&q=80"
    ]
  },
  {
    "id": "SP024",
    "title": "Streaming Deck",
    "shortDescription": "15-key LCD macro keyboard",
    "discountedPrice": 149.99,
    "originalPrice": 179.99,
    "colors": ["#000000"],
    "category": "Streaming",
    "brand": "StreamTech",
    "displayImage": "https://images.unsplash.com/photo-1595225476474-358a6d8ee11b?w=800&q=80",
    "ratings": 4.8,
    "reviews": [
      "Perfect for streaming",
      "Customizable buttons",
      "Great software"
    ],
    "longDescription": "Enhance your streaming setup with this customizable stream deck featuring 15 LCD keys, multi-actions, and integration with popular streaming platforms.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1595225476377-c5d5f25ad607?w=800&q=80",
      "https://images.unsplash.com/photo-1595225475547-4d68354d1799?w=800&q=80",
      "https://images.unsplash.com/photo-1595225475512-20819c3bfecd?w=800&q=80"
    ]
  },
  {
    "id": "SP025",
    "title": "Dual Monitor Stand",
    "shortDescription": "Adjustable monitor arm mount",
    "discountedPrice": 129.99,
    "originalPrice": 159.99,
    "colors": ["#BLACK", "#SILVER"],
    "category": "Accessories",
    "brand": "DeskTech",
    "displayImage": "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=800&q=80",
    "ratings": 4.7,
    "reviews": [
      "Sturdy construction",
      "Easy adjustment",
      "Clean desk setup"
    ],
    "longDescription": "Optimize your workspace with this dual monitor mount featuring gas spring arms, cable management, and support for monitors up to 32 inches.",
    "additionalImages": [
      "https://images.unsplash.com/photo-1593584785033-9c8ae5c1df51?w=800&q=80",
      "https://images.unsplash.com/photo-1542728928-0011f81544e5?w=800&q=80",
      "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80"
    ]
  },
  {
    id: "CLT001",
    title: "Classic Denim Jacket",
    shortDescription: "Vintage wash comfortable denim jacket",
    discountedPrice: 79.99,
    originalPrice: 99.99,
    colors: ["#1E90FF", "#000080", "#483D8B"],
    category: "Clothing",
    brand: "DenimCo",
    displayImage: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6",
    ratings: 4.6,
    reviews: [
      "Perfect fit and great quality",
      "Classic style, goes with everything",
      "Comfortable and durable"
    ],
    longDescription: "A timeless denim jacket featuring a vintage wash, comfortable fit, and classic button-front design. Made from premium cotton denim with slight stretch for comfort. Perfect for layering in any season.",
    additionalImages: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
    ]
  },
  {
    id: "CLT002",
    title: "Casual White Sweater",
    shortDescription: "Soft knit cotton blend sweater",
    discountedPrice: 49.99,
    originalPrice: 69.99,
    colors: ["#FFFFFF", "#BEIGE", "#808080"],
    category: "Clothing",
    brand: "CozyKnits",
    displayImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    ratings: 4.4,
    reviews: [
      "Super soft material",
      "Great for everyday wear",
      "Washes well without shrinking"
    ],
    longDescription: "Cozy and versatile sweater made from premium cotton blend. Features a relaxed fit, ribbed cuffs and hem, and a classic crew neckline. Perfect for casual everyday wear or layering.",
    additionalImages: [
      "https://images.unsplash.com/photo-1614251055880-ee96e4803393",
      "https://images.unsplash.com/photo-1511511450040-460c19854677"
    ]
  },
  {
    id: "CLT003",
    title: "High-Waist Slim Jeans",
    shortDescription: "Stretchy denim high-waisted jeans",
    discountedPrice: 65.99,
    originalPrice: 85.99,
    colors: ["#000080", "#1E90FF", "#000000"],
    category: "Clothing",
    brand: "FitDenim",
    displayImage: "https://images.unsplash.com/photo-1604176354204-9268737828e4",
    ratings: 4.7,
    reviews: [
      "Amazing fit and stretch",
      "Very flattering cut",
      "Perfect high waist"
    ],
    longDescription: "High-waisted jeans with the perfect amount of stretch for comfort and shape retention. Features a slim fit through hip and thigh, with slight tapering at ankle. Made from premium stretch denim.",
    additionalImages: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09"
    ]
  },
  {
    id: "CLT004",
    title: "Oversized Blazer",
    shortDescription: "Modern cut oversized blazer",
    discountedPrice: 89.99,
    originalPrice: 119.99,
    colors: ["#000000", "#808080", "#8B4513"],
    category: "Clothing",
    brand: "ModernTailor",
    displayImage: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f",
    ratings: 4.5,
    reviews: [
      "Perfect oversized fit",
      "Great quality material",
      "Versatile piece"
    ],
    longDescription: "Contemporary oversized blazer with clean lines and modern tailoring. Features padded shoulders, front pockets, and single-button closure. Perfect for both casual and formal occasions.",
    additionalImages: [
      "https://images.unsplash.com/photo-1608234808654-2a8875faa7fd",
      "https://images.unsplash.com/photo-1632149877166-f75d49000351"
    ]
  },
  {
    id: "CLT005",
    title: "Pleated Midi Skirt",
    shortDescription: "Elegant pleated midi length skirt",
    discountedPrice: 55.99,
    originalPrice: 75.99,
    colors: ["#000000", "#FFB6C1", "#F0E68C"],
    category: "Clothing",
    brand: "ElegantWear",
    displayImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    ratings: 4.8,
    reviews: [
      "Beautiful movement",
      "Perfect length",
      "Very versatile piece"
    ],
    longDescription: "Flowing pleated midi skirt with elastic waistband for comfort. Features delicate pleating throughout and a flattering A-line silhouette. Perfect for both casual and dressed-up occasions.",
    additionalImages: [
      "https://images.unsplash.com/photo-1582142849959-dcc66afd45cb",
      "https://images.unsplash.com/photo-1583496662350-f0f1c9a88f89"
    ]
  },
  {
    id: "CLT006",
    title: "Cotton Crew Neck T-Shirt",
    shortDescription: "Premium cotton basic tee",
    discountedPrice: 24.99,
    originalPrice: 34.99,
    colors: ["#FFFFFF", "#000000", "#808080", "#FFB6C1"],
    category: "Clothing",
    brand: "BasicEssentials",
    displayImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    ratings: 4.6,
    reviews: [
      "Perfect basic tee",
      "Great quality cotton",
      "Holds shape after washing"
    ],
    longDescription: "Essential crew neck t-shirt made from premium combed cotton. Features a classic fit, reinforced shoulder seams, and double-stitched hem. Perfect for everyday wear or layering.",
    additionalImages: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34",
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad"
    ]
  },
  {
    id: "CLT007",
    title: "Wool Blend Coat",
    shortDescription: "Classic winter coat with belt",
    discountedPrice: 159.99,
    originalPrice: 199.99,
    colors: ["#000000", "#CAMEL", "#808080"],
    category: "Clothing",
    brand: "WinterStyle",
    displayImage: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
    ratings: 4.9,
    reviews: [
      "Excellent quality",
      "Very warm and comfortable",
      "Classic timeless style"
    ],
    longDescription: "Sophisticated wool blend coat featuring a removable belt, notched lapels, and side pockets. Fully lined with premium satin. Perfect for keeping warm while looking polished during cold weather.",
    additionalImages: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3",
      "https://images.unsplash.com/photo-1548624149-f9461d5c1af1"
    ]
  },
  {
    id: "CLT008",
    title: "Knit Cardigan",
    shortDescription: "Cozy button-up cardigan sweater",
    discountedPrice: 69.99,
    originalPrice: 89.99,
    colors: ["#BEIGE", "#000000", "#808080"],
    category: "Clothing",
    brand: "CozyKnits",
    displayImage: "https://images.unsplash.com/photo-1619603364904-c0498317e145",
    ratings: 4.7,
    reviews: [
      "So soft and comfortable",
      "Perfect weight for layering",
      "Great quality knit"
    ],
    longDescription: "Comfortable knit cardigan featuring front button closure, ribbed cuffs and hem, and patch pockets. Made from a soft wool blend that's perfect for layering in any season.",
    additionalImages: [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77",
      "https://images.unsplash.com/photo-1618410319102-147cbd4c2ad6"
    ]
  },
]

export function giveData() {
  return products
}