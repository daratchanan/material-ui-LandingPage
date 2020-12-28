import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
   root: {
      height: "100vh",
      backgroundImage: `url("https://images.unsplash.com/photo-1528295674080-a70f6cbf4ff0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGp1bmdsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
   }
}));

function App() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Header/>
      </div>
   );
}

export default App;
