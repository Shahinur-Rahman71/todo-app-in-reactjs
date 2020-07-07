import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import ListItems from './ListItems';

class Welcome extends Component {

    constructor() {
        super();
        this.state = {
            items: [],
            currentItems: {
                text: '',
                id: ''
            }
        }
    }

    handleInputfunction = (e) => {
        this.setState({
            currentItems: {
                text: e.target.value,
                id: Date.now()
            }
        })
    }
    addItemfunction = (e) => {
        e.preventDefault();
        const newitem = this.state.currentItems;
        console.log(newitem);

        if(newitem.text !== ""){
            const newitems = [...this.state.items , newitem];
            this.setState({
                items: newitems,
                currentItems: {
                    text: '',
                    id: ''
                }
            })
        }
        
    }

    deleteFunction =(id)=>{
        
        const  filterItems= this.state.items.filter(method => method.id !== id);
        this.setState({
            items: filterItems
        })
        
    }

    updateFunction=(texts,id)=>{
        const itemlist = this.state.items;
        itemlist.map(updateMethod=>{
            if(updateMethod.id===id){
                updateMethod.text=texts;
            }            
        });
        this.setState({
            items: itemlist
        })
    }

    render() {

        return (
            <div className="App">

                <header className=" text-center">
                    <form className="" id="to-do-form" onSubmit={this.addItemfunction}>

                        <input type="text" 
                         value={this.state.currentItems.text}
                         placeholder="Enter text" 
                         onChange={this.handleInputfunction}                        
                        />

                        <button type="submit">Add</button>

                    </form>
                    {/* <p>{this.state.currentItems.text}</p> */}
                </header>

                <ListItems
                 items={this.state.items} 
                 deleteItem={this.deleteFunction}
                 updateFunction={this.updateFunction}
                />
            </div>
        );

    }

}

export default Welcome;