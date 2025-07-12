const e=`---
title: "Installer CaptureSight"
navDrawerTitle: "Installer Capture Sight"
description: "Apprenez a installer CaptureSight sur votre Switch pour faciliter la manipulation de RNG et attraper des Pokemon parfaits !"
slug: "fr-install-capturesight"
translation:
  enSlug: "install-capturesight"
  language: "fr"
---

## Prérequis

- Une Switch tournant sous Atmosphere ([Guide d'installation du CFW, en anglais](https://switch.hacks.guide/))

## Étape 1 : Installer Tesla Overlay

- [nx-ovlloader](https://github.com/WerWolv/nx-ovlloader/releases)
- [Tesla Menu](https://github.com/WerWolv/Tesla-Menu/releases)

1. Télécharger la dernière version de Tesla Menu et nx-ovlloader.
2. Décompresser les archives et fusionner les dossiers à la racine de la carte SD.

## Étape 2 : Installer CaptureSight

- [CaptureSight](https://github.com/zaksabeast/CaptureSight/releases)

1. Télécharger \`capturesight.ovl\` et le placer dans le dossier \`/switch/.overlays\` sur la carte SD de la Switch.

## Utiliser CaptureSight

1. Démarrer un jeu Pokémon compatible. (Diamant Étincelant/Perle Scintillante, Épée/Bouclier ou Légendes Arceus)
2. Appuyer sur \`L + croix 'bas' + clic joystick droit\` pour faire apparaître le menu de l'overlay Tesla.
3. Ouvrir CaptureSight.

## Résolution de problèmes

### dmnt:cht is not running

- Si vous voyez cette erreur, c'est qu'il y a un problème avec Atmosphere. Suivez [ce guide](https://switch.hacks.guide/extras/updating.html) pour mettre à jour le CFW.

### No cheat process! Is a game running? Is something else using dmnt:cht?

- Soyez certain d'ouvrir le jeu AVANT d'afficher CaptureSight. Assurez-vous de ne pas utiliser sysbot-base en même temps, il y a conflit.

### Unsupported game update!

- Le jeu n'est pas à jour. Cela peut aussi arriver si CaptureSight n'est pas à la dernière version.

### Unsupported game! Title Id: \\<title_id\\>

- CaptureSight n'est pas compatible avec ce jeu. Les seuls jeux supportés sont :

  - Diamant Étincelant & Perle Scintillante.
  - Épée & Bouclier.
  - Légendes : Arceus.
`;export{e as default};
