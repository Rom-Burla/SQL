-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2022 at 08:10 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hospital_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `personal`
--

CREATE TABLE `personal` (
  `id` int(11) NOT NULL,
  `name` varchar(75) NOT NULL,
  `role` varchar(50) NOT NULL,
  `spicilty` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal`
--

INSERT INTO `personal` (`id`, `name`, `role`, `spicilty`) VALUES
(1, 'Tom', 'DR', 'Make popele better'),
(2, 'BOB', 'DR', 'Make popele Helthy'),
(3, 'Rina', 'Manager', 'Make popele efficent'),
(4, 'Karrim', 'Nurse', 'Make DRS look goood'),
(5, 'Trunp', 'Leader', 'Make popele Strong'),
(6, 'Micky', 'DR', 'Make popele feel bad for animal'),
(7, 'Shile', 'recipentest', 'Make popele stannd in line'),
(8, 'Shuww', 'Clonne madical', 'Make popele laegh');

-- --------------------------------------------------------

--
-- Table structure for table `ward`
--

CREATE TABLE `ward` (
  `id` int(3) NOT NULL,
  `name` varchar(50) NOT NULL,
  `rooms` int(3) NOT NULL,
  `beds` int(3) NOT NULL,
  `ward_catgory` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ward`
--

INSERT INTO `ward` (`id`, `name`, `rooms`, `beds`, `ward_catgory`) VALUES
(1, 'ER', 9, 30, 1),
(2, 'ENT', 2, 14, 3),
(3, 'Pedatric', 14, 28, 3),
(4, 'Matornity', 20, 40, 2),
(5, 'Phsycio', 5, 5, 1),
(7, 'EYE', 3, 0, 4),
(8, 'gastro', 3, 6, 9);

-- --------------------------------------------------------

--
-- Table structure for table `ward_category`
--

CREATE TABLE `ward_category` (
  `id` int(11) NOT NULL,
  `cat_name` varchar(20) NOT NULL,
  `closed` tinyint(1) NOT NULL DEFAULT 0,
  `first_visit` varchar(50) NOT NULL,
  `second_visit` varchar(50) NOT NULL,
  `number_of_docs` int(2) NOT NULL,
  `admitted` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ward_category`
--

INSERT INTO `ward_category` (`id`, `cat_name`, `closed`, `first_visit`, `second_visit`, `number_of_docs`, `admitted`) VALUES
(1, 'closed ward', 1, 'no - visit', 'no - visit', 3, 1),
(2, 'open high risk ward', 0, 'visiting hours 11:00-13:00 ', 'visiting hours 16:00-21:00', 3, 1),
(3, 'open low risk', 0, '9:00-15:00', '18:00-22:00', 1, 1),
(4, 'day ward', 0, 'Open', 'Open', 4, 0),
(5, 'Family', 0, 'Open', 'Open', 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `ward_staff`
--

CREATE TABLE `ward_staff` (
  `id` int(11) NOT NULL,
  `worker_id` int(11) NOT NULL,
  `ward_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ward_staff`
--

INSERT INTO `ward_staff` (`id`, `worker_id`, `ward_id`) VALUES
(1, 1, 2),
(2, 3, 2),
(3, 1, 1),
(4, 4, 3),
(5, 2, 2),
(6, 4, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `personal`
--
ALTER TABLE `personal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ward`
--
ALTER TABLE `ward`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `ward_category`
--
ALTER TABLE `ward_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ward_staff`
--
ALTER TABLE `ward_staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ward_staff` (`worker_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personal`
--
ALTER TABLE `personal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ward`
--
ALTER TABLE `ward`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ward_category`
--
ALTER TABLE `ward_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ward_staff`
--
ALTER TABLE `ward_staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ward_staff`
--
ALTER TABLE `ward_staff`
  ADD CONSTRAINT `ward_staff` FOREIGN KEY (`worker_id`) REFERENCES `personal` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
