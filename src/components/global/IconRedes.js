import React, { useContext } from 'react'
import { GlobalDataContext } from '../../context/context'

const IconsRedes = ({ classes }) => {

  const { rpdata } = useContext(GlobalDataContext)

  return (
    <ul className={classes}>
      {rpdata?.dbSocialMedia?.redes.map((item, index) => {
        return (
          <li key={index} className="ease-in-out duration-300 hover:scale-105">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={`fab fa-${item.icon}`}
                aria-hidden="true"
              />
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default IconsRedes