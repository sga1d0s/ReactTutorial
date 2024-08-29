
function MouseEvents() {

  // variable contador
  let count = 0;

  // funciones 'handleClick'
  const handleClick1 = () => console.log("OUCH!");

  const handleClick2 = (name) => {
    if (count < 1) {
      count++
      console.log(`Me has clicado ${count} vez ${name}`);
    } else if (count < 3) {
      count++
      console.log(`Me has clicado ${count} veces ${name}`);
    } else console.log(`${name} PARA DE CLICARME`);
  };

  let countEvent = 2;

  // parametro event
  const handleClick3 = (event) => {
    if (countEvent % 2 == 0) {
      event.target.textContent = "CLICADO"
      countEvent ++
    } else {
      event.target.textContent = "NO CLICADO"
      countEvent ++
    }
  };

  // aplicamos el estilo del módulo 'button'
  return (<>
    <button onDoubleClick={() => handleClick1()}>
      Handle Double Click</button><br /><br />
    <button onClick={() => handleClick2("Sergio")}>
      Handle Click Target</button><br /><br />
    <button onClick={(event) => handleClick3(event)}>
      Handle Click Event</button>
  </>
  )
}

export default MouseEvents