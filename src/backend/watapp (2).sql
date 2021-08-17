-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 17 août 2021 à 16:54
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.8

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
  `mail` text NOT NULL,
  `date` int(255) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `name`, `lastname`, `mail`, `date`) VALUES
(1, 'BAHA', 'Ephraïm', 'jeansamist@gmail.com', 1628508031),
(2, 'Manum', 'François', 'manumfran@mail.com', 1628768205);

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
(8, '6', 'watapp_user', 1628684537, 'sckzyckqbndlodztipywaoeadbrmhhlxdzfrbmuapbwxylynnb'),
(9, '6', 'watapp_user', 1628772684, 'xmtperczzskcmlpnjxhkcasxrvjlztssdsibsgrqguwhysvbya'),
(10, '1', 'watapp_user', 1628777021, 'xtwduwxoxomkdzxmdzfduvfhmticqpyjgxorlqitbobkgfossm'),
(11, '1', 'watapp_user', 1628936608, 'tzkyeznquqgjbiehbbwbwypdjhocpjemirbdkjkwyfnnqtkroj'),
(12, '15', 'watapp_user', 1628961760, 'zelcyjwsnrejpouxgnudqndwsprxzgpnywwibgurjgfqapydnh'),
(13, '18', 'watapp_user', 1628962003, 'hogxeorasszfdpbrgvypsbbcuqrlhalwgnscsugntmlmlrzjln'),
(14, '1', 'watapp_user', 1629278944, 'racidncpwadghzxzwtkdazfmupafpjtgqstfiwzklptpbvivao');

-- --------------------------------------------------------

--
-- Structure de la table `sells`
--

CREATE TABLE `sells` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `articles` text NOT NULL,
  `qties` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `totality` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(6, 'BAHA Ephraïm', 333, 34, 'gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno', '4d3Prbf5bq387X7kK6hYrE3WtpHjSfi2Oustz2Y616fpYDbPMn6v9f9KT4I3c1ygQJnYPcNHEen7VEUD33Jsp0u9rS8BXr22mZ3Y'),
(7, 'Bnane', 100, 12, 'fwpxvhxkcqcfmvpuvxiukafnogqsdvpqycsdwafbenonslgiircpxnfbavcxfyehhkhunquomcpipfogeqlpckzaradyeqtyzgpk', 'b01Xgyrw2NoU9MKzvtd5tEJ4SOmiHc7KIFnGJsg9ay9Cn81fFF7Ukfl3YCckROCGdaeBdeSfMwNNJSlplasv3d9myC3eMVAN0v6y');

-- --------------------------------------------------------

--
-- Structure de la table `structures`
--

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
(4, 'Skysoft', 'Makepe', '[\"7\"]', 'glbwxdxbgpkvwudtmumeucilnvcpxhmuvlbnmorgcuplwipmzfvtrereeazixifvsqjoaxcrqynydxbaqhzgjhyuhosrulrjgktq'),
(5, 'Art', 'Makepe', '[\"18\"]', 'fwpxvhxkcqcfmvpuvxiukafnogqsdvpqycsdwafbenonslgiircpxnfbavcxfyehhkhunquomcpipfogeqlpckzaradyeqtyzgpk');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `mail` text NOT NULL,
  `tel` text NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `user_role` text NOT NULL DEFAULT '\'worker\'',
  `structures` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '*'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `full_name`, `mail`, `tel`, `pseudo`, `password`, `user_role`, `structures`) VALUES
(1, 'BAHA Ephraïm Jean-Samuel', '', '', 'admin', 'ec04321e2c7bf2e0b01bac41896796b19f22a244', 'admin', '*'),
(5, 'John Doe', '', '', 'john', '55c3b5386c486feb662a0785f340938f518d547f', 'admin', ''),
(6, 'Alex Roi', '', '', 'alex', '55c3b5386c486feb662a0785f340938f518d547f', 'worker', '[\"gnmowljqpxejpwxacgvtilkaraehoqzduwknyqmlunqdygmknbxrambkimqumrjmpumhichnhguymsuvthubdnhbmdatmyzimnno\"]'),
(7, 'Max Thunderman', '', '', 'max', '55c3b5386c486feb662a0785f340938f518d547f', 'worker', '[\"glbwxdxbgpkvwudtmumeucilnvcpxhmuvlbnmorgcuplwipmzfvtrereeazixifvsqjoaxcrqynydxbaqhzgjhyuhosrulrjgktq\"]'),
(15, 'BAHA Ephraïm Jean-Samuel', 'jeansamist@gmail.com', '65174367', 'baha', 'd0e56c6ff25c0cb1bf3d3de0c29d50e54e33554e', 'admin', '*'),
(16, 'Landry', 'johndoe@gmail.com', '345789', 'landry', '8edb81bd4fd2cbc693a1fbf695f7737c202bc1cd', 'admin', '*'),
(17, 'Romaric', 'romaric@gmail.com', '345789', 'romaric', 'dcf65d116d64fa900b1bd47e15910240e5a5597e', 'admin', '*'),
(18, 'Steve Jobs', 'jobs@mail.com', '345789', 'jobs', 'e18cb0745784a6f31f96bc07d3af7450605cebf3', 'worker', '[\"fwpxvhxkcqcfmvpuvxiukafnogqsdvpqycsdwafbenonslgiircpxnfbavcxfyehhkhunquomcpipfogeqlpckzaradyeqtyzgpk\"]');

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
-- Index pour la table `sells`
--
ALTER TABLE `sells`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `structures`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `structures`
--
ALTER TABLE `structures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
