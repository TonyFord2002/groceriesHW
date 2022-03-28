import React from 'react'
import style from './App.css'


export default function GroceryList(props){
    return (
        <>
                <div id = 'props'>
                   <h2>{props.item}</h2>
                   <h3>Brand: {props.brand}</h3>
                   <h3>Units: {props.units}</h3>
                   <h3>Quantity: {props.quantity}</h3>
                </div>
        </>
            )
        }