-- CONVERSATIONS table seeds
INSERT INTO conversations (id, seller_id, user_id, item_id)
VALUES (1, 1, 3, 1), (2, 2, 4, 2), (3, 3, 5, 3), (4, 4, 6, 6), (5, 5, 7, 5), (6, 6, 8, 6), (7, 7, 9, 7);

-- MESSAGES table seeds
INSERT INTO messages (id, sender_id, conversation_id,message, date_posted)
VALUES (1, 3, 1, 'Hey, I am interested in your product!', '2021-12-01'),
(2, 4, 2, 'Hey, I like your product!', '2021-12-02'),
(3, 5, 3, 'Hey, I love your product!', '2021-12-03'),
(4, 6, 4, 'Hey, I am excited about your product!', '2021-12-04'),
(5, 7, 5, 'Hey, nice product!', '2021-12-05'),
(6, 8, 6, 'Hey, cool product!', '2021-12-06'),
(7, 9, 7, 'Hey, I really like your product!', '2021-12-07');
