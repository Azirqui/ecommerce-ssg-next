import { getPostData } from '@/components/MarkdownPostsData';
import Image from 'next/image';
export default function MarkDownProducts() {
    const { products } = getPostData(); // Destructure products from the Markdown data

    return (
     <div className="flex flex-wrap justify-center items-stretch gap-10 my-5">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-80 h-100 flex flex-col justify-between"> 
                <Image src={product.image} alt={product.title} width={240} height={160} className="object-cover rounded-lg" />
                    <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                    <p className="text-gray-600 mb-2">Category: {product.category}</p>
                    <p className="text-gray-800 mb-4">{product.description}</p>
                    <p className="text-lg font-bold text-indigo-600">${product.price}</p>
                </div>
            ))}
        </div>
    );
}
