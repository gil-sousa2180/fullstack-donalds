import { CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartSheet = () => {
    const { isOpen, toggleCart } = useContext(CartContext);
    return (  
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                    <SheetTitle>Are you about!!</SheetTitle>
                        <SheetDescription>
                            This location add project landg page  servens.
                        </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}
 
export default CartSheet;