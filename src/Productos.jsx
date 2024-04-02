import React, { Component } from 'react';
import './Productos.css';

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [
        { id: 1, nombre: 'Producto 1', precio: 10, imagen: 'https://www.eurostil.com/wp-content/uploads/2021/01/07378.jpg' },
        { id: 2, nombre: 'Producto 2', precio: 20, imagen: 'https://i.pinimg.com/736x/28/49/b6/2849b6c85893332712ab1016860f7be7.jpg' },
        { id: 3, nombre: 'Producto 3', precio: 15, imagen: 'https://th.bing.com/th/id/R.dd9a6859aa17b89f8cc2da277df5ee0b?rik=atPuzlD%2bSbDR8g&riu=http%3a%2f%2fwww.bellezapura.com%2fwp-content%2fuploads%2f2013%2f04%2fcrew-shave-500x238.png&ehk=sIbQVTzuPB8wdyLxHRZ9q23ZQ%2b4y3catl05%2f85gfqKQ%3d&risl=&pid=ImgRaw&r=0' },
        { id: 4, nombre: 'Producto 4', precio: 10, imagen: 'https://www.eurostil.com/wp-content/uploads/2021/06/07371.jpg' },
        { id: 5, nombre: 'Producto 5', precio: 20, imagen: 'https://1.bp.blogspot.com/-fpkdoetovGg/XA6P6jFj0UI/AAAAAAAAkWI/bG1TqKFkBAM2QrlGZZ2YIKvhlyqltx9egCKgBGAs/s1600/DSC_0482.JPG' },
        { id: 6, nombre: 'Producto 6', precio: 15, imagen: 'https://images-na.ssl-images-amazon.com/images/I/71ttBJQdxgL._AC_SL1500_.jpg' },
        { id: 7, nombre: 'Producto 7', precio: 10, imagen: 'https://cd1.lapeluqueriaenlaweb.com/wp-content/uploads/2014/09/gel-de-afeitado.jpg' },
        { id: 8, nombre: 'Producto 8', precio: 20, imagen: 'https://ayalatin.com/docs/Laca%20Extrema%20-%20Ayalatin.png' },
        { id: 9, nombre: 'Producto 9', precio: 15, imagen: 'https://cd1.lapeluqueriaenlaweb.com/wp-content/uploads/2015/09/M19913-VERDE.jpg' },
        { id: 10, nombre: 'Producto 10', precio: 10, imagen: 'https://mensandbeauty.com/wp-content/uploads/2019/05/mejores-productos-belleza-para-hombre-shave-barbers-spa-the-shave-club-polvo-pelo-fijador-boost-powder.jpg' },
        { id: 11, nombre: 'Producto 11', precio: 20, imagen: 'https://www.eurostil.com/wp-content/uploads/2020/10/07185.jpg' },
        { id: 12, nombre: 'Producto 12', precio: 15, imagen: 'https://th.bing.com/th/id/OIP.irYzrjAyN8bYcw1Qp0I8qgHaHa?rs=1&pid=ImgDetMain' },
        // Agrega más productos aquí
      ],
      productoSeleccionado: null,
      alertaVisible: false,
    };
  }

  mostrarProductoDetalle = (producto) => {
    this.setState({ productoSeleccionado: producto });
  }

  cerrarProductoDetalle = () => {
    this.setState({ productoSeleccionado: null });
  }

  agregarAlCarrito = (nombreProducto) => {
    this.setState({ alertaVisible: true });
    setTimeout(() => {
      this.setState({ alertaVisible: false });
    }, 5000); // La alerta se ocultará después de 5 segundos (5000 milisegundos)
  }

  render() {
    const { productos, productoSeleccionado, alertaVisible } = this.state;
    const gridColumns = 5;
    const gridRowGap = 20;
    const gridColumnGap = 20;
    const totalRows = Math.ceil(productos.length / gridColumns);
    const gridTemplateColumns = `repeat(auto-fill, minmax(200px, 1fr))`;

    return (
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <h1>Listado de Productos</h1>
        <div
          className="productos-container"
          style={{
            height: '250%',
            display: 'grid',
            gridTemplateColumns,
            gridAutoRows: `calc((100% - ${gridColumnGap * (gridColumns - 1)}px - ${gridRowGap * (totalRows - 1)}px) / ${totalRows})`,
            gridColumnGap,
            gridRowGap,
            width:'100%',
          }}
        >
          {productos.map((producto, index) => (
            <div key={producto.id} className="producto" style={{height: '100%', width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px'}}>
              <h3>{producto.nombre}</h3>
              <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: '90%', maxWidth: '100%', }} onClick={() => this.mostrarProductoDetalle(producto)} />
            
              <p style={{marginBottom:'10px'}}>Precio: ${producto.precio}</p>
            </div>
          ))}
        </div>

        {productoSeleccionado && (
          <ProductoDetalle
            producto={productoSeleccionado}
            cerrarProductoDetalle={this.cerrarProductoDetalle}
            agregarAlCarrito={this.agregarAlCarrito}
          />
        )}

        {alertaVisible && <AlertaTemporal producto={productoSeleccionado} />}
      </div>
    );
  }
}

const ProductoDetalle = ({ producto, cerrarProductoDetalle, agregarAlCarrito }) => {
  return (
    <div
      className="producto-detalle"
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        zIndex: 100,
      }}
    >
      <button
        className="boton-cerrar"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: '#DA1212',
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={cerrarProductoDetalle}
      >
        X
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{producto.nombre}</h2>
        <div style={{ width: '100%', maxHeight: '300px', overflow: 'hidden' }}>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>Precio: ${producto.precio}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <button className="boton-agregar" style={{ flex: 1 ,background:'#11468F'}} onClick={() => agregarAlCarrito(producto.nombre)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

const AlertaTemporal = ({ producto }) => {
  return (
    <div
      className="alerta-temporal"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
        zIndex: 100,
      }}
    >
      Se ha agregado {producto.nombre} al carrito de compras.
    </div>
  );
};

export default Productos;
