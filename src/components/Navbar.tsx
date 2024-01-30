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

export const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-auto'>
      <header className='relative bg-white'>
        <div className='border-b-2 border-rose-600 py-1'>
          <div className='flex items-center'>
            <div className='pl-10 pr-1 py-2'>
              <Logo />
            </div>
            <div className='px-5'>
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
                  {/** Payments */}
                  <NavigationMenuItem>
                    <Link
                      href='/tnc'
                      legacyBehavior
                      passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}>
                        <div className='text-black text-base font-bold tracking-tight  hover:text-rose-400 transition'>
                          Payments
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
