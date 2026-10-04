import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const [data, setdata] = useState([
        {
            "id": "1",
            "img": "/public/1.png",
            "title": "Ancient",
            "price": "$299",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "2",
            "img": "/public/2.png",
            "title": "Comfort",
            "price": "$359",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "3",
            "img": "/public/3.png",
            "title": "Sassy",
            "price": "$449",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "4",
            "img": "/4.png",
            "title": "Ancient",
            "price": "$699",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "5",
            "img": "/5.png",
            "title": "Ancient",
            "price": "$399",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "6",
            "img": "/6.png",
            "title": "Ancient",
            "price": "$199",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "7",
            "img": "/7.png",
            "title": "Ancient",
            "price": "$269",
            "desc": "green 2-Seater velvet sofa",
        },
        {
            "id": "8",
            "img": "/8.png",
            "title": "Ancient",
            "price": "$250",
            "desc": "green 2-Seater velvet sofa",
        },
    ])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({ img: '', title: '', price: '', desc: '' })
    const [imgsInput, setImgsInput] = useState('')
    const [imgsList, setImgsList] = useState([])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleAddImg = () => {
        if (imgsInput.trim() !== '') {
            setImgsList([...imgsList, imgsInput])
            setImgsInput('')
        }
    }

    const handleAddProduct = (e) => {
        e.preventDefault()
        if (!formData.title) return

        const newProduct = {
            id: Date.now().toString(),
            img: formData.img || '/1.png',
            title: formData.title,
            price: formData.price.startsWith('$') ? formData.price : `$${formData.price}`,
            desc: formData.desc
        }

        setdata([newProduct, ...data])
        setFormData({ img: '', title: '', price: '', desc: '' })
        setImgsList([])
        setIsModalOpen(false)
    }

    return (
        <>
            <div className="hero">
                <div className="container text-center">
                    <h1 className='text-4xl font-medium text-center  '> Your Best Value Products</h1>
                    <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <button onClick={() => setIsModalOpen(true)} className=' bg-[#842C68] text-white p-1'>Add Product</button>

                    <img src="/public/Group 3.png" alt="" />
                </div>
            </div>
            <main>
                <section>
                    <div className="cards">
                        <div className="container">
                            {
                                data.map((item) => {
                                    return (
                                        <Link to={`/product/${item.id}`} key={item.id} className="box w-[290px] block">
                                            <img src={item.img} alt="" />
                                            <div className='flex justify-between'>
                                                <h1 className='text-2xl font-medium'>{item.title}</h1> <span className='text-2xl text-[#842C68] font-medium'>{item.price}$ </span>
                                            </div>
                                            <p>{item.desc}</p>
                                            <button>Choose options</button>
                                            <hr />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-[#f2f2f2] p-8 rounded-2xl w-[420px] relative shadow-lg text-black">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-center mb-6">create</h2>

                        <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <label className="text-lg font-medium w-20">img:</label>
                                <input 
                                    type="text" 
                                    name="img" 
                                    placeholder="img" 
                                    value={formData.img} 
                                    onChange={handleChange}
                                    className="bg-white px-3 py-1.5 rounded w-[240px] outline-none"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-lg font-medium w-20">title:</label>
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="title" 
                                    value={formData.title} 
                                    onChange={handleChange}
                                    className="bg-white px-3 py-1.5 rounded w-[240px] outline-none"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-lg font-medium w-20">price:</label>
                                <input 
                                    type="text" 
                                    name="price" 
                                    placeholder="price" 
                                    value={formData.price} 
                                    onChange={handleChange}
                                    className="bg-white px-3 py-1.5 rounded w-[240px] outline-none"
                                />
                            </div>

                            <div className="flex items-start justify-between">
                                <label className="text-lg font-medium w-20 mt-1">desc:</label>
                                <textarea 
                                    name="desc" 
                                    placeholder="desc" 
                                    value={formData.desc} 
                                    onChange={handleChange}
                                    rows="2"
                                    className="bg-white px-3 py-1.5 rounded w-[240px] outline-none resize-y"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="text-lg font-medium w-20">imgs:</label>
                                <div className="flex gap-2 w-[240px]">
                                    <input 
                                        type="text" 
                                        placeholder="imgs" 
                                        value={imgsInput} 
                                        onChange={(e) => setImgsInput(e.target.value)}
                                        className="bg-white px-3 py-1.5 rounded w-full outline-none"
                                    />
                                    <button 
                                        type="button" 
                                        onClick={handleAddImg}
                                        className="border border-black bg-white px-3 py-1 rounded"
                                    >
                                        ok
                                    </button>
                                </div>
                            </div>

                            {imgsList.length > 0 && (
                                <div className="ml-20">
                                    <p className="text-xs font-semibold text-gray-600">imgs:</p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {imgsList.map((item, index) => (
                                            <span key={index} className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-center mt-2">
                                <button 
                                    type="submit" 
                                    className="border border-black bg-white px-10 py-1 rounded text-lg font-medium hover:bg-gray-100"
                                >
                                    add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home