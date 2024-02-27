'use client';

import Link from 'next/link';
import Logo from './Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/src/components/ui/navigation-menu';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='bg-white fixed z-50 top-0 inset-x-0 w-full h-auto border-b-2 border-rose-600 py-1 flex items-center overflow-hidden'>
      <div className='ml-5 py-1'>
        <Logo />
      </div>
      <div className='px-5 hidden lg:flex'>
        <NavigationMenu>
          <NavigationMenuList>
            {/** Terms and Conditions */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className='text-black text-base font-bold tracking-tight  hover:text-rose-400 transition'>
                Terms and Conditions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <Link
                  href='/tnc-shinjang'
                  legacyBehavior
                  passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    T&C GO by Shinjang
                  </NavigationMenuLink>
                </Link>
                <Link
                  href='/tnc-shopee'
                  legacyBehavior
                  passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    T&C Shopee Checkout
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/** Rate Conversion */}
            <NavigationMenuItem>
              <Link
                href='/rate-conversion'
                legacyBehavior
                passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className='text-black text-base font-bold tracking-tight  hover:text-rose-400 transition'>
                    Rate Conversion
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/** Payments */}
            <NavigationMenuItem>
              <Link
                href='/payments'
                legacyBehavior
                passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className='text-black text-base font-bold tracking-tight  hover:text-rose-400 transition'>
                    Payments
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/** Testimonial */}
            <NavigationMenuItem>
              <Link
                href='/testimonial'
                legacyBehavior
                passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className='text-black text-base font-bold tracking-tight  hover:text-rose-400 transition'>
                    Testimonial
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/**
       * //TODO: fix hamburger menu display on medium screen
       */}
      <div className='ml-[325px] md:ml-[425px] cursor-pointer lg:hidden'>
        <Image
          src='/menu.png'
          alt='menu'
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};
