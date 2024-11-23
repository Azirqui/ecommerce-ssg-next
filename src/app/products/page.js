// import fs from 'fs/promises';
// import path from 'path';

// export async function generateStaticParams() {
//     const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
//     const jsonData = await fs.readFile(filePath);
//     const data = JSON.parse(jsonData);

//     return data.products.map((product) => ({
//         id: product.id,
//     }));
// }

// async function fetchData() {
//     const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
//     const jsonData = await fs.readFile(filePath);
//     const data = JSON.parse(jsonData);
//     return data.products;
// }

// const Products = async () => {
//     const products = await fetchData();

//     return (
//         <ul>
//             {products.map((product) => (
//                 <li key={product.id}>{product.title}</li>
//             ))}
//         </ul>
//     );
// };

// export default Products;
import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
export const dynamic = 'force-static'; // Ensure static generation



async function fetchData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);
    return data.products;
}
const Products = async () => {
    const products = await fetchData();
    
    return (
        <div className='flex flex-wrap justify-center items-stretch gap-10 my-5'>
            {products.map((product) => (
                // <li key={product.id}>{product.title}</li>
                <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow w-80 h-100 flex flex-col justify-between">
                    <Image src={product.image} alt={product.title} width={300} height={300} />
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">Category: {product.category}</p>
                        <p className="text-gray-800 mb-4">{product.description}</p>
                        <p className="text-lg font-bold text-indigo-600">${product.price}</p>
                    </div>
            ))}
        </div>
    );
};

export default Products;
