-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2023 at 01:54 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apply`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(11) NOT NULL,
  `loan_application_id` int(11) NOT NULL,
  `asset_type` varchar(100) NOT NULL,
  `mutual_fund` varchar(100) NOT NULL,
  `market_value` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` int(11) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `borrowers`
--

CREATE TABLE `borrowers` (
  `id` int(11) NOT NULL,
  `borrower_first_name` varchar(100) NOT NULL,
  `borrower_last_name` varchar(100) NOT NULL,
  `borrower_middle_name` varchar(100) NOT NULL,
  `borrower_phone` varchar(100) NOT NULL,
  `borrower_email` varchar(100) NOT NULL,
  `borrower_martial_status` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone_number` varchar(100) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `company_id`, `first_name`, `middle_name`, `last_name`, `phone_number`, `email`, `password`, `is_active`, `created_at`, `updated_at`) VALUES
(2, 1, 'ali ahmed', 'ali', 'JAVAID', '(242)-342-3423', 'shoaib.bscs.s.2018@gmail.com', '$2a$10$uE21DqVN5q9YrynNhXjU1uEoU3/yf4Mxkjv4XPZcf.CaEr5l6p4W.', 1, '2023-06-11 12:14:03', NULL),
(3, 1, 'Shoaib', 'Tariq', 'Mehmood', '(343)-342-3423', 'shoaibmehmood065@gmail.com', '$2a$10$i9Xx0EyCEvXWUNw7a87YUeIOfcAnHOybwDnI.VIO8dvs5dre7kAli', 1, '2023-06-11 13:52:04', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `company_name`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Oqvest', 1, '2023-06-11 17:13:56', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dummy`
--

CREATE TABLE `dummy` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `organization` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dummy`
--

INSERT INTO `dummy` (`id`, `full_name`, `email`, `address`, `organization`) VALUES
(1, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(2, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(3, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(4, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(5, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(6, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(7, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(8, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(9, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(10, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(11, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(12, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(13, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(14, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(15, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(16, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(17, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(18, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(19, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(20, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(21, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(22, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(23, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(24, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(25, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(26, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(27, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(28, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(29, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test'),
(30, 'JUNAID AHMAD JAVAID', 'AWAMIPK@GMAIL.COM', '3UGF CENTURY TOWER KALMA CHOWK LAHORE', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `employments`
--

CREATE TABLE `employments` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gifts_grants`
--

CREATE TABLE `gifts_grants` (
  `id` int(11) NOT NULL,
  `loan_application_id` int(11) NOT NULL,
  `type` varchar(30) NOT NULL,
  `source` varchar(30) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `liabilities`
--

CREATE TABLE `liabilities` (
  `id` int(11) NOT NULL,
  `loan_application_id` int(11) NOT NULL,
  `liability_type` varchar(30) NOT NULL,
  `company` varchar(100) NOT NULL,
  `owner` varchar(100) NOT NULL,
  `balance` int(11) NOT NULL,
  `payment` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loan_applications`
--

CREATE TABLE `loan_applications` (
  `id` int(11) NOT NULL,
  `loan_category_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `purchase_price` int(11) NOT NULL,
  `down_payment` int(11) NOT NULL,
  `payment_source` int(11) NOT NULL,
  `is_veteran` varchar(30) NOT NULL,
  `other_mortgage_loans` varchar(30) NOT NULL,
  `martial_status_id` int(11) NOT NULL,
  `borrowers_id` int(11) NOT NULL,
  `personal_info_id` int(11) NOT NULL,
  `loan_verification_id` int(11) NOT NULL,
  `employment_id` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loan_categories`
--

CREATE TABLE `loan_categories` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `loan_categories`
--

INSERT INTO `loan_categories` (`id`, `category`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Purchase', 1, '2023-07-02 14:36:06', NULL),
(2, 'Refinance', 1, '2023-07-02 14:36:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `loan_verifications`
--

CREATE TABLE `loan_verifications` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `martial_status`
--

CREATE TABLE `martial_status` (
  `id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `spouse_first_name` varchar(100) DEFAULT NULL,
  `spouse_middle_name` varchar(100) DEFAULT NULL,
  `spouse_last_name` varchar(100) DEFAULT NULL,
  `spouse_phone` varchar(100) DEFAULT NULL,
  `spouse_email` varchar(100) DEFAULT NULL,
  `other_martial_status` varchar(30) DEFAULT NULL,
  `relationship_status` varchar(50) DEFAULT NULL,
  `relationship_type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `id` int(11) NOT NULL,
  `date_of_birth` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `security_number` varchar(100) NOT NULL,
  `citizen_status` varchar(30) NOT NULL,
  `street_address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zip_code` varchar(50) NOT NULL,
  `rent_owned` tinyint(4) NOT NULL,
  `primary_address_duration_year` varchar(100) NOT NULL,
  `primary_address_duration_month` varchar(30) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `id` int(11) NOT NULL,
  `street_address` varchar(500) NOT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `property_occupancy` varchar(100) NOT NULL,
  `agent_info` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loanIDAssets` (`loan_application_id`);

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrowers`
--
ALTER TABLE `borrowers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `companyID` (`company_id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dummy`
--
ALTER TABLE `dummy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employments`
--
ALTER TABLE `employments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gifts_grants`
--
ALTER TABLE `gifts_grants`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loanIDGifts` (`loan_application_id`);

--
-- Indexes for table `liabilities`
--
ALTER TABLE `liabilities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loanIDLiability` (`loan_application_id`);

--
-- Indexes for table `loan_applications`
--
ALTER TABLE `loan_applications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loanCategory` (`loan_category_id`),
  ADD KEY `clientId` (`client_id`),
  ADD KEY `martailStatus` (`martial_status_id`),
  ADD KEY `borrowersId` (`borrowers_id`),
  ADD KEY `personalId` (`personal_info_id`),
  ADD KEY `employmentId` (`employment_id`),
  ADD KEY `propertyId` (`property_id`);

--
-- Indexes for table `loan_categories`
--
ALTER TABLE `loan_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loan_verifications`
--
ALTER TABLE `loan_verifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `martial_status`
--
ALTER TABLE `martial_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_info`
--
ALTER TABLE `personal_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `borrowers`
--
ALTER TABLE `borrowers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dummy`
--
ALTER TABLE `dummy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `employments`
--
ALTER TABLE `employments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gifts_grants`
--
ALTER TABLE `gifts_grants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `liabilities`
--
ALTER TABLE `liabilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loan_applications`
--
ALTER TABLE `loan_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loan_categories`
--
ALTER TABLE `loan_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `loan_verifications`
--
ALTER TABLE `loan_verifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `martial_status`
--
ALTER TABLE `martial_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_info`
--
ALTER TABLE `personal_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assets`
--
ALTER TABLE `assets`
  ADD CONSTRAINT `loanIDAssets` FOREIGN KEY (`loan_application_id`) REFERENCES `assets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `companyID` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gifts_grants`
--
ALTER TABLE `gifts_grants`
  ADD CONSTRAINT `loanIDGifts` FOREIGN KEY (`loan_application_id`) REFERENCES `loan_applications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `liabilities`
--
ALTER TABLE `liabilities`
  ADD CONSTRAINT `loanIDLiability` FOREIGN KEY (`loan_application_id`) REFERENCES `loan_applications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `loan_applications`
--
ALTER TABLE `loan_applications`
  ADD CONSTRAINT `borrowersId` FOREIGN KEY (`borrowers_id`) REFERENCES `borrowers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clientId` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `employmentId` FOREIGN KEY (`employment_id`) REFERENCES `employments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `loanCategory` FOREIGN KEY (`loan_category_id`) REFERENCES `loan_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `martailStatus` FOREIGN KEY (`martial_status_id`) REFERENCES `martial_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `personalId` FOREIGN KEY (`personal_info_id`) REFERENCES `personal_info` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `propertyId` FOREIGN KEY (`property_id`) REFERENCES `properties` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
