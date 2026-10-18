
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const ProductCard = ({ product }) => {
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <Link
        href={`/layout/products/${product.id}`}
        className="relative flex h-52 items-center justify-center p-5"
      >
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          unoptimized
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Information */}
      <CardContent className="flex flex-1 flex-col p-5">
        {/* Category */}
        <Badge variant="secondary" className="mb-3 w-fit capitalize">
          {product.category}
        </Badge>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 min-h-12 text-base font-semibold leading-6">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        {product.rating && (
          <div className="mb-4 flex items-center gap-2">
            <Badge variant="outline">
              {product.rating.rate} ★
            </Badge>

            <span className="text-xs text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>
        )}
      </CardContent>

      {/* Price and Action */}
      <CardFooter className="mt-auto justify-between gap-3 border-t p-5">
        <span className="text-xl font-bold">
          ${Number(product.price).toFixed(2)}
        </span>

        <Button type="button" size="sm">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
