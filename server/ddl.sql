DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_fname` varchar(50) NOT NULL,
  `emp_lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `experience` int(2) NOT NULL,
  `profile_picture` varchar(50) NOT NULL,
  `createdAt` date,
  `updatedAt` date,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `employeeskill`;
CREATE TABLE `employeeskill` (
  `emp_id` int(11) NOT NULL,
  `skill_category` varchar(50) NOT NULL,
  `skill_name` varchar(50) NOT NULL,
  `experience` int(3) NOT NULL,
  `num_proj_impl` int(10) NOT NULL,
    `createdAt` date,
  `updatedAt` date,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `skills`;
CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(50) NOT NULL,
  `skill_category` varchar(50) NOT NULL,
    `createdAt` date,
  `updatedAt` date,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
