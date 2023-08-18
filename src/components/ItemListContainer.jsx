import React from 'react';
import ItemList from './ItemList';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const {category} = useParams()

    const products = [

        { id: 1, category: "makeup", name: "Uma Lipstick", picture: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2978&q=80", description: "Matte lipstick that offers a long-lasting, smudge-proof finish. Experience intense colors and a smooth texture that glides effortlessly for easy application", stock: 10, price: 6000 },
        { id: 2, category: "makeup", name: "Enchanted Palette", picture: "https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", description: "Transform your eyes with a captivating range of rich and velvety eyeshadows. This versatile palette offers a harmonious blend of mesmerizing shades, from soft neutrals to daring jewel tones", stock: 5, price: 7400 },
        { id: 3, category: "makeup", name: "Kitty Eye Definer", picture: "https://images.unsplash.com/photo-1631237535134-e009a5939d9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80", description: "Unleash your inner feline fierceness with our 'Kitty Eye Definer'. Achieve the purrfect cat-eye look that's sure to turn heads and leave a lasting impression. This ultra-precise eyeliner delivers sleek and sharp lines, allowing you to effortlessly create the iconic winged effect that's as bold as it is alluring", stock: 2, price: 5500 },
        { id: 4, category: "skincare", name: "Radiant Serum", picture: "https://images.unsplash.com/photo-1630398777700-afb6d24a502d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Experience the magic of our Radiant Serum, a potent blend of antioxidants and nutrients that rejuvenate and nourish your skin. Achieve a youthful glow and a smoother complexion with evem", stock: 8, price: 8500 },
        { id: 5, category: "skincare", name: "Hydrating Moisturizer", picture: "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Quench your skin's thirst with our Hydrating Moisturizer. Infused with hyaluronic acid and natural extracts, this moisturizer locks in hydration, leaving your skin supple and radiant all day long.", stock: 12, price: 7200 },
        { id: 6, category: "accesories", name: "Deluxe Makeup Brush Set", picture: "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", description: "Elevate your makeup routine with our Deluxe Makeup Brush Set. This comprehensive collection includes an array of high-quality brushes designed to achieve flawless application. From blending to contouring, each brush is crafted for precision and ease. Create stunning looks with confidence and enjoy professional results every time.", stock: 20, price: 3500 }
    ];




    const getProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000)

        } else {
            reject(new Error("No data"))
        }
    })

    getProducts
        .then((res) => {
            // console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })

    const filteredProducts = products.filter((product) => product.category === category)

    return (
        <Container className="d-flex">
            <ItemList products={filteredProducts}
            />
        </Container>
    )
}

export default ItemListContainer