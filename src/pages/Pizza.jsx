import pizzas from '../data/pizzas';

export default function Pizza() {
  const pizza = pizzas[0];

  return (
    <div className='container mt-4'>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} width='300' />
      <p>{pizza.desc}</p>
    </div>
  );
}