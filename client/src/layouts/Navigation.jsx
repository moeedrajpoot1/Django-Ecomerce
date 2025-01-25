import React from 'react'
import {MdOutlineFavorite, MdOutlineFavoriteBorder} from'react-icons/md'
import {  favoritesToggled} from '../redux/actions/products'
import {useDispatch,useSelector} from 'react-redux'
const Navigation = () => {
    const dispatch = useDispatch()
    const {favoritesToggle}=useSelector((state)=>state.product)
  return (
    <div className='bg-slate-700 p-1 text-white'>
      {favoritesToggle ? (
        <button onClick={()=>dispatch(favoritesToggled(false))}  >
            <MdOutlineFavorite className='heart2'/>
        </button>
      ):(
        <button onClick={()=>dispatch(favoritesToggled(true))}  >
          
            <MdOutlineFavoriteBorder className='heart2'/>

        </button>
      )

      }
    </div>
  )
}

export default Navigation
