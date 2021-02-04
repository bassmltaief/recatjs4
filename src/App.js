import './App.css';
import Profile from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import myImg from './bassem.jpg'
function App() {
  const displayname =(name) => {
    alert(`the name is ${name}`);
  };
 var Listprof = [
    {
      fullName: 'Bassem',
      bio: "This is probably the clearest I've ever watched anyone explain async/await and promises before. Well done!",
      profession:"telecommunication network engineer and futur Jr Developper",
      }
];
  return (
    <>
    <Profile Listprof={Listprof} displayname={displayname}>
    {myImg}
    </Profile>
    </>
  );
}
export default App;
