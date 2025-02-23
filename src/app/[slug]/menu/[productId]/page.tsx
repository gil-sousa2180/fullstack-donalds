
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
    params: Promise<{slug: string; productId: string}>;
}

const ProdctPage = async ({params}: ProductPageProps) => {
    const { slug, productId } = await params;
    const product = await db.product.findUnique({ where: {id: productId }});
    if (!product) {
    return notFound();
    }

    return (
        <>
        <ProductHeader product={product}/>
        <h1>Product page</h1>
        {slug}
        {productId}
        </>
    );
}
 
export default ProdctPage;