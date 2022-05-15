import { Widget } from './components/Widget/Widget'

function App() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <Widget />
    </div>
  )
}

export default App
