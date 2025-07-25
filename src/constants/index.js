const flavorlists = [
  {
    name: "Milk Chocolate",
    color: "brown",
    image: 'Chocolate_Milk_60g_Carton.webp',
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    image: 'Chocolate_CookiesCreme_60g_Carton.webp',
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter",
    color: "orange",
    image: 'Chocolate_PB_60g_Carton.webp',
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Almond Chocolate",
    color: "white",
    image: 'Chocolate_Almond_60g_Carton.webp',
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Dark Chocolate Sea Salt",
    color: "black",
    image: 'Chocolate_Dark_SeaSalt_60g_Carton.webp',
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const nutrientLists = [
  { label: "Potassium", amount: "2%" },
  { label: "Dietary Fiber", amount: "1mg" },
  { label: "Calcium", amount: "4%" },
  { label: "Sodium", amount: "25mg" },
  { label: "Protein", amount: "2g" },
  { label: "Iron", amount: "6%" },
];

const cards = [
  {
    src: "/videos/t1.mp4",
    rotation: "rotate-z-[-10deg]",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/t2.mp4",
    rotation: "rotate-z-[4deg]",
  },
  {
    src: "/videos/t3.mp4",
    rotation: "rotate-z-[-4deg]",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/t4.mp4",
    rotation: "rotate-z-[4deg]",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/t5.mp4",
    rotation: "rotate-z-[-10deg]",
  }
];

const productLists = [
  {
    id: 1,
    name: "Dark Chocolate Sea Salt",
    image: 'Chocolate_Dark_SeaSalt_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  {
    id: 2,
    name: "Dark Chocolate",
    image: 'Chocolate_Dark_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  {
    id: 3,
    name: "Milk Chocolate",
    image: 'Chocolate_Milk_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  {
    id: 4,
    name: "Peanut Butter",
    image: 'Chocolate_PB_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  {
    id: 5,
    name: "Milk Crunch",
    image: 'Chocolate_Milk_Crunch_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  
  {
    id: 6,
    name: "Almond Chocolate",
    image: 'Chocolate_Almond_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 7,
    name: "Peanut Butter Crunch",
    image: 'Chocolate_PBC_60g_Carton.webp',
    price: 3.4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 8,
    name: "Sample Pack",
    image: 'SamplerPack_2x_4b677e6c-1a70-4407-8687-adbdc5431b15.webp',
    price: 12.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 9,
    name: "Milk Chocolate Pack",
    image: 'MilkChocolate_35g_5ct_2x_1dd90a89-8c1f-4a3d-bd7e-8627a0b521f7.webp',
    price: 5.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 10,
    name: "Peanut Butter Pack",
    image: 'PeanutButter_35g_5ct_2x_d1f3ad09-b276-430f-9519-bc830077cafd.webp',
    price: 5.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 11,
    name: "Value Pack",
    image: 'ValuePack.webp',
    price: 5.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 12,
    name: "Cookies & Creme",
    image: 'Chocolate_CookiesCreme_60g_Carton.webp',
    price: 5.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 13,
    name: "MrBeast Briefcase Collector's Edition",
    image: 'MrBeast_Briefcase_1.webp',
    price: 5.2,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 14,
    name: "Beast Games Box",
    image: 'BeastGamesBox.webp',
    price: 14,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 15,
    name: "Snack-size Variety Bag",
    image: 'VarietyBag_35g_28ct_22264843-38f5-41b0-91c6-34a703836bcd.webp',
    price: 10,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 16,
    name: "Peanut Butter Cups",
    image: 'Cups_PB_1ct.webp',
    price: 3.12,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },

  {
    id: 17,
    name: "Milk Crunch Pack",
    image: 'Milk-Crunch-5-Pack-PDP-Main.avif',
    price: 4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
  {
    id: 18,
    name: "Hazelnut Cups",
    image: 'Cups_HN_1ct.webp',
    price: 4,
    nutrition:[
      {
      name: 'Total Calories',
      value: '160'
      },
      {
      name: 'Total Fat',
      value: '10g'
      },
      {
      name: 'Saturated Fat',
      value: '6g'
      },
      {
      name: 'Trans Fat',
      value: '0g'
      },
      {
      name: 'Cholestrol',
      value: '0mg'
      },
      {
      name: 'Sodium',
      value: '0mg'
      },
      {
      name: 'Protein',
      value: '1g'
      },
      {
      name: 'Total Carbohydrates',
      value: '18g'
      },
      {
      name: 'Dietary Fiber',
      value: '2g'
      },
      {
      name: 'Total Sugars',
      value: '14g'
      },
      {
      name: 'Incl Added Sugars',
      value: '14g'
      },
      {
      name: 'Vitamin D',
      value: '0%'
      },
      {
      name: 'Calcium',
      value: '4%'
      },
      {
      name: 'Iron',
      value: '15%'
      },
      {
      name: 'Potassium',
      value: '2%'
      },
    ]
  },
];

export { flavorlists, nutrientLists, cards,productLists };
