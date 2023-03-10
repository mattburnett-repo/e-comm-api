import { MigrationInterface, QueryRunner } from 'typeorm'

export class seedProductTable implements MigrationInterface {
  name = 'seedProductTable1678040718352'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // product_category 1: solar
    await queryRunner.query(
      `INSERT INTO product VALUES('6c480ae2-bb04-11ed-afa1-0242ac120002', 'Renogy 100 Watts 12 Volts Monocrystalline Solar Starter Kit', 'This kit includes a 100W solar panel, 30A PWM negative ground charge controller, and mounting brackets. It is designed for off-grid applications and can be used to power small appliances and electronics.', 'https://cdn11.bigcommerce.com/s-fhnch/images/stencil/1280w/products/945/21493/RNG-KIT-STARTER100D-WND30-G3_01_2__81067.1677859661.jpg?c=2', 189.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(1, '6c480ae2-bb04-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('57e5d79a-bb69-11ed-afa1-0242ac120002', 'Goal Zero Yeti 400 Portable Power Station', 'This portable power station can be charged using a solar panel (sold separately) and provides 400Wh of power. It can be used to power small appliances, electronics, and even some power tools.', 'https://satellitephonestore.com/uploads/pictures/3090-3656.webp', 449.95)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(1, '57e5d79a-bb69-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8e274adc-bb69-11ed-afa1-0242ac120002', 'Sunforce 50022 5-Watt Solar Battery Trickle Charger', 'This trickle charger is designed to keep 12V batteries charged using solar power. It is easy to install and can be used to maintain the charge of cars, boats, and other vehicles.', 'https://ecx.images-amazon.com/images/I/418i8y4friL.01_SL500_.jpg', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(1, '8e274adc-bb69-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('d7fa353e-bb69-11ed-afa1-0242ac120002', 'Solariver Solar Water Pump Kit', 'This solar water pump kit includes a 20W solar panel, a water pump, and a controller. It is designed to be used for outdoor water features, such as ponds, fountains, and waterfalls.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2GeBWBlOCsEBi5-zB96RnAHaG3%26pid%3DApi&f=1&ipt=4580d0c0cb57654c3b37d07724f2030cbae3997f9c5e498fb0b08978a9ff6651&ipo=images', 139.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(1, 'd7fa353e-bb69-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('06e96874-bb6a-11ed-afa1-0242ac120002', 'TP-solar 30 Watt Foldable Solar Panel Battery Charger Kit', 'This foldable solar panel kit includes a 30W solar panel, a charge controller, and a 10-in-1 connector cable. It is designed to be portable and can be used to charge 12V batteries, smartphones, tablets, and other small devices.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81-T%2BH-tRNL._AC_SL1500_.jpg&f=1&nofb=1&ipt=b893851c0971234dcc07aca4f6606e55d0ead6a7908498e8a546166b74664fab&ipo=images', 89.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(1, '06e96874-bb6a-11ed-afa1-0242ac120002')`
    )
    // product_category 2: electric vehicles
    await queryRunner.query(
      `INSERT INTO product VALUES('3874ec46-bb6b-11ed-afa1-0242ac120002', 'Tesla Wall Connector', 'This wall connector allows Tesla owners to charge their vehicles up to 44 miles of range per hour. It is sleek and durable, and can be installed both indoors and outdoors.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.w3eMyiDkJJxA0OMdHw_ZOwHaFj%26pid%3DApi&f=1&ipt=eb6ef2af9d0f98260e74759967e1da18bf42b24faed2016609abda48a8cd2c00&ipo=images', 500.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(2, '3874ec46-bb6b-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('666eb082-bb6b-11ed-afa1-0242ac120002', 'ChargePoint Home Flex Electric Vehicle (EV) Charger', 'This charger is compatible with all electric vehicles and can be installed both indoors and outdoors. It can deliver up to 50 amps of power and can charge vehicles up to 9 times faster than a standard outlet.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.foZqeLk8Q7APTto3aqniPwHaHa%26pid%3DApi&f=1&ipt=d9671122db46f8db13e729add382d32ead01d32de4504b11258ff25b01e7f7d1&ipo=images', 699.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(2, '666eb082-bb6b-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8e87a1b4-bb6b-11ed-afa1-0242ac120002', 'Tesla Model S Wireless Charger', 'This wireless charger is designed specifically for the Tesla Model S and allows owners to charge their vehicles without the need for cords or plugs. It is easy to install and can be used with any Qi-enabled device.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.MuQBM2p36PUF2_9g5tP0jgHaHa%26pid%3DApi&f=1&ipt=f5d24ac3822bde96ff32fa45bf2d71267db978024ef201211c855d3340626985&ipo=images', 189.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(2, '8e87a1b4-bb6b-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('ba6445c6-bb6b-11ed-afa1-0242ac120002', 'ClipperCreek HCS-40P Electric Vehicle Charger', 'This charger is compact and easy to install, making it a great option for home or office use. It can deliver up to 32 amps of power and can charge vehicles up to 5 times faster than a standard outlet.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Gobg4aD1DT6YKbv3HDrmnQHaJS%26pid%3DApi&f=1&ipt=296404f14723746893673d8da7a2d5a311cfa573245b2530ecf8f649c62fcd04&ipo=images', 549.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(2, 'ba6445c6-bb6b-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('0b70de52-bb6c-11ed-afa1-0242ac120002', 'JuiceBox Pro 40 Smart Electric Vehicle (EV) Charging Station', 'This charging station is compatible with all electric vehicles and can be controlled via a smartphone app. It can deliver up to 40 amps of power and can charge vehicles up to 7 times faster than a standard outlet.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.klQUnfEXNv39ZUSVj6XHsAHaH7%26pid%3DApi&f=1&ipt=b250f55e363f7039acf5f9f5b3cf548f692c4e4cb1950f6dc8adf2a1615a7001&ipo=images', 619.00)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(2, '0b70de52-bb6c-11ed-afa1-0242ac120002')`
    )
    // product_category 3: bamboo
    await queryRunner.query(
      `INSERT INTO product VALUES('4d1459a6-bb6c-11ed-afa1-0242ac120002', 'Bamboo Bath Mat', 'This bath mat is made of 100% natural bamboo and is designed to resist water and mold. It has a sleek and modern look that can add an elegant touch to any bathroom.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YA3kSZTgg1BfGwN-PtuNgwHaFy%26pid%3DApi&f=1&ipt=5a42a0bc3e8e8881cd74451890cc6378ca1d6e1d322a3849567f91b6f25b9f61&ipo=images', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(3, '4d1459a6-bb6c-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('7548f2c4-bb6c-11ed-afa1-0242ac120002', 'Bamboo Utensils Set', 'This set includes a fork, knife, spoon, and a pair of chopsticks, all made of 100% natural bamboo. It is perfect for camping, picnics, or everyday use. The utensils are lightweight, durable, and easy to clean. ', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.w-ZpZWnn4tE8wZsMF_U-NAHaHa%26pid%3DApi&f=1&ipt=16710e54a1f033b0f1dae7b823cf2dea2cc70d874b06213670f3f74af401b3c9&ipo=images', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(3, '7548f2c4-bb6c-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('95a4b288-bb6c-11ed-afa1-0242ac120002', 'Bamboo Cutting Board', 'This cutting board is made of natural bamboo and is both lightweight and durable. It is perfect for cutting and slicing fruits, vegetables, and meats. It has a sleek and modern look that can add an elegant touch to any kitchen.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.VRgKk4Tj0ecr5UF0Vb_CuwHaE8%26pid%3DApi&f=1&ipt=e927211074d8cbd3126c956d23b67d7a6d79a8c150869a2abfa9aea3cbded6c6&ipo=images', 17.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(3, '95a4b288-bb6c-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('c26e7a10-bb6c-11ed-afa1-0242ac120002', 'Bamboo Bed Sheets', 'These bed sheets are made of 100% natural bamboo and are designed to be soft, breathable, and hypoallergenic. They can help regulate temperature and keep you cool and comfortable during the night.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.LPKeLg0e9_WiQ1VihDQmeQHaFw%26pid%3DApi&f=1&ipt=f80d0f8cd5791085cc6e704bf91f89b5fb329348fc44a603ed8ca37fb2203bf9&ipo=images', 99.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(3, 'c26e7a10-bb6c-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('f354df84-bb6c-11ed-afa1-0242ac120002', 'Bamboo Straws', 'These straws are made of 100% natural bamboo and are a great alternative to plastic straws. They are durable, reusable, and easy to clean. They come in a set of 12 and include a cleaning brush.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3n6fpssPIIY2_zyFOlcL4gHaHl%26pid%3DApi&f=1&ipt=670d9dc96b28eadef7d0e03890aba4da1dadb75b74c6104ad5069f1cb657bdcc&ipo=images', 10.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(3, 'f354df84-bb6c-11ed-afa1-0242ac120002')`
    )
    // product_category 4: biodegradable packaging
    await queryRunner.query(
      `INSERT INTO product VALUES('2c47ed7c-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Mailer Bags', 'These mailer bags are made of 100% compostable and biodegradable materials, such as corn starch and PBAT. They are durable and water-resistant, and are suitable for shipping products of various sizes.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tuix1nTJaY0P6Pue0EZ-sgHaFQ%26pid%3DApi&f=1&ipt=fd5432616ee0aa7f99c9a6d80a6ed5d765834ca5770e90a147c1f68f845d133b&ipo=images', 24.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(4, '2c47ed7c-bb6d-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('528c90be-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Food Containers', 'These food containers are made of 100% natural sugarcane fibers and are fully compostable and biodegradable. They are perfect for take-out orders and food delivery services. They are microwave-safe and can hold both hot and cold foods.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jCgA8Ios_E4BzKMg6-LukgHaHa%26pid%3DApi&f=1&ipt=a64345a5a0eee9508af142d835b5659a3b29f770e1163eebf1a9364277a6b140&ipo=images', 25.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(4, '528c90be-bb6d-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('7305551a-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Trash Bags', 'These trash bags are made of 100% biodegradable and compostable materials, such as corn starch and plant fibers. They are durable and can hold up to 13 gallons of waste. They are perfect for households and businesses that want to reduce their environmental impact.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yhU5r4Ew1o6ue4B4aSChFgHaIq%26pid%3DApi&f=1&ipt=161d4ca572a5e24aff701f9c628b39b74802fd69a4f5dcd66150a746283d9938&ipo=images', 19.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(4, '7305551a-bb6d-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('c1ebe09a-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Bubble Wrap', 'This bubble wrap is made of 100% biodegradable and compostable materials, such as PLA and PBAT. It provides the same level of protection as traditional bubble wrap but is much more eco-friendly. It is perfect for packing fragile items.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NkKlbslgZq-jEvA6W4sa1gAAAA%26pid%3DApi&f=1&ipt=54915ab041c3f8fb296af1702b6fa92daf43b7380c74f3c1182411e2446dfbdd&ipo=images', 29.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(4, 'c1ebe09a-bb6d-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('e296ff78-bb6d-11ed-afa1-0242ac120002', 'Biodegradable Packing Peanuts', 'These packing peanuts are made of 100% biodegradable and compostable materials, such as corn starch and wheat flour. They provide the same level of cushioning as traditional packing peanuts but are much more environmentally friendly. They are perfect for packing and shipping fragile items.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIF.tauA5Vz9C5KXy8RqmGHhUg%26pid%3DApi&f=1&ipt=16104996de7c5380dc8860f527b9b9846ec0523c940fd7798011ae940936ca1b&ipo=images', 24.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(4, 'e296ff78-bb6d-11ed-afa1-0242ac120002')`
    )
    // product_category 5: organic / natural personal care products
    await queryRunner.query(
      `INSERT INTO product VALUES('0e782946-bb6e-11ed-afa1-0242ac120002', 'Dr. Bronner''s Pure-Castile Liquid Soap', 'This versatile soap can be used for body, face, and hair, and is made with organic and fair trade ingredients such as coconut oil, olive oil, and hemp oil. It comes in a variety of scents and is gentle on the skin.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kJhhY3lkbPf-OPt_VmYrWQHaHa%26pid%3DApi&f=1&ipt=6859b84844ffe30a6d4ec628c8bdca2bc0490e9baed2baefb764e22e9d9c4ae8&ipo=images', 18.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(5, '0e782946-bb6e-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('2f259156-bb6e-11ed-afa1-0242ac120002', 'Burt''s Bees Beeswax Lip Balm', 'This classic lip balm is made with natural ingredients such as beeswax, coconut oil, and sunflower seed oil. It provides long-lasting hydration and protection for dry, chapped lips.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zrk0180Rvx6sJCX-6v0NDgHaH-%26pid%3DApi&f=1&ipt=5ef295e37019fb21eb8939bd440c68db5e42a6e42be31902b5b059181c921816&ipo=images', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(5, '2f259156-bb6e-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('695a47c2-bb6e-11ed-afa1-0242ac120002', 'Acure Organics Brightening Facial Scrub', 'This gentle facial scrub is made with natural ingredients such as sea kelp, lemon peel, and French green clay. It exfoliates and brightens the skin, leaving it soft and glowing.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.57ie6rHRT4cx3Mz8atZAJgHaFj%26pid%3DApi&f=1&ipt=f8bd72078c33b83ef1ac47d09e931b68ac0999f6e766a77da8af7cefc7c17985&ipo=images', 9.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(5, '695a47c2-bb6e-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('8ca64abe-bb6e-11ed-afa1-0242ac120002', 'Schmidt''s Natural Deodorant ', 'This deodorant is made with natural and vegan ingredients such as coconut oil, arrowroot powder, and shea butter. It is free of aluminum and other harmful chemicals and provides long-lasting odor protection.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8IqJyMzZ3k72MpuD-r2jzgHaHa%26pid%3DApi&f=1&ipt=5febcabf24857a90010a0fed97d200518fa9d02fbb2d6ae8108da49e3885d73e&ipo=images', 10.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(5, '8ca64abe-bb6e-11ed-afa1-0242ac120002')`
    )
    await queryRunner.query(
      `INSERT INTO product VALUES('ad2f1298-bb6e-11ed-afa1-0242ac120002', 'Alba Botanica Hawaiian Detox Body Wash', 'This body wash is made with natural ingredients such as volcanic clay, coconut water, and ginger root. It detoxifies and revitalizes the skin, leaving it clean and refreshed.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QNqAn4pBTqY47ZiyXkbf1QHaHa%26pid%3DApi&f=1&ipt=4aab40b361a3ec85fb5447353ad7770fbc3dbd61984bc77a9641fd1d6d056f56&ipo=images', 7.99)`
    )
    await queryRunner.query(
      `INSERT INTO product_category_product_product VALUES(5, 'ad2f1298-bb6e-11ed-afa1-0242ac120002')`
    )
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, prettier/prettier
  public async down(queryRunner: QueryRunner): Promise<void> { }
}
