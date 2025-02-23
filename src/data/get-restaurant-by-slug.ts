//import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
//import { db } from "@/lib/prisma";

//interface RestaurantPageProps {
//   params: Promise<{ slug: string }>;
//  }

//const RestaurantPage = async ({params}: RestaurantPageProps) => {
//   const { slug } = await params;
//    const restaurant = await getRestaurantBySlug(slug, db);
//     return <h1>{restaurant?.name}</h1>;
//}

//export default RestaurantPage;
