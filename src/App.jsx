import UserGreeting from './components/UserGreeting'
import Student from './components/Student'
import List from './components/List'

function App() {

  return (
    <>
      {/* inculimos los componentes que queremos mostrar */}
      <UserGreeting isLoggedIn={false} username="sgaldos" />

      {/* <Student name={"Sergio"} age={30} isStudent={true}></Student> */}
      {/* <Student></Student> */}

      <List></List>
    </>
  );

}

export default App
