export class CookieHandler {
    static setCookie(name, value, hoursToExpire) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + hoursToExpire * 3600 * 1000); // Convert hours to milliseconds
      const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
      document.cookie = cookieValue;
    }
  
    static getCookie(name) {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=').map(item => item.trim());
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    }
  
    static removeCookie(name) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }