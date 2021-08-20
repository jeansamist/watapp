-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 20 août 2021 à 16:11
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
(1, 'LaPorte', 'Manshest', 'manshest@gmail.com', 1629370699),
(2, 'Mama', 'Ariane', 'ariane@gmail.com', 1629394044);

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
(1, '1', 'watapp_user', 1629366725, 'dqjcbkaanavsoirvcjdnwgkpjmvctnqfkkbamosucljprxyczw'),
(2, '1', 'watapp_user', 1629453502, 'wqfdtegxaxixjecifrqagawpwqtteyprrwzrtzylfqypzudcuw'),
(3, '1', 'watapp_user', 1629459656, 'yxtcukavyakkrbpnhqogqwfkdkpyjjqlixsaphwqxvrmvttcpo'),
(4, '3', 'watapp_user', 1629480278, 'cyoiqpjrgnekyimkpwmruvdoyewotrttoqhyiktvxfrqooryha'),
(5, '1', 'watapp_user', 1629498213, 'zsogxnxmbypowrclhjjfztgihyjnnyimticbkolkpquczvcmie'),
(6, '3', 'watapp_user', 1629500949, 'yudjvtlxyxfceicrxfjqncieqvqnlgspkssbbhzhcidufvokyq');

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
  `sell_date` date NOT NULL DEFAULT '2021-06-01',
  `structure` text NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sells`
--

INSERT INTO `sells` (`id`, `client_id`, `articles`, `qties`, `user_id`, `totality`, `sell_date`, `structure`, `token`) VALUES
(1, 2, '[\"nNpN6tqu5JcAmCznBlPHEVXYsv9EwQjxDoq7huXl9dTLBpw9KmSBgFIUNwesVgYbRL1r9d2yz3lnbJS96NT1qa1xFk6TE5N6idev\"]', '[\"7\"]', 1, 414400, '2021-08-20', 'ycmcrkschpytlcmpisjbetfbycvgfdpjbpibabtxzvkbwrbswkyvryaozmotpmonjjeldtfbimfwxchceozplaisoisekrhczped', 'zyotjtnuqsyhzkmoczecpxumlipiiz'),
(2, 1, '[\"Pz2fXXj32y6omVLtRA9SZx2UWa3p0UAZE4dS2Pu3e30hibYKs8DmlnuvZzob0CBz4NYL9000qANBwoDeBngOMcF3WH9rsX8YXtNq\"]', '[\"3\"]', 3, 22500, '2021-08-20', 'gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba', 'mnqqbsuculrrirsnebcxkdqvghqlnm');

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
(1, 'Bananes', 50, 0, 'ycmcrkschpytlcmpisjbetfbycvgfdpjbpibabtxzvkbwrbswkyvryaozmotpmonjjeldtfbimfwxchceozplaisoisekrhczped', 'mSJORfdhLGVH3fmbvgQBFreLimS5LIQZ684d3llLMz3AS9cy1mkIXIbpyc3IrCyzW8WKduPsGuQKtcr4upKSRzz54E8vSoXGAaLY'),
(2, 'Tomates', 200, 0, 'ycmcrkschpytlcmpisjbetfbycvgfdpjbpibabtxzvkbwrbswkyvryaozmotpmonjjeldtfbimfwxchceozplaisoisekrhczped', '2mJwbjF2lkRbZuijf16yGB8QZW8u85FzYrS0nTrlVA3nxClFZ16PMKOWw2w4fE74Oz5JELa6xnI8P3vACNX40RBsybaTk7Lp0YF0'),
(3, 'ArtDuino', 45, 17, 'tmahzbhgqpvmiltycvdjvuynnhuthlikquzqyonwegcbiowbtsgmnentpvujdmsszpgjumczjzlrbrahtqjxxvtwdzaurxhpvnqe', 'OOrqAX7EvAlQyZUzHkLvFSXH47HZgyMFhmMiAxFcJAGXmYzSwizFZ9HDVeMXDmxuwazYxFG19yeADJN3knV3FU0preipf9oJEoSm'),
(4, 'Arduino', 59200, 23, 'ycmcrkschpytlcmpisjbetfbycvgfdpjbpibabtxzvkbwrbswkyvryaozmotpmonjjeldtfbimfwxchceozplaisoisekrhczped', 'nNpN6tqu5JcAmCznBlPHEVXYsv9EwQjxDoq7huXl9dTLBpw9KmSBgFIUNwesVgYbRL1r9d2yz3lnbJS96NT1qa1xFk6TE5N6idev'),
(5, 'Gels De Douche Balneo', 5500, 57, 'gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba', 'WwlOsKvzyiSuG1A84cD1pA613yl6Qpm4fVentynaMX29zpzQ3FkT8c4qOf0E4YdbWObM4lWQIYd3u8Ir92IgN5QiTcLH0pMSB60L'),
(6, 'Mèches Superstar', 7500, 10, 'gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba', 'Pz2fXXj32y6omVLtRA9SZx2UWa3p0UAZE4dS2Pu3e30hibYKs8DmlnuvZzob0CBz4NYL9000qANBwoDeBngOMcF3WH9rsX8YXtNq');

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
(1, 'ArtDuino', 'Makepe', '[\"1\"]', 'ycmcrkschpytlcmpisjbetfbycvgfdpjbpibabtxzvkbwrbswkyvryaozmotpmonjjeldtfbimfwxchceozplaisoisekrhczped'),
(2, 'Skysoft', 'Makepe', '[\"2\"]', 'tmahzbhgqpvmiltycvdjvuynnhuthlikquzqyonwegcbiowbtsgmnentpvujdmsszpgjumczjzlrbrahtqjxxvtwdzaurxhpvnqe'),
(3, 'Josepha Beauty Clinic', 'Bonnamoussadi', '[\"3\"]', 'gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba');

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
(1, 'BAHA Ephraïm Jean-Samuel', 'jeansamist@gmail.com', '654174367', 'admin', 'ec04321e2c7bf2e0b01bac41896796b19f22a244', 'admin', '*'),
(2, 'Romaric', 'romaric@gmail.com', '345789', 'romaric', '1e1fe0832cda2c6e977b28d94e8b1af586f3a628', 'worker', '[\"tmahzbhgqpvmiltycvdjvuynnhuthlikquzqyonwegcbiowbtsgmnentpvujdmsszpgjumczjzlrbrahtqjxxvtwdzaurxhpvnqe\"]'),
(3, 'Maman', 'mama@gmail.com', '654174367', 'mama', '31dc565b47415dbac0088f2fad74bb181a415355', 'worker', '[\"gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba\"]'),
(4, 'Steve Jobs', 'jobs@mail.com', '345789', 'jobs', '03a78ba72f010fee3f4c269bf9c7fab86861f7dd', 'worker', '[\"gqahocvjujykrdufvzhwftbefwjsjkqgbnyefhepbrunkndexcevhcnabcvlakbajcukaktffwyzbafmvojbmpbnspgtjjpjoxba\"]');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `structures`
--
ALTER TABLE `structures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
