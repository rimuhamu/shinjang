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
import { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div>
      <nav className='bg-white sticky z-50 top-0 inset-x-0 w-auto h-auto border-b-2 border-rose-600 py-1 flex items-center'>
        <div className='ml-5 py-1'>
          <Link
            href='/'
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            <Logo />
          </Link>
        </div>
        <div className='px-5 hidden md:flex'>
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
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      T&C GO by Shinjang
                    </NavigationMenuLink>
                  </Link>
                  <Link
                    href='/tnc-shopee'
                    legacyBehavior
                    passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
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
              {/* * Testimonial
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
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='absolute end-0 grid justify-items-center'>
          <div className='relative cursor-pointer md:hidden'>
            <Button
              className='bg-transparent hover:bg-transparent'
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
              {isNavbarOpen ? (
                <Image
                  src='/close.png'
                  alt='close'
                  width={35}
                  height={35}
                />
              ) : (
                <Image
                  src='/menu.png'
                  alt='menu'
                  width={32}
                  height={32}
                />
              )}
            </Button>
          </div>
          <div className='ml-[100px]' />
        </div>
      </nav>
      <div>
        <div
          className={cn(
            'flex-1 justify-center pb-3 mt-0 block md:hidden bg-rose-600',
            isNavbarOpen ? 'p-2 md:p-0 block' : 'hidden'
          )}>
          <ul className='h-screen md:h-auto items-center justify-center md:flex '>
            <li className='text-black font-bold hover:text-white transition pb-4 text-xl py-4 text-center border-b-2 border-t-2 hover:bg-rose-700  border-rose-900'>
              <Link
                href='/tnc-shinjang'
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                T&C GO by Shinjang
              </Link>
            </li>
            <li className='text-black font-bold hover:text-white transition pb-4 text-xl py-4 text-center border-b-2 hover:bg-rose-700  border-rose-900'>
              <Link
                href='/tnc-shopee'
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                T&C Shopee Checkout
              </Link>
            </li>
            <li className='text-black font-bold hover:text-white transition pb-4 text-xl py-4 text-center border-b-2 hover:bg-rose-700  border-rose-900'>
              <Link
                href='/rate-conversion'
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                Rate Conversion
              </Link>
            </li>
            <li className='text-black font-bold hover:text-white transition pb-4 text-xl py-4 text-center border-b-2 hover:bg-rose-700  border-rose-900'>
              <Link
                href='/payments'
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                Payments
              </Link>
            </li>
            {/* <li className='text-black font-bold hover:text-white transition pb-4 text-xl py-4 text-center border-b-2 hover:bg-rose-700  border-rose-900'>
              <Link
                href='/testimonial'
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};
