CREATE TABLE IF NOT EXISTS `user` (
`user_id` int(11) NOT NULL AUTO_INCREMENT,
`firstName` varchar(255) DEFAULT NULL,
`lastName` varchar(255) DEFAULT NULL,
`password` varchar(100) DEFAULT NULL,
`email` varchar(255) DEFAULT NULL,
`birthDate` date DEFAULT NULL,
`phoneNumer` varchar(200) DEFAULT NULL,
PRIMARY KEY (`user_id`),
UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;