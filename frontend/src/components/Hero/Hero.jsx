'use client'
import { useState } from 'react'
import { Dialog, DialogPanel, MenuButton, Menu, MenuItem, MenuItems} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LogoB from '../../assets/picsB.png'
import LogoN from '../../assets/picsN.png'

import BgHero from '../../assets/bg-hero.jpg'
import "./Hero.css"

const navigation  = [
  { name: 'Home', href: './' },
  { name: 'Profile', href: '/Profile' },
  { name: 'Album', href: '/Album' },
  { name: 'Liked', href: '/Liked' },

 
 
]

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${BgHero})`, backgroundSize: 'cover', height: '100vh' }}>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                alt="Logo"
                src={LogoB}
                className="h-8 w-auto"

              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-white">
              Se connecter <span aria-hidden="true">&rarr;</span>
            </a>
          {/*<Menu as="div" className="relative ml-3">
                              <div>
                                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                  <span className="absolute -inset-1.5" />
                                  <span className="sr-only">Open user menu</span>
                                  <img
                                    alt="profile"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-8 rounded-full"
                                  />
                                </MenuButton>
                              </div>
                              <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                              >
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                  >
                                    Your Profile
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                  >
                                    Settings
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                  >
                                    Sign out
                                  </a>
                                </MenuItem>
                              </MenuItems>
                            </Menu>*/}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only ">Pixios</span>
                <img
                  alt=""
                  src={LogoN}
                  className="h-25 w-auto "

                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root" >
              <div className="-my-6 divide-y divide-gray-500/10" >
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" 
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6" >
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Se connecter
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-spartan font-bold tracking-tight text-balance text-gray-300 sm:text-7xl" >
              Pixios.
            </h1>

          

{/*Code pour la barre de recherche */}

            <div style={{ alignItems: "center" }}>
              <form class="d-flex" style={{paddingLeft:"200px"}} >
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit" style={{cursor:"pointer"}}>Search</button>
              </form>
            </div>

          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>


  )
}

export default Hero;