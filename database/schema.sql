DROP TABLE IF EXISTS `restaurants`;

CREATE TABLE `restaurants` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(255),
  `owner` VARCHAR(50),
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` INTEGER AUTO_INCREMENT,
  `restaurant_id` INTEGER,
  `user` VARCHAR(75),
  `rating` INTEGER,
  `date` DATE,
  `text` VARCHAR(2000),
  `hasOwnerResponse` TINYINT,
  `ownerResponse` VARCHAR(1000),
  `reviews` INTEGER,
  `friends` INTEGER,
  `funny` INTEGER,
  `cool` INTEGER,
  `useful` INTEGER,
  `createdAt` DATE,
  `updatedAt` DATE,
  FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`),
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `id` INTEGER AUTO_INCREMENT,
  `review_id` INTEGER,
  `url` VARCHAR(500),
  `caption` INTEGER,
  `helpful` INTEGER,
  `notHelpful` INTEGER,
  `createdAt` DATE,
  `updatedAt` DATE,
  FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`),
  PRIMARY KEY (`id`)
);