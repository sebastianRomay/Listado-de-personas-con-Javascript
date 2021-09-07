const personas = [new Persona("Juan", "Perez"), new Persona("Carla", "Lara")];
// const body = document.getElementById('body');
// body.addEventListener('load', mostrarPersonas);

function mostrarPersonas() {
  let texto = "";
  for (let persona of personas) {
    console.log(persona);
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.getElementById("forma");
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  } else {
    console.log("no hay informacion para agregar");
  }
  
}
