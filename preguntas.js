const preguntas = [
    {
        pregunta: "¿Cuántos pares craneales clásicamente se describen?",
        respuestaCorrecta: "b",
        opciones: {
            a: "13",
            b: "12",
            c: "10"
        }
    },
    {
        pregunta: "¿Qué libro menciona 13 pares craneales, incluyendo el nervio terminal?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Gray's Anatomy",
            b: "Latarjet",
            c: "Netter's Atlas of Human Anatomy"
        }
    },
    {
        pregunta: "¿A qué sistema nervioso pertenecen los pares craneales?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Sistema nervioso central",
            b: "Sistema nervioso periférico",
            c: "Sistema nervioso autónomo"
        }
    },
    {
        pregunta: "¿Cuál es la mnemotecnia mencionada para recordar la primera letra de los nombres de los pares craneales?",
        respuestaCorrecta: "b",
        opciones: {
            a: "On Old Olympus' Towering Top A Finn And German Viewed Some Hops",
            b: "Casi ende no técnica oye oye mamá papá traigo mini falda ahora mis glúteos van a estar helados",
            c: "Some Say Marry Money But My Brother Says Big Brains Matter More"
        }
    },
    {
        pregunta: "Según la mnemotecnia, ¿qué dos nervios craneales comienzan con la letra 'O'?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Óptico y Oculomotor",
            b: "Olfatorio y Oculomotor",
            c: "Olfatorio y Óptico"
        }
    },
    {
        pregunta: "¿Cómo se sugiere diferenciar el nervio Olfatorio del Óptico?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Por su ubicación en el tronco encefálico",
            b: "Relacionando el olfatorio con la nariz y el óptico con los ojos",
            c: "Por su función motora o sensitiva"
        }
    },
    {
        pregunta: "¿Cuántas narices se relacionan con el nervio olfatorio?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Una",
            b: "Dos",
            c: "Cero"
        }
    },
    {
        pregunta: "¿Cuántos ojos se relacionan con el nervio óptico?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Una",
            b: "Dos",
            c: "Cero"
        }
    },
    {
        pregunta: "¿Cuáles son los nervios craneales específicamente sensoriales mencionados?",
        respuestaCorrecta: "c",
        opciones: {
            a: "III, IV y VI",
            b: "V, VII y IX",
            c: "I, II y VIII"
        }
    },
    {
        pregunta: "¿Qué tipo de impulsos transmite el nervio Olfatorio (I)?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Impulsos visuales",
            b: "Impulsos auditivos",
            c: "Impulsos olfatorios"
        }
    },
    {
        pregunta: "¿Qué tipo de impulsos transmite el nervio Óptico (II)?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Impulsos visuales",
            b: "Impulsos olfatorios",
            c: "Impulsos de equilibrio"
        }
    },
    {
        pregunta: "¿Qué tipo de impulsos transmite el nervio Vestibulococlear (VIII)?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Impulsos gustativos",
            b: "Impulsos auditivos y de equilibrio",
            c: "Impulsos motores"
        }
    },
    {
        pregunta: "¿Cuáles nervios craneales son motores y mueven el globo ocular?",
        respuestaCorrecta: "b",
        opciones: {
            a: "I, II y VIII",
            b: "III, IV y VI",
            c: "V, VII y IX"
        }
    },
    {
        pregunta: "¿Qué músculos del ojo inerva el nervio Oculomotor (III)?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Recto externo y oblicuo superior",
            b: "Solo el recto superior",
            c: "Recto inferior, recto superior, recto interno y oblicuo inferior"
        }
    },
    {
        pregunta: "¿Qué músculo del ojo inerva el nervio Troclear (IV)?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Recto externo",
            b: "Oblicuo superior",
            c: "Recto interno"
        }
    },
    {
        pregunta: "¿Qué músculo del ojo inerva el nervio Abducens (VI)?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Recto externo",
            b: "Oblicuo inferior",
            c: "Recto superior"
        }
    },
    {
        pregunta: "Según la mnemotecnia 'reviso', ¿qué nervio estimula el músculo recto externo?",
        respuestaCorrecta: "c",
        opciones: {
            a: "IV",
            b: "III",
            c: "VI"
        }
    },
    {
        pregunta: "Según la mnemotecnia 'reviso', ¿qué nervio estimula el músculo oblicuo superior?",
        respuestaCorrecta: "a",
        opciones: {
            a: "IV",
            b: "VI",
            c: "III"
        }
    },
    {
        pregunta: "¿Qué nervio estimula a los músculos restantes del ojo que no son inervados por el IV o el VI?",
        respuestaCorrecta: "c",
        opciones: {
            a: "IV",
            b: "VI",
            c: "III"
        }
    },
    {
        pregunta: "¿A qué músculos estimula el nervio Espinal o Accesorio (XI)?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Músculos de la lengua",
            b: "Músculos del cuello",
            c: "Músculos de la masticación"
        }
    },
    {
        pregunta: "¿A qué músculos estimula el nervio Hipogloso (XII)?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Músculos de la lengua (excepto el palatogloso)",
            b: "Músculos faciales",
            c: "Músculos del cuello"
        }
    },
    {
        pregunta: "¿Qué tipo funcional comparten los nervios III, IV, VI, XI y XII?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Sensoriales",
            b: "Motores",
            c: "Mixtos"
        }
    },
    {
        pregunta: "¿Cuáles son los cuatro nervios craneales de tipo mixto mencionados?",
        respuestaCorrecta: "c",
        opciones: {
            a: "I, II, VIII y X",
            b: "III, IV, VI y XI",
            c: "V, VII, IX y X"
        }
    },
    {
        pregunta: "¿Cuál es la función sensitiva principal del nervio Trigémino (V)?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Gusto en la lengua",
            b: "Audición",
            c: "Sensibilidad de la cara"
        }
    },
    {
        pregunta: "¿Cuál es la función motora principal del nervio Trigémino (V)?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Estimular los músculos de la masticación",
            b: "Mover el globo ocular",
            c: "Estimular los músculos faciales"
        }
    },
    {
        pregunta: "¿Cuál es la función sensitiva del nervio Facial (VII) relacionada con el gusto?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Gusto en el tercio posterior de la lengua",
            b: "Gusto en los dos tercios anteriores de la lengua",
            c: "Sensibilidad general de la lengua"
        }
    },
    {
        pregunta: "¿Cuál es la función motora principal del nervio Facial (VII)?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Mover la lengua",
            b: "Mover el cuello",
            c: "Estimular los músculos faciales (expresión facial)"
        }
    },
    {
        pregunta: "¿Cuál es la función sensitiva del nervio Glosofaríngeo (IX) relacionada con el gusto?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Gusto en el tercio posterior de la lengua",
            b: "Gusto en los dos tercios anteriores de la lengua",
            c: "Sensibilidad de la faringe"
        }
    },
    {
        pregunta: "¿Cuál es la función motora principal del nervio Glosofaríngeo (IX)?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Mover la lengua",
            b: "Estimular los músculos de la faringe",
            c: "Mover el paladar"
        }
    },
    {
        pregunta: "¿Qué tipo de funciones tiene el nervio Vago (X) en las vísceras?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Solo motoras",
            b: "Solo sensitivas",
            c: "Sensitivas y motoras"
        }
    },
    {
        pregunta: "¿Qué significa la letra 'P' colocada junto a algunos nervios craneales?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Que son principalmente motores",
            b: "Que tienen una función sensorial prominente",
            c: "Que tienen funciones parasimpáticas"
        }
    },
    {
        pregunta: "¿Qué función parasimpática tiene el nervio Oculomotor (III)?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Estimular la secreción de la parótida",
            b: "Miosis (contracción de la pupila) y acomodación del cristalino",
            c: "Estimular la secreción de glándulas salivales (excepto la parótida)"
        }
    },
    {
        pregunta: "¿Qué secreción estimula el nervio Facial (VII) a través de su función parasimpática?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Secreción de la glándula parótida",
            b: "Secreción de las glándulas sudoríparas",
            c: "Secreción de las glándulas lagrimales, salivales (excepto la parótida) y de Bowman"
        }
    },
    {
        pregunta: "¿Qué glándula salival estimula el nervio Glosofaríngeo (IX) a través de su función parasimpática?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Glándulas parótidas",
            b: "Glándulas sublinguales",
            c: "Glándulas submaxilares"
        }
    },
    {
        pregunta: "¿Dónde tiene función parasimpática el nervio Vago (X)?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Músculos faciales",
            b: "Músculos de la lengua",
            c: "En las vísceras"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué se utiliza en el video de 'Sala QSP' para memorizar los pares craneales?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Mnemotecnias verbales",
            b: "Técnica visual formando un rostro con los números de los pares craneales",
            c: "Repetición espaciada"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 1?",
        respuestaCorrecta: "a",
        opciones: {
            a: "La nariz (olfatorio)",
            b: "Los ojos (óptico)",
            c: "Las cejas (oculomotor)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 2?",
        respuestaCorrecta: "b",
        opciones: {
            a: "La nariz (olfatorio)",
            b: "Los dos ojos (óptico)",
            c: "Las cejas (oculomotor)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representan los números 3 echados?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Los pómulos (trigémino)",
            b: "Las cejas (oculomotor y movimientos oculares)",
            c: "La boca (facial)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 4 invertido cerca de la nariz?",
        respuestaCorrecta: "a",
        opciones: {
            a: "El patético (rotación interna del ojo hacia la nariz)",
            b: "El abducens (rotación externa del ojo)",
            c: "El trigémino (sensibilidad facial)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 5?",
        respuestaCorrecta: "c",
        opciones: {
            a: "La frente (olfatorio)",
            b: "Las orejas (vestibulococlear)",
            c: "Parte de la cara y la boca (trigémino y masticación)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 6 en la parte externa del ojo?",
        respuestaCorrecta: "b",
        opciones: {
            a: "El óptico (visión)",
            b: "El motor ocular externo (rotación externa del ojo)",
            c: "El facial (expresión facial)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 7?",
        respuestaCorrecta: "c",
        opciones: {
            a: "La lengua (hipogloso)",
            b: "El cuello (espinal)",
            c: "Todo el rostro (facial y expresiones faciales)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 8?",
        respuestaCorrecta: "b",
        opciones: {
            a: "Los hombros (espinal)",
            b: "Las dos orejas (vestibulococlear y audición/equilibrio)",
            c: "La laringe (vago)"
        }
    },
    {
        pregunta: "En la técnica visual, ¿dónde se ubican los números 9, 10 y 12?",
        respuestaCorrecta: "c",
        opciones: {
            a: "En la frente",
            b: "En las mejillas",
            c: "En la lengua"
        }
    },
    {
        pregunta: "En la técnica visual, ¿qué representa el número 11?",
        respuestaCorrecta: "a",
        opciones: {
            a: "Los hombros (espinal o accesorio y movimientos de cabeza y hombros)",
            b: "El corazón (vago)",
            c: "Los pulmones (vago)"
        }
    },
    {
        pregunta: "¿Desde qué estructura encefálica emergen los pares craneales?",
        respuestaCorrecta: "a",
        opciones: {
            a: "El encéfalo",
            b: "La médula espinal",
            c: "El cerebelo"
        }
    },
    {
        pregunta: "¿A través de qué estructuras salen los pares craneales del cráneo?",
        respuestaCorrecta: "c",
        opciones: {
            a: "Solo fisuras",
            b: "Solo orificios (forámenes)",
            c: "Orificios (forámenes) o fisuras"
        }
    },
    {
        pregunta: "¿Dónde se encuentran los núcleos de los pares craneales III al XII?",
        respuestaCorrecta: "b",
        opciones: {
            a: "En el cerebro",
            b: "En el tronco encefálico",
            c: "En el cerebelo"
        }
    },
    {
        pregunta: "¿Qué dos pares craneales no tienen núcleos en el tronco encefálico y se consideran prolongaciones del prosencéfalo?",
        respuestaCorrecta: "c",
        opciones: {
            a: "III y IV",
            b: "VIII y IX",
            c: "I (Olfatorio) y II (Óptico)"
        }
    }
];

export { preguntas };