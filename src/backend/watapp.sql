-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 06 août 2021 à 19:49
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 8.0.8

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
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `date` int(255) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `name`, `lastname`, `sex`, `about`, `date`) VALUES
(7, 'talom', 'landry', 'maxculin', '', 1628166040),
(8, 'alfred', 'landry', 'maxculin', '', 1628166234),
(9, 'Skysoft', 'landry', 'maxculin', 'C\'est l\'employer du moi.', 1628247027);

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
(1, '1', 'watapp_user', 1630663564, 'PjIbCvDAJaZhFskSgNNrvxpj12Fs15LYUZO7AhfhA1ySlHatVpcWxFgOck8tu16lezZKKc9xp21vpMtCgYTRNDtqNXs1ha9WtGSb'),
(2, 'avc', 'test', 1628244391, 'bgpEn77GX4mTLk27mz6RTL7rc7i4Ed9Oy0KqANSJOLIHSiUyh4pJ4L1YVoUWCMQ5cc5o7wRRtAJqydep4uq9arhCekuB4DUK9942'),
(3, '1', 'watapp_user', 1630664742, 'ENou9Cl8z2ki4aPjuiLKErSPFeaY2C0Dyx6NnudJJvfFfnnrlX3eDR6byyKwQLbded442xi4VcgtQAnYzuYgLKmHdsxPWKg4EDDT'),
(4, '1', 'watapp_user', 1630664743, 'eI0ADdT5DJcd796j8D8XC6DOE7WUBCyUVvuhjDniF53m1WP6lhlc33Xe5PTGgpG5Ne2ay1m6u1nxC63oGkWhN5HLx4Tup1ywe2dS'),
(5, '1', 'watapp_user', 1630664773, 'V6qv0yyQF4YXxbor2WT5Bd7gv8ERbKFX2r6DiXq9qWSxJvJ4gLoImP8QW9t3pa1EKHzmycoPvc7FCnuKZlhvEq1Brnx97guUZDvF'),
(6, '1', 'watapp_user', 1630664780, '8mizAne3qUuAEhsB8lwWwWdmrHzSfaxGCNboEELqpm2Gehp6VW60UuypULQROvsWUSdE0wd1tpQix1ePNdYplcgdnAclPoiBtfwX'),
(7, '1', 'watapp_user', 1630664897, 'e3T5qXIArSl3nR9zSudmUqus2EucAeWVfolSuZT1sPJmf9TZKqhOA4EdiD29HpdNKRlWFcoGUw3Lec1WxvAgbTKUzrqGfxT9pD0P'),
(8, '1', 'watapp_user', 1628162506, 'qsShbsrNg8PF805grtIa87f5jrEDLQlXQwP8siHrCD4Kx2J2kc44qFzOsAaS9kRcl88K9OgM8CgWF9e0bDyR0TtcsWP6SHfQ7ViI'),
(9, '1', 'watapp_user', 1628162512, 'Wu8yuE1lYiu6yA2lOt9T2DEI0kZruMjoitx1B31qhh1F15MAN6E0Hm3g6PmkqoJBb4oIiZ1jhxXS3XR70TMm3gJkEStxH8tCFHTn');

-- --------------------------------------------------------

--
-- Structure de la table `employer`
--

CREATE TABLE `employer` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `generetedid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Structure de la table `structure`
--

CREATE TABLE `structure` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `place` varchar(255) NOT NULL,
  `generetedid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `structure`
--

INSERT INTO `structure` (`id`, `name`, `place`, `generetedid`) VALUES
(20, 'Skysoft', 'Bependa', 'nNIDnofNaF');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` text NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` text NOT NULL DEFAULT 'worker',
  `structures` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `full_name`, `pseudo`, `password`, `role`, `structures`) VALUES
(1, 'BAHA Ephraïm Jean-Samuel', 'admin', 'ec04321e2c7bf2e0b01bac41896796b19f22a244', 'admin', '*');

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
-- Index pour la table `employer`
--
ALTER TABLE `employer`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `structure`
--
ALTER TABLE `structure`
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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `cookies`
--
ALTER TABLE `cookies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `employer`
--
ALTER TABLE `employer`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `structure`
--
ALTER TABLE `structure`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
