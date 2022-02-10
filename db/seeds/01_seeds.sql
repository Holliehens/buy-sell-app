-- USERS table seeds
INSERT INTO users (name, id, email, password, is_admin)
VALUES ('Lebron James', 1, 'lebronjames@hotmail.com', '123', true),
('Tom Brady', 2, 'tombrady@hotmail.com', '123', true),
('Wayne Gretsky', 3, 'waynegretsky@hotmail.com', '123', false),
('Serena Williams', 4, 'serenawilliams@hotmail.com', '123', false),
('Christiano Ronaldo', 5, 'christianoronaldo@hotmail.com', '123', false),
('Micheal Jordan', 6, 'mj@hotmail.com', '123', false),
('Floyd Mayweather', 7, 'moneymayweather@hotmail.com', '123', false),
('Micheal Phelps', 8, 'michealphelps@hotmail.com', '123', false),
('Usain Bolt', 9, 'usainbolt@hotmail.com', '123', false),
('Tiger Woods', 10, 'tigerwoods@hotmail.com', '123', false);



INSERT INTO items (id, seller_id, purchaser_id, name, description, photo_url, price, featured, is_sold)
VALUES (1, 1, 2, 'Retro Basketball Jersey', 'A vintage basketball jersey from Lebron James 2007 NBA Finals appearance.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 44.99, true, true),
(2, 2, 4, 'Vintage Backpack', 'A streetwear backpack with a skateboard holder.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 19.99, true, false),
(3, 1, 7, 'Branded Sweater', 'A hoodie with stylish pockets from the 90s', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 14.99, true, false),
(4, 2, 9, 'Sneakers', 'Sneakers with light up colors and wheels on the heels.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 32.99, true, false),
(5, 1, 3, 'Graphic Tee', 'Rock n Roll graphic t-shirt from the 80s', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 12.99, true, false),
(6, 2, 10, 'Duffle Bag', 'Vintage designer duffle bag with pouches.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 51.99, false, true),
(7, 1, 5, 'baseball mitt', 'Babe Ruth replica baseball mitt from the 50s.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 7.99, false, true),
(8, 2, 6, 'Dad Hat', 'Dad Hat worn by a real dad.', 'https://cdn.pixabay.com/photo/2019/11/02/08/23/basketball-4595887_1280.jpg', 16.99, false, true)



INSERT INTO favourites (id, user_id, item_id) VALUES(1, 3, 1), (2, 4, 2), (3, 5, 3), (4, 6, 4), (5, 7, 5)


