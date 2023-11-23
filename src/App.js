import './styles.css';
import Actions from './Actions';
import List from './List';
import { items } from "./data"
import { useState } from 'react';
import { intersection, not } from './utils';
function App() {

  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);

  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if(currentIndex === -1){
      newCheckedItems.push(item)
    }else{
      newCheckedItems.splice(currentIndex, 1);
    }

    setCheckedItems(newCheckedItems);
  };

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(not(leftItems, leftCheckedItems));
    setCheckedItems(not(checkedItems, leftCheckedItems));
  };

  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(not(rightItems, rightCheckedItems));
    setCheckedItems(not(checkedItems, rightCheckedItems));
  };



  return (
    <div className="App flex">
      <List items={leftItems} handleToggle={handleToggle}/>
      <Actions moveRight={moveRight} moveLeft={moveLeft}/>
      <List items={rightItems} handleToggle={handleToggle}/>
    </div>
  );
}

export default App;
