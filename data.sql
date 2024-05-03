INSERT INTO `accessories_shop`.`role` (`id`, `name`) VALUES ('1', 'ROLE_USER');
INSERT INTO `accessories_shop`.`role` (`id`, `name`) VALUES ('2', 'USER_ADMIN');

INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('1', 'RING');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('2', 'BRACELET');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('3', 'NECKLACE');
INSERT INTO `accessories_shop`.`category` (`id`, `name`) VALUES ('4', 'EARRING');

INSERT INTO `accessories_shop`.`user` (`id`, `address`, `day_of_birth`, `deleted`, `email`, `gender`, `image`, `name`, `password`, `phone_number`, `username`, `role_id`) VALUES ('1', '317 Baker St.  LonDon, UK', '2000-05-24', false, 'sherlockholmes@gmail.com', true, 'abc.jpg', 'Holmes', '123', '0978033033', 'holmes_the_detective', '1');

-- accessory insert into
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('1', false, 'Part of the x GemStone ring collection, the idea is to bring spiritual stones into the rings.

The ring is crafted from s925 sterling silver, each of the Onyx stones attached to the ring are hand-ground in the workshop, for the perfect fit and the best shine. The color of the stone is not only pure black, but only when you observe and pay close attention can you realize the subtle and special stone veins than the usual Onyx rings. The inside of the ring is engraved with Helios, as a special mark on each design product.

Finally, each product is carefully polished in the final step, so that the product has the best shine!

Specific: ring face: 12mm

+ Helios Global - a handcrafted jewelry brand manufactured and designed by the most skilled jewelers.

+ All of our jewelry products come with a lifetime warranty.

Note: Custom Printed Packaging Box - Style and Personality - Only at Helios Global

On the lid of packaging box, we will print sincere expressions of gratitude, best wishes, names, quotes, and more, according to your request.

We believe that this will make the box a unique item to accompany you through the years or a meaningful gift for your loved ones and friends.', 'Gothic Onyx Ring Helios', '60', '24', '2024-07-22', '12', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-1.jpg?alt=media&token=8247d200-d22d-4304-b501-288fd7dc1bbf', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('2', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Red Devil Ring Helios', '60', '24', '2023-09-22', '21', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-1.jpg?alt=media&token=8247d200-d22d-4304-b501-288fd7dc1bbf', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('3', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Malachite Ring Helios', '71', '0', '2024-03-22', '58', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F3%2F3-1.jpg?alt=media&token=8ad6bf80-eb27-4903-91b1-224a6e996c8b', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('4', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Billow Ring Helios', '64', '37', '2024-04-27', '40', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F4%2F4-1.jpg?alt=media&token=dc1e3939-69c8-4373-90a2-52b5d0412814', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('5', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Gyges Ring Helios', '113', '40', '2024-01-22', '13', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F5%2F5-1.jpg?alt=media&token=ccfaf8a4-d4ca-4833-8251-966bb7445d76', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('6', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Stone Lotus Ring Helios', '71', '60', '2024-03-01', '40', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F6%2F6-1.jpg?alt=media&token=abd71e3e-864b-498e-8118-8e2bb3aa9355', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('7', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Bold Lotus Ring Helios', '52', '70', '2024-04-22', '23', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F7%2F7-1.jpg?alt=media&token=1b8baf07-e16f-4c08-9de1-920e329cd609', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('8', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Nami Ring Helios', '114', '87', '2024-04-27', '59', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F8%2F8-1.jpg?alt=media&token=7224a980-f9c5-4f12-8cee-85dd68e58aec', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('9', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Fusi Ring Helios', '234', '92', '2024-02-05', '58', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F9%2F9-1.jpg?alt=media&token=46219e18-0376-4e53-885f-9cb779506f59', '1');
INSERT INTO `accessories_shop`.`accessory` (`id`, `deleted`, `description`, `name`, `price`, `quantity`, `release_day`, `sold`, `thumbnail_img`, `category_id`) VALUES ('10', false, 'Red Devil Ring - A meticulously crafted ring made from S925 silver. The centerpiece prominently features the iconic red devil symbol from the Manchester United logo, intricately engraved and accentuated with black polish. Surrounding the ring is the long trident floating on a crisscrossed net, symbolizing relentless fighting spirit and a dominant will to overpower opponents on the field.', 'Malachite Ring Helios', '171', '60', '2024-02-10', '32', 'https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F10%2F10-1.jpg?alt=media&token=297649d1-0242-4b07-b7f6-1f0a68d15210', '1');

-- acc-size
INSERT INTO `accessories_shop`.`accessory_size` (`id`, `accessory_id`, `size_id`) VALUES ('1', '1', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('1', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('2', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('3', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('4', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('5', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('6', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('7', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('8', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('9', '10');

INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '1');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '2');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '3');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '4');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '5');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '6');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '7');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '8');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '9');
INSERT INTO `accessories_shop`.`accessory_size` (`accessory_id`, `size_id`) VALUES ('10', '10');


INSERT INTO `accessories_shop`.`bill` (`id`, `code`, `deleted`, `total_price`, `user_id`) VALUES ('1', 'qwdsvsqfwfefaadasfasf', false, '335', '1');

INSERT INTO `accessories_shop`.`bill_detail` (`id`, `price`, `quantity`, `accessory_id`, `bill_id`) VALUES ('1', '334', '1', '1', '1');



-- data image
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-1.jpg?alt=media&token=e36f132d-a65c-4166-8124-f28d85591820', '1');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-2.jpg?alt=media&token=e270dd84-f610-4845-8677-c24189cce468', '1');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-3.jpg?alt=media&token=5d1acabf-adbb-42af-8acb-1fbe03afbc87', '1');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-4.jpg?alt=media&token=277dffb2-d085-4c42-86a4-b1477bd07584', '1');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-1.jpg?alt=media&token=8247d200-d22d-4304-b501-288fd7dc1bbf', '2');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-2.jpg?alt=media&token=9f116e17-8b11-4d1e-bb4a-12a078764944', '2');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-3.jpg?alt=media&token=3459787a-6b56-4ec2-a5c2-601ec3deac90', '2');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F2%2F2-4.jpg?alt=media&token=d69680cd-dee8-416b-9a38-a1ad324e08b3', '2');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F3%2F3-1.jpg?alt=media&token=8ad6bf80-eb27-4903-91b1-224a6e996c8b', '3');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F3%2F3-2.jpg?alt=media&token=c0fd5d48-46e4-41ed-818f-0dd7cc2cf1aa', '3');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F3%2F3-3.jpg?alt=media&token=0d761f83-2bb2-4694-ac97-779e7cc286c7', '3');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F3%2F3-4.jpg?alt=media&token=01764815-cc5e-417d-ab35-e40cfac31462', '3');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F4%2F4-1.jpg?alt=media&token=dc1e3939-69c8-4373-90a2-52b5d0412814', '4');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F4%2F4-2.jpg?alt=media&token=10d9c20f-96a5-424f-a77e-df4a0860b3ac', '4');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F4%2F4-3.jpg?alt=media&token=c512cbdb-b9d9-453b-b802-6cb6e885d743', '4');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F4%2F4-4.jpg?alt=media&token=c9126885-fc8c-4174-b0c8-226e35605170', '4');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F5%2F5-1.jpg?alt=media&token=ccfaf8a4-d4ca-4833-8251-966bb7445d76', '5');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F5%2F5-2.jpg?alt=media&token=9402817b-4f5a-4f8a-ab1f-e7f34463cf8f', '5');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F5%2F5-3.jpg?alt=media&token=6970afa5-198c-4fbe-9ce9-ec84647641e6', '5');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F5%2F5-4.jpg?alt=media&token=011296a3-e985-41fd-8ca2-4d0a946c0d00', '5');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F6%2F6-1.jpg?alt=media&token=abd71e3e-864b-498e-8118-8e2bb3aa9355', '6');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F6%2F6-2.jpg?alt=media&token=d132318e-2065-4edf-ade4-f12f63898432', '6');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F6%2F6-3.jpg?alt=media&token=d1e11a90-dc83-4f1b-a318-a46524854e91', '6');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F6%2F6-4.jpg?alt=media&token=405a9c62-afed-499f-aaa6-683dd32c9006', '6');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F7%2F7-1.jpg?alt=media&token=1b8baf07-e16f-4c08-9de1-920e329cd609', '7');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F7%2F7-2.jpg?alt=media&token=75a0c494-94f5-4e4f-be6e-20c62f6d1750', '7');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F7%2F7-3.jpg?alt=media&token=752d6133-cc3b-4ac2-82d8-c5004a1c3bed', '7');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F7%2F7-4.jpg?alt=media&token=7c9842bb-a593-4617-9a18-a25a234f2098', '7');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F8%2F8-1.jpg?alt=media&token=7224a980-f9c5-4f12-8cee-85dd68e58aec', '8');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F8%2F8-2.jpg?alt=media&token=11d15a6c-2e0f-4735-bada-45c626a9b449', '8');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F8%2F8-3.jpg?alt=media&token=a871bf78-c78f-4794-bb12-ce888e7eaa88', '8');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F8%2F8-4.jpg?alt=media&token=a2d97f23-4504-485f-a148-3915937e3cf3', '8');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F9%2F9-1.jpg?alt=media&token=46219e18-0376-4e53-885f-9cb779506f59', '9');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F9%2F9-2.jpg?alt=media&token=99f395fb-0cf2-46dc-b0ae-98a774786773', '9');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F9%2F9-3.jpg?alt=media&token=905232b1-5966-402b-acb6-b69c4d012979', '9');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F9%2F9-4.jpg?alt=media&token=2c7b326e-b6d6-41fa-abe6-7f3f69aff5c0', '9');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F10%2F10-1.jpg?alt=media&token=297649d1-0242-4b07-b7f6-1f0a68d15210', '10');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F10%2F10-2.jpg?alt=media&token=add53fad-4ce0-4c4f-9eea-6d499babfa12', '10');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F10%2F10-3.jpg?alt=media&token=ae7216a5-26c1-46a4-8e8d-9d5434b1e6af', '10');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F10%2F10-4.jpg?alt=media&token=8e8978af-ddbd-4194-8277-a339ddbcb8e2', '10');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-1.jpg?alt=media&token=e36f132d-a65c-4166-8124-f28d85591820', '11');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-2.jpg?alt=media&token=e270dd84-f610-4845-8677-c24189cce468', '11');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-3.jpg?alt=media&token=5d1acabf-adbb-42af-8acb-1fbe03afbc87', '11');
INSERT INTO `accessories_shop`.`image` (`link_img`, `accessory_id`) VALUES ('https://firebasestorage.googleapis.com/v0/b/img-helios.appspot.com/o/images%2F1%2F1-4.jpg?alt=media&token=277dffb2-d085-4c42-86a4-b1477bd07584', '11');

