const info: [string, number, number] = ["Happy", 18, 169];
const value1 = info[1]; // value1 type : string, better

const info2: any[] = ["Happy", 18, 169];
const value2 = info2[1]; //value2 type: any

function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state;
  const changeState = (newState: T) => {
    currentState = newState;
  };
  return [currentState, changeState];
}

const [counter, setCounter] = useState(10);
