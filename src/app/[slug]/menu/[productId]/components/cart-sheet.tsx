import { CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
    const { isOpen, toggleCart, products } = useContext(CartContext);
    return (  
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                    <SheetTitle>Are you about!!</SheetTitle>
                        <SheetHeader>
                            <SheetDescription>
                                This location add project landg page  servens.
                            </SheetDescription>
                        </SheetHeader>
                        {products.map(product => (
                            <h1 key={product.id}>{product.name} - {product.quantity}</h1>
                        ))}
            </SheetContent>
        </Sheet>
    );
}
 
export default CartSheet;