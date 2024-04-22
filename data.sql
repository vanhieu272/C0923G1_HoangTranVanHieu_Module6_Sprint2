INSERT INTO `accessories_shop`.`role` (`id`, `name`) VALUES ('1', 'ROLE_USER');
INSERT INTO `accessories_shop`.`role` (`id`, `name`) VALUES ('2', 'USER_ADMIN');

INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('1', 'RING');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('2', 'BRACELET');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('3', 'NECKLACE');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('4', 'EARRING');

INSERT INTO `accessories_shop`.`user` (`id`, `address`, `day_of_birth`, `deleted`, `email`, `gender`, `image`, `name`, `password`, `phone_number`, `username`, `role_id`) VALUES ('1', '317 Baker St.  LonDon, UK', '2000-05-24', false, 'sherlockholmes@gmail.com', true, 'abc.jpg', 'Holmes', '123', '0978033033', 'holmes_the_detective', '1');

INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `size`, `thumbnail_img`, `category_id`) VALUES ('1', false, 'ring', 'Helios Lotus Winter', '344', '5', '2023-05-05', '12', 'abc.jpg', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `size`, `thumbnail_img`, `category_id`) VALUES ('2', false, 'necklace', 'Necklace Helios Spring', '213', '10', '2023-04-05', '10', 'abc.jpg', '2');


INSERT INTO `accessories_shop`.`bill` (`id`, `code`, `deleted`, `total_price`, `user_id`) VALUES ('1', 'qwdsvsqfwfefaadasfasf', false, '335', '1');

INSERT INTO `accessories_shop`.`bill_detail` (`id`, `price`, `quantity`, `accessory_id`, `bill_id`) VALUES ('1', '334', '1', '1', '1');

INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('1', 'Size 13');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('2', 'Size 14');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('3', 'Size 15');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('4', 'Size 16');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('5', 'Size 17');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('6', 'Size 18');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('7', 'Size 19');
INSERT INTO `accessories_shop`.`size` (`id`, `name`) VALUES ('8', 'Size 20');
