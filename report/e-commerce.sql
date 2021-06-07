-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 26, 2021 at 02:39 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-commerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `activations`
--

CREATE TABLE `activations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `accountId` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `address_types`
--

CREATE TABLE `address_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address_types`
--

INSERT INTO `address_types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Home Address', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 'Business Address', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roleId` bigint(20) UNSIGNED NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `roleId`, `firstName`, `middleName`, `lastName`, `email`, `password`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Admin', NULL, '01', 'admin01@gmail.com', '$2a$10$.JBSKfyptNdoH.6CTvwiO.SYUfvhWuBO09WrKOs78gGRRyCZiATGa', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(2, 2, 'Moderator', NULL, '01', 'moderator01@gmail.com', '$2a$10$YLZMk68mZkbYInGcEseGwutimI4O/nxmEFuS6t0Y1PkRcTtO.Qv7q', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(3, 2, 'Moderator', NULL, '02', 'moderator02@gmail.com', '$2a$10$mFT7J7eO72aKNCQbJIY0mOBuUNqEtg5WWhfI3FbfOsOAf.wnfbxnO', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `admin_roles`
--

CREATE TABLE `admin_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'administrator', '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(2, 'moderator', '2021-05-26 14:39:22', '2021-05-26 14:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_strategies`
--

CREATE TABLE `advertisement_strategies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL,
  `typeId` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `max` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `startOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `endOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisement_strategies`
--

INSERT INTO `advertisement_strategies` (`id`, `categoryId`, `typeId`, `name`, `slug`, `max`, `min`, `startOn`, `endOn`, `createdAt`, `updatedAt`) VALUES
(1, 6, 1, 'Sale Off For All Iphone', 'sale-off-for-all-iphone', 20, 10, '2021-06-01 00:00:00', '2021-07-01 00:00:00', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 9, 2, 'Sale Off For TV', 'sale-off-for-tv', 30, 20, '2021-05-13 00:00:00', '2021-05-25 00:00:00', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 11, 2, 'Sale Off For Fridge', 'sale-off-for-fridge', 30, 20, '2021-05-12 00:00:00', '2021-06-25 00:00:00', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 7, 3, 'Sale Off For All Samsung Smart Phone', 'sale-off-for-all-samsung-smart-phone', 25, 15, '2021-06-20 00:00:00', '2021-06-27 00:00:00', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_strategies_products`
--

CREATE TABLE `advertisement_strategies_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `strategyId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `percent` int(11) NOT NULL,
  `sold` int(11) DEFAULT '0',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisement_strategies_products`
--

INSERT INTO `advertisement_strategies_products` (`id`, `strategyId`, `productId`, `quantity`, `percent`, `sold`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 1, 2, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 1, 3, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 1, 4, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 1, 5, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 1, 6, 2, 15, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 2, 19, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 2, 20, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 2, 21, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 2, 22, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 2, 23, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 2, 24, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 3, 31, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 3, 32, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 3, 33, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 3, 34, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 3, 35, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 3, 36, 2, 25, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 4, 7, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 4, 8, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(21, 4, 9, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(22, 4, 10, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(23, 4, 11, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(24, 4, 12, 2, 20, 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `advertisement_types`
--

CREATE TABLE `advertisement_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisement_types`
--

INSERT INTO `advertisement_types` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'pop-up', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 'in-line', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 'banner', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 'No Brand', 'no-brand', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 'Apple', 'Apple', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 'Samsung', 'samsung', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 'Xiaomi', 'xiaomi', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 'LG', 'lg', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 'Sony', 'sony', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 'Nagakawa', 'nagakawa', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 'Sharp', 'sharp', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 'Daikin', 'daikin', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 'Kachi', 'kachi', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 'Casper', 'casper', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 'Toshiba', 'toshiba', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 'Cuckcoo', 'cuckcoo', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 'Panasonic', 'panasonic', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 'Rire', 'rire', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 'Luminarc', 'luminarc', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 'Phillips', 'phillips', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 'Rylan', 'rylan', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 'Comet', 'comet', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 'Sylvania', 'sylvania', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(21, 'Yeelight', 'yeelight', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(22, 'OEM', 'oem', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(23, 'SMLife', 'smlife', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(24, 'Sunhouse', 'sunhouse', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(25, 'Kangaroo', 'kangaroo', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(26, 'Tiger', 'tiger', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(27, 'Budweiser', 'budweiser', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(28, 'Heineken', 'heineken', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(29, 'Snickers', 'snickers', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(30, 'Oreo', 'oreo', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(31, 'Blackmores', 'blackmores', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(32, 'Queen Crown', 'queen-crown', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(33, 'Synca Circ', 'synca-circ', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(34, 'Sonic', 'sonic', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(35, 'CLSEVXY', 'clsevxy', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(36, 'Lagivado', 'lagivado', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(37, 'Senka', 'senka', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(38, 'Romano', 'romano', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(39, 'Nivea', 'nivea', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(40, 'Avene Eau', 'avene-eau', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(41, 'Madagascar Centella', 'madagascar-centella', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(42, 'Da Balance', 'da-balance', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(43, 'Cerave', 'cerave', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cartId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roleId` bigint(20) UNSIGNED NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `middleName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `roleId`, `firstName`, `middleName`, `lastName`, `email`, `password`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Customer', NULL, '01', 'customer01@gmail.com', '$2a$10$pLoAdXx4J5iHY8dfmJY/vO5pNBhUEFffYXG7vPskNLUTpEq/f3ZE.', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(2, 1, 'Customer', NULL, '02', 'customer02@gmail.com', '$2a$10$sRzUJldgaNJAZwlplBjotejp5Mmq5s9iT0yp0yA36Cq2tmDO5vgqm', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(3, 2, 'Customer', NULL, '03', 'customer03@gmail.com', '$2a$10$WEhuGY7jFGbn9JOsBsHJAO.XX65DtVABybILmXj7kU6GoTIjC20Su', 1, '2021-05-26 14:39:22', '2021-05-26 14:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `customer_roles`
--

CREATE TABLE `customer_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_roles`
--

INSERT INTO `customer_roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'normal customer', '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(2, 'VIP customer', '2021-05-26 14:39:22', '2021-05-26 14:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `rating` int(10) UNSIGNED NOT NULL,
  `score` int(11) DEFAULT '0',
  `content` text,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `customerId`, `productId`, `rating`, `score`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 5, 0, 'This phone is a phone. I think. Phone.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 1, 2, 3, 0, 'The phone is a definite upgrade from last year but I would have perfered 120hz refresh over 5G', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 3, 4, 1, 0, 'The first day it was ok but the next few days the phone has just cracked from dropping it on my bed', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 2, 6, 5, 4, 'It felles good', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 2, 7, 1, 0, 'It does not worth this price.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 3, 8, 4, 0, 'Thank you.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 1, 10, 5, 4, 'Not too hard to get set up, all I needed. Works great.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 3, 20, 1, 0, 'DO NOT BUY THIS TV. Or do buy it and prepared to be frustrated out of your mind.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 1, 21, 5, 5, 'Amazing picture quality and filled with smart features.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 3, 22, 5, 0, 'Bucket list check. Next get rid of girl friend.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 2, 23, 2, 0, 'Did not come with any screws. like seriously.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 2, 24, 5, 5, 'Pretty amazing tv. I would buy it again. I have zero regrets.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 1, 24, 5, 2, 'It is packed well, look up some YouTube for setting it up. The manual with it is well, non exixtent.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 3, 25, 1, 0, 'do not buy this unit.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 2, 25, 2, -3, 'I got the 6000 btu version and so far I have been greatly disappointed.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 1, 26, 4, 0, 'I have it cooling two rooms and it does the job. My only complaint would be the small size of the controls.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 2, 27, 2, 4, 'Good looking unit but i expected more. Does not blow hard enough in my opinion.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 3, 45, 5, 5, 'This lighter is amazing. Lights candles instantly. Highly recommend this product', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 1, 45, 5, 0, 'Easy to use. A nice change from a butane lighter that never works when you need it to. No butane fill up.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 2, 47, 5, 4, 'Looks very good, adds a lot of warm atmosphere to the bedroom.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(21, 3, 48, 1, 0, 'A piece of junk, do not waste your money.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(22, 1, 73, 5, 4, 'Well worth the cash easy to assemble great quality very comfortable after long playing hours', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(23, 3, 74, 1, -5, 'Cheapest material, worst design.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(24, 2, 74, 1, 0, 'Returned', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(25, 1, 76, 5, 0, 'You just can not beat the basics. This hairdryer takes care of business and fast.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(26, 3, 76, 5, 7, 'I just love this hair dryer. It does a wonderful job dryer my thick hair.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(27, 2, 77, 2, 2, 'It did its job. Nothing amazing by any means. I was really disappointed that it stopped working after a year.', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(28, 3, 81, 1, 0, 'This zinc oxide is too thick. It makes your face look like a ghost', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(29, 1, 82, 5, 9, 'Love, love, love this product', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `forgot_passwords`
--

CREATE TABLE `forgot_passwords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `accountId` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(50) NOT NULL,
  `accountType` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `keywords`
--

CREATE TABLE `keywords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `word` varchar(25) NOT NULL,
  `score` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `keywords`
--

INSERT INTO `keywords` (`id`, `word`, `score`, `createdAt`, `updatedAt`) VALUES
(1, 'good', 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 'perfect', 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 'amazing', 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 'great', 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 'cool', 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 'outstanding', 3, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 'awesome', 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 'wondeful', 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 'excellent', 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 'pleasant', 2, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 'well', 2, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 'love', 3, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 'bad', -5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 'normal', 0, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 'underrate', -2, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 'never', -4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 'harmful', -4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 'worst', -5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 'terrible', -5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 'dissapointed', -3, '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`, `created_at`) VALUES
(1, '1616842067228-3_27_2021-create_admin_roles_table', 1, '2021-05-26 14:39:11'),
(2, '1616842067228-3_27_2021-create_customer_roles_table', 1, '2021-05-26 14:39:11'),
(3, '1616842067228-3_27_2021-create_seller_roles_table', 1, '2021-05-26 14:39:11'),
(4, '1619531493481-4_27_2021-create_admins_table', 1, '2021-05-26 14:39:11'),
(5, '1619532117169-4_27_2021-create_customers_table', 1, '2021-05-26 14:39:11'),
(6, '1619532117169-4_27_2021-create_sellers_table', 1, '2021-05-26 14:39:11'),
(7, '1619532117200-4_27_2021-create_forgot_passwords_table', 1, '2021-05-26 14:39:11'),
(8, '1619532117289-4_27_2021-create_activations_table', 1, '2021-05-26 14:39:11'),
(9, '1619532384816-4_27_2021-create_seller_addresses_table', 1, '2021-05-26 14:39:11'),
(10, '1619532760561-4_27_2021-create_product_categories_table', 1, '2021-05-26 14:39:11'),
(11, '1619533133765-4_27_2021-create_brands_table', 1, '2021-05-26 14:39:11'),
(12, '1619533305072-4_27_2021-create_products_table', 1, '2021-05-26 14:39:12'),
(13, '1619536335297-4_27_2021-create_carts_table', 1, '2021-05-26 14:39:12'),
(14, '1619536843404-4_27_2021-create_address_types_table', 1, '2021-05-26 14:39:12'),
(15, '1619537217763-4_27_2021-create_shipping_addresses_table', 1, '2021-05-26 14:39:12'),
(16, '1619537947618-4_27_2021-create_cart_items_table', 1, '2021-05-26 14:39:12'),
(17, '1619538218608-4_27_2021-create_order_status_table', 1, '2021-05-26 14:39:12'),
(18, '1619538325835-4_27_2021-create_orders_table', 1, '2021-05-26 14:39:12'),
(19, '1619539302685-4_27_2021-create_order_items_table', 1, '2021-05-26 14:39:12'),
(20, '1619876044851-5_1_2021-create_feedbacks_table', 1, '2021-05-26 14:39:12'),
(21, '1620054623750-5_3_2021-create_advertisement_types', 1, '2021-05-26 14:39:12'),
(22, '1620056538202-5_3_2021-create_advertisement_strategies', 1, '2021-05-26 14:39:12'),
(23, '1620057820829-5_3_2021-create_advertisement_strategies_products', 1, '2021-05-26 14:39:12'),
(24, '1620998885381-5_14_2021-create_keywords_table', 1, '2021-05-26 14:39:12');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orderId` bigint(20) UNSIGNED NOT NULL,
  `addressId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `statusId` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Processing', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 'Delivering', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 'Received', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sellerId` bigint(20) UNSIGNED NOT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL,
  `brandId` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) NOT NULL,
  `slug` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `sellerId`, `categoryId`, `brandId`, `name`, `slug`, `description`, `price`, `quantity`, `createdAt`, `updatedAt`) VALUES
(1, 1, 21, 2, 'IPhone 12 mini 256GB', 'iphone-12-mini-256gb', 'Mini version of Iphone 12', 22490, 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 2, 21, 2, 'IPhone 12 plus ', 'iphone-12-plus', 'Another version of Iphone 12 with better performance', 16890, 8, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 1, 22, 2, 'IPhone 12 Pro max 512GB', 'iphone-12-pro-max-512gb', 'Better version of Iphone 12 Pro', 41490, 3, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 2, 22, 2, 'IPhone 12 Pro Premium', 'iphone-12-pro-premium', 'Limited version of Iphone 12 Pro', 48490, 7, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 2, 23, 2, 'IPhone 13 Pro 512GB', 'iphone-13-pro-512gb', 'Pro version of Iphone 13', 55490, 6, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 2, 23, 2, 'IPhone 13 mini 64GB', 'iphone-13-mini-64gb', 'Mini version of Iphone 13', 50490, 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 1, 24, 3, 'Samsung Galaxy S20 Plus Ultra', 'samsung-galaxy-s20-plus-ultra', 'Brand new version of Samsung Galaxy S20 Plus with great improvements', 20490, 2, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 1, 24, 3, 'Samsung Galaxy S20 Plus Premium', 'samsung-galaxy-s20-plus-premium', 'Limited version of Samsung Galaxy S20 Plus with unique design', 30490, 1, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 1, 25, 3, 'Samsung Galaxy A51 Plus 5GB', 'samsung-galaxy-a51-plus-5gb', 'New version of Samsung Galaxy A51 with outstanding improvements', 22490, 9, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 2, 25, 3, 'Samsung Galaxy A51 Premium', 'samsung-galaxy-a51-premium', 'Limited Royal version of Samsung Galaxy A51 with extraordinary design', 35490, 1, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 2, 26, 3, 'Samsung Galaxy M11 Plus', 'samsung-galaxy-m11-plus', 'New version of Samsung Galaxy M11 with great enhancements', 27650, 10, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 2, 26, 3, 'Samsung Galaxy M11 Ultra', 'samsung-galaxy-m11-ultra', 'Highly recommended version of Samsung Galaxy M11 with additional functionalities', 36530, 15, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 2, 27, 4, 'Xiaomi Redmi 8 Pro', 'xiaomi-redmi-8-pro', 'Professional version of Xiaomi Redmi 8 with additional functionalities', 12520, 20, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 1, 27, 4, 'Xiaomi Redmi 8 Premium', 'xiaomi-redmi-8-premium', 'Limited luxurious version of Xiaomi Redmi 8 with extraordinary design', 18630, 15, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 1, 28, 4, 'Xiaomi Redmi Note 10 Pro', 'xiaomi-redmi-note-10-pro', 'Professional version of Xiaomi Redmi Note 10 with additional functionalities', 30900, 18, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 2, 28, 4, 'Xiaomi Redmi Note 10 Royal', 'xiaomi-redmi-note-10-royal', 'Royal version of Xiaomi Redmi Note 10 with luxurious design', 33690, 25, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 1, 29, 4, 'Xiaomi POCO M3 Pro', 'xiaomi-poco-m3-pro', 'Fully Upgraded version of Xiaomi POCO M3 with additional designs', 11970, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 1, 29, 4, 'Xiaomi POCO M3 Super', 'xiaomi-poco-m3-super', 'Brand new version of Xiaomi POCO M3 with exclusive water proof design', 10290, 13, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 2, 30, 5, 'LG Smart TV OLED 55CXPTA', 'lg-smart-tv-oled-55cxpta', 'New version of LG Smart TV with exclusive functionalities', 62190, 7, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 1, 30, 6, 'Sony Android TV OLED KD65A8H', 'sony-android-tv-oled-kd65a8h', 'Brand new version of Sony Smart TV for androids', 39990, 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(21, 2, 31, 3, 'Samsung Smart TV QLED QA50Q80A', 'samsung-smart-tv-qled-qa50q80a', 'New version of Samsung Smart TV with exclusive functionalities', 28900, 9, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(22, 2, 31, 3, 'Samsung Smart TV NEO OLED QA50QN90A ', 'samsung-smart-tv-qled-qa50qn90a ', 'Brand new version of Samsung Smart TV OLED with extraordinary functionalities', 39900, 3, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(23, 1, 32, 5, 'LG Smart TV Nanocell 4K 55NANO79TND', 'lg-smart-tv-nanocell-4k-55nano79tnd', 'New version of LG Smart TV with Nanocell', 14890, 2, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(24, 1, 32, 3, 'Samsung Smart TV Micro LED 4K MNA110MS1A', 'samsung-smart-tv-micro-led-4k-mna110ms1a', 'Brand new version of Samsung Smart TV LED with extraordinary designs', 33490, 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(25, 1, 33, 10, 'Kachi Portable Air Conditioner MK121', 'kachi-portable-air-conditioner-mk121', 'Unique version of Kachi Air Conditioner with the portability advancement', 8799, 6, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(26, 2, 33, 11, 'Casper Air Conditioner 1HP SC09TL32', 'casper-air-conditioner-1hp-sc09tl32', 'Brand new version of Casper Air Conditioner with exclusive design', 4538, 8, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(27, 1, 34, 12, 'Toshiba Inverter Air Conditioner 1HP RASH10D2KCVGV', 'toshiba-inverter-air-conditioner-1hp-rash10d2kcvgv', 'New version of Toshiba Inverter Air Conditioner with extraordinary design', 7739, 10, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(28, 2, 34, 9, 'Daikin Inverter Air Conditioner 2HP FTKA35UAVMV', 'daikin-inverter-air-conditioner-2hp-ftka35uavmv', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', 10613, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(29, 2, 35, 8, 'Sharp Inverter Air Conditioner 1HP AHX9XEW', 'sharp-inverter-air-conditioner-1hp-ahx9xew', 'New version of Sharp Inverter Air Conditioner with the extraordinary design', 6350, 14, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(30, 1, 35, 5, 'LG Inverter Air Conditioner 1.5HP V13ENS1', 'lg-inverter-air-conditioner-1.5hp-v13ens1', 'New Version of LG Inverter Air Conditioner with the portability advancement', 8028, 16, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(31, 2, 36, 9, 'Daikin Inverter Air Conditioner 2HP XXX', 'daikin-inverter-air-conditioner-2hp-xxx', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', 10613, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(32, 1, 36, 9, 'Daikin Inverter Air Conditioner 2HP YYY', 'daikin-inverter-air-conditioner-2hp-yyy', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', 10613, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(33, 2, 37, 9, 'Daikin Inverter Air Conditioner 2HP ZZZ', 'daikin-inverter-air-conditioner-2hp-zzz', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', 10613, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(34, 1, 37, 9, 'Daikin Inverter Air Conditioner 2HP WWW', 'daikin-inverter-air-conditioner-2hp-www', 'New version of Daikin Inverter Air Conditioner with the extraordinary design', 10613, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(35, 2, 38, 3, 'Samsung Inverter Fridge 380L RT38K5930DXSV', 'samsung-inverter-fridge-380l-rt38k5930dxsv', 'New version of Samsung Inverter Fridge with the special design', 12340, 18, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(36, 1, 38, 5, 'Side By Side Inverter LG Fridge 601L GRD247MC', 'side-by-side-inverter-fridge-lg-601l-grd247mc', 'New version of Side By Side Inverter Fridge LG with the extraordinary design', 31990, 20, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(37, 2, 39, 13, 'Cuckcoo Rice Cooker CRPJHR1060FD', 'cuckcoo-rice-cooker-crpjhr1060fd', 'New version of Cuckcoo Rice Cooker with the extraordinary features', 13090, 11, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(38, 2, 39, 14, 'Panasonic Rice Cooker SRCX188SRA', 'panasonic-rice-cooker-srcx188sra', 'New version of Panasonic Rice Cooker with the various features', 10990, 13, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(39, 1, 40, 15, 'Rire Series Korean Style Set', 'rire-series-korean-style-set', 'The highly recommended collection of crockery with incredible Korean style design', 3033, 15, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(40, 1, 40, 16, 'Luminarc Tempered Glass Dinnerware Set', 'luminarc-tempered-glass-dinnerware-set', 'One of the popular Luminarc Dinnerware set with high-quality material', 4200, 17, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(41, 1, 41, 16, 'Luminarc Flashy Expresso Cup', 'luminarc-flashy-expresso-cup', 'One of the Luminarc series with multiple unique colours design', 400, 50, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(42, 1, 41, 16, 'Luminarc Flashy Breakfast Mokamina Cup', 'luminarc-flashy-breakfast-mokamina-cup', 'One of the Luminarc series with multiple unique colours design', 500, 70, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(43, 2, 42, 17, 'Phillips 61013 A 5Watt LED Desklight', 'phillips-61013-a-5watt-led-desklight', 'Highly recommended lamp for children eyes protection', 1623, 19, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(44, 2, 42, 18, 'Rylan Rechargeable LED Desk Lamp', 'rylan-rechargeable-led-desk-lamp', 'Highly recommended lamp for children eyes protection', 1153, 21, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(45, 1, 43, 19, 'Comet LED Bulbs Lighter', 'comet-led-bulbs-lighter', 'The set of six 3Watt light bulbs', 250, 25, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(46, 2, 43, 20, 'Sylvania LED A19 Light Bulb', 'sylvania-led-a19-light-bulb', 'The set of 24 9watt daylight color temperature light bulbs', 40, 27, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(47, 2, 44, 4, 'Xiaomi Smart Bedside Lamp', 'xiaomi-smart-bedside-lamp', 'New smart product of Xiami manufacturer', 850, 29, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(48, 1, 44, 21, 'Yeelight Staria Bedside Lamp Pro YLCT03YLP', 'yeelight-staria-bedside-lamp-pro-ylct03ylp', 'Smart interactive remote-controlled bedside lamp', 1600, 31, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(49, 2, 45, 1, 'Topper Everon White Bed', 'topper-everon-white-bed', 'New Korean Bed with luxurious material', 850, 33, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(50, 1, 45, 1, 'Everon Lite Cotton Bed', 'everon-lite-cotton-bed', 'New Korean Bed with classic material', 1499, 35, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(51, 1, 46, 22, 'OEM Wardrobe', 'oem-wardrobe', 'New OEM Wardrobe with elegant design', 3500, 37, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(52, 2, 46, 23, 'SMLife Carmelo Modern Wardrobe', 'smlife-carmelo-modern-wardrobe', 'New SMLife Carmelo Wardrobe with luxurious and high-end design', 4350, 6, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(53, 1, 47, 24, 'Sunhouse SHD1182', 'sunhouse-shd1182', 'One of the best seller kettles of Sunhouse Manufacturer', 19, 37, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(54, 2, 47, 25, 'Kangaroo KG18K1', 'kangaroo-kg18k1', 'One of the most popular kettles of Kangaroo Manufacturer', 17, 39, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(55, 1, 48, 26, 'Tiger Crystal 330ml', 'tiger-crystal-330ml', 'A set of crystal tiger beer 16 cans', 235, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(56, 2, 48, 26, 'Tiger Lunar New Year Limited 330ml', 'tiger-lunar-new-year-limited-330ml', 'A limited lunar new year version of Tiger beer', 355, 15, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(57, 2, 49, 27, 'Budweiser Pack of 20 bottles 330ml', 'budweiser-pack-of-20-bottles-330ml', 'A pack of 20 bottles Budweiser', 295, 16, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(58, 1, 49, 27, 'Budweiser Lunar New Year Limited 500ml', 'budweiser-lunar-new-year-limited-500ml', 'Another version of Budweiser for celebrating Lunar New Year', 380, 7, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(59, 2, 50, 28, 'Heineken Silver 330ml', 'heineken-silver-330ml', 'A pack of 24 Heineken Silver cans', 19, 11, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(60, 1, 50, 28, 'Heineken 0.0 Sleek 330ml', 'heineken-0.0-sleek-330mml', 'Another lightened version of Heineken', 19, 6, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(61, 1, 51, 29, 'Chocolate Snickers Miniatures 100gr', 'chocolate-snickers-miniatures-100gr', 'A pack of Snickers chocolates', 85, 89, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(62, 1, 51, 30, 'Oreo Mini Chocolate Cookies 204gr', 'oreo-mini-chocolate-cookies-204gr', 'A pack of numberous oreo mini cookies', 51, 86, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(63, 2, 52, 1, 'Blackmores Fish Oil Odourless', 'blackmores-fish-oil-miniatures-100gr', 'A bottle of Blackmores Odourless Fish Oil containing 400 capsules', 471, 14, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(64, 2, 52, 1, 'Blackmores Glucosamine Sulfate', 'blackmores-glucosamine-sulfate', 'A bottle of Blackmores Glucosamine Sulfate containing 100 capsules', 741, 8, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(65, 1, 53, 1, 'Absolute Organic Chia Seeds 1Kg', 'absolute-organic-chia-seeds-1kg', 'A pack of Chia Seeds produced from Vietnam', 145, 23, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(66, 1, 53, 1, 'SPIRULINA PURE 20GR', 'spirulina-pure-20gr', 'A bottle of spirulina pure used for Spa', 750, 25, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(67, 1, 54, 1, 'American Journey Active Life', 'american-journey-active-life', 'Formula Salmon, Brown Rice & Vegetables Recipe Dry Dog Food', 800, 31, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(68, 2, 54, 1, 'Blue Buffalo', 'blue-buffalo', 'Life Protection Formula Adult Chicken & Brown Rice Recipe Dry Dog Food', 1000, 28, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(69, 2, 55, 1, 'ANF Organic 6Free Indoor Kitten', 'anf-organic-6free-indoor-kitten', 'Food Product for kittens aiming for ensuring sufficient nutrition', 530, 11, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(70, 2, 55, 1, 'ROYAL CANIN Oral Care', 'royal-canin-oral-care', 'Food Product for cats aiming for protecting their teeths and ensuring sufficient nutritions', 485, 17, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(71, 1, 56, 1, 'Aquapex Vital Gran', '', 'Food Granules for tropical fish', 108, 22, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(72, 2, 56, 1, 'Hikari Sinking Carnivore Pellet', 'hikari-sinking-carnivore-pellet', 'Food Granules for tropical fish', 252, 33, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(73, 1, 57, 32, 'Queen Crown Japanese Massage Chair QC5S', 'queen-crown-japanese-massage-chair-qc5s', 'Highly recommended massage chair with great technologies from Japan', 13995, 5, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(74, 2, 57, 33, 'Synca Circ Mini Massage Chair', 'synca-circ-mini-massage-chair', 'Mini massage chair of Synca Manufacturer with modern technologies', 30000, 4, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(75, 2, 58, 14, 'Nanoe Panasonic Hair Dryer EHNA27PN645', 'nanoe-panasonic-hair-dryer-ehna27pn645', 'Brand new mosture protect Hair Dryer produced by Panasonic Manufacturer', 1870, 13, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(76, 2, 58, 17, 'Phillips Hair Dryer BHC010', 'phillips-hair-dryer-bhc010', 'Brand new Hair Dryer produced by Phillips Manufacturer', 270, 11, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(77, 1, 59, 34, 'Ultrasonic Face Washing Device Electric', 'ultrasonic-face-washing-device-eletric', 'New Modern facial washing machine with high technologies', 20, 17, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(78, 1, 59, 35, 'CLSEVXY Water Resistant Facial Cleansing ', 'clsevxy-water-resistant-facial-cleansing', 'New Modern facial washing machine with high technologies', 30, 12, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(79, 2, 60, 1, 'Love Beauty And Planet Majectic Glow Shower 400ml', 'love-beauty-and-planet-majectic-glow-shower-400ml', 'Great shower with incredible functionalities for your skin', 13, 45, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(80, 1, 60, 1, 'Detox Love Beauty And Planet Pure And Positive Shower 400ml', 'detox-love-beauty-and-planet-pure-and-positive-shower-400ml', 'Great shower with incredible functionalities for your skin', 19, 54, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(81, 1, 61, 36, 'Lagivado Korean Sunscreen', 'lagivado-korean-sunscreen', 'One of the most popular sunscreen from Korea with multi-protection features', 25, 40, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(82, 2, 61, 37, ' Senka Perfect UV Essence Sunscreen', 'senka-perfect-uv-essence-sunscreen', 'One of the most popular sunscreen from Japan with anti-aging features', 20, 35, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(83, 2, 62, 38, 'Romano Classic Deodorant 5oml', 'romano-classic-deodorant-50ml', 'One of the most popular deodorant for men', 9, 67, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(84, 1, 62, 39, 'Nivea Men Deodorant', 'nivea-men-deodorant', 'One of the most popular deodorant for men', 7, 78, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(85, 1, 63, 40, 'Avene Eau Thermale Cicalfate Lotion 15ml', 'avene-eau-thermale-cicalfate-lotion-15ml', 'One of the most popular lotion for women', 277, 38, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(86, 2, 63, 41, 'Madagascar Centella Ampoule Lotion 55ml', 'madagascar-centella-ampoule-lotion-55ml', 'One of the most popular lotion for women', 17, 23, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(87, 2, 64, 37, 'Senka White Beauty Serum', 'senka-white-beauty-serum', 'Considering one of the most effective serum for Women', 185, 20, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(88, 2, 64, 42, 'Da Balance Vitamin C Brightening Serum', 'da-balance-vitamin-c-brightening-serum', 'Considering one of the most effective serum for Women', 139, 17, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(89, 1, 65, 37, 'Senka Perfect Whip Acne Care 100g', 'senka-perfect-whip-acne-care-100g', 'A very well-known cleanser with fascinating functionalities recently', 75, 26, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(90, 1, 65, 43, 'Cerave Foaming Facial Cleanser', 'cerave-foaming-facial-cleanser', 'A very well-known cleanser with fascinating functionalities recently', 419, 6, '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `level` int(11) NOT NULL,
  `left` int(11) NOT NULL,
  `right` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `level`, `left`, `right`, `name`, `slug`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 30, 'Smart Phone', 'smart-phone', 'Smart phone produced by many Manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 1, 31, 60, 'Electronic Devices', 'electronic-devices', 'Electronic Devices', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 1, 61, 90, 'House Tools', 'house-tools', 'house tools for family', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(4, 1, 91, 120, 'Food Products', 'food-products', 'foods, beverages', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(5, 1, 121, 149, 'Cosmetic', 'cosmetic', 'cosmetic products to take care of the beauty', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(6, 2, 2, 10, 'Iphone', 'iphone', 'Apple manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(7, 2, 11, 20, 'Samsung', 'samsung', 'Samsung manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(8, 2, 21, 29, 'Xiaomi', 'xiaomi', 'Xiaomi manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(9, 2, 32, 40, 'TV', 'tv', 'television', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(10, 2, 41, 50, 'Air Conditioner', 'air-conditioner', 'Air Conditioner', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(11, 2, 51, 59, 'Fridge', 'fridge', 'fridge', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(12, 2, 62, 70, 'Cooking Tools', 'cooking-tools', 'cooking tools for family', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(13, 2, 71, 80, 'Lighting devices', 'lighting-devices', 'lighting devices', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(14, 2, 81, 89, 'Furniture', 'furniture', 'Furniture', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(15, 2, 92, 100, 'Beverages', 'beverages', 'Beverages', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(16, 2, 101, 110, 'Foods', 'foods', 'Foods', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(17, 2, 111, 119, 'Pet Foods', 'pet-foods', 'Pet Foods', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(18, 2, 122, 130, 'Make Up Tools', 'make-up-tools', 'make up for female', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(19, 2, 131, 140, 'Body Care', 'body-care', 'body care', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(20, 2, 141, 149, 'Skin Care', 'skin-care', 'skin care', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(21, 3, 3, 4, 'Iphone 12', 'iphone-12', 'Apple manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(22, 3, 5, 7, 'Iphone 12 pro', 'iphone-12-pro', 'Apple manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(23, 3, 8, 9, 'Iphone 13', 'iphone-13', 'Apple manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(24, 3, 12, 13, 'Samsung Galaxy S20 Plus', 'samsung-galaxy-s20-plus', 'Samsung manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(25, 3, 14, 16, 'Samsung Galaxy A51', 'samsung-galaxy-a51', 'Samsung manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(26, 3, 17, 19, 'Samsung Galaxy M11', 'samsung-galaxy-m11', 'Samsung manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(27, 3, 22, 23, 'Xiaomi redmi 8', 'xiaomi-redmi-8', 'Xiaomi manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(28, 3, 24, 26, 'Xiaomi redmi note 10', 'xiaomi-redmi-note-10', 'Xiaomi manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(29, 3, 27, 28, 'Xiaomi POCO M3', 'xiaomi-poco-m3', 'Xiaomi manufacturer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(30, 3, 33, 34, 'TV OLED', 'tv-oled', 'TV OLED', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(31, 3, 35, 37, 'TV QLED', 'tv-qled', 'TV QLED', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(32, 3, 38, 39, 'TV 4K ', 'tv-4k', 'TV 4K', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(33, 3, 42, 43, 'Best Seller Air Conditioner', 'best-seller-air-conditioner', 'Best Seller Air Conditioner', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(34, 3, 44, 46, 'New Air Conditoner 2021', 'new-air-conditoner-2021', 'New Air Conditoner 2021', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(35, 3, 47, 49, 'Inverter Air Conditioner ', 'inverter-air-conditioner', 'Inverter Air Conditioner', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(36, 3, 52, 53, 'Best Seller Frigde', 'best-seller-fridge', 'Best Seller Frigde', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(37, 3, 54, 56, 'New Fridge 2021', 'new-fridge-2021', 'New Frigde 2021', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(38, 3, 57, 58, 'Inverter Frigde ', 'inverter-fridge', 'Inverter Frigde', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(39, 3, 63, 64, 'Cooker', 'cooker', 'Cooker', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(40, 3, 65, 67, 'Bowls and Dishes', 'bowls-and-dishes', 'Bowls and Dishes', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(41, 3, 68, 69, 'Glasses', 'glasses', 'Glasses', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(42, 3, 72, 73, 'Study Lamps', 'study-lamps', 'Study Lamps', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(43, 3, 74, 76, 'Light Bulbs', 'light-bulbs', 'Light Bulbs', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(44, 3, 77, 79, 'Bedside Lamps', 'bedside-lamps', 'Bedside Lamps', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(45, 3, 82, 83, 'Bed', 'bed', 'Bed', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(46, 3, 84, 86, 'Wardrobe', 'wardrobe', 'Wardrobe', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(47, 3, 87, 88, 'Kettle', 'kettle', 'Kettle', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(48, 3, 93, 94, 'Tiger', 'tiger', 'Tiger', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(49, 3, 95, 97, 'Budweiser', 'budweiser', 'Budweiser', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(50, 3, 98, 99, 'Heineken', 'heineken', 'heineken', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(51, 3, 102, 103, 'Junk Foods', 'junk-foods', 'Junk Foods', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(52, 3, 104, 106, 'Functional Foods', 'functional-foods', 'Functional Foods', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(53, 3, 107, 109, 'Organic Foods', 'organic-foods', 'Organic Foods', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(54, 3, 112, 113, 'Food For Dogs', 'food-for-dogs', 'Food for dogs', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(55, 3, 114, 116, 'Food For Cats', 'food-for-cats', 'Food For Cats', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(56, 3, 117, 118, 'Food For Fishes', 'food-for-fishes', 'Food For Fishes', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(57, 3, 123, 124, 'Massage Devices', 'massage-devices', 'Massage Devices', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(58, 3, 125, 127, 'Hair Dryer', 'hair-dryer', 'Hair Dryer', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(59, 3, 128, 129, 'Face Washing Machine', 'face-washing-machine', 'Face Washing Machine', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(60, 3, 132, 133, ' Shower', 'shower', 'Shower', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(61, 3, 134, 136, 'Sunscreen', 'sunscreen', 'Sunscreen', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(62, 3, 137, 139, 'Deodorant', 'deodorant', 'Deodorant', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(63, 3, 142, 143, ' Lotion', 'lotion', 'Lotion', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(64, 3, 144, 146, 'Serum', 'serum', 'Serum', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(65, 3, 147, 148, 'Cleanser', 'cleanser', 'Cleanser', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(66, 0, 0, 150, 'root', 'root', 'no description', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `roleId` bigint(20) UNSIGNED NOT NULL,
  `storeName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `description` text,
  `active` tinyint(1) DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sellers`
--

INSERT INTO `sellers` (`id`, `roleId`, `storeName`, `email`, `password`, `description`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Store A', 'seller01@gmail.com', '$2a$10$xKLPbz5vVzYUnYjGU6LzX.7ABLjIB/ebZ9BklxJFyUG1Civ6jRHFC', NULL, 1, '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 2, 'Store B', 'seller02@gmail.com', '$2a$10$lGkr0hOnMHitprNcMZspiu2bBK4krNR04YZm6JWGLdcgW/ts8g/wK', NULL, 1, '2021-05-26 14:39:23', '2021-05-26 14:39:23');

-- --------------------------------------------------------

--
-- Table structure for table `seller_addresses`
--

CREATE TABLE `seller_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sellerId` bigint(20) UNSIGNED NOT NULL,
  `city` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `ward` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `seller_roles`
--

CREATE TABLE `seller_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seller_roles`
--

INSERT INTO `seller_roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'individual', '2021-05-26 14:39:22', '2021-05-26 14:39:22'),
(2, 'company', '2021-05-26 14:39:22', '2021-05-26 14:39:22');

-- --------------------------------------------------------

--
-- Table structure for table `shipping_addresses`
--

CREATE TABLE `shipping_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `typeId` bigint(20) UNSIGNED NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `ward` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shipping_addresses`
--

INSERT INTO `shipping_addresses` (`id`, `customerId`, `typeId`, `fullName`, `phoneNumber`, `city`, `district`, `ward`, `address`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Le Tran Phong', '0338620787', 'Ho Chi Minh', 'Quan 1', 'Phuong 1', 'Nam Ki Khoi Nghia', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(2, 2, 2, 'Trinh Quang Anh', '0906455756', 'Ho Chi Minh', 'Quan Binh Thanh', 'Phuong 22', 'Nam Ki Khoi Nghia', '2021-05-26 14:39:23', '2021-05-26 14:39:23'),
(3, 3, 1, 'Nguyen Ngoc Minh Nhat', '0786786919', 'Ho Chi Minh', 'Quan 3', 'Phuong 2', 'Pham Ngoc Thach', '2021-05-26 14:39:23', '2021-05-26 14:39:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activations`
--
ALTER TABLE `activations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address_types`
--
ALTER TABLE `address_types`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `advertisement_strategies`
--
ALTER TABLE `advertisement_strategies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeId` (`typeId`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `advertisement_strategies_products`
--
ALTER TABLE `advertisement_strategies_products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `strategyId` (`strategyId`,`productId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `advertisement_types`
--
ALTER TABLE `advertisement_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customerId` (`customerId`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartId` (`cartId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `customer_roles`
--
ALTER TABLE `customer_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customerId` (`customerId`,`productId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `forgot_passwords`
--
ALTER TABLE `forgot_passwords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keywords`
--
ALTER TABLE `keywords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `migration` (`migration`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `addressId` (`addressId`),
  ADD KEY `productId` (`productId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `sellerId` (`sellerId`),
  ADD KEY `categoryId` (`categoryId`),
  ADD KEY `brandId` (`brandId`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `storeName` (`storeName`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `seller_addresses`
--
ALTER TABLE `seller_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellerId` (`sellerId`);

--
-- Indexes for table `seller_roles`
--
ALTER TABLE `seller_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `typeId` (`typeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activations`
--
ALTER TABLE `activations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `address_types`
--
ALTER TABLE `address_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admin_roles`
--
ALTER TABLE `admin_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `advertisement_strategies`
--
ALTER TABLE `advertisement_strategies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `advertisement_strategies_products`
--
ALTER TABLE `advertisement_strategies_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `advertisement_types`
--
ALTER TABLE `advertisement_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `customer_roles`
--
ALTER TABLE `customer_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `forgot_passwords`
--
ALTER TABLE `forgot_passwords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `keywords`
--
ALTER TABLE `keywords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `seller_addresses`
--
ALTER TABLE `seller_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_roles`
--
ALTER TABLE `seller_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `advertisement_strategies`
--
ALTER TABLE `advertisement_strategies`
  ADD CONSTRAINT `advertisement_strategies_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `advertisement_types` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `advertisement_strategies_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `product_categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `advertisement_strategies_products`
--
ALTER TABLE `advertisement_strategies_products`
  ADD CONSTRAINT `advertisement_strategies_products_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `advertisement_strategies_products_ibfk_2` FOREIGN KEY (`strategyId`) REFERENCES `advertisement_strategies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `cart_items_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cart_items_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `customer_roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `feedbacks_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `shipping_addresses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_4` FOREIGN KEY (`statusId`) REFERENCES `order_status` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`sellerId`) REFERENCES `sellers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `product_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `sellers`
--
ALTER TABLE `sellers`
  ADD CONSTRAINT `sellers_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `seller_roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `seller_addresses`
--
ALTER TABLE `seller_addresses`
  ADD CONSTRAINT `seller_addresses_ibfk_1` FOREIGN KEY (`sellerId`) REFERENCES `sellers` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `shipping_addresses`
--
ALTER TABLE `shipping_addresses`
  ADD CONSTRAINT `shipping_addresses_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `shipping_addresses_ibfk_2` FOREIGN KEY (`typeId`) REFERENCES `address_types` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
