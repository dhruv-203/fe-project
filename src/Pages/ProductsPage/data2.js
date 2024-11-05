const products = [
    {
      id: "P001XYZ",
      title: "Premium Wireless Headphones",
      shortDescription: "Noise cancelling bluetooth headphones",
      discountedPrice: 199.99,
      originalPrice: 299.99,
      colors: ["#000000", "#FFFFFF", "#C0C0C0"],
      category: "Electronics",
      brand: "SoundMax",
      displayImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      ratings: 4.5,
      reviews: [
        "Great sound quality!",
        "Perfect for travel",
        "Battery life could be better"
      ],
      longDescription: "Experience premium sound quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
      additionalImages: [
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944"
      ]
    },
    {
      id: "P002XYZ",
      title: "Smart Fitness Watch",
      shortDescription: "Advanced health tracking",
      discountedPrice: 149.99,
      originalPrice: 199.99,
      colors: ["#000000", "#FF0000", "#0000FF"],
      category: "Wearables",
      brand: "FitTech",
      displayImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      ratings: 4.7,
      reviews: [
        "Accurate heart rate monitoring",
        "Great battery life",
        "Easy to use interface"
      ],
      longDescription: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, sleep tracking, and 14-day battery life.",
      additionalImages: [
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
      ]
    },
    {
      id: "P003XYZ",
      title: "Ultra-Slim Laptop",
      shortDescription: "Powerful performance in thin design",
      discountedPrice: 899.99,
      originalPrice: 1099.99,
      colors: ["#808080", "#000000"],
      category: "Computers",
      brand: "TechPro",
      displayImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      ratings: 4.8,
      reviews: [
        "Lightning fast performance",
        "Beautiful display",
        "Great for work and gaming"
      ],
      longDescription: "Experience exceptional performance with this ultra-slim laptop featuring the latest processor, 16GB RAM, and stunning 4K display.",
      additionalImages: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1504707748692-419802cf939d",
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e"
      ]
    },
    {
      id: "P004XYZ",
      title: "4K Gaming Monitor",
      shortDescription: "Ultra-smooth gaming experience",
      discountedPrice: 449.99,
      originalPrice: 599.99,
      colors: ["#000000"],
      category: "Electronics",
      brand: "ViewTech",
      displayImage: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
      ratings: 4.6,
      reviews: [
        "Amazing color accuracy",
        "Perfect for gaming",
        "Great value for money"
      ],
      longDescription: "Immerse yourself in gaming with this 27-inch 4K monitor featuring 144Hz refresh rate and 1ms response time.",
      additionalImages: [
        "https://images.unsplash.com/photo-1619953942547-233eab5a70d6",
        "https://images.unsplash.com/photo-1585792180666-f7347c490ee2",
        "https://images.unsplash.com/photo-1603481546239-65e13c5d0f39"
      ]
    },
    {
      id: "P005XYZ",
      title: "Wireless Gaming Mouse",
      shortDescription: "Precision gaming control",
      discountedPrice: 79.99,
      originalPrice: 99.99,
      colors: ["#000000", "#FF0000"],
      category: "Gaming",
      brand: "GameMax",
      displayImage: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
      ratings: 4.4,
      reviews: [
        "Great for FPS games",
        "Comfortable grip",
        "Long battery life"
      ],
      longDescription: "Achieve gaming precision with this wireless mouse featuring 16000 DPI optical sensor and customizable RGB lighting.",
      additionalImages: [
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
        "https://images.unsplash.com/photo-1625723044792-89fc8e3483cf",
        "https://images.unsplash.com/photo-1527814050087-3793815479db"
      ]
    },
    {
      id: "P006XYZ",
      title: "Mechanical Keyboard",
      shortDescription: "Premium typing experience",
      discountedPrice: 129.99,
      originalPrice: 159.99,
      colors: ["#000000", "#FFFFFF"],
      category: "Gaming",
      brand: "KeyMaster",
      displayImage: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      ratings: 4.7,
      reviews: [
        "Great build quality",
        "Satisfying key switches",
        "Beautiful RGB lighting"
      ],
      longDescription: "Experience premium typing with this mechanical keyboard featuring Cherry MX switches and customizable RGB backlighting.",
      additionalImages: [
        "https://images.unsplash.com/photo-1595225476474-87563907a212",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        "https://images.unsplash.com/photo-1595225476474-87563907a212"
      ]
    },
    {
      id: "P007XYZ",
      title: "Wireless Earbuds",
      shortDescription: "True wireless freedom",
      discountedPrice: 149.99,
      originalPrice: 199.99,
      colors: ["#000000", "#FFFFFF", "#00FF00"],
      category: "Audio",
      brand: "SoundPro",
      displayImage: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      ratings: 4.5,
      reviews: [
        "Amazing sound quality",
        "Comfortable fit",
        "Great battery life"
      ],
      longDescription: "Experience true wireless freedom with these earbuds featuring active noise cancellation and 24-hour battery life.",
      additionalImages: [
        "https://images.unsplash.com/photo-1598331668826-20cecc596b86",
        "https://images.unsplash.com/photo-1631867675167-90a456a90863",
        "https://images.unsplash.com/photo-1628089176770-4d312cb46b12"
      ]
    },
    {
      id: "P008XYZ",
      title: "4K Webcam",
      shortDescription: "Professional video quality",
      discountedPrice: 89.99,
      originalPrice: 119.99,
      colors: ["#000000"],
      category: "Electronics",
      brand: "ViewPro",
      displayImage: "https://images.unsplash.com/photo-1596742578443-7682ef7b7c1d",
      ratings: 4.3,
      reviews: [
        "Crystal clear video",
        "Great in low light",
        "Easy setup"
      ],
      longDescription: "Stream in 4K quality with this professional webcam featuring auto-focus and low-light correction.",
      additionalImages: [
        "https://images.unsplash.com/photo-1587826080692-f439cd0b70da",
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6",
        "https://images.unsplash.com/photo-1623949556303-b6ba255e0374"
      ]
    }
  ];

  export function giveData(){
    return products
  }