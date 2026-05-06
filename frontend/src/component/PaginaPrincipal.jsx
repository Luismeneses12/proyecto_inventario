import React from 'react'
import { Link } from 'react-router-dom'

export default function PaginaPrincipal() {


    return (
        <>
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-16 bg-stone-50 dark:bg-stone-950 text-green-800 dark:text-green-400 border-b border-stone-200 dark:border-stone-800 shadow-sm shadow-green-900/5">
        <div className="flex items-center gap-4">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity scale-95 active:transition-transform">menu</span>
        <span className="font-serif font-black text-green-900 dark:text-green-100 italic font-bold text-lg tracking-tight">Oro Verde</span>
        </div>
        <div className="flex items-center gap-4">
        <span className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity scale-95 active:transition-transform">shopping_cart</span>
        </div>
        </header>
<main className="pt-24 pb-32">

<section className="max-w-container-max mx-auto px-4 md:px-gutter mb-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">

<div className="lg:col-span-5 space-y-md">
<div className="inline-block py-1 px-4 bg-secondary-container text-on-secondary-container rounded-full text-label-md font-label-md">
                        simplemente agucate lo mejor para tu mesa
                    </div>
<h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
                        ¿lo que nos motiva ?
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
    llegar cada dia a los hogares  a lo que en realidad vale la pena, como estar con tu seres queridos
                            </p>
<div className="pt-sm">
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 gap-base h-[500px]">
<div className="rounded-xl overflow-hidden tinted-shadow col-span-1 h-full">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of a weathered, smiling elderly farmer with deep-set eyes, standing amidst a lush green avocado orchard in the golden hour light. The atmosphere is warm and artisanal, with soft bokeh highlighting the vibrant green leaves of the trees. The farmer wears a traditional woven hat, emphasizing a connection to the land and a heritage of organic cultivation under a bright, high-key sky." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LKCabmqN4xiJ2XIsW0hDrp4wwMWV2pQpACcIXkSA59S9Nn8jRJJPJXauP8SsyL6ZvhFPCqUUO-sGrPDdtOiMunJO09bn1XS7_EoGCSiIQ9ik0HSWH_omSyEJJ1qYBGXYoTgsoUOmAPlHPTD-KIG3VIuXe9fCkCzT9vX3VIGhulzU88lLx5YTrsT-D-vGGh-znIInG26OjCfHmBFg8FLSmuzDw6Y6O1U6cSvzY4kPlDRauywIeGnjbSpF56S6ELQ3MOEMyuWtenbS"/>
</div>
<div className="grid grid-rows-2 gap-base h-full">
<div className="rounded-xl overflow-hidden tinted-shadow">
<img className="w-full h-full object-cover" data-alt="A breathtaking panoramic landscape of rolling green hills in Mexico during sunrise, where thousands of avocado trees are planted in perfect organic rows. The soft morning mist clings to the valleys, and the sky is a palette of warm creams and soft yellows. The scene conveys serenity and trust, reflecting a premium, sustainable agricultural environment that bridges the gap between nature and the consumer's table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Zsv8AYQ932VvUs7AgCDEOadM32J0M2ql_GRzROzB0S8d8f75O2oyVkwvARPGXR1GevYyuop_IPpOr_HoSe3zKM9MOfdSy6I0PCi1D2GD4H6mB7OW4QIs41nAeeP-D7VdHJlRMGNfmT3wUjqh44Nzd_2QB0EVyL7sfq3kCsXHK2Yk-5zFmBpR6sizMRBgtJFRr4WMH5eAq3RWbVlOWNSICPm4uMY3S44k_mlWX1tNUGAH-7HWThbv1CEAUiOdPPCaWY3OHoBaLJ9s"/>
</div>
<div className="rounded-xl overflow-hidden tinted-shadow relative">
<img className="w-full h-full object-cover" data-alt="Close-up of a pair of calloused hands gently cradling a perfectly ripe, dark-skinned Hass avocado that has just been harvested. The background is a blurred tapestry of sun-drenched leaves and earthy brown soil, emphasizing the tactile modernism of the brand. The lighting is natural and bright, showcasing the rich texture of the avocado skin and the organic nature of the produce." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWOkbFZMnZDZ9dmdl_2gepbOLGZYhXV5SuXv-wrgaC6F7RUXDSskIggoPOrNv0W0ktM_cVFZARxpMOhXt-Gi2tQN2qBPaTMW-gsVSsXxsO39INhgLoRjjKVPZZEPYteP-XFMgODh8CP6HZZf9N5HeZKflzkdqNFBszi6iMc2LmBh9RacGbD5OzqCDI15OkU3G227vaoAwXh4IPeMNBwGOTsn0V3bJADbaD4wfBXl4CQAr2DDgJ6Jx2w7Ejz-U1CkbAFXOvTUDoinat"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container py-xl">
<div className="max-w-container-max mx-auto px-4 md:px-gutter">
<div className="text-center mb-lg">
<h2 className="font-headline-lg text-headline-lg text-primary mb-sm">lo que nos gusta</h2>
<p className="font-body-md text-body-md text-outline max-w-2xl mx-auto">hacer cosita ricas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="bg-surface p-lg rounded-xl tinted-shadow border border-surface-container-highest">
<div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined" data-weight="fill">volunteer_activism</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">que dicen las naciones unidas</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Coma aguacate para que viva más, no lo digo yo por venderles, si si crea compre agucates.</p>
</div>
<div className="bg-surface p-lg rounded-xl tinted-shadow border border-surface-container-highest">
<div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined" data-weight="fill">eco</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">dato curioso del aguacte </h3>
<p className="font-body-md text-body-md text-on-surface-variant"> origen misoamericano (sur de Mexico, Guatemala)
     su nombre se deriba de
     nahuatl ahuacatl que significa ...
     pero bueno y que su espancion fue en el año 1600 por los españoles
    , pero como llego a Colombia  como proyecto de expancion para 
    el agucate hace mas de 20 a 25 años  a rededor del 2000 se inicio la campaña de 
    siembra del agucate  y empezo a dar  frutos en el 2007-2009
    ahora Colombia es el segundo productor  de agucate del mundo des pues de Mexico 
    y si no les gusta este  dato curioso ingrese a este link
     </p>
     <Link to={"/registro"}>sugerencias</Link>
</div>
<div className="bg-surface p-lg rounded-xl tinted-shadow border border-surface-container-highest">
<div className="w-12 h-12 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full flex items-center justify-center mb-md">
<span className="material-symbols-outlined" data-weight="fill">handshake</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-sm">Nexo Directo</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Eliminamos las barreras innecesarias para que recibas frescura pura, del árbol a tu cocina.</p>
</div>
</div>
</div>
</section>
</main>


<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-t border-stone-100 dark:border-stone-800 shadow-[0_-4px_12px_rgba(46,90,39,0.08)]"  >
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
<span className="material-symbols-outlined">home</span>
<span className="font-serif text-[11px] font-medium">Inicio</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
<span className="material-symbols-outlined">eco</span>
<span className="font-serif text-[11px] font-medium">Tienda</span>
</div>
<div className="flex flex-col items-center justify-center text-stone-400 dark:text-stone-500 px-4 py-1 transition-all duration-300 ease-out hover:text-green-700">
<span className="material-symbols-outlined">chat</span>
<span className="font-serif text-[11px] font-medium">Contacto</span>
</div>
</nav>
 </>
  )
}
