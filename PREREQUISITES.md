dimi-start-2021
# Pré-requis

1. [Visual Studio Code](#1-visual-studio-code)

2. [Git](#2-git)

3. [Un compte GitHub](3-github)

4. [Node.js](#4-nodejs)

5. [Google Chrome Dev (ou Canary)](#5-google-chrome-dev)

<br><br>

## 1. Visual Studio Code

- [Visual Studio Code homepage](https://code.visualstudio.com/)

### Pourquoi ?
- Visual Studio Code est un éditeur de code open source très populaire. 

- Il est particulièrement adapté au développement web (HTML& CSS, javascript, nodejs etc.).

- Il propose de très nombreuses extensions (ou plugins), couvrant tout les besoins les plus communs.


### Quelques extensions "cool"
- [Bracket Pair Colorize 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

- [One Dark Pro (color theme)](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)

<br><br>

## 2. Git
- [Git homepage](https://git-scm.com/)

- [Git download](https://git-scm.com/downloads)

### Pourquoi ?
- Git est une technologie permettant la gestion de version d'un projet.

- Les concepts associés aux problématique du "versioning" (commit, push, pull, branch) offrent un cadre de travail structurant.

- Associé à un compte GitHub, c'est une solution simple, gratuite pour permettre la collaboration.

### Attention ! 
Git ne propose pas d'interface graphique, et doit donc être exécuté en ligne de commande :
- directement (ex `git pull`)
- ou indirectement (via l'interface dédié de VSCode par exemple)

Pour tester si l'installation de git a fonctionné, dans le terminal (de VSCode par exemple) saisir :
```
git --version
```
Git est installé s'il apparaît quelque chose du genre de :
```
git version 2.30.1 (Apple Git-130)
```

### Git sur Macbook M1
L'installation de git peut être complexe sur les Macbook M1 (dernière génération). Pour l'activation de rosetta, homebrew et git, [voir cet article (en anglais)](https://blog.logrocket.com/set-up-macbook-for-web-development-in-20-minutes/).

### user.name & user.email
Il arrive que git refuse les "commits" parce qu'il lui manque 2 informations : 
- l'email associé à l'utilisateur
- ainsi que le nom
Il faut alors saisir dans le terminal :
```shell
git config --global user.name "mon super pseudo"
```
```shell
git config --global user.email "mon.email@domain.com"
```

<br><br>

## 3. GitHub

- [GitHub](https://github.com/)

### Pourquoi ?

- Permet l'hébergement de projets (site web, application, expérience en tout genre).

- Permet la collaboration (possibilité d'inviter des collaborateurs).

- Avec [GitHub Pages](https://pages.github.com/) il est possible de mettre en ligne des pages web (pas uniquement le code source, mais le résultat donc).

### Comment ?

Pour associer un repo github avec un projet local (ouvert dans VSCode) : 

1. Initialiser la configuration globale de git avec `user.name` & `user.email`
  Cette étape doit être réalisé une fois (seulement) par ordinateur.
  [cf user.name & user.email](#user-name-user-email)

2. Se connecter sur github.com et créer un nouveau repository
  <img height="200" src="https://user-images.githubusercontent.com/11039919/136216574-02c35171-9022-4c66-ab74-95059fa1b9a1.png">
  Le nouveau repository DOIT ÊTRE VIDE à la création (ne pas cocher les options "Add a README file" etc).

3. Initialiser via le terminal de VSCode.

  Le projet vide peut à présent être synchronisé avec votre projet local (ouvert dans VSCode).

  La page du repository sur GitHub propose les lignes suivantes :
  ```
  echo "# xxx" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin git@github.com:xxx/xxx.git
  git push -u origin main
  ```
  Ces lignes peuvent être copiées / collées telles quelles dans le terminal pour y être éxécutées. Elles réaliseront les opérations suivantes :
  - Création d'un fichier README.md (si inexistant) avec "# xxx" pour contenu.
  - Initialisation de git dans le répertoire local courant.
  - Ajout de la création / modification de README.md via un commit nommé "first commit"
  - Renommage de la branche (généralement nommée "master") en "main"
  - Ajout de l'url distante git@github...
  - Transfert des "commits" depuis la machine vers le serveur (GitHub) 

  Lorsque l'opération "push" est terminée, votre dossier local est à présent synchronisé avec git.

  L'onglet "source control" de VSCode permet désormais de réaliser les opérations "commit" & "push".


<br><br>

## 4. Node.js

- [Node.js homepage](https://nodejs.org/)

### Pourquoi ?

- Node.js permet l'exécution de code javascript en DEHORS d'un navigateur, au niveau du système (OS).

- Avec Node.js vient [npm](http://npmjs.com/) (NPM pour Node Package Manager), une solution de partage (hébergement) de code et d'outils réalisés en javascript. Cela simplifie grandement l'utilisation de librairies (node modules).

- Indispensable pour développer avec [react](https://reactjs.org/).

### Attention !

Node.js ne propose pas d'interface graphique.

Pour tester que l'installation a fonctionné, dans un terminal saisir : 
```
node --version
```
Exemple de résultat possible :
```
v16.2.0
```

<br><br>

## 5. Google Chrome Dev

- [Chromimum projects](https://www.chromium.org/getting-involved/dev-channel)

- [Google Chrome Dev](https://www.google.com/chrome/dev/)

- [Google Chrome Canary](https://www.google.com/chrome/canary/)

### Pourquoi ?

- Une application dédiée au dev. Offre un environnement chromium vierge pour tester les expériences web.

- Évite les extensions indésirables (susceptibles par exemple de créer des erreurs dans la console dont vous n'être pas l'auteur-e).

- Permet de tester certaines fonctionnalités encore en développement (par exemple WebGPU).

<br><br>
