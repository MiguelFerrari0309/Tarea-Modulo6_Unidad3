-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-05-2025 a las 00:52:07
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `refugio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adopcion`
--

DROP TABLE IF EXISTS `adopcion`;
CREATE TABLE IF NOT EXISTS `adopcion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `img` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `adopcion`
--

INSERT INTO `adopcion` (`id`, `nombre`, `img`, `descripcion`) VALUES
(1, 'Kalem', 'rfyxwohsf8foltzeslvs', 'Kalem es un gatito rescatado de la calle con apenas 3 meses de vida. A pesar de su corto tiempo en este mundo, ya demuestra una gran curiosidad y ternura. Es juguetón, le encanta explorar rincones nuevos y perseguir todo lo que se mueva. Tiene una mirada dulce que conquista al instante, y disfruta mucho de las caricias cuando entra en confianza. Kalem está listo para encontrar un hogar donde lo cuiden y lo llenen de amor.'),
(2, 'Otto', 'q9w72mjzqgbljhmqdvac', 'Otto es un adorable gatito de 3 meses, rescatado junto a su hermanito Kalem. Aunque comparte con él la misma historia, Otto tiene su propia personalidad: es un poco más tranquilo, pero igual de curioso. Le encanta acurrucarse en lugares cálidos y observar todo a su alrededor con ojos atentos. Es un compañero ideal para quien busca ternura y calma en un pequeño felino. Está esperando una familia que le dé la oportunidad de crecer rodeado de cariño.'),
(3, 'Tinta', 'se1ec7jup5cnrgcvg4jk', 'Tinta es una encantadora gatita negra de apenas 2 meses. Chiquita pero valiente, tiene una energía juguetona que la lleva a correr detrás de cualquier sombra o juguete que se cruce en su camino. Su pelaje oscuro contrasta con su personalidad brillante: es curiosa, cariñosa y siempre está buscando mimos. Aunque todavía es chiquita, Tinta tiene un gran corazón y mucho amor para dar. Ideal para quien busca una compañera divertida y dulce.'),
(4, 'Lucy', 'vxmxtmh0z9oweuahvwms', 'Lucy es una dulzura de gatita de 2 meses y medio. Es activa, simpática y siempre está buscando una nueva aventura. Le encanta trepar, jugar con pelotitas y dormir hecha un bollito después de una buena sesión de juegos. Aunque es muy curiosa, también disfruta mucho de los mimos y se adapta rápido a nuevas personas. Lucy es perfecta para una familia que quiera una gatita tierna y llena de energía positiva.'),
(5, 'Tania', 'vrll5gjsvrerkhkejuqx', 'Tania es una cachorrita de 4 meses con una energía contagiosa y una mirada que derrite corazones. Es juguetona, cariñosa y siempre está lista para mover la cola ante cualquier muestra de afecto. Le encanta correr, explorar y compartir tiempo con personas y otros animales. Aunque es muy activa, también disfruta de las siestas largas en un lugar cómodo. Tania está buscando un hogar donde pueda crecer feliz y acompañada.'),
(6, 'Ako', 'mqvoygzeudcuhzkv7ibi', 'Ako es un perrito de 5 meses con una personalidad encantadora. Es inteligente, curioso y muy sociable. Le encanta aprender cosas nuevas, jugar al aire libre y recibir caricias (especialmente en la pancita). Ako es de esos cachorros que rápidamente se ganan el corazón de todos con su ternura y entusiasmo. Está buscando una familia con la que compartir aventuras, juegos y mucho amor.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'andres', '202cb962ac59075b964b07152d234b70'),
(2, 'miguel', '202cb962ac59075b964b07152d234b70');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
