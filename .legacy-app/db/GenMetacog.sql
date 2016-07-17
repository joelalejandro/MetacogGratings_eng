-- Adminer 4.2.4 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

CREATE DATABASE `GenMetacog` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `GenMetacog`;

CREATE TABLE `ExpeData` (
  `Code` text CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `Name` text COLLATE ascii_bin NOT NULL,
  `Trial` int(2) NOT NULL,
  `Side` int(2) NOT NULL,
  `Response` int(2) NOT NULL,
  `ReactionTime` float NOT NULL,
  `Correct` tinytext CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `Confidence` float NOT NULL,
  `ReactionTimeConfidence` float NOT NULL,
  `Contrast` float NOT NULL,
  `StaircaseNumber` int(2) NOT NULL,
  `Orientation` float NOT NULL,
  `Direction` int(2) NOT NULL,
  `Numreversals` int(2) NOT NULL,
  `ThetaRad` float NOT NULL,
  `PhaseRad` float NOT NULL
) ENGINE=CSV DEFAULT CHARSET=ascii COLLATE=ascii_bin;


CREATE TABLE `SubjectData` (
  `Code` text COLLATE ascii_bin NOT NULL,
  `Name` text COLLATE ascii_bin NOT NULL,
  `Gender` text COLLATE ascii_bin NOT NULL,
  `Age` int(2) NOT NULL,
  `System` text COLLATE ascii_bin NOT NULL,
  `Mobile` tinyint(4) NOT NULL,
  `Input_type` text COLLATE ascii_bin NOT NULL,
  `Screen_width` double NOT NULL,
  `Screen_height` double NOT NULL
) ENGINE=CSV DEFAULT CHARSET=ascii COLLATE=ascii_bin;


-- 2016-07-13 16:42:24
