"use client"
import { setCookie, getCookie, deleteCookie, hasCookie } from 'cookies-next';

class CookieUtil {

    public getCookie(name: string, options: any): any {
        return getCookie(name, options)
    }

    public setCookie(name: string, value: string, options: any): void {
        setCookie(name, value, options)
    }
    public hasCookie(name: string, options: any): boolean {
        return hasCookie(name, options)
    }
    public deleteCookie(name: string, options: any): void {
        deleteCookie(name, options);
    }
}

export default new CookieUtil();
