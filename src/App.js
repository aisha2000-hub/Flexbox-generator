import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

function App() {
  const [flexDirection, setFlexDirection] = useState();
  const [justifyContent, setJustifyContent] = useState();
  const [alignItems, setAlignItems] = useState();

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
          name="flex-direction"
          value="row"
          onChange={() => {
            setFlexDirection("row");
          }}
        />
        <label htmlFor="row">row</label>
        <input
          type="radio"
          id="column"
          name="flex-direction"
          value="column"
          onChange={() => {
            setFlexDirection("column");
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
        <Box farbe="red"></Box>
        <Box farbe="yellow"></Box>
        <Box farbe="green"></Box>
        <Box farbe="blue"></Box>
        <Box farbe="purple"></Box>
      </div>
    </div>
  );
}

export default App;
