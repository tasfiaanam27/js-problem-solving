function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid";
    }

    let bestRatedRestaurant = restaurants[0];

    for(const restaurant of restaurants){
        if (restaurant.rating > bestRatedRestaurant.rating){
            bestRatedRestaurant = restaurant;
        }
    }

    return bestRatedRestaurant.name.toUpperCase();
}
