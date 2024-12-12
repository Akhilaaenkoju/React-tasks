// // import React, { Component } from "react";
// // class Todo extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       todo: "",
// //       list: [],
// //       inputValue:"",
// //     };
// //   }

// //   handleChange = (event) => {
// //     console.log(event.target.value);
// //     this.setState({ todo: event.target.value });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// // //     this.setState((prevState)=>{
// // //         console.log("Previous State:",prevState)
// // //         return{
// // //             list:[...prevState.list,prevState.todo],
// // //             todo:"",
// // //         };
        
// // //     });
// // //   };

// // this.setState((a)=>{
// //     return{list:[...a.list,a.todo],
// //         todo:""
// //     }
// // })
// //   };

// //   render() {
// //     return (
// //       <div>
// //         <form onSubmit={this.handleSubmit}>
// //           <input
// //             type="text"
// //             name="todo"
// //             id="todo"
// //             value={this.state.todo}
// //             onChange={this.handleChange}
// //           />
// //           <input type="submit" />
// //         </form>
// //         {this.state.list.map((a,b)=>{
// //             return(
// //                 <ul>
// //                     <li key={b}>{a}<button>edit</button><button>delete</button></li>
// //                 </ul>)
// //         })}
        
// //       </div>
// //     );
// //   }
// // }
// // export default Todo;



// import React, { Component } from "react";
// import './todo.css'

// class Todo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todo: "",
//       list: [],
//       editIndex: null, // Track index for editing
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ todo: event.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { todo, list, editIndex } = this.state;

//     if (editIndex !== null) {
//       // If editing, update the specific task
//       const updatedList = [...list];
//       updatedList[editIndex] = todo;
//       this.setState({
//         list: updatedList,
//         todo: "",
//         editIndex: null, // Reset edit index
//       });
//     } else {
//       // If adding new task
//       this.setState((prevState) => ({
//         list: [...prevState.list, todo],
//         todo: "",
//       }));
//     }
//   };

//   handleEdit = (index) => {
//     this.setState({
//       todo: this.state.list[index],
//       editIndex: index, // Set the current index for editing
//     });
//   };

//   handleDelete = (index) => {
//     this.setState((prevState) => ({
//       list: prevState.list.filter((_, i) => i !== index), // Remove item at index
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="todo"
//             id="todo"
//             value={this.state.todo}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value={this.state.editIndex !== null ? "Update" : "Add"} />
//         </form>
//         <ul>
//           {this.state.list.map((item, index) => (
//             <li key={index}>
//               {item}
//               <button className="button edit-button" onClick={() => this.handleEdit(index)}>Edit</button>
//               <button className="button edit-button" onClick={() => this.handleDelete(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Todo;



import React, { Component } from "react";
import './todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      list: [],
      editIndex: null, // Track index for editing
    };
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, list, editIndex } = this.state;

    if (editIndex !== null) {
      // If editing, update the specific task
      const updatedList = [...list];
      updatedList[editIndex] = todo;
      this.setState({
        list: updatedList,
        todo: "",
        editIndex: null, // Reset edit index
      });
    } else {
      // If adding new task
      this.setState((prevState) => ({
        list: [...prevState.list, todo],
        todo: "",
      }));
    }
  };

  handleEdit = (index) => {
    this.setState({
      todo: this.state.list[index],
      editIndex: index, // Set the current index for editing
    });
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((_, i) => i !== index), // Remove item at index
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            id="todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <input type="submit" value={this.state.editIndex !== null ? "Update" : "Add"} />
        </form>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>
              {item}
              <button
                className="button edit-button"
                onClick={() => this.handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="button delete-button"
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
