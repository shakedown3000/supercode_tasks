// - Lernziel: Strings deklarieren, miteinander verketten, Text im Dokument anzeigen, Wert einer Variable ändern. Die Verwendung und das Verständnis von document.write() und console.log(), um Text im Browser und in der Konsole auszugeben.
// - Nun sollen Strings miteinander verkettet werden. Probiere dies an ein paar Beispielen aus:
// - Deklariere zwei Variablen: x mit dem String "Hello" und y mit dem String "World".
// - Addiere x mit y und speichere das Ergebnis als Variable z. Nutze den Befehl document.write() mit Wert z zwischen den Klammern, um im Dokument Werte anzuzeigen.
// - Schreibe x + " " + y und speichere alles in der Variable n. Nutze den Befehl document.write() mit Wert n.
// - Addiere x und einen String mit "World". Nutze den passenden Zuweisungsoperator. Nutze den Befehl document.write() mit Wert x, um den String im Dokument auszugeben.
// - Deklariere eine Variable meinString mit dem String "Ich bin Erste:r". Nutze einen Zuweisungsoperator, um einen anderen String " Ich komme auf Platz zwei", zu meinString hinzuzufügen. Gebe dann meinString in der Konsole aus.

let x = "Hello "
let y = "World"
let z = x + y
document.write(z)
let n = x + " " + y
document.write(n)
x = x + "World"
let meinString = "Ich bin Erste:r"
meinString = "Ich komme auf Platz 2"
document.write(meinString)