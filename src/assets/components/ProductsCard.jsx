
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Products from '../../store/slice/Products';
import { Link } from 'react-router-dom';

function ProductsCard({data}) {
  return (
    <Card >
      <Card.Img variant="top" 
      src="https://picsum.photos/200/300?grayscale" 
      style={{height : 200, objectFit: "cover"}}
      />
      <Card.Body>
        <Card.Title>{data.headline}</Card.Title>
        <Card.Text>
          {data.lead}
        </Card.Text>
        <Button variant="primary"
         as={Link}
         to={`/products/${data.id}`}>Ver Detalle</Button>
      </Card.Body>
    </Card>
     
   
  );
}

export default ProductsCard