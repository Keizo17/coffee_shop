const [cart, setCart] = React.useState({
	items: [];
	total: 0;
})

const addToCart = (item) => {
	setCart(prev => ({
		...prev,
		items: [...prev.items, item]
		total: prev.total + item.price
	}))
}

const Cart = ({ cart }) => {
	return (
		<div>
			<h2>Cart</h2>

			{cart.items.map((item,index) => (
				<p key={index}>
					{item.name} - ${item.price}
				</p>
			))}

			<h3>Total: ${cart.total}</h3>
		</div>
)
}