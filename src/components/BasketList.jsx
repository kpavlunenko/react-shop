import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype} = props;
    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0)

    return <div className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {
            order.length ?
                (order.map(item =>
                        <BasketItem
                            key={item.id}
                            {...item}
                            removeFromBasket={removeFromBasket}
                            decQuantity={decQuantity}
                            incQuantity={incQuantity}
                        />)
                ) : (
                    <li className="collection-item"> Empty basket</li>
                )
        }
        <li className="collection-item active">Total cost: {totalPrice} usd</li>
        <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
    </div>
}

export {BasketList}