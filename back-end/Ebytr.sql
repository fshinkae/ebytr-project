CREATE TABLE `Ebytr`.`task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `task` VARCHAR(200) NOT NULL,
  `status` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`, `status`));