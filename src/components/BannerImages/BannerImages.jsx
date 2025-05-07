import React from 'react'


//Variables
import Grid1 from '/images/grid/Grid1.png'
import Grid2 from '/images/grid/Grid2.png'
import Grid3 from '/images/grid/Grid3.png'
import Grid4 from '/images/grid/Grid4.png'
import Grid5 from '/images/grid/Grid5.png'
import Grid6 from '/images/grid/Grid6.png'

const ArrayImages = [Grid2, Grid6, Grid3, Grid4, Grid5, Grid2]


export default function BannerImages() {
    return (
        <div id='ContenedorGeneral_BannerImages'>
            {ArrayImages.map((e, index) => (
                <img key={index} className='ImageGrid' src={e} alt={`Image Grid ${index + 1}`} />
            ))}
        </div>
    )
}
