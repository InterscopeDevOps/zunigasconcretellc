import React, { useContext, useEffect, useState } from 'react';
import { GlobalDataContext } from '../../context/context';
import { NavLink } from "react-router-dom"

import { GoChevronDown, GoChevronUp } from 'react-icons/go'




const MenuList = ({ classes, rangoItemsInicio, rangoItemsFin }) => {
  const { rpdata } = useContext(GlobalDataContext);

  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [openSubMenuGallery, setOpenSubMenuGallery] = useState(false)

  const handleClickSubMenu = () => {
    return setOpenSubMenu(!openSubMenu)
  }
  const handleClickSubMenuGallery = () => {
    return setOpenSubMenuGallery(!openSubMenuGallery)
  }

  //sub menu
  const subitems = rpdata?.dbServices?.map((itemsMenu, index) => {
    return (
      {
        subname: itemsMenu.name,
        sublink: `/${itemsMenu.name.replaceAll(/[\^*@!"#$%&/()=?¡!¿'\\ ]/g, "-").toLowerCase()}`,
      }
    )
  })

  //sub menu
  const subitemsGallery = rpdata?.landings?.map((itemsGallery, index) => {
    return (
      {
        subname: itemsGallery.name,
        sublink: `/gallery/${itemsGallery.name.replaceAll(/[\^*@!"#$%&/()=?¡!¿'\\ ]/g, "-").toLowerCase()}`,
      }
    )
  })

  const linksMenu = [
    {
      label: 'Home',
      route: '/',
      child: false,
    },
    {
      label: 'About',
      route: '/about',
      child: false,
    },
    {
      label: 'Services',
      route: '/services',
      child: rpdata?.autoGntLandingFromService,
      submenu: [...(subitems ? subitems : [])],
      click: handleClickSubMenu,
      opens: openSubMenu,
    },
    {
      label: 'Gallery',
      route: '/gallery',
      child: rpdata?.customLinks,
      submenu: [...(subitemsGallery ? subitemsGallery : [])],
      click: handleClickSubMenuGallery,
      opens: openSubMenuGallery,
    },
    {
      label: 'Contact',
      route: '/contact',
      child: false,
    }
  ]

  // agregar la pestaña de Video al array de lianksMenu
  const yt = {
    label: `Our Videos`,
    route: `/our-videos`,
    child: false,
  }

  if (rpdata?.ytGallery?.linkCanalYT) {
    const num = linksMenu.length - 1
    linksMenu.splice(num, 0, yt)
  }
  //  fin de agregar pestaña de Video

  // agregar la pestaña de reviews al array de linksMenu

  const el = {
    label: `Reviews`,
    route: `/reviews`,
    child: false,
  }

  if (rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false) {
    const num = linksMenu.length - 1
    linksMenu.splice(num, 0, el)
  }
  //  fin de agregar pestaña de reviews

  const [widthWindows, setwidthWindows] = useState(window.innerWidth)


  const sizeWindows = () => {
    setwidthWindows(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', sizeWindows)
    return () => {
      window.removeEventListener('resize', sizeWindows)
    }
  })


  return (
    <nav>
      <ul className={`${classes} flex justify-between gap-8`}>
        {
          linksMenu.slice(rangoItemsInicio ? rangoItemsInicio : 0 , rangoItemsFin ? rangoItemsFin : 8).map((items, index) => {
            return (
              items.child ?
                <li key={index} className='font-medium text-[18px]'>
                  <div className='flex justify-between items-center gap-1' onClick={items.click}>
                    <span>{items.label}</span>
                    {
                      widthWindows > 560 ?
                        <GoChevronDown />
                        :
                        items.opens ?
                          <GoChevronUp />
                          : <GoChevronDown />
                    }
                  </div>
                  <ul
                    className={
                      widthWindows > 560 ?
                        items.child && items.label === 'Gallery' ?
                          `menuContent__subMenu h-[220px] z-[999] rounded-md`
                          : `menuContent__subMenu h-[300px] z-[999] rounded-xl`
                        :
                        items.opens ? 'block mt-3 menuContent__subMenuMobil' : 'hidden'
                    }
                  >
                    {
                      items.submenu.map((subItems, index) => {
                        return (
                          <NavLink key={index} to={subItems.sublink}>
                            <li className='pb-3 '>
                              {subItems.subname}
                            </li>
                          </NavLink>
                        )
                      })
                    }
                  </ul>
                </li>
                :
                <NavLink to={items.route} >
                  <li className='font-medium text-[18px]'>
                    {items.label}
                  </li>
                </NavLink>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default MenuList