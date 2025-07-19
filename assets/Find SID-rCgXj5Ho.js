const e=`---
- title: "Trova il tuo SID su Smeraldo"
  navDrawerTitle: "Trova SID"
  description: "Vari metodi per trovare il tuo SID su Smeraldo."
  slug: "it-gen3-sid"
  translation:
    enSlug: "gen3-sid"
    language: "it"
- title: "Trova il tuo SID su Rubino e Zaffiro"
  navDrawerTitle: "Trova SID"
  description: "Vari metodi per trovare il tuo SID su Rubino e Zaffiro."
  slug: "it-rs-gen3-sid"
  translation:
    enSlug: "rs-gen3-sid"
    language: "it"
- title: "Trova il tuo SID su Rosso Fuoco e Verde Foglia"
  navDrawerTitle: "Trova SID"
  description: "Vari metodi per trovare il tuo SID su Rosso Fuoco e Verde Foglia."
  slug: "it-frlg-gen3-sid"
  translation:
    enSlug: "frlg-gen3-sid"
    language: "it"
---

<ShowIf slug="/it-gen3-sid">

Questa pagina serve per trovare il tuo SID su **Smeraldo**.

Cerchi un altro gioco? Controlla queste pagine:

- [Trova SID su Rubino e Zaffiro](/it-rs-gen3-sid)
- [Trova SID su Rosso Fuoco e Verde Foglia](/it-frlg-gen3-sid)

</ShowIf>

<ShowIf slug="/it-rs-gen3-sid">

Questa pagina serve per trovare il tuo SID su **Rubino e Zaffiro**.

Cerchi un altro gioco? Controlla queste pagine:

- [Trova SID su Smeraldo](/it-gen3-sid)
- [Trova SID su Rosso Fuoco e Verde Foglia](/it-frlg-gen3-sid)

</ShowIf>

<ShowIf slug="/it-frlg-gen3-sid">

Questa pagina serve per trovare il tuo SID su **Rosso Fuoco e Verde Foglia**.

Cerchi un altro gioco? Controlla queste pagine:

- [Trova SID su Rubino e Zaffiro](/it-rs-gen3-sid)
- [Trova SID su Smeraldo](/it-gen3-sid)

</ShowIf>

<details>
  <summary><b>Se stai usando un emulatore o una flashcard GBA</b></summary>

1. Carica il tuo salvataggio su [PKHex](https://github.com/kwsch/PKHeX/releases/latest) o [pkmds.app](https://pkmds.app/) e controlla il tuo SID.

</details>

<details>
  <summary><b>Se stai giocando Rubino e Zaffiro</b></summary>
<br/>
### Manipola l'RNG per ottenere una combinazione TID/SID

1. Segui la [Guida sulla Manipolazione RNG del TID per Rubino e Zaffiro](/retail-rubysapphire-tid) per ottenere uno specifico TID e SID.

### PokeFinder

1. Apri [PokeFinder](/pokefinder) e clicca il pulsante "IDs" nella sezione "Gen 3".
2. Seleziona la sezione "RS" nella nuova finestra che appare.
3. Seleziona "Dead Battery" se hai una batteria scarica (consigliato), altrimenti inserisci l'ora e la data di quando hai iniziato il salvataggio.
4. Inserisci il tuo TID nei filtri di PokeFinder.
5. Clicca "Generate" per ottenere una lista di possibili SID.
6. Se hai molteplici SID possibili, salva il gioco prima di scegliere il tuo starter.
7. Prova a fare RNG Manipulation sul tuo starter per ogni SID. Se ottieni un cromatico, hai trovato il tuo SID.

### Strumento Web con batteria morta

1. Vai nel [SID Finder di Lincoln](https://lincoln-lm.github.io/JS-Finder/Gen3/IDs.html).
2. Inserisci il tuo TID e clicca il cerchio "TID".
3. Inserisci \`5a0\` come "Initial Seed".
4. Clicca "Generate" per ottenere una lista di SID possibili.
5. Se hai molteplici SID possibili, salva il gioco prima di scegliere il tuo starter.
6. Prova a fare RNG Manipulation sul tuo starter per ogni SID. Se ottieni un cromatico, hai trovato il tuo SID.

</details>

<details>
  <summary><b>Se hai già un cromatico</b></summary>

1. Usa le bacche che riducono le EV se il Pokémon ha combattuto, per ripristinare le EV.
2. Apri [PokeFinder](/pokefinder) e vai nella sezione "Gen 3 Tools" > "IV Calculator".
3. Inserisci le info del Pokémon per determinare le sue IV.
4. Apri "Gen 3 Tools" > "IVs to PID".
5. Inserisci le IV del Pokémon, natura, e il tuo TID.
6. Cerca per ottenere risultati e determina il metodo corretto:
   - Pokémon selvatici: Metodi 1-4.
   - Leggendari: Metodo 1.
7. Se appaiono molteplici SID, prova a fare RNG Manipulation per un cromatico finché non lo trovi.

</details>

<details>
  <summary><b>Se giochi Smeraldo, se non hai alterato la Moda di Bluruvia, e hai una batteria scarica</b></summary>

1. [Segui questa guida](/emerald-sid-feebas)

</details>

<details>
  <summary><b>Se giochi Smeraldo, se non hai alterato la Moda di Bluruvia, e hai un salvataggio non più vecchio di un giorno</b></summary>

1. [Segui questa guida](/emerald-sid-feebas)

</details>

<details>
  <summary><b>Se hai modificato la tua Wii o GameCube e hai un cavo GBA-GC</b></summary>

1. Scarica il tuo salvataggio con [gba-link-cable-dumper di FIX94](https://github.com/FIX94/gba-link-cable-dumper/releases/tag/v1.6).
2. Carica il tuo salvataggio su [PKHex](https://github.com/kwsch/PKHeX/releases/latest) or [pkmds.app](https://pkmds.app/) e controlla il tuo SID.

</details>

<details>
  <summary><b>Se hai un DS e una flashcard DS</b></summary>

1. Scarica il tuo salvataggio con [GBA Backup Tool di Rudolph](https://projectpokemon.org/home/tutorials/save-editing/managing-gba-saves/using-gba-backup-tool-r55/).
2. Carica il tuo salvataggio su [PKHex](https://github.com/kwsch/PKHeX/releases/latest) or [pkmds.app](https://pkmds.app/) e controlla il tuo SID.

</details>

<details>
  <summary><b>Se hai trasferito un Pokémon a un DSi modificato, 3DS, o Switch</b></summary>

1. Trasferisci il Pokémon nella tua console modificata.
2. Scarica il salvataggio nella console modificata tramite:
   - [GodMod9i per DSI](https://github.com/DS-Homebrew/GodMode9i/releases/latest)
   - [Checkpoint per 3DS](https://github.com/BernardoGiordano/Checkpoint/releases/latest)
   - [JKSV per Switch](https://github.com/J-D-K/JKSV/releases/latest)
3. Carica il tuo salvataggio su [PKHex](https://github.com/kwsch/PKHeX/releases/latest) or [pkmds.app](https://pkmds.app/) e controlla il tuo SID.

</details>

<details>
  <summary><b>Se hai un DS connesso al WiFi e un gioco di quarta Gen </b></summary>

1. Unisciti al [Discord di Pokemon RNG](https://www.discord.gg/d8JuAvg).
2. Chiedi a qualcuno se potrebbe controllare l'SID del tuo Pokemon usando la [PokeClassic Network GTS](https://pkmnclassic.net/gts/).
3. Trasferisci un Pokemon a un gioco DS della quarta Gen.
4. Metti un Pokemon nel [PokeClassic Network GTS](https://pkmnclassic.net/gts/).
5. Di' agli altri qual è il tuo Pokemon.

</details>

<details>
  <summary><b>Se puoi trasferire un Pokemon su Pokemon Home</b></summary>

1. Trasferisci il tuo Pokemon su Pokemon Home.
2. Unisciti al [Discord di Pokemon RNG](https://www.discord.gg/d8JuAvg).
3. Chiedi a qualcuno di controllare l'SID del Pokemon.

</details>

<details>
  <summary><b>Se ti va bene usare l'ACE e giocare a Smeraldo</b></summary>

1. Prepara l'ACE usando [questa guida](https://e-sh4rk.github.io/ACE3/emerald/getting-started/introduction/).
2. Usa il codice "Read SID from Pokémon in box 9 slot 27" in [questo pastebin](https://pastebin.com/kYfBzVE3), che mostrerà il tuo SID al posto del TID.
3. Controlla la tua Carta Allenatore, che ora mostrerà il tuo SID anziché del TID.
4. Soft-resetta per evitare di salvare le modifiche.

</details>

<details>
  <summary><b>Se ti va bene ricominciare un nuovo salvataggio su Smeraldo</b></summary>

1. Controlla la guida [Starter Cromatico](/emerald-shiny-starter).

</details>

<details>
  <summary><b>Se ti va bene ricominciare un nuovo salvataggio su Rosso Fuoco e Verde Foglia</b></summary>

1. Inizia un nuovo salvataggio
2. Avvia un cronometro quando premi \`A\` per accettare il tuo nome nella schermata "IL TUO NOME?".
3. Ferma il cronometro quando il tuo personaggio si rimpicciolisce e diventa bianco, giusto prima che il personaggio sia nel furgone.
4. Apri [PokeFinder](/pokefinder) e clicca il pulsante "IDs" nella sezione "Gen 3".
5. Seleziona la sezione "FRLGE" nella nuova finestra che appare.
6. Inserisci il tuo TID nel campo \`TID\`.
7. Moltiplica il numero di secondi del tuo cronometro per 59.7275, e arrotonda per difetto per ottenere l'Advance che molto probabilmente hai colpito.
8. Sottrai 50 dal tuo Advance probabile e inseriscilo nel risultato nel campo \`Initial Advances\`.
9. Aggiungi 50 al tuo Advance probabile e inserisci il risultato nel campo \`Max Advances\`.
10. Clicca "Generate" per ottenere una lista di SID possibili.
11. Se hai molteplici SID possibili, salva il tuo gioco prima di scegliere il tuo starter.
12. Prova a fare RNG Manipulation sul tuo starter per ogni SID. Se ottieni un cromatico, hai trovato il tuo SID.

</details>

<details>
  <summary><b>Se nessuna di questi dovesse essere il tuo caso</b></summary>

1. Prova a incontrare un cromatico selvatico.
2. Segui la sezione "Se hai già un cromatico" di sopra.

</details>

Stiamo dimenticando altri metodi? Entra nel [Discord di Pokemon RNG](https://www.discord.gg/d8JuAvg) e faccelo sapere!

## Crediti

- Traduzione Cinese: xuanyelin, Hakuhiro.
- Traduzione Italiano: Fiask.
`;export{e as default};
