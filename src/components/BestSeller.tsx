import mock from 'src/mockData/data.json';
import CardItem from 'src/components/CardItem';

const BestSeller = () => {
  // const [cardItem, setCardItem] = useState<Card[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetch('http://localhost:3000/data');
  //     const json = await data.json();
  //     setCardItem(json);
  //   };

  //   getData();
  // }, []);

  return (
    <section className='bestseller'>
      <div className='container'>
        <div className='bestseller__title'>
          <h2 className='headline-4'>Best Seller</h2>
        </div>
        <div className='bestseller__cards'>
          {mock.data.map((item, index) => {
            if (index < 8) {
              return <CardItem key={item.id} {...item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
