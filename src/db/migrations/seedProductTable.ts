import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedProductTable implements MigrationInterface {
  name = 'seedProductTable1678040718352'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // product_category 1: solar
    await queryRunner.query(
      `INSERT INTO product VALUES('6c480ae2-bb04-11ed-afa1-0242ac120002', 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit', 'This kit includes a 100W solar panel, 30A PWM negative ground charge controller, and mounting brackets. It is designed for off-grid applications and can be used to power small appliances and electronics.', 'https://cdn11.bigcommerce.com/s-fhnch/images/stencil/1280w/products/945/21493/RNG-KIT-STARTER100D-WND30-G3_01_2__81067.1677859661.jpg?c=2', 'https://cdn11.bigcommerce.com/s-fhnch/images/stencil/320w/products/945/21489/RNG-KIT-STARTER100D-WND30-G3_03__59684.1677859661.jpg?c=2', 189.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('6c480ae2-bb04-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('6c480ae2-bb04-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('6c480ae2-bb04-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('57e5d79a-bb69-11ed-afa1-0242ac120002', 'Goal Zero Yeti 400 Portable Power Station', 'This portable power station can be charged using a solar panel (sold separately) and provides 400Wh of power. It can be used to power small appliances, electronics, and even some power tools.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81NHDy+FiqL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71YXck6l8eL._AC_SL1500_.jpg', 449.95)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('57e5d79a-bb69-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8e274adc-bb69-11ed-afa1-0242ac120002',  'Sunforce 50022 5-Watt Solar Battery Trickle Charger', 'This trickle charger is designed to keep 12V batteries charged using solar power. It is easy to install and can be used to maintain the charge of cars, boats, and other vehicles.', 'https://sunforceproducts.com/wp-content/uploads/2016/11/Model-50022_5W-Trickle-Charger-800x800.jpg', 'https://sunforceproducts.com/wp-content/uploads/2016/11/03-image-16-800x800.jpg', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('8e274adc-bb69-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('d7fa353e-bb69-11ed-afa1-0242ac120002', 'Solariver Solar Water Pump Kit', 'This solar water pump kit includes a 20W solar panel, a water pump, and a controller. It is designed to be used for outdoor water features, such as ponds, fountains, and waterfalls.', 'https://cdn.shopify.com/s/files/1/1432/1884/products/SP12-401215E_1_1024x1024@2x.jpg?v=1639579180', 'https://cdn.shopify.com/s/files/1/1432/1884/products/DSC02533_093a0e37-c49b-48c3-bb99-06b2eec9dc49_1024x1024@2x.jpg?v=1625678117', 139.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('d7fa353e-bb69-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('06e96874-bb6a-11ed-afa1-0242ac120002', 'TP-solar 30 Watt Foldable Solar Panel Battery Charger Kit', 'This foldable solar panel kit includes a 30W solar panel, a charge controller, and a 10-in-1 connector cable. It is designed to be portable and can be used to charge 12V batteries, smartphones, tablets, and other small devices.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71MtTn4Ee1L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jfUDoIKIL._AC_SL1500_.jpg', 89.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('06e96874-bb6a-11ed-afa1-0242ac120002', 1)`
    )
    // product_category 2: electric vehicles
    await queryRunner.query(
      `INSERT INTO product VALUES('3874ec46-bb6b-11ed-afa1-0242ac120002', 'Tesla Wall Connector', 'This wall connector allows Tesla owners to charge their vehicles up to 44 miles of range per hour. It is sleek and durable, and can be installed both indoors and outdoors.', 'https://www.tesla.com/sites/default/files/support/charging/GEN%203%20WALL%20CONNECTOR%20COVER_v1%5B1%5D.png', 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1457768-02-G_alt.jpg', 500.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('3874ec46-bb6b-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('3874ec46-bb6b-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('3874ec46-bb6b-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('666eb082-bb6b-11ed-afa1-0242ac120002', 'ChargePoint Home Flex Electric Vehicle (EV) Charger', 'This charger is compatible with all electric vehicles and can be installed both indoors and outdoors. It can deliver up to 50 amps of power and can charge vehicles up to 9 times faster than a standard outlet.', 'https://drh1.img.digitalriver.com/DRHM/Storefront/Company/chargept/images/product/detail/CPH50Gallerysept2019/ChargePoint-Carousel-Nema6-50.png', 'https://drh1.img.digitalriver.com/DRHM/Storefront/Company/chargept/images/product/detail/CPH50Gallerysept2019/ChargePoint-Carousel-9x-Faster.png', 699.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('666eb082-bb6b-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8e87a1b4-bb6b-11ed-afa1-0242ac120002', 'Tesla Model S Wireless Charger', 'This wireless charger is designed specifically for the Tesla Model S and allows owners to charge their vehicles without the need for cords or plugs. It is easy to install and can be used with any Qi-enabled device.', 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562264-00-A_4_2000.jpg', 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/INTERIOR/1562264-00-A_1_2000.jpg', 189.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('8e87a1b4-bb6b-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('ba6445c6-bb6b-11ed-afa1-0242ac120002', 'ClipperCreek HCS-40P Electric Vehicle Charger', 'This charger is compact and easy to install, making it a great option for home or office use. It can deliver up to 32 amps of power and can charge vehicles up to 5 times faster than a standard outlet.', 'https://d3f7dpm96o8eu9.cloudfront.net/media/catalog/product/cache/fc137634174bd1a204d0992cfe4001b0/e/n/en-cc-hcs-40p.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/616eVRyM06L._AC_SX679_.jpg', 549.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('ba6445c6-bb6b-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('0b70de52-bb6c-11ed-afa1-0242ac120002', 'JuiceBox Pro 40 Smart Electric Vehicle (EV) Charging Station', 'This charging station is compatible with all electric vehicles and can be controlled via a smartphone app. It can deliver up to 40 amps of power and can charge vehicles up to 7 times faster than a standard outlet.', 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1428319-847__1&recipeName=350', 'https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1496298&recipeId=729', 619.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('0b70de52-bb6c-11ed-afa1-0242ac120002', 2)`
    )
    // product_category 3: bamboo
    await queryRunner.query(
      `INSERT INTO product VALUES('4d1459a6-bb6c-11ed-afa1-0242ac120002', 'Bamboo Bath Mat', 'This bath mat is made of 100% natural bamboo and is designed to resist water and mold. It has a sleek and modern look that can add an elegant touch to any bathroom.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81sBX2PUExL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/918fLTYvH5L._AC_SL1500_.jpg', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('4d1459a6-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('4d1459a6-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('4d1459a6-bb6c-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('7548f2c4-bb6c-11ed-afa1-0242ac120002', 'Bamboo Utensils Set', 'This set includes a fork, knife, spoon, and a pair of chopsticks, all made of 100% natural bamboo. It is perfect for camping, picnics, or everyday use. The utensils are lightweight, durable, and easy to clean. ', 'https://i.etsystatic.com/22560528/r/il/341ff8/3379265513/il_1588xN.3379265513_1l26.jpg', 'https://i.etsystatic.com/22560528/r/il/de49db/3379265523/il_1588xN.3379265523_6eql.jpg', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('7548f2c4-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('95a4b288-bb6c-11ed-afa1-0242ac120002', 'Bamboo Cutting Board', 'This cutting board is made of natural bamboo and is both lightweight and durable. It is perfect for cutting and slicing fruits, vegetables, and meats. It has a sleek and modern look that can add an elegant touch to any kitchen.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81JmsSvkzhL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91vgIg7gnOL._AC_SX679_.jpg', 17.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('95a4b288-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('c26e7a10-bb6c-11ed-afa1-0242ac120002', 'Bamboo Bed Sheets', 'These bed sheets are made of 100% natural bamboo and are designed to be soft, breathable, and hypoallergenic. They can help regulate temperature and keep you cool and comfortable during the night.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81yuUUXzJKL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81f-MV3X+1L._AC_SL1500_.jpg', 99.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('c26e7a10-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('f354df84-bb6c-11ed-afa1-0242ac120002', 'Bamboo Straws', 'These straws are made of 100% natural bamboo and are a great alternative to plastic straws. They are durable, reusable, and easy to clean. They come in a set of 12 and include a cleaning brush.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71cS9N-CChL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81oIcBh40FL._AC_SL1500_.jpg', 10.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('f354df84-bb6c-11ed-afa1-0242ac120002', 3)`
    )
    // product_category 4: biodegradable packaging
    await queryRunner.query(
      `INSERT INTO product VALUES('2c47ed7c-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Mailer Bags', 'These mailer bags are made of 100% compostable and biodegradable materials, such as corn starch and PBAT. They are durable and water-resistant, and are suitable for shipping products of various sizes.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41J7xCzaHfL._AC_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31dgp1rVj9L._AC_.jpg', 24.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('2c47ed7c-bb6d-11ed-afa1-0242ac120002', 4)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('2c47ed7c-bb6d-11ed-afa1-0242ac120002', 2)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('2c47ed7c-bb6d-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('528c90be-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Food Containers', 'These food containers are made of 100% natural sugarcane fibers and are fully compostable and biodegradable. They are perfect for take-out orders and food delivery services. They are microwave-safe and can hold both hot and cold foods.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91ig1+jlG1L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81R07RshGmL._AC_SL1500_.jpg', 25.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('528c90be-bb6d-11ed-afa1-0242ac120002', 4)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('7305551a-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Trash Bags', 'These trash bags are made of 100% biodegradable and compostable materials, such as corn starch and plant fibers. They are durable and can hold up to 13 gallons of waste. They are perfect for households and businesses that want to reduce their environmental impact.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41KQcbVJUPL._AC_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61qszhZOD4L._AC_SX679_.jpg', 19.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('7305551a-bb6d-11ed-afa1-0242ac120002', 4)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('c1ebe09a-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Bubble Wrap', 'This bubble wrap is made of 100% biodegradable and compostable materials, such as PLA and PBAT. It provides the same level of protection as traditional bubble wrap but is much more eco-friendly. It is perfect for packing fragile items.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81pzLQ9AVoL._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81BogcT3PcL._AC_SL1500_.jpg', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('c1ebe09a-bb6d-11ed-afa1-0242ac120002', 4)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('e296ff78-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Packing Peanuts', 'These packing peanuts are made of 100% biodegradable and compostable materials, such as corn starch and wheat flour. They provide the same level of cushioning as traditional packing peanuts but are much more environmentally friendly. They are perfect for packing and shipping fragile items.', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Zeq+u2r+L._AC_SX679_.jpg', 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Psw7c+TzL._AC_SL1500_.jpg', 24.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('e296ff78-bb6d-11ed-afa1-0242ac120002', 4)`
    )
    // product_category 5: organic / natural personal care products
    await queryRunner.query(
      `INSERT INTO product VALUES('0e782946-bb6e-11ed-afa1-0242ac120002', 'Dr. Bronner''s Pure-Castile Liquid Soap', 'This versatile soap can be used for body, face, and hair, and is made with organic and fair trade ingredients such as coconut oil, olive oil, and hemp oil. It comes in a variety of scents and is gentle on the skin.', 'https://cdn.shopify.com/s/files/1/0424/3475/6772/products/US-LiquidSoap-32oz-Peppermint-600_360x.jpg?v=1622829048', 'https://cdn.shopify.com/s/files/1/0424/3475/6772/products/us-liquid_soap-32oz-peppermint-side-healsoul_360x.jpg?v=1622829043', 18.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('0e782946-bb6e-11ed-afa1-0242ac120002', 5)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('0e782946-bb6e-11ed-afa1-0242ac120002', 3)`
    )
    await queryRunner.query(
      `INSERT INTO product_sub_category VALUES('0e782946-bb6e-11ed-afa1-0242ac120002', 1)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('2f259156-bb6e-11ed-afa1-0242ac120002', 'Burt''s Bees Beeswax Lip Balm', 'This classic lip balm is made with natural ingredients such as beeswax, coconut oil, and sunflower seed oil. It provides long-lasting hydration and protection for dry, chapped lips.', 'https://mcprod.ecom.clxdtc.com/media/catalog/product/7/9/792850011984.jpg?width=1322&auto=webp', 'https://mcprod.ecom.clxdtc.com/media/catalog/product/l/i/lipbalm_snackable_beeswax.jpg?width=1322&auto=webp', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('2f259156-bb6e-11ed-afa1-0242ac120002', 5)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('695a47c2-bb6e-11ed-afa1-0242ac120002', 'Acure Organics Brightening Facial Scrub', 'This gentle facial scrub is made with natural ingredients such as sea kelp, lemon peel, and French green clay. It exfoliates and brightens the skin, leaving it soft and glowing.', 'https://cdn.shopify.com/s/files/1/0550/4896/2261/products/brighteningFacescrubNOlogo_1376x1856.jpg?v=1653450062', 'https://cdn.shopify.com/s/files/1/0550/4896/2261/products/b-face-scrub_256x256_crop_center.png?v=1653450062', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('695a47c2-bb6e-11ed-afa1-0242ac120002', 5)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8ca64abe-bb6e-11ed-afa1-0242ac120002', 'Schmidt''s Natural Deodorant', 'This deodorant is made with natural and vegan ingredients such as coconut oil, arrowroot powder, and shea butter. It is free of aluminum and other harmful chemicals and provides long-lasting odor protection.', 'https://schmidts-assets.nyc3.cdn.digitaloceanspaces.com/products/2.65_Deo_JT_PDP.jpg', 'https://schmidts-assets.nyc3.cdn.digitaloceanspaces.com/products/SHOPIFY_TP_PRODUCT_IMAGE_AC_08152018-pf08ns.jpg', 10.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('8ca64abe-bb6e-11ed-afa1-0242ac120002', 5)`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('ad2f1298-bb6e-11ed-afa1-0242ac120002', 'Alba Botanica Hawaiian Detox Body Wash', 'This body wash is made with natural ingredients such as volcanic clay, coconut water, and ginger root. It detoxifies and revitalizes the skin, leaving it clean and refreshed.', 'https://s38167.pcdn.co/wp-content/uploads/2020/11/HawaiianDetox_BodyWash_Front_Render_939_32oz.png', 'https://s38167.pcdn.co/wp-content/uploads/2020/11/HawaiianDetox_BodyWash_Back_939_32oz.png', 7.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_product_category VALUES('ad2f1298-bb6e-11ed-afa1-0242ac120002', 5)`
    )

    // now we have product ids and can insert test record into cart_item
    await queryRunner.query(
      `INSERT INTO cart_item VALUES ('fa482164-bb05-11ed-afa1-0242ac120002', 'fad30dac-baf5-11ed-afa1-0242ac120002', '6c480ae2-bb04-11ed-afa1-0242ac120002', 'Test Product One', 5, 10, 50, Now(), Now())`
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, prettier/prettier
  public async down(queryRunner: QueryRunner): Promise<void> { }
}
