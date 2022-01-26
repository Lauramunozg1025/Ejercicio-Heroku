import React, { Component } from "react";
import { url } from "../helpers/url";

export default class Lista extends Component{

    constructor(){
        super();
        this.state = {
            productos: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    async getData(){
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        this.setState({productos: data})
        console.log(this.state.productos)
    }

    render(){
        return <div>
            <div>
                <table className="table text-center mt-3">
                    <thead>
                        <tr>
                            <th scope="col">imagen</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                   {
                        this.state.productos.map( product => (
                            <tr key={product.id}>
                                <td><img src={product.imagen} width='100' height='100' /> </td>
                                <td>{product.nombre} </td>
                                <td>{product.precio} </td>
                                <td>{product.descripcion} </td>
                            </tr>
                        ))
                   }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}