import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoB from '../../assets/picsB.png';
import LogoN from '../../assets/picsN.png';

const navigation = [
  { name: 'Home', href: './' },
  { name: 'Profile', href: '/Profile' },
  { name: 'Album', href: '/Album' },
  { name: 'Liked', href: '/Liked' },
  { name: 'AboutPixios', href: '/AboutPixiosPage' }
];

function Hero({ handleSearch, changement }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fonction pour scroller vers le bas de la page (un peu plus bas que le milieu)
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSearch(e);  // Appelle la fonction de recherche
    const scrollPosition = window.innerHeight * 1;  // Position à 1.5 fois la hauteur de la fenêtre
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' }); // Scrolle jusqu'à cette position
  };

  return (
    <div className="hero-section min-h-screen bg-gradient-to-r from-[#1f1c2c] via-[#302b63] to-[#24243e] text-white">
      <header className="inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-10 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-b-xl shadow-sm">
          <div className="flex lg:flex-1">
            <a href="#" className="p-1.5">
              <img src={LogoB} alt="Logo" className="h-10 w-auto drop-shadow" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="rounded-md p-2.5 hover:bg-white/20 transition">
              <Bars3Icon className="size-6 text-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium hover:text-violet-300 transition">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/Login"
              className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-sm font-semibold text-white rounded-xl transition shadow-md"
            >
              Se connecter
            </a>
          </div>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#1f1c2c] text-white p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="p-1.5">
                <img src={LogoN} className="h-10 w-auto" />
              </a>
              <button onClick={() => setMobileMenuOpen(false)} className="rounded-md p-2.5 hover:bg-white/10 transition">
                <XMarkIcon className="size-6 text-white" />
              </button>
            </div>
            <div className="mt-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-white/10 transition">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/Login"
                  className="block rounded-lg px-3 py-2 hover:bg-white/10 transition"
                >
                  Se connecter
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            Pixios.
          </h1>
          <p className="mt-6 text-lg text-gray-300 font-light">Trouvez les images qui vous inspirent</p>

          <form onSubmit={handleButtonClick} className="mt-10 flex items-center justify-center gap-4">
            <input
              type="search"
              placeholder="Cherchez une image"
              onChange={(e) => changement(e)}
              className="w-full max-w-md px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 transition font-medium"
            >
              Rechercher
            </button>
          </form>
        </div>
      </div>

      {/* Résultats de recherche, qui apparaîtront en bas */}
      <div className="mt-20">
        {/* Code pour afficher les images recherchées ici */}
      </div>
    </div>
  );
}

export default Hero;
