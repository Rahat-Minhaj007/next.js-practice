import { useRouter } from "next/router";


const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>This Is Product Details {productId} </h1>
        </div>
    );
};

export default ProductDetail;