
import ControllerComponents from "./components/ControllerComponents"
import NameList from "./components/ExampleKey"
import ExampleKey from "./components/ExampleKey"
import UserProfile from "./components/HOC/UserProfile"
import ParentCounter from "./components/ParentCounter"
import DisplayCounter from "./components/ProxyPassHOC/DisplayCounter"
import WithCounter from "./components/ProxyPassHOC/WithCounter"
import SearchFilter from "./components/SearchFilter"
import UnControllerComponents from "./components/UnControllerComponents"

const EnhancedComponent = WithCounter(DisplayCounter)

function App() {


  return (
    <>
      {/* <ParentCounter/> */}
      {/* <NameList/> */}
      {/* <ControllerComponents/> */}
      {/* <UserProfile name="Alice" age={23}/> */}
      {/* <UnControllerComponents/> */}
      {/* <EnhancedComponent label="Counter Example"/> */}
      <SearchFilter/>
    </>
  )
}

export default App
