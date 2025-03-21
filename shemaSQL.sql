

DROP DATABASE IF EXISTS `pixios`;
CREATE DATABASE IF NOT EXISTS `pixios`
USE `pixios`;

DROP TABLE IF EXISTS `album`;
CREATE TABLE IF NOT EXISTS `album` (
  `album_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  KEY `FKdod989uavqy4tjpc8l4vdgx1s` (`client_id`),
  CONSTRAINT `FKdod989uavqy4tjpc8l4vdgx1s` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `album` (`album_id`, `client_id`, `name`) VALUES
	(1, 1, 'Album Alice 1'),
	(2, 2, 'Album Bob 1'),
	(3, 3, 'Album Carol 1'),
	(4, 4, 'Album David 1'),
	(5, 5, 'Album Eve 1'),
	(6, 6, 'Album Frank 1'),
	(7, 7, 'Album Grace 1'),
	(8, 8, 'Album Hannah 1'),
	(9, 9, 'Album Ian 1'),
	(10, 10, 'Album Jane 1'),
	(11, 1, 'Album Alice 1'),
	(12, 2, 'Album Bob 1'),
	(13, 3, 'Album Carol 1'),
	(14, 4, 'Album David 1'),
	(15, 5, 'Album Eve 1'),
	(16, 6, 'Album Frank 1'),
	(17, 7, 'Album Grace 1'),
	(18, 8, 'Album Hannah 1'),
	(19, 9, 'Album Ian 1'),
	(20, 10, 'Album Jane 1'),
	(21, 1, 'Album Alice 1'),
	(22, 2, 'Album Bob 1'),
	(23, 3, 'Album Carol 1'),
	(24, 4, 'Album David 1'),
	(25, 5, 'Album Eve 1'),
	(26, 6, 'Album Frank 1'),
	(27, 7, 'Album Grace 1'),
	(28, 8, 'Album Hannah 1'),
	(29, 9, 'Album Ian 1'),
	(30, 10, 'Album Jane 1'),
	(31, 1, 'Summer Vacation'),
	(32, 2, 'Family Photos'),
	(33, 3, 'Birthday Party'),
	(34, 4, 'Nature Walk'),
	(35, 5, 'Wedding Day'),
	(36, 6, 'Graduation Ceremony'),
	(37, 7, 'Christmas 2024'),
	(38, 8, 'Vacation in Italy'),
	(39, 9, 'New Year Celebration'),
	(40, 10, 'Friendship Moments');

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `client` (`id`, `email`, `firstname`, `lastname`, `password`, `username`) VALUES
	(1, 'alice@example.com', 'Alice', 'Dupont', 'password123', 'aliceD'),
	(2, 'bob@example.com', 'Bob', 'Martin', 'password123', 'bobM'),
	(3, 'carol@example.com', 'Carol', 'Leclerc', 'password123', 'carolL'),
	(4, 'david@example.com', 'David', 'Lemoine', 'password123', 'davidL'),
	(5, 'eve@example.com', 'Eve', 'Lemoine', 'password123', 'eveL'),
	(6, 'frank@example.com', 'Frank', 'Delorme', 'password123', 'frankD'),
	(7, 'grace@example.com', 'Grace', 'Dubois', 'password123', 'graceD'),
	(8, 'hannah@example.com', 'Hannah', 'Richard', 'password123', 'hannahR'),
	(9, 'ian@example.com', 'Ian', 'Tremblay', 'password123', 'ianT'),
	(10, 'jane@example.com', 'Jane', 'Moreau', 'password123', 'janeM'),
	(11, 'alice@example.com', 'Alice', 'Dupont', 'password123', 'aliceD'),
	(12, 'bob@example.com', 'Bob', 'Martin', 'password123', 'bobM'),
	(13, 'carol@example.com', 'Carol', 'Leclerc', 'password123', 'carolL'),
	(14, 'david@example.com', 'David', 'Lemoine', 'password123', 'davidL'),
	(15, 'eve@example.com', 'Eve', 'Lemoine', 'password123', 'eveL'),
	(16, 'frank@example.com', 'Frank', 'Delorme', 'password123', 'frankD'),
	(17, 'grace@example.com', 'Grace', 'Dubois', 'password123', 'graceD'),
	(18, 'hannah@example.com', 'Hannah', 'Richard', 'password123', 'hannahR'),
	(19, 'ian@example.com', 'Ian', 'Tremblay', 'password123', 'ianT'),
	(20, 'jane@example.com', 'Jane', 'Moreau', 'password123', 'janeM'),
	(21, 'alice@example.com', 'Alice', 'Dupont', 'password123', 'aliceD'),
	(22, 'bob@example.com', 'Bob', 'Martin', 'password123', 'bobM'),
	(23, 'carol@example.com', 'Carol', 'Leclerc', 'password123', 'carolL'),
	(24, 'david@example.com', 'David', 'Lemoine', 'password123', 'davidL'),
	(25, 'eve@example.com', 'Eve', 'Lemoine', 'password123', 'eveL'),
	(26, 'frank@example.com', 'Frank', 'Delorme', 'password123', 'frankD'),
	(27, 'grace@example.com', 'Grace', 'Dubois', 'password123', 'graceD'),
	(28, 'hannah@example.com', 'Hannah', 'Richard', 'password123', 'hannahR'),
	(29, 'ian@example.com', 'Ian', 'Tremblay', 'password123', 'ianT'),
	(30, 'jane@example.com', 'Jane', 'Moreau', 'password123', 'janeM'),
	(31, 'johndoe@example.com', 'John', 'Doe', 'password123', 'johndoe'),
	(32, 'janedoe@example.com', 'Jane', 'Doe', 'mypassword', 'janedoe'),
	(33, 'alice.smith@example.com', 'Alice', 'Smith', 'alice123', 'alicesmith'),
	(34, 'bob.jones@example.com', 'Bob', 'Jones', 'bobby321', 'bobjones'),
	(35, 'charlie.brown@example.com', 'Charlie', 'Brown', 'charlie789', 'charliebrown'),
	(36, 'david.white@example.com', 'David', 'White', 'davidsuper123', 'davidwhite'),
	(37, 'emily.johnson@example.com', 'Emily', 'Johnson', 'emilyqwerty', 'emilyjohnson'),
	(38, 'james.brown@example.com', 'James', 'Brown', 'james2023', 'jamesbrown'),
	(39, 'mary.jones@example.com', 'Mary', 'Jones', 'marypassword1', 'maryjones'),
	(40, 'robert.green@example.com', 'Robert', 'Green', 'robertsmart123', 'robertgreen');

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `album_album_id` bigint(20) DEFAULT NULL,
  `image_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `liked_liked_id` bigint(20) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `FK9h9yy315uue4egfwt54kg2urk` (`album_album_id`),
  KEY `FK22e9xdsekxmqcrg0wmgydiwrl` (`liked_liked_id`),
  CONSTRAINT `FK22e9xdsekxmqcrg0wmgydiwrl` FOREIGN KEY (`liked_liked_id`) REFERENCES `liked` (`liked_id`),
  CONSTRAINT `FK9h9yy315uue4egfwt54kg2urk` FOREIGN KEY (`album_album_id`) REFERENCES `album` (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `image` (`album_album_id`, `image_id`, `liked_liked_id`, `url`) VALUES
	(1, 31, 4, 'https://example.com/images/summer1.jpg'),
	(1, 32, 8, 'https://example.com/images/summer2.jpg'),
	(2, 33, 1, 'https://example.com/images/family1.jpg'),
	(3, 34, 6, 'https://example.com/images/birthday1.jpg'),
	(3, 35, 5, 'https://example.com/images/birthday2.jpg'),
	(4, 36, 4, 'https://example.com/images/nature1.jpg'),
	(5, 37, 4, 'https://example.com/images/wedding1.jpg'),
	(5, 38, 7, 'https://example.com/images/wedding2.jpg'),
	(6, 39, 6, 'https://example.com/images/graduation1.jpg'),
	(7, 40, 8, 'https://example.com/images/christmas1.jpg');

DROP TABLE IF EXISTS `liked`;
CREATE TABLE IF NOT EXISTS `liked` (
  `client_id` bigint(20) DEFAULT NULL,
  `liked_id` bigint(20) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`liked_id`),
  UNIQUE KEY `UKhqlle5ow8fbmovqq1r8i3oiix` (`client_id`),
  CONSTRAINT `FK30nqwn9hqr6urbygkpujcxrq` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `liked` (`client_id`, `liked_id`) VALUES
	(1, 1),
	(2, 2),
	(3, 3),
	(4, 4),
	(5, 5),
	(6, 6),
	(7, 7),
	(8, 8),
	(9, 9),
	(10, 10);

