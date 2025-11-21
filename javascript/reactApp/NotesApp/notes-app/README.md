
Hooks:
Rules:


    1. useState : adds State to functional Component
        Syntax : const [state , setState] = useState(initalValue);

    2. useEffect : Handles side effects like API calls, timer
    3. useContext : 
    4. useReducer : -> used for complex state management
        const [state , dispatch ] = useReducer(reducer, intitalState);
    5. useCallBack, useMemo (performance Hooks)
    6. useRef : 
    7. custom Hooks : Start with -> useFetch()




const [data , setData] = useState();
const [update ,]

useEffect( ()=>{
    //logic
    setData(Data);
}
, [] );

No Dependencies -> runs on every render
Empty Array -> runs once
Specific dependencies -> runs when those variables change