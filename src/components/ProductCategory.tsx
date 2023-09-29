"use client"
import React, { useState } from "react";

function ProductCategoty() {
    // Create an array of product objects
    const initialProducts = [
        {
            title: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            imageUrl: "https://i.pinimg.com/564x/09/a1/6f/09a16f5796c201ef3894c3860cab0048.jpg"
        },
        {
            title: "Elegance Table",
            description: "Elegant dining table",
            price: "Rp 3.200.000",
            imageUrl: "https://i.pinimg.com/736x/94/9a/59/949a59d551f45511a940bbe5cca80d3a.jpg"
           
        },
        {
            title: "Cozy Armchair",
            description: "Comfortable armchair",
            price: "Rp 1.800.000",
            imageUrl: "https://i.pinimg.com/564x/b4/0c/9d/b40c9d98376a6be0dbd0259aafcc7e60.jpg"
        },
        {
            title: "Rustic Coffee Table",
            description: "Rustic wooden coffee table",
            price: "Rp 1.500.000",
            imageUrl: "https://i.pinimg.com/564x/96/4c/6e/964c6e56277355ae0e3eaf6a57d29706.jpg"
        },
        {
            title: "Vintage Bookshelf",
            description: "Vintage-style bookshelf",
            price: "Rp 2.800.000",
            imageUrl: "https://i.pinimg.com/564x/8f/b7/d2/8fb7d25f2af096f06f169568e5c60e55.jpg"
        },
        {
            title: "Modern Desk",
            description: "Sleek modern desk",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/736x/b3/70/ef/b370efab4860264b20e12ba717b4a040.jpg"
        },
        {
            title: "Artistic Vase",
            description: "Handcrafted artistic vase",
            price: "Rp 500.000",
            imageUrl: "https://i.pinimg.com/564x/9f/23/41/9f2341b06f8a0791d6c7a3dff895407f.jpg"
        },
        {
            title: "Lounge Chair",
            description: "Comfortable lounge chair",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/736x/ef/59/16/ef59164e007e72043c786c8c0c05649f.jpg"
        },
        {
            title: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            imageUrl: "https://i.pinimg.com/564x/09/a1/6f/09a16f5796c201ef3894c3860cab0048.jpg"
        },
        {
            title: "Elegance Table",
            description: "Elegant dining table",
            price: "Rp 3.200.000",
            imageUrl: "https://i.pinimg.com/736x/94/9a/59/949a59d551f45511a940bbe5cca80d3a.jpg"
           
        },
        {
            title: "Cozy Armchair",
            description: "Comfortable armchair",
            price: "Rp 1.800.000",
            imageUrl: "https://i.pinimg.com/564x/b4/0c/9d/b40c9d98376a6be0dbd0259aafcc7e60.jpg"
        },
        {
            title: "Rustic Coffee Table",
            description: "Rustic wooden coffee table",
            price: "Rp 1.500.000",
            imageUrl: "https://i.pinimg.com/564x/96/4c/6e/964c6e56277355ae0e3eaf6a57d29706.jpg"
        },
        {
            title: "Vintage Bookshelf",
            description: "Vintage-style bookshelf",
            price: "Rp 2.800.000",
            imageUrl: "https://i.pinimg.com/564x/8f/b7/d2/8fb7d25f2af096f06f169568e5c60e55.jpg"
        },
        {
            title: "Modern Desk",
            description: "Sleek modern desk",
            price: "Rp 2.000.000",
            imageUrl: "https://i.pinimg.com/736x/b3/70/ef/b370efab4860264b20e12ba717b4a040.jpg"
        },
        {
            title: "Artistic Vase",
            description: "Handcrafted artistic vase",
            price: "Rp 500.000",
            imageUrl: "https://i.pinimg.com/564x/9f/23/41/9f2341b06f8a0791d6c7a3dff895407f.jpg"
        },
        {
            title: "Lounge Chair",
            description: "Comfortable lounge chair",
            price: "Rp 1.900.000",
            imageUrl: "https://i.pinimg.com/736x/ef/59/16/ef59164e007e72043c786c8c0c05649f.jpg"
        },
    ];

    // Use state to store the product data
    const [products, setProducts] = useState(initialProducts);

    // Split the products into groups of 4 for each row
    const productsRows = [];
    for (let i = 0; i < products.length; i += 4) {
        productsRows.push(products.slice(i, i + 4));
    }



    return (
        <div className="w-screen md:p-4 md:h-[106em] lg:h-screen overflow-hidden bg-white text-black">
            <h1 className="text-3xl font-semibold">Our Products</h1>
            {productsRows.map((row, rowIndex) => (
                <div key={rowIndex} className="md:flex md:justify-between gap-12 lg:mx-[19rem] md:mx-[8rem]  mt-[2rem] text-start">
                    {row.map((product, index) => (
                        <div key={index} className="h-[23rem] w-96 p-4 bg-gray-100 shadow-sm rounded-sm">
                            <div className="h-56 md:w-[18.3rem]  bg-blue-500 relative">
                                <img className="object-cover w-full h-full" src={product.imageUrl} alt="Image not found"/>
                            </div>
                            <h1 className="mx-4 mt-5 text-2xl font-semibold">{product.title}</h1>
                            <h3 className="mx-4 mt-2 text-gray-500">{product.description}</h3>
                            <h2 className="mx-4 mt-2 text-xl">{product.price}</h2>
                        </div>
                    ))}
                </div>
            ))}
            <div className="flex justify-center items-center">
                 <button className="p-4 mt-6  text-2xl font-semibold border border-2 rounded-md hover:bg-black hover:text-white">Show More</button>
            </div>
        </div>
    );
}


export default ProductCategoty;
