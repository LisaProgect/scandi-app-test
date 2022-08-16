export class BrowserDatabase {
  getItem(location) {
    try {
      const entryObject = JSON.parse(localStorage.getItem(location));
      const { data, expiration, createdAt } = entryObject;
      const MILLISECONDS_TO_SECONDS = 1000;

      if (expiration && Date.now() - createdAt > expiration * MILLISECONDS_TO_SECONDS) {
        this.deleteItem(location);
        return null;
      }

      return data || entryObject;
    } catch {
      return null;
    }
  }

  setItem(data, location, expiration) {
    localStorage.setItem(
      location,
      JSON.stringify({
        data,
        expiration,
        createdAt: Date.now(),
      }),
    );
  }

  deleteItem(location) {
    localStorage.removeItem(location);
  }
}

export default new BrowserDatabase();
