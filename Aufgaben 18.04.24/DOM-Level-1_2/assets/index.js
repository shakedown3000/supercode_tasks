// - Verwende den vorgegebenen HTML-Code (siehe Code-Snippet) und erstelle mit document.getElementById(“info”).innerHTML eine h1 mit dem Text “Hello World”. Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis über den Liveserver an.
// - Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein. Nutze document.write() und .innerHTML, um jeweils Inhalte in dein HTML zu schreiben. Nutze document.getElementById('container').innerHTML, um einen <p>-Tag mit dem Text “start of the element” zu kreieren. Schreibe nun document.write("end of the element"). Analysiere das Ergebnis im Liveserver.

const firstHeadline = document.getElementById('info')
firstHeadline.innerHTML += '<h1>Hello World</h1>'

firstHeadline.innerHTML += '<h2>How are you?</h2>'

const container = document.getElementById('container')
container.innerHTML += '<p>start of the element</p>'
document.write("end of the element")