import React from 'react'
import liveSale from "../assets/live_sale.webp";
import wowDeals from "../assets/wow_deals.webp";
import Sliderr from './Sliderr';
import HeroSlider from './HeroSlider';
function Header() {
    const banner = [liveSale, wowDeals]
    return (
        <div>
            <HeroSlider slides={banner} />
        </div>
    )
}

export default Header
