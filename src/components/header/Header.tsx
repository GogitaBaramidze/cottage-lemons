'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="text-2xl font-bold text-green-800">Cozy Cottage</div>

                {/* Desktop Menu */}
                <nav className="hidden space-x-6 md:flex">
                    <a href="#" className="text-gray-600 hover:text-green-800">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-800">
                        About
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-800">
                        Amenities
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-800">
                        Gallery
                    </a>
                    <a href="#" className="text-gray-600 hover:text-green-800">
                        Contact
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="bg-white py-4 md:hidden">
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-green-100">
                        Home
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-green-100">
                        About
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-green-100">
                        Amenities
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-green-100">
                        Gallery
                    </a>
                    <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-green-100">
                        Contact
                    </a>
                </nav>
            )}
        </header>
    )
}

export default Header
