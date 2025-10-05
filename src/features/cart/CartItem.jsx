import PropTypes from 'prop-types';
import { formatCurrency } from '../../../../../ultimate-react-course-main/ultimate-react-course-main/16-fast-react-pizza/final-1-after-tailwind/src/utils/helpers';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity} &times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
