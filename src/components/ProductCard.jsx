<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.css" rel="stylesheet"/>

const ProductCard = ({image,price,title,category}) => {
    return (
        <div className="card border-1" style={{width: '18rem'}}>
            <img src={image} width='100%' height='250px' className="card-img-top" alt="..."/>
            <div className="card-body">
                <p>{category}</p>
                <h5 className="card-title">{title}</h5>
                <span className='h3'>${price}</span>
                <a href="#" className="btn btn-primary ms-5 py-4">ADD TO CART</a>
            </div>
        </div>
    )
}

export default ProductCard;