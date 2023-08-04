import { useParams } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { filterProductsByCategoryThunk } from "../store/slice/Products"
import { ListGroup } from "react-bootstrap"

const ProductDetail = () => {


    const {id} = useParams()
    const{ products, useDetail, setProductsDetail}= useState({})
    const allProducts= useSelector(state => state.products)
    const dispatch= useDispatch()

    useEffect(() => {
        getDetail()
    }, [id])

        const getDetail= () => {
            axios
            .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then(resp =>{ console.log(resp.data) 
             setProductsDetail(set.data)
             dispatch(filterProductsByNameThunk(resp.data.category.id))
          
    })
        .catch(error => console.error(error))
    return(

        <main>
            <h1>{ProductDetail.headline}</h1>
            <p>By:{ProductDetail.brand}</p>
            <p>{ProductDetail.data}</p>
            <button>Comprar</button>

            <Row>
                <Col lg={9}>
                    <img src={productsDetail.imge_description} alt=""/>
                    <p className="text-muted">{productsDetail.image_descrption}</p>
                    {
                        productsDetail.body?.map(pItem =>(
                            <p>key={pItem}</p>
                        ))
                    }
                </Col>
                <Col lg={3}>
                    <h3>Productos Relacionados</h3>
                <ListGroup>
                    {
                        allProducts.map(newa =>(
                            <ListGroup.Item key={products.id}>{products.headline}</ListGroup.Item>
                        ))
                    }
                    </ListGroup></Col>
            </Row>
        </main>
        
    )}
}
export default ProductDetail