import React, { Component } from 'react';


/*const SearchBar = () =>{ //this is functional component. below we are creating class components to have methods and properties.
    return <input />; // to work this we need import React from 'react';. So have to import react in all component files.
};*/

//to have funcitonalities of React.component class
class SearchBar extends Component{ // instead of React.Component we use just Component and update the import statement as import React, { Component } from 'react';
    constructor(props){//this constructor is called whenever SearchBar object is created.We are creatting searchBar object in the div tags of index.js.
        super(props); // calling Component class constructor with props as parameter.
        this.state = { term: ''}; //setting the initial state. Here term (any name) is search term and initially it will be null and gets updated based on onChnage event value.
        //this.state is used only constructor and every where else it would be this.setState.See in render function.
    }
    render(){
        //Second step: onChange is prop or property.Here passing event handler to the element that we want to monitor for events.
        //return <input onchange={this.onInputChange} />; 
        //just comment below onInputChange funciton. in below return we are including step1 and step 2 together in ES6 way.
        //return <input onchange={(event) => console.log(event.target.value)} />;
        //if we have single event then we remove () around event. Again it is a function with event as argument and => as function.
        //return <input onChange={event => console.log(event.target.value)} />; 
        //in below return statement we are updating the state to the value we type. so term value changes from null to user typed value. to very this we can keep statement "Value of the input: {this.state.term} in return below."
        
         //value ={this.state.term} so this is controlled component.if we use this in return statement.
        return(
            <div className="search-bar">
           
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            
            </div>
        );
    }
    
    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
/*Events in react has two steps:
1. declare event handler.its function whenever event occurs
2. we pass the event handler to the element that we want to monitor for events.*/
    //event handler first step
    //onInputChange(event){ //any name like we gave event.
        //console.log(event.target.value); // type any value in input we can see in console.
       //console.log(event);
    //}
}

/*State:
State is a plain javascript object that is used to record and react to user events.each class based component that we define has its owne state object. whenever a component state is changed the component immediately re-renders and also forces all of its chidlren to re-render as well. So if search bar had some states and it changed the render functional would be rewritten.And if we had other components inside of yours well those would be re-rendered as well.

Before we ever use state inside of a component we need to initialize the state object. To initialize state we set the property state to plain javascript object inside of the class's constructor method

*/

export default SearchBar; //this will be reference to other file like index.js. Name of component should be same as export.It is not file name but component name.

