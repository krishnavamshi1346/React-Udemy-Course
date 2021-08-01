import React,{useState} from "react";
const userDetailContext=React.createContext(null) 
export default function UserDetailsComponent(){
const [userDetails]=useState({
    name:"krishna vamshi",
    age:21
});
return (
    <userDetailContext.Provider value={userDetails}>
        <h1>This is Parent Component</h1>
        <hr/>
        <ChildComponent userDetails={userDetails}/>
    </userDetailContext.Provider>
);
}
function ChildComponent(props){
    return(
        <div>
            <h2>This is Child Component</h2>
            <hr/>
            <SubChildComponent/>
        </div>
    );
    function SubChildComponent(props){
        var contextData=React.useContext(userDetailContext);
        return (
            <div>
                <h3>This is Sub Child Component</h3>
                <h4>UserName:{contextData.name}</h4>
                <h4>User Age:{contextData.age}</h4>
            </div>
        );
    }
}