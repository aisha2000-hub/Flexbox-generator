import { useState, useEffect } from "react";
import "./App.css";
import Box from "./components/Box";

  function App() {

  const farben = ["red", "yellow", "green", "blue", "purple"];
  const [flexDirection, setFlexDirection] = useState('row');
  const [justifyContent, setJustifyContent] = useState('space-between');
  const [alignItems, setAlignItems] = useState('center');
  const [settingsHistory, setSettingsHistory] = useState([]);
  
   const selectHistory = (history) => {
     setAlignItems(history.alignItems);
     setFlexDirection(history.flexDirection);
     setJustifyContent(history.justifyContent);
   };
  useEffect(() =>{
    const setting = {
      stepDate: Date.now(),
      flexDirection: flexDirection,
      justifyContent: justifyContent,
      alignItems: alignItems
    };
     setSettingsHistory([...settingsHistory, setting]);
     console.log(settingsHistory);
     }, [flexDirection, justifyContent, alignItems]);
  

  return (
    <div className="App">

      {/* ÜBERSCHRIFT */}
      <h1 className="title">Flexbox Konfiguator</h1>

      {/* FLEXDIRECTION */}
      <fieldset className="flex-fieldset">
        flex-direction
        <input
          type="radio"
          id="row"
          name="flexDirection"
          value="row"
          checked={flexDirection === "row"}
          onChange={(e) => {
            setFlexDirection(e.target.value);
          }}
        />
        <label htmlFor="row">row</label>
        <input
          type="radio"
          id="column"
          name="flexDirection"
          value="column"
          checked={flexDirection === "column"}
          onChange={(e) => {
            setFlexDirection(e.target.value);
          }}
        />
        <label htmlFor="column">column</label>
      </fieldset>

      {/* JUSTIFYCONTENT */}
      <fieldset className="justify-fieldset">
        justify-content
        <select
          id="justify-content"
          onChange={(e) => {
            setJustifyContent(e.target.value);
          }}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-evenly">space-evenly</option>
          <option value="space-around">space-around</option>
        </select>
      </fieldset>

      {/* ALIGNITEM */}
      <fieldset className="align-fieldset">
        align-items
        <select
          id="align-items"
          onChange={(e) => {
            setAlignItems(e.target.value);
          }}
        >
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">strech</option>
          <option value="space-evenly">baseline</option>
        </select>
      </fieldset>

      {/* FARBCONTAINER */}
      <div
        className="farb-container"
        style={{
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
        }}
      >
        {farben.map((farbe) => {
          return <Box farbe={farbe} />;
        // })}
      </div>
      <h3>History</h3>
      <ul className="historyList">
        {/* Iteration über das settingsHistory-Array, um die Einträge anzuzeigen */}
        {settingsHistory.map((historyentry) => {
          const tmpDate = new Date(historyentry.stepDate);
          return (
            <li
              key={historyentry.stepDate}
              onClick={() => selectHistory(historyentry)}
            >
              <span style={{ marginRight: 4, fontWeight: "bold" }}>
                {/* Formatierung des Date-Objekts */}
                {tmpDate.toLocaleString("de-DE", {
                  dateStyle: "short",
                  timeStyle: "medium"
                })}
              </span>
              {historyentry.flexDirection},{historyentry.alignItems},{" "}
              {historyentry.justifyContent}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
