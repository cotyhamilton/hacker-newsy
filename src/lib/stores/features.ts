import { storage } from "./storage";

// export const features = writable({
// 	infiniteScroll: false
// });

export const infiniteScroll = storage<boolean>("infiniteScroll", false);
