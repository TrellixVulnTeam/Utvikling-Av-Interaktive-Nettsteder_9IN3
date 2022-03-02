import { useState } from 'react'

import imgBridge from './bridge.webp'
import imgLake from './lake.webp'
import imgMountain from './mountain.webp'

// const selectedImage = ({ src }) => {
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });
//   return (
//     <animated.img
//       src={src}
//       alt=""
//       style={{ width: "250px", height: "250px", ...props }}
//     />
//   );
// };

const Image = ({ src }) => {
  return <img src={src} />
}

export default function ShowHide() {
  const pictures = ['Bridge', 'Lake', 'Mountain']
  const [picture, setPicture] = useState('')

  return (
    <>
      <h1>Select a picture</h1>

      <div className="row w-1000">
        {/* Buttons to get out the picture text */}
        <div className="col mb-3 col-12 text-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            {pictures.map((pic) => (
              <button
                type="button"
                key={pic}
                className={'btn btn-light border-dark'}
                onClick={() => setPicture(pic)}
              ></button>
            ))}
          </div>
        </div>

        {/* Showing the picture when clicking button */}
        <p>{picture}</p>

        <p>{picture === 'Bridge' && <Image src={imgBridge} />}</p>
      </div>
    </>
  )
}
