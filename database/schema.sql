DROP DATABASE IF EXISTS 'yelpalike';
CREATE DATABASE `yelpalike`;

USE yelpalike;

DROP TABLE IF EXISTS `restaurants`;
		
CREATE TABLE `restaurants` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `reviews` INTEGER,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `reviews`;
		
CREATE TABLE `reviews` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `user` VARCHAR(75),
  `rating` INTEGER,
  `friends` INTEGER,
  `photos` INTEGER,
  `voters` INTEGER,
  `funny` INTEGER,
  `cool` INTEGER,
  `useful` INTEGER,
  `firstCheck` TINYINT,
  `firstReview` TINYINT,
  `elite` TINYINT,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `images`;

CREATE TABLE `images` (
  `id` INTEGER NULL AUTO_INCREMENT,
  `url` VARCHAR(500),
  `caption` INTEGER,
  `review_id` INTEGER,
  `helpful` INTEGER,
  `not helpful` INTEGER,
  PRIMARY KEY (`id`)
);

ALTER TABLE `restaurant` ADD FOREIGN KEY (reviews) REFERENCES `reviews` (`id`);
ALTER TABLE `reviews` ADD FOREIGN KEY (photos) REFERENCES `images` (`id`);