'use server';

import { cookies } from 'next/headers';

export async function createCookies(data: string) {
  cookies().set({
    name: 'name',
    value: data,
  });
}
