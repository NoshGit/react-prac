import './ArrayPrac.css';

export default function ArrayPrac() {
  //   const fruits = ['Apple', 'Mango', 'Banana', 'Strawberry', 'Pineapple'];
  const fruits = [
    { name: 'Apple', price: 10, quantity: 30, emoji: '🍎' },
    { name: 'Mango', price: 20, quantity: 100, emoji: '🥭' },
    { name: 'Banana', price: 2, quantity: 0, emoji: '🍌' },
    { name: 'Strawberry', price: 40, quantity: 10, emoji: '🍓' },
    { name: 'Pineapple', price: 25, quantity: 0, emoji: '🍍' },
  ];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
          {fruit.emoji}{' '}
          <span className={fruit.quantity > 1 ? 'available' : 'soldout'}>
            {fruit.name}
          </span>{' '}
          (${fruit.price})
        </li>
      ))}
    </ul>
  );
}
