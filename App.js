// const heading=React.createElement("h1",{id:"heading"},"Hi Onkar, from Namste React");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)



// <div id="Parent">
//    <div id="child">
//       <h1>"Hi i am h1 child"</h1>
//       <h2>"Hi i am h2 child">/h2>
//    </div> 
// </div>


const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi i am H1 tag"),React.createElement("h1",{},"Hi i am H1 tag")]))
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)