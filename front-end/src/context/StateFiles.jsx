import contextStore from "./ContextFile";


const StateFile = (props) =>{


    return (
        <contextStore.Provider
            value={{

            }}
        >
            {props.children}
        </contextStore.Provider>
    )
}

export default StateFile