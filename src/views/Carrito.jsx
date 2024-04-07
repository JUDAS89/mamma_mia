import { usePizza } from '../context/PizzaContext'

const Carrito = () => {
    const { selectedPizzas } = usePizza() //pbtener las pizzas seleccionadas

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

  return (
    <div className='pedido'>
        <h1>Detalles del pedido</h1>
        {selectedPizzas.length > 0 ? (
        <div className="carritoItems">
            {selectedPizzas.map((pizza) => (
            <div key={pizza.id} className="carritoItem">
                <img src={pizza.img} alt={pizza.name} className='imgCarritoItem'/>
                <div className="carritoDescription">
                    <h3>{capitalizeFirstLetter(pizza.name)}</h3>
                    <div className='boxCountPizzas'>
                        <p id='totalPrice'> $ {pizza.price}</p>
                        <button id='btnPluss'> ➕ </button>
                        <span id='totalCount'> 0 </span>
                        <button id='btnLess'> ➖ </button>
                    </div>
                </div>
          </div>
        ))}
      </div>
    ) : (
      <p>No hay elementos en el carrito.</p>
    )}
    <div className='total'>
        <h3>Total: $</h3>
        <button id='btnPagar'>ir a Pagar</button>
    </div>
  </div>
  );
};

export default Carrito;