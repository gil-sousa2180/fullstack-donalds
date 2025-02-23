"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/format-currency";
import { Prisma, Product, Restaurant } from "@prisma/client";
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{ include: { restaurant: {
        select: {
            name: true,
            avatarImageUrl: true;
            };
        };
     };
    }>;
}

const ProductDetails = ({product}: ProductDetailsProps) => {
    const [quantity, setQuantity] = useState<number>(1);
    const handleDecreaseQuatity = () => {
        setQuantity((prev) => {
            if (prev === 1) {
                return 1;
            }
            return prev -1;
        });
    };
    const handlIncreaseQuatity = () => {
        setQuantity((prev) => prev +1);
    }
    return (  
        <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl py-5 px-5 flex-auto flex flex-col">

                <div className="flex-auto">
                    <div className="flex items-center gap-2">
                        <Image 
                        src={product.restaurant.avatarImageUrl} 
                        alt={product.restaurant.name} 
                        width={18} 
                        height={18}
                        className="rounded-full"
                        />
                        <p className="text-xs text-nuted-foreground">
                            {product.restaurant.name}
                        </p>
                    </div>

                    <h2 className="text-xl font-semibold mt-1">{product.name}</h2>
                    
                    <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">
                    {formatCurrency(product.price)}
                    </h3> 

                    <div className="flex items-center gap-3 text-center">
                        <Button variant="outline" className="h-8 w-8 rounded-xl"
                        onClick={handleDecreaseQuatity}
                        >
                            <ChevronLeftIcon />
                        </Button>
                        <p className="w-3">{quantity}</p>
                        <Button variant="destructive" className="h-8 w-8 rounded-xl"
                        onClick={handlIncreaseQuatity}
                        >
                            <ChevronRightIcon />
                        </Button>

                    </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <h4 className="font-semibold">Sobre</h4>
                        <p className="text-sm text-muted-foreground">{product.description}</p>
                    </div>
                    <div className="mt-6 space-y-4">
                        <div className="5 flex items-center gap-1">
                            <ChefHatIcon size={18}/>
                        <h4 className="font-semibold">Ingredientes</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{product.description}</p> 
                        <p className="text-sm text-muted-foreground">{product.description}</p> 
                        <p className="text-sm text-muted-foreground">{product.description}</p> 
                        <p className="text-sm text-muted-foreground">{product.description}</p> 
                        <p className="text-sm text-muted-foreground">{product.description}</p>  
                    </div>
                    
                </div>

                <Button className="mt-6 w-full rounded-full">Adicionar à sacola</Button>
        </div>
    );
}
 
export default ProductDetails;