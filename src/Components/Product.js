import React, { useState } from 'react'

function Product() {
    const [cat, setcat] = useState('kids')
    return (

        <div className='box'>

            <div className='box1'>
                <img src='https://img.freepik.com/free-photo/closeup-shot-cute-ginger-kitten-staring-camera-isolated-white-wall_181624-45452.jpg?w=740&t=st=1673602262~exp=1673602862~hmac=01bf90db2db7fc6f7fdd090097c740e631afb17cdc21af4a821a0f5f01cb730a' />
            </div>
            {cat == 'kids' ? <div className='box2'>
                <div><img src='https://www.thesprucepets.com/thmb/XeLjumSMl3dB9l_5Mk3R6o4Pk_c=/fit-in/1500x1149/filters:no_upscale():max_bytes(150000):strip_icc()/81e3yq6K6NS._AC_SL1500_-28571d0ca4bc454a89c7932b957867ed.jpg' />
                    <h3>NATURAL</h3></div>
                <div><img src='https://target.scene7.com/is/image/Target/GUEST_d02a17b7-af8a-4d3f-a033-adefbbc14e00?wid=488&hei=488&fmt=pjpeg' />
                    <h3>CLASSIC PATE</h3></div>
                <div><img src='https://products.blains.com/600/62/626499.jpg' />
                    <h3>CHIKEN</h3></div>
            </div> : <div className='box2'>
                <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgWaZnxPLSFZOTGkW_SaCJtr1918WSQzbGA&usqp=CAU' />
                    <h3>SEA FOOD</h3></div>
                <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl9kYf-hkOb5JZOojLHtkblNELPF74d06qA&usqp=CAU' />
                    <h3>POULRTY </h3></div>
                <div><img src='https://www.pngitem.com/pimgs/m/483-4830473_purely-fancy-feast-adult-cat-food-hd-png.png' />
                    <h3>NATURAL</h3></div>
            </div>}
            <button onClick={() => setcat('Adults')}>{cat == 'kids' ? 'kids' : 'Adults'}</button>
        </div>


    )
}

export default Product;