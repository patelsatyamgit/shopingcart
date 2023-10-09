import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from "./redux/Slices/CounterSlice"

const App = () => {
  const count=useSelector((state)=>  state.Counter.count)
  const dispatch=useDispatch();
  return <>

      <div>
        <button onClick={ ()=> dispatch(increment())}>
          Increment
        </button>
        <br />
        <br />
        <div>
          {count}
        </div>
        <br />
        <br />
        <button onClick={ ()=> dispatch(decrement())}>
          Decrement
        </button>
      </div>
  </>;
};

export default App;
