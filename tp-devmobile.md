
# TP DEV Mobile

Vous allez faire un tp utilisant les technolgies REACT & REACTNATIVE.

# I- Obligations
Vous allez réaliser en 4h par groupe de 2 (DEUX) des fonctionnalités de l'application Weather commencée en cours.
Sur le git actuel, vous avez à disposition la dernière mise à jour fonctionnelle de l'application. Vous pouvez utiliser votre application (conseillé), vous n'êtes PAS obligé de prendre les sources du prof.

# II- Sujet

## Redux (7 points)
Vous allez mettre en place [Redux](https://redux.js.org/) et [ReactRedux](https://react-redux.js.org/) afin de centraliser des éléments de votre application.
Actuellement les services d'accès aux données sont instanciés dans chaque composant, ce n'est pas optimal en performance.

### A faire
Mettre en place ReactRedux pour ReactNative.
Mettre dans un reducer le service WeatherService et le rendre disponible dans toute l'application afin de récupérer la même instance dans tous les composants.
Récupérer dans chaque composant ayant besoin du service, le service du reducer et l'utiliser.
Supprimer l'instanciation du service à l'intérieur des composants.

## Favoris (6 points)
Afin de ne pas mettre à jour les données des villes à chaque affichage du composants FavoritesPage, vous allez gérer les données de cette page via un reducer.

### A faire
Créer un nouveau reducer (vous allez donc devoir combiner plusieurs reducer dans le store) qui contiendra au démarrage de l'application les villes du storage.
Dans ce reducer faire une fonction qui permet de mettre à jour le storage (et donc les favoris).
A l'affichage de la page FavoritesPage afficher les données depuis le reducer et on pas directement depuis le storage.
Dans la page d'ajout de favoris, vous devez mettre à jour le reducer (puis le storage donc). Cela doit mettre à jour automatiquement la page FavoritesPage.
Vous ne devez plus avoir de code qui accède directement au storage dans vos composants!

## La classe (2 points)
Lorsque l'utilisateur se trouve sur la page FavoritesPage, il doit pouvoir sélectionner une ville favorite. Cette sélection à pour effet de naviguer sur la page HomePage et d'afficher la ville choisie avec toutes les données de météo de cette ville.

### A faire
Mettre en place cette fonctionnalité.

## La grande classe (5 points)
Au démarrage de l'application, vous devrez afficher la météo de la ville où vous vous trouvez.
Pour cela vous allez demandez les coordonnées actuelles via le système de [géolocalisation](https://facebook.github.io/react-native/docs/geolocation), puis mettre à jour les données via l'API.

### A faire
Mettre en place cette fonctionnalité.

# Groupes et fonctionnement

Le projet est a développé en groupe de 2 (DEUX) personnes.
Tous les groupes seront définis en cours au début de la session. Aucun changement n'est possible dans la journée.

Les étudiants sont encouragés (mais pas obligés) à mettre en place un système de contrôle des sources de type Git ou équivalent, afin d'affecter et partager efficacement les fichiers de codes et autres composants numériques du projet (fichiers sources, descripteurs de déploiement, documents de recherche, cas d'utilisation, suites de tests, etc.).

Le rendu sera fait par mail à l'addresse vincent.leclerc@ynov.com
L'heure maximum du rendu est 18h15, tout mail arrivé après cet horaire ne sera pas corrigé.
UN rendu par groupe.
Toute absence (non justifiée) de rendu ou retard de rendu entrainera un 0 (ZERO) pour les membres du groupe.
