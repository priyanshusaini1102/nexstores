import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../public/img/NEXSTORES-removebg.png'
import Router, { useRouter } from 'next/router'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  const router = useRouter();

  return (
    <div>
        <Disclosure as="nav" className=" bg-white text-black shadow shadow-violet-300 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image src={Logo} className='block h-8 w-auto lg:hidden' alt="Nexstores"  />
                  <Link href={'/'} className='hidden md:flex space-x-2 items-center font-sans font-semibold' >
                    <Image src={Logo} className='hidden h-8 w-auto lg:block' alt="Nexstores"  />
                    <span className="text-black" >Nexstores</span>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        item={item}
                        href={item.href}
                        currentroute={router.route}
                        className={classNames(
                          (item.href == router.route) ? 'shadow-violet-800 shadow-inner text-violet-800 bg-gray-50' : 'text-gray-500 hover:shadow-violet-700 shadow hover:text-black',
                          'rounded-md px-3 py-2 text-sm font-medium '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    (item.href == router.route) ? 'bg-violet-900 text-white' : 'text-black hover:bg-violet-700 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}


export default Navbar