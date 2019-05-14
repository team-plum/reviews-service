DROP TABLE IF EXISTS `restaurants`;

CREATE TABLE `restaurants` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(255),
  `reviews` INTEGER,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`reviews`) REFERENCES `reviews` (`id`)
);

DROP TABLE IF EXISTS `reviews`;

CREATE TABLE `reviews` (
  `id` INTEGER AUTO_INCREMENT,
  `user` VARCHAR(75),
  `rating` INTEGER,
  `text` VARCHAR(2000),
  `friends` INTEGER,
  `photos` INTEGER,
  `voters` INTEGER,
  `funny` INTEGER,
  `cool` INTEGER,
  `useful` INTEGER,
  `firstCheck` TINYINT,
  `firstReview` TINYINT,
  `elite` TINYINT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`photos`) REFERENCES `images` (`id`)
);

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` INTEGER AUTO_INCREMENT,
  `url` VARCHAR(500),
  `caption` INTEGER,
  `review_id` INTEGER,
  `helpful` INTEGER,
  `not helpful` INTEGER,
  PRIMARY KEY (`id`)
);