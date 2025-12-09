import PromedioNota from './props/PromedioNota';
import Greeting from './props/Greeting';
import UserCard from './props/UserCard';
import ParentButtonOne from './props/ParentButtonOne';
import ParentInputNotifier from './props/ParentInputNotifier';
import ParentIncrementButton from './props/ParentIncrementButton';
import ParentUserList from './props/ParentUserList';
import ParentLoginForm from './props/ParentLoginForm';
function App() {

  const userData = { name: "Carlos", age: 30, direccion: "condado", telefono: "555-1234" };
  
  return (
    <>
  
      <Greeting name="Francisco" />
      <Greeting name="Ana" />
      <UserCard user={userData} />
      <PromedioNota/>
      <ParentButtonOne/>
      <ParentIncrementButton/>
      <ParentInputNotifier/>
      <ParentUserList/>
      <ParentLoginForm/>
    </>

  ); 
}

export default App;


