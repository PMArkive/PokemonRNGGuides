const e=`---
- title: "Retail Emerald Egg RNG"
  navDrawerTitle: "Ei RNG"
  description: "Lerne, wie du in Pokémon Smaragd mit Hilfe der Pokemon-Pension, Eier RNG manipulieren kannst. Erhalte perfekte IVs, Wesen, und Shinies."
  slug: "de-retail-emerald-egg"
  translation:
    enSlug: "retail-emerald-egg"
    language: "de"
---

## Video Guides

<YouTubeTable
  videos={[
    {
      title: "Erhalte shiny Eier",
      id: "yNWmpMTBOlc",
    },
    {
      title: "Erhalte Perfekte IVs",
      id: "Kdqbl08xmVQ",
    },
    {
      title: "Trainer/Ruf von El Terapagos Mexicano",
      id: "oQl6Knrydnc",
    },
  ]}
/>

## Schriftliche Anleitung

<Stepper titles={["PokeNav", "Einrichtung", "Ziel Auswählen", "Erhalte PID", "Wähle IVs", "Erhalte Werte"]}>

<Step step={0}>

### PokeNav

1. Registriere möglichst viele Trainer im PokeNav.
2. Öffne das PokeNav Trainer/Ruf Menü und wähle unten im Tool alle Trainer aus, die Du registriert hast.
3. Fahre mit dem nächsten Schritt fort.

  <PokeNavInput />
</Step>

<Step step={1}>

### Schritt 1: Vorbereiten

1. Optional, aber sehr empfehlenswert: Füge ein Pokemon mit Blitzfänger und Flammkörper deinem Team hinzu.
   - Frizelbliz mit Blitzfänger befindet sich auf Route 110, südlich von Malvenfroh City.
   - Schneckmag mit Flammkörper befindet sich auf Feuriger Pfad, direkt nördlich von Malvenfroh City.
2. Kaufe mindestens 3 normale Schutz in Wiesenflur.
3. Gehe zur Pokemon-Pension und hole alle dort befindlichen Pokemon zurück.
4. Stelle Dich an den oberen rechten Rand des weißen Weges an der Route 118.
5. Benutze den ersten Schutz.

![White Path](/images/Emerald/Retail-Egg/start-point.webp)

### Schritt 2: Pokemon abgeben

1. Gehe nach links, bis du vor der Pokémon-Pension stehst. Bewege dich dann nach oben, bis du vor der Pensionsleiterin stehst.
2. Gib deine Eltern-Pokemon in der Pokemon-Pension ab.
3. Verlasse die Pokemon-Pension.
4. Sprich mit dem Pensionsleiter, um die Paarungskompatilität zu erfahren und notiere es für später.

### Schritt 3: In Position gehen

1. Gehe nach Wiesenflur und laufe dort herum.
2. Benutze den zweiten Schutz.
3. Lauf in Wiesenflur herum und benutze den dritten Schutz.
4. Stell dich neben den Baum, der dem PokeCenter am nächsten ist (screenshot unten).
5. Gehe auf den beiden Feldern vor dem PokeCenter hin und her, bis der Schutz nachlässt.
6. Speichere das Spiel und fahre mit dem nächsten Schritt fort.

![PokeCenter](/images/Emerald/Retail-Egg/end-point.webp)

</Step>

<Step step={2}>

### Wähle ein Ziel aus

1. Gib die Daten zu deinem Ei in das unten stehende Tool ein und klicke auf "Generieren".
2. Klicke auf „Select“ bei dem Pokemon, das Du ausbrüten möchtest.

Wenn Du ein Ditto mit einem geschlechtslosen oder männlichen Elternteil verwendest, gib die Informationen für das Ditto als „Weiblich“ ein.

  <RetailEmeraldHeldEgg />
</Step>

<Step step={3}>

### Schritt 1: RNGing der PID

1. Vergewissere dich, dass das Blitzfänger-Pokemon an der Spitze deines Teams steht und speichere.
2. Starte den Timer unten.
3. Wenn der erste Timer abläuft, resette das Spiel und lade den Spielstand so schnell wie möglich.
4. Laufe 9 Schritte auf den beiden Feldern vor dem Poké-Center hin und her.
5. Öffne den PokeDex so oft, wie das unten stehende Tool sagt.
6. Mache 1 Schritt auf denselben zwei Feldern exakt im Moment, in dem der Timer abläuft.
7. Wenn Du einen PokeNav-Anruf erhalten hast, der mit Deinem erwarteten Anruf übereinstimmt, und der Pensionsleiter ein Ei hat, speichere das Spiel. Wenn nicht, scrolle nach unten zum Abschnitt „Kalibrieren“.

<CalibrateHeldEggTimer />

### Schritt: Kalibriere

1. Setze das Flammkörper-Pokemon an die Spitze deines Teams.
2. Nimm dein Ei vom Pensionsleiter und brüte es aus. Wenn es shiny ist, mach mit dem nächsten Schritt weiter.
3. Wenn das Ei nicht shiny war, fülle das unten stehende Tool mit dem Namen des Trainer Ruf und dem Wesen des Eies aus.
4. Klicke auf „Find advances matching eggs“, um eine Liste der möglichen Eier anzuzeigen.
5. Klicke auf „Kalibrieren“ bei dem Ei, dessen Offset dem Wert 0 am nächsten liegt, um den Timer einzustellen.
6. Starte den PID RNG-Prozess neu.

  <CalibrateHeldEgg />
</Step>

<Step step={4}>

### Auswahl der IVs

1. Fülle das unten stehende Tool aus und klicke auf „Generieren“, um eine Liste der möglichen IVs zu erhalten.
2. Klicke auf „Select“ bei dem Pokemon, das du ausbrüten möchtest.

  <RetailEmeraldPickupEgg />
</Step>

<Step step={5}>

### Schritt 1: RNGing der IVs

1. Stell dich neben den Pensionsleiter und speichere.
2. Starte den Timer unten.
3. Wenn der erste Timer abläuft, resette das Spiel, lade den Spielstand und sprich so schnell wie möglich mit dem Pensionsleiter.
4. Fahre mit dem Dialog fort, bis Du den Text „Kümmere dich gut darum“ siehst.
5. Wenn der zweite Timer abgelaufen ist, drücke „A“, um das Ei zu erhalten.
6. Brüte das Ei aus.

<CalibratePickupEggTimer />

### Schritt 2: Kalibriere

1. Gib die Daten in das unten stehende Tool ein und klicke auf „Find advances matching hatched egg“.
2. Wenn das Ergebnis mit dem Offset 0 mit den Zielwerten und der Methode übereinstimmt, herzlichen Glückwunsch! Du hast dein Ei bekommen!
3. Wenn das Ergebnis mit Offset 0 nicht mit deiner Zielmethode übereinstimmt, versuche es erneut, ohne zu kalibrieren.
4. Wenn es kein Ergebnis mit dem Offset 0 gibt, klicke auf „Kalibrieren“, um den Timer anzupassen. Wähle das Ergebnis mit dem Offset, der am nächsten bei 0 liegt.
5. Starte den IV RNG-Prozess neu.

  <CalibratePickupEgg />
</Step>

</Stepper>

---

## Credits

- Zaksabeast für die Erstellung dieses Webtools
- Lincoln für das [PokeNav tool](https://github.com/Lincoln-LM/PokeNav-Egg-RNG-Tool), auf dem dieses Tool basiert.
- Danke an alle [PokeFinder](https://github.com/Admiral-Fish/PokeFinder) Mitwirkenden, auf dem dieses Tool basiert.
- El Terapagos Mexicano, jafet0022, und alle, die dazu beigetragen haben [diesem Discord thread](https://discord.com/channels/285269328469950464/1257368429107875992), mit vielen Informationen und Ei Recherchen über Smaragd.
- Chinesische Übersetzung: xuanyelin, Hakuhiro.
- Deutsche Übersetzung: Parasite on Discord.
`;export{e as default};
