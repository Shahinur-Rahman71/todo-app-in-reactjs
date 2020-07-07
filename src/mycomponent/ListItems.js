import React from 'react';
import './ListItems.css'
import FlipMove from 'react-flip-move';

function ListItems(props) {

    const allitems =props.items;
   
    const listitems = allitems.map(listMethod=>{
        return (
            <div key={listMethod.id} className="list">
                <p className="text-light  m-3 p-2">

                    <input className="text-light"
                     type="text" 
                     id={listMethod.id}
                     value={listMethod.text}
                     onChange={(e)=>props.updateFunction(e.target.value,listMethod.id)}
                     />
                    <span style={{cursor: 'pointer'}} className="float-right">
                        <i onClick={()=>{props.deleteItem(listMethod.id)}} className="fas fa-trash mt-1"></i>
                    </span>

                </p>
                
            </div>
        )
    });

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listitems}
            </FlipMove>
        </div>
    );

}

export default ListItems;