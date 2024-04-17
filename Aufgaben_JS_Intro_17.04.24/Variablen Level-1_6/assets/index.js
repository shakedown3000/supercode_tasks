
// Lernziel: Unterschied zwischen let und const.
// Deklariere die Variable let x mit dem Wert 34. Überschreibe x anschließend mit dem Wert 67. Gib den Wert x in der Konsole aus. Danach kommentiere deinen Code aus.
// Deklariere die Variable const y mit dem Wert 34. Überschreibe y anschließend mit dem Wert 67. Gib den Wert y in der Konsole aus. Warum erhältst du eine Fehlermeldung?      

let x = 34
x = 67
console.log(x)

const y = 34
y = 67

// Uncaught TypeError: invalid assignment to const 'y'
// Variables defined with const cannot be Redeclared