const dictionary = {  
    "flex": "Flex es un término que se refiere a ser adaptable o flexible en situaciones diferentes.",  
    "lit": "Lit se utiliza para describir algo emocionante o impresionante.",  
    "ghosting": "Ghosting es cuando una persona corta toda comunicación sin aviso previo.",  
    "sus": "Sus es una abreviatura de 'suspicious', usada a menudo para describir algo sospechoso.",  
    "vibes": "Vibes se refiere a la atmósfera o la sensación que algo o alguien puede transmitir.",  "savage": "Savage describe a alguien que es audaz o que actúa sin preocuparse por las consecuencias.",  
    "shade": "Throwing shade significa hacer comentarios despectivos o sarcásticos hacia alguien.",  
    "on fleek": "On fleek significa que algo está perfectamente bien o es atractivo.",  
  "cringe": "Cringe describe la sensación de incomodidad frente a algo embarazoso o poco atractivo.",  
    "stan": "Stan se usa para describir a una persona que es un gran fan o admirador de alguien.",  
    "bet": "Bet se usa para expresar acuerdo o afirmación, como ‘se apuesta que sí’.",  
    "lit af": "Lit af se utiliza para enfatizar lo emocionante que es algo, equivalente a ‘muy emocionante’.",  
    "fomo": "FOMO (fear of missing out) es el miedo a perderse algo, a menudo relacionado con eventos sociales.",  
    "bussin": "Bussin describe algo que es realmente bueno o delicioso, a menudo referido a la comida.",  
    "cancel culture": "La cultura de la cancelación se refiere al fenómeno de retirar apoyo a figuras o productos tras comportamientos o declaraciones controvertidas.",  
    "slay": "Slay se utiliza para describir a alguien que está teniendo éxito o que luce increíble.",  
    "throw shade": "Throw shade significa criticar o despreciar a alguien de manera sutil.",  
    "ship": "Ship es la abreviatura de 'relationship' y se utiliza para expresar el deseo de que dos personas estén en una pareja romántica.",  
    "no cap": "No cap significa que alguien está hablando en serio, sin mentiras.",  
    "finna": "Finna es una contracción de 'fixing to', que significa tener la intención de hacer algo pronto.",
"clout": "Clout se refiere a la influencia social o poder, especialmente en las redes sociales.",  
    "extra": "Extra describe a una persona que es excesiva en su comportamiento o estilo.",  
    "fleek": "Fleek significa que algo está perfectamente bien o se ve increíble.",  
    "woke": "Woke indica estar consciente socialmente respecto a temas de justicia, especialmente raza.",  
    "salty": "Salty se usa para describir a alguien que está molesto o resentido por algo.",  
    "periodt": "Periodt enfatiza una afirmación, como una forma de cerrar un argumento.",  
    "simp": "Simp se refiere a alguien que muestra devoción excesiva hacia otra persona.",  
    "mood": "Mood describe un sentimiento o estado de ánimo que resuena con algo.",  
    "snatched": "Snatched se refiere a alguien que se ve increíblemente bien.",  
    "cancel": "Cancel es dejar de apoyar a alguien por comportamiento considerado inaceptable.",  
    "vibe check": "Vibe check significa evaluar la energía de una situación o persona.",  
    "adulting": "Adulting se refiere a cumplir con responsabilidades y comportamientos adultos.",  
    "sksksk": "Sksksk es una expresión de risa o entusiasmo en la cultura de internet.",  
    "receipts": "Receipts son pruebas de algo, especialmente en controversias en redes sociales.",  
    "noob": "Noob es un principiante o alguien inexperto en un área particular.",  
    "litty": "Litty es una variación de 'lit' que describe algo emocionante.",
"litty": "Litty es una variación de 'lit' que describe algo emocionante.",  
    "GOAT": "GOAT significa 'Greatest Of All Time', refiriéndose a alguien considerado el mejor en su campo.",  
    "Bae": "Bae es un término cariñoso que significa 'before anyone else', usado para referirse a una pareja o interés romántico.",  
    "Cap": "Cap se usa para expresar que algo no es cierto; opuesto a ‘no cap’.",  
    "Thirsty": "Thirsty describe a alguien que busca atención o afecto de forma evidente.",  
    "Finesse": "Finesse significa manejar una situación con habilidad, a menudo de manera ingeniosa.",  
    "JOMO": "JOMO significa 'Joy of Missing Out', refiriéndose a disfrutar de lo que se tiene.",  
    "Lowkey": "Lowkey significa mantener algo en secreto o de manera discreta.",  
    "Highkey": "Highkey significa estar abierto y entusiasta sobre algo.",  
    "Shake my head (SMH)": "SMH expresa desaprobación o incredulidad.",  
    "Snack": "Snack se usa para describir a alguien que es físicamente atractivo.",  
    "Zaddy": "Zaddy se refiere a un hombre atractivo y con estilo que despierta admiración."  };

document.getElementById("searchButton").addEventListener("click", function() {  
    const term = document.getElementById("termInput").value.toLowerCase();  
    const resultDiv = document.getElementById("result");  
    
    if (dictionary[term]) {  
        resultDiv.innerHTML = `<strong>${term}:</strong> ${dictionary[term]}`;  
    } else {  
        resultDiv.innerHTML = "Lo siento, no encontré la definición.";  
    }  
});  