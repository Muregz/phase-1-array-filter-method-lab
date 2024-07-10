function findMatching(drivers, query) {
       const lowercaseQuery = query.toLowerCase();
        return drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
}
function fuzzyMatch(drivers, query) {
    const lowercaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseQuery));
}
function matchName(drivers, name) { 
    return drivers.filter(driver => driver.name === name);
}