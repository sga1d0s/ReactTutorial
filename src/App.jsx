import UserGreeting from './components/UserGreeting'
import Student from './components/Student'
import List from './components/List'
import Button from './components/Button';
import ClickEvents from './components/ClickEvents'

function App() {

  return (
    <>
      {/* inculimos los componentes que queremos mostrar */}
      <UserGreeting isLoggedIn={false} username="sgaldos" />
      {/* <Student name={"Sergio"} age={30} isStudent={true}></Student> */}
      {/* <Button></Button> */}
      {/* <Student></Student> */}
      {/* <List></List> */}
      {/* <ClickEvents></ClickEvents> */}
    </>
  );
}
export default App