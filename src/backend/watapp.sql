-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `watapp`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `mail` text NOT NULL,
  `date` int(255) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `name`, `lastname`, `sex`, `about`, `date`) VALUES
(7, 'talom', 'landry', 'maxculin', '', 1628166040),
(8, 'alfred', 'landry', 'maxculin', '', 1628166234),
(9, 'Skysoft', 'landry', 'maxculin', 'C\'est l\'employer du moi.', 1628247027);

INSERT INTO `clients` (`id`, `name`, `lastname`, `mail`, `date`) VALUES
(1, 'BAHA', 'Ephraïm', 'jeansamist@gmail.com', 1628508031);

-- --------------------------------------------------------

--
-- Structure de la table `cookies`
--

CREATE TABLE `cookies` (
  `id` int(11) NOT NULL,
  `cookie_value` text NOT NULL,
  `cookie_name` text NOT NULL,
  `expire_time` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `cookies`
--

INSERT INTO `cookies` (`id`, `cookie_value`, `cookie_name`, `expire_time`, `token`) VALUES
(3, '2', 'watapp_user', 1628676026, 'xywqzdodjmtnqrjfodtevegjqgyyasdenawfhgtomdnqimytko'),
(4, '6', 'watapp_user', 1628680707, 'pipapqlothdjsihtjhjuwsxbeqfncxcgsayeywxsvrlzmpland'),
(5, '7', 'watapp_user', 1628683490, 'wjmztqyhfjbogaaxbswuyfieryzqpsdxomsrbtfirltbdpmmsh'),
(6, '1', 'watapp_user', 1628683537, 'sjhvavwdaprfpvfrtgzhmrihbgicvbgltxrnjexclxwaolmzcu'),
(7, '1', 'watapp_user', 1628684455, 'dfqykbmbmqtsmtbeneppbitkhodyqmfcregvelgwpyjvecysrq'),
(8, '6', 'watapp_user', 1628684537, 'sckzyckqbndlodztipywaoeadbrmhhlxdzfrbmuapbwxylynnb');

-- --------------------------------------------------------

--
-- Structure de la table `stocks`
--

CREATE TABLE `stocks` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `unitary_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `structure` text NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `stocks`
--

INSERT INTO `stocks` (`id`, `name`, `unitary_price`, `quantity`, `structure`, `token`) VALUES
(1, 'ArtDuino', 2000, 0, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', 'nG5m9Eh8owzHoCKBS7tSh8nVpr7vViahzDfyd1oNqZRlQedmIkZC1AnfGYz0y8f7Hlw7u31sh5s06NeZY1EM31dyR9GPkjAbJgT9'),
(2, 'Main', 1500, 0, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', 'HLDfiB164ztAnqNdgaSbdE9FFoUzz7lYKtS0H272z1H9Asxacno9u7YACZsli2pazhcVonDn7cMnhfk0cx76m0Ybd2P8dTpe00pT'),
(3, 'Jus', 2300, 34, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', 'Ysi4e9SzIwB2Mn3OstFu14dkb8vQeFKm3GaWOngv3Q7v04CoY9H9h3G6EiXOvRO6Je0zZJp61yyiVNt8tFV5TJQRA7pqhmStR790'),
(4, 'Bier', 650, 345, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', 'iYXdkgeoX3mJcG2WNcYOJKEPLWYSK2w1TsAa9jp24qxMNU6zErRtq56PB7QSitxWbhOqtQHn0Z4T283b6gyYw74csJBS1GOz8eu7'),
(5, 'ArtDuino', 3400, 10, 'glbwxdxbgpkvwudtmumeucilnvcpxhmuvlbnmorgcuplwipmzfvtrereeazixifvsqjoaxcrqynydxbaqhzgjhyuhosrulrjgktq', '0xixaVD31UtFHq2DgDwXLkPJUfZvs8aZsHheVOai4osIsguBtG2en2tyAjI0PovTyqFx3CpD3UciYHrVvsgTef7J7vTHuWERGuen'),
(6, 'BAHA Ephraïm', 333, 34, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', '4d3Prbf5bq387X7kK6hYrE3WtpHjSfi2Oustz2Y616fpYDbPMn6v9f9KT4I3c1ygQJnYPcNHEen7VEUD33Jsp0u9rS8BXr22mZ3Y');

-- --------------------------------------------------------

--
-- Structure de la table `stocks`
--

CREATE TABLE `employer` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `generetedid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Déchargement des données de la table `employer`
--

INSERT INTO `employer` (`id`, `name`, `generetedid`) VALUES
(1, 'emplyer1', 'nNIDnofNaF'),
(2, 'employer2', 'nNIDnofNaF'),
(3, 'employer3', 'nNIDnofNaF'),
(4, 'employer4', 'nNIDnofNaF');

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `unitaryprice` int(255) NOT NULL,
  `generetedid` varchar(255) NOT NULL,
  `stocknumber` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id`, `name`, `unitaryprice`, `generetedid`, `stocknumber`) VALUES
(10, 'pain', 100, 'KhOydkOQaZ', 800);

-- --------------------------------------------------------

--
-- Structure de la table `structures`
--

-- <<<<<<< HEAD
-- CREATE TABLE `structure` (
--   `id` int(255) NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `place` varchar(255) NOT NULL,
--   `generetedid` varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
=======
CREATE TABLE `structures` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `localisation` text NOT NULL,
  `workers` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `structures`
--

INSERT INTO `structures` (`id`, `name`, `localisation`, `workers`, `token`) VALUES
(3, 'Structure de travail', 'Bonnamossadi', '[\"6\"]', 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno'),
(4, 'Skysoft', 'Makepe', '[\"7\"]', 'glbwxdxbgpkvwudtmumeucilnvcpxhmuvlbnmorgcuplwipmzfvtrereeazixifvsqjoaxcrqynydxbaqhzgjhyuhosrulrjgktq');
>>>>>>> ae4d568e11a883cbf892c21ef8ff8eb7a5c7e6a2

--
-- Déchargement des données de la table `structure`
--

-- INSERT INTO `structure` (`id`, `name`, `place`, `generetedid`) VALUES
-- (20, 'Skysoft', 'Bependa', 'nNIDnofNaF');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `user_role` text NOT NULL DEFAULT '\'worker\'',
  `structures` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '*'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `full_name`, `pseudo`, `password`, `user_role`, `structures`) VALUES
(1, 'BAHA Ephraïm Jean-Samuel', 'admin', 'ec04321e2c7bf2e0b01bac41896796b19f22a244', 'admin', '*'),
(5, 'John Doe', 'john', '55c3b5386c486feb662a0785f340938f518d547f', 'admin', ''),
(6, 'Alex Roi', 'alex', '55c3b5386c486feb662a0785f340938f518d547f', 'worker', '[\"gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno\"]'),
(7, 'Max Thunderman', 'max', '55c3b5386c486feb662a0785f340938f518d547f', 'worker', '[\"glbwxdxbgpkvwudtmumeucilnvcpxhmuvlbnmorgcuplwipmzfvtrereeazixifvsqjoaxcrqynydxbaqhzgjhyuhosrulrjgktq\"]');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cookies`
--
ALTER TABLE `cookies`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `structure`
-- Index pour la table `structures`
>>>>>>> ae4d568e11a883cbf892c21ef8ff8eb7a5c7e6a2
--
ALTER TABLE `structures`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
>>>>>>> ae4d568e11a883cbf892c21ef8ff8eb7a5c7e6a2

--
-- AUTO_INCREMENT pour la table `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `structures`
--
ALTER TABLE `structures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
