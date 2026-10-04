import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  const products = [
    {
      id: "1",
      title: "Ancient",
      price: "$299",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "2",
      title: "Comfort",
      price: "$359",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "3",
      title: "Sassy",
      price: "$449",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "4",
      title: "Ancient",
      price: "$699",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "5",
      title: "Ancient",
      price: "$399",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "6",
      title: "Ancient",
      price: "$199",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "7",
      title: "Ancient",
      price: "$269",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    },
    {
      id: "8",
      title: "Ancient",
      price: "$250",
      desc: "Green 2-Seater Velvet Sofa",
      images: ["/11.png", "/22.png", "/33.png", "/44.png"]
    }
  ]

  const currentProduct = products.find((p) => p.id === id) || products[0]
  const [selectedImg, setSelectedImg] = useState(currentProduct.images[0])
  const [activeTab, setActiveTab] = useState('description')

  useEffect(() => {
    setSelectedImg(currentProduct.images[0])
  }, [id])

  return (
    <div className="detail-container">
      <h1 className="detail-title">{currentProduct.desc}</h1>

      <div className="detail-grid">
        <div className="detail-left">
          <div className="detail-main-img-box">
            <img src={selectedImg} alt={currentProduct.title} className="detail-main-img" />
          </div>
          
          <div className="detail-thumbs">
            {currentProduct.images.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt="thumb" 
                onClick={() => setSelectedImg(img)}
                className={`detail-thumb-item ${selectedImg === img ? 'active-thumb' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="detail-right">
          <div className="detail-header-flex">
            <p className="detail-desc-short">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="detail-price">{currentProduct.price}</span>
          </div>

          <div className="detail-tabs">
            <button 
              className={`detail-tab-btn ${activeTab === 'description' ? 'active' : ''}`}
            >
              DESCRIPTION
            </button>
            <button 
              className={`detail-tab-btn ${activeTab === 'dimensions' ? 'active' : ''}`}
            >
              DIMENSIONS
            </button>
            <button 
              className={`detail-tab-btn ${activeTab === 'details' ? 'active' : ''}`}
            >
              DETAILS
            </button>
          </div>

          <div className="detail-tab-content">
            {activeTab === 'description' && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum curabitur vitae. Pellentesque sit amet porttitor eget dolor morbi non arcu. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
              </p>
            )}
            {activeTab === 'dimensions' && <p>Width: 200 cm | Depth: 90 cm | Height: 85 cm</p>}
            {activeTab === 'details' && <p>Material: Velvet | Color: Green</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail