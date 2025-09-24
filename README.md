# Respuestas a las preguntas
## ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

En los casos de "expresion", en el primero se realiza lo que está dentro de los paréntesis y luego la multiplicación, en el segundo se hace primero la multiplicación y luego la suma, y en el tercero se hacen las potencias de izquierda a derecha.

Luego, los operadores "++" y "--", suman o restan una unidad a una variable, respectivamente.

Finalmente, para las últimas variables, el operador "=" asigna un valor a una variable y los demás, que cuentan con otro operador antes del "=", realizan su acción respectiva al valor que ya estaba en una variable, por ejemplo, en el caso de "+=", se le suma otra cosa al valor que ya tenía la variable, sin reemplazarla completamente.

Como fue establecido antes, las acciones de los operadores se realizan de izquierda a derecha, esto es debido a la precedencia de operadores, la cual dicta el orden en el que se realizarán las acciones de los operadores, empezando por "()", luego "*", "/", "%", "+" y por último "-".

## ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Sí, ya que tiene la misma sintaxis con la que cuenta un lenguaje como C++, se comporta y utiliza de la misma manera, verificando si una comparación o variable es falsa o verdadera.