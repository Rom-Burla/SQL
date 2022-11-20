-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2022 at 02:10 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sqlhw4`
--

-- --------------------------------------------------------

--
-- Table structure for table `child_age`
--

CREATE TABLE `child_age` (
  `child_id` int(11) NOT NULL,
  `child_name` varchar(255) NOT NULL,
  `age` int(2) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `child_age`
--

INSERT INTO `child_age` (`child_id`, `child_name`, `age`, `user_id`) VALUES
(1, 'אינשם', 1, 5),
(2, 'שלמה', 3, 6),
(3, 'אבי ג\'וניור', 1, 6),
(4, 'בני', 5, 7),
(5, 'מאיה', 7, 7),
(6, 'סיוון', 2, 7),
(7, 'בר', 2, 11),
(10, 'איציק', 5, 5),
(11, 'רועי', 10, 5),
(12, 'רונית', 2, 10),
(25, 'דויד אלקיים', 2, 12),
(26, 'אלון ג\'וניור', 15, 12),
(28, 'אביאל', 10, 5),
(29, 'אריאל', 3, 5),
(30, 'מורדי ג\'וניור', 2, 9),
(31, 'רז', 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `sku` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_description` text DEFAULT NULL,
  `min_use_age` int(2) NOT NULL,
  `max_use_age` int(2) NOT NULL,
  `manufacturer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`sku`, `product_name`, `product_description`, `min_use_age`, `max_use_age`, `manufacturer`) VALUES
(120270, 'שידה רומי', 'צבע גוף: לבן בשילוב עץ בוק\nצבע חזיתות: לבן\nחומר: MDF מלא איכותי וחזק (כולל פנים המגירות)\nגימור: אולטרא גלוס כולל ידיות עור ייחודיות ורגלי עץ בוק מעוצבות.\nיציבות מלאה: מוט פלדה מחושלת לחיזוק מבנה השידה לטווח ארוך.\nתאור : השידה מתאימה לאחסון מסודר של בגדי וחפצי התינוק לאורך זמן, הודות לגודל המגירות', 0, 99, 'סגל בייבי'),
(172269, 'מיטת ריי שחור-טבעי', 'מיטת ריי שחורה עוצבה מתוך ההבנה כי ריהוט שחור נכנס ללב הבית, ועכשיו גם לחדר התינוק. זוהי מיטה קלאסית רחבה במיוחד שמעניקה לעיצוב החדר דומננטיות שקטה. המיטה עשויה עץ בוק מלא עמיד וחזק, מיוצרת באיטליה ולה אישור תקן ו אישור בינלאומי Greenguard – המבטיח מיטה ללא רעלים.\nהמיטה עוצבה מתוך חקירה והבנה של צוות המומחים שלנו שלמדו לשלב באופן מדויק בין הצרכים של התינוק ההורים והטרנדים העדכניים בתחום.\nניתן להפוך את המיטה בקלות למיטת מעבר על ידי הרכבה של מעקה במקום אחת מהפאות הרחבות.', 0, 3, 'סגל בייבי'),
(192877, 'ארון אודם', 'ארון הוא פריט משמעותי בחדר ולכן המשימה של המעצבים שלנו היתה לפתח ארון גדול ולא מאיים – ואכן ניתן לראות כי העיצוב המינימסליטי מצליח לשמור על נינוחות ולהשאיר את החדר מאוורר. ארון שוהם עם 4 דלתות מעוצב כך שניתן להשתמש בו ל 2 ילדים ולהעניק סמטריה מושלמת בו זמנית. הפשטות הנקייה של הארון בשילוב ידיות לבנות נוחות המשתלבות בשקט מייצרות עיצוב עכשווי על זמני. העיצוב לא מעמיס ומעניק לפשטות יתרון בולט.הארון מתאים לסגנונות עיצוב רבים והוא מתוכנן בצורה חכמה. סידור הארון הפנימי גמיש וניתן להתאים אותו לצרכים המתפתחים של התינוק וההורים.', 0, 99, 'סגל בייבי'),
(193983, 'עגלת XPLORY SIGNATURE', 'Stokke® Xplory®  בצבע שחור סיגנצ’ר היא העגלה הנחשקת בקרב אמהות רבות בעולם – היא כל מה שאפשר לבקש מעגלה : מצד אחד שיא הפונקציונליות, מצד שני – שיא הסטייל. טרנדית, אבל גם טיימלס שתתגלגל איתכם שנים קדימה. יוקרה סקנדינבית במיטבה!\n\nמהדורה מוגבלת – שמציגה עיצוב וצבעים שלא יחזרו למלאי.\n\nזו הבחירה המושלמת להורים שרוצים את הטוב ביותר עבור התינוק שלהם מבלי להתפשר על בטיחות, איכות או סגנון. עגלה שהיא כולה פרימיום מלמעלה למטה. עגלה מעוצבת בעיצוב סקנדינבי חדשני בשילוב חומרים איכותיים הופכים את הטיול לקל פשוט וללא מאמץ או תמרון. עיצוב העגלה גבוה ובכך שומר על קשר עין שוטף עם התינוק -ומאפשר קרבה וחיבור – מעניק בטחון לכם ולבייבי שלכם.', 0, 5, 'Stokke');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `other_phone` varchar(12) DEFAULT NULL,
  `str_address` varchar(255) NOT NULL,
  `house_num` varchar(4) DEFAULT NULL,
  `apartement_num` varchar(4) DEFAULT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `other_phone`, `str_address`, `house_num`, `apartement_num`, `city`) VALUES
(5, 'רום בורלא', '0507273518', '0527891654', 'שדרות ירושלים', '40', '4', 'חולון'),
(6, 'אבי בוזגלו', '0523334897', '0501234567', 'אבו חצירא', '8 א\'', '', 'קריית מלאכי'),
(7, 'אלדר אברמוביץ\'', '0527425389', '0549876543', 'אביתר הכהן', '10', '20', 'באר שבע'),
(9, 'מרדכי ויצמן', '0549658745', '', 'ז\'בונטינסקי', '60', '3', 'נהריה'),
(10, 'עירית זינגר', '0556455876', '', 'הרצוג', '78', '22', 'רמת גן'),
(11, 'גבי אפללו', '0548712645', '', 'ביאליק', '15', '9', 'בת ים'),
(12, 'אלון בסון', '0527712460', '0543217845', 'הודיה', '3', 'ד', 'גן יבנה');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `child_age`
--
ALTER TABLE `child_age`
  ADD PRIMARY KEY (`child_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`sku`),
  ADD UNIQUE KEY `product_name` (`product_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `child_age`
--
ALTER TABLE `child_age`
  MODIFY `child_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `child_age`
--
ALTER TABLE `child_age`
  ADD CONSTRAINT `child_age_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
